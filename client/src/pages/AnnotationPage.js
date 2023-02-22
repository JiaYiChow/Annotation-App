import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import ImageViewer from "../components/ImageViewer";
import "./AnnotationPage.css";
export default function AnnotationPage() {
  const [images, setImages] = useState([]);
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        console.log(new File([buf], fileName, { type: mimeType }));
        setImages([...images, new File([buf], fileName, { type: mimeType })]);
        return new File([buf], fileName, { type: mimeType });
      });
  }

  useEffect(() => {
    if (images.length === 0) {
      srcToFile(process.env.PUBLIC_URL + "logo512.png", "new.png", "image/png");
    }
  }, []);

  return (
    <div className="container">
      <div class="ui internally celled grid">
        <div class="thirteen wide column">
          <div class="row">
            {/* TODO upload images and show the first image here upon loading */}
            {images.length !== 0 ? <ImageViewer images={images} /> : null}
          </div>
          <div class="row">
            <Button>Download CSV</Button>
          </div>
        </div>
        <div class="three wide column">
          {/* TODO show a list of all images here so you can select which one to annotate */}
          <div class="row">
            <img
              src={process.env.PUBLIC_URL + "logo512.png"}
              alt="selected image"
            />
          </div>
          <div class="row">
            <img
              src={process.env.PUBLIC_URL + "logo512.png"}
              alt="selected image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
