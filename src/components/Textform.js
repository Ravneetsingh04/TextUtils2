import React, { useState } from "react";
import '../App.css';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","Success");
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","Success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","Success")
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color:props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3"  style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>YOUR TEXT SUMMARY</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
      </div>
    </>
  );
}
