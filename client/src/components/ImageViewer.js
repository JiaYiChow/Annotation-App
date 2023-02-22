import { useRef, useEffect, useState } from "react";
import { Select } from "semantic-ui-react";
import "./ImageViewer.css";
//TODO rename this one to a more accurate name
export default function ImageViewer({ images }) {
  const options = [
    { value: "car", text: "Car" },
    { value: "bus", text: "Bus" },
    { value: "autorickshaw", text: "Autorickshaw" },
    { value: "bike", text: "Bike" },
  ];

  //some test cases: what if 2 annotations overlap with each other
  const [isDrawing, setIsDrawing] = useState(false);
  const [show, setShow] = useState(false);
  //TODO change this to be the current image. also why my image got 2 thingies lolz
  const canvasRef = useRef(images[0]);
  const contextRef = useRef(null);
  const selectorRef = useRef(null);

  const canvasOffsetX = useRef(null);
  const canvasOffsetY = useRef(null);
  const startX = useRef(null);
  const startY = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    const canvasOffset = canvas.getBoundingClientRect();
    canvasOffsetX.current = canvasOffset.top;
    canvasOffsetY.current = canvasOffset.left;
    const img = new Image();
    img.src = URL.createObjectURL(images[0]);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.clearRect(0, 0, img.width, img.height);
    };
  }, []);

  function startDrawRectangle({ nativeEvent }) {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    startX.current = nativeEvent.clientX - canvasOffsetX.current;
    startY.current = nativeEvent.clientY - canvasOffsetY.current;
    setIsDrawing(true);
  }

  function drawRectangle({ nativeEvent }) {
    if (!isDrawing) return;
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    const newX = nativeEvent.clientX - canvasOffsetX.current;
    const newY = nativeEvent.clientY - canvasOffsetY.current;

    const rectWidth = newX - startX.current;
    const rectHeight = newY - startY.current;

    contextRef.current.clearRect(
      startX.current,
      startY.current,
      canvasRef.current.width,
      canvasRef.current.height
    );
    contextRef.current.strokeRect(
      startX.current,
      startY.current,
      rectWidth,
      rectHeight
    );
  }

  function stopDrawRectangle({ nativeEvent }) {
    if (!isDrawing) return;
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    const newX = nativeEvent.clientX - canvasOffsetX.current;
    const newY = nativeEvent.clientY - canvasOffsetY.current;

    const rectWidth = newX - startX.current;
    const rectHeight = newY - startY.current;

    contextRef.current.clearRect(
      startX.current,
      startY.current,
      canvasRef.current.width,
      canvasRef.current.height
    );
    contextRef.current.strokeRect(
      startX.current,
      startY.current,
      rectWidth,
      rectHeight
    );
    setIsDrawing(false);
    // show selector component
    setShow(true);
  }

  return (
    <div className="container">
      <img src={URL.createObjectURL(images[0])} />
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={startDrawRectangle}
        onMouseMove={drawRectangle}
        onMouseUp={stopDrawRectangle}
        onMouseLeave={stopDrawRectangle}
      ></canvas>
      {/* todo add some on value change event in the selector which will update the annotation object and the backend */}
      {show && (
        <Select
          placeholder="Select category"
          options={options}
          style={{ top: `${startX.current}px`, left: `${startY.current}px` }}
        />
      )}
    </div>
  );
}
