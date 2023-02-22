import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dropzone, { useDropzone } from "react-dropzone";
import Select from "react-select";
import ProjectPage from "./pages/ProjectPage";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import AnnotationPage from "./pages/AnnotationPage";

function App() {
  return (
    <BrowserRouter>
      <div class="ui menu">
        <a class="item">Annotations</a>
      </div>
      <Routes>
        <Route exact path="/" element={<ProjectPage />} />
        <Route path="/annotate" element={<AnnotationPage />} />
      </Routes>
    </BrowserRouter>
  );

  // const [projectName, setProjectName] = useState("");
  // const [images, setImages] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const options = [
  //   { value: "car", label: "Car" },
  //   { value: "bus", label: "Bus" },
  //   { value: "autorickshaw", label: "Autorickshaw" },
  //   { value: "bike", label: "Bike" },
  // ];

  // const handleProjectNameChange = (event) => {
  //   setProjectName(event.target.value);
  // };

  // const handleDrop = (acceptedFiles) => {
  //   setImages(acceptedFiles);
  //   setSelectedOptions(Array(acceptedFiles.length).fill(null));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const rows = images
  //     .map((image, index) => {
  //       const selectedOption = selectedOptions[index];
  //       if (selectedOption) {
  //         return `${image.name},${selectedOption.value}`;
  //       } else {
  //         return null;
  //       }
  //     })
  //     .filter(Boolean);
  //   const csv = `Image,Label\n${rows.join("\n")}`;
  //   const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", `${projectName}.csv`);
  //   link.click();
  // };

  // const annotateImage = (index) => (selectedOption) => {
  //   setSelectedOptions((prevSelectedOptions) => {
  //     const newSelectedOptions = [...prevSelectedOptions];
  //     newSelectedOptions[index] = selectedOption;
  //     return newSelectedOptions;
  //   });
  // };

  // const onDrop = useCallback((acceptedFiles) => {
  //   // Do something with the files
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Project
  //         <input
  //           type="text"
  //           value={projectName}
  //           onChange={handleProjectNameChange}
  //         />
  //       </label>
  //       <br />
  //       <Dropzone onDrop={handleDrop}>
  //         {({ getRootProps, getInputProps }) => (
  //           <div {...getRootProps()}>
  //             <input {...getInputProps()} />
  //             <p>Drag and drop some images here, or click to select images</p>
  //           </div>
  //         )}
  //       </Dropzone>
  //       <br />
  //       {images.map((image, index) => (
  //         <div key={index}>
  //           <img
  //             src={URL.createObjectURL(image)}
  //             alt={`Image ${index}`}
  //             width="200"
  //           ></img>

  //           <Select
  //             options={options}
  //             value={selectedOptions[index]}
  //             onChange={annotateImage(index)}
  //           />
  //           <br />
  //         </div>
  //       ))}
  //       <br />
  //       <button type="submit">Create Project</button>
  //     </form>
  //   </div>
  // );
}

export default App;
