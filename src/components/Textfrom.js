import React, { useState } from "react";

// console.log(usestate('Enter text here2'))
export default function Textfrom(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // const copytext = () => {
  //   var text = document.getElementById("myBox");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // };
  const [text, setText] = useState("Enter text here");
  // setText("hi i am");
  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
           style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}
           className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupClick}>
          convert to upper case{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloClick}>
          convert to lower case{" "}
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={copytext}>
          copy
        </button> */}
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length}words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
      </div>
    </>
  );
}
