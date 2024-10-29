
// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Aboutnew from "./components/Aboutnew";

import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alertnew from "./components/Alertnew";


// let name="harry"
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (messege, type) => {
    setalert({
      msg: messege,
      type: type,
    });
    setTimeout(()=>{
      setalert(null)
  },3000)
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mode has been enabled", "sucess");
    }
     else {
      setmode("dark");
      showalert("Light mode has been enabled", "sucess");
      document.body.style.backgroundColor = "grey";
    }
  };
  const [mode, setmode] = useState("light");
  return (
    <>
    <router>

      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
      <Alertnew alert={alert} />
      <div className="container my-3">
      
        <Textfrom showalert={showalert} heading="Enter the text to analyze" mode={mode} />
        <Aboutnew mode={mode} togglemode={togglemode} />
      </div>
    </router>
    </>
  );
}

export default App;
