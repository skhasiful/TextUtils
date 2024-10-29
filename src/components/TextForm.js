import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("Enter text here");
  const handleUpCase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    
    
  };
  const handleLoCase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const clearall=()=>{
    let newtext=" ";
    settext(newtext)
  }
  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const remove=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "));
  }
  // const copytext=()=>{
  //   var text=document.getElementById("exampleFormControlTextarea1");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
    
  // }

  return (
    <>
    <div className="cont" >


      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example Textarea
          </label>
          <textarea
            style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="light"?"black":"white"}}
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="6"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpCase}>
        Convert to upper case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoCase}>
        Convert to lower case
      </button>
      <button className="btn btn-primary mx-3" onClick={clearall} >
        Clear all
      </button>
      <button className="btn btn-primary mx-3" onClick={remove} >
        Remove Extra Spaces
      </button>

      <div className="container">
        <h1>your text summery</h1>
        <p>{text.split( " ").length} words {text.length} characters</p>
        <p>{0.008 *text.split( " ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}
