import { useState } from "react";
import "./App1.css";
import Navbar from "./components/Navbar.js";
import Textforms from './components/Textforms.js';
// import About from "./components/About.js";
import Alert from "./components/Alert";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
 
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//Dark mode is enabled or not
// const [theme,setTheme]=useState('primary')
 const [alert,setAlert]=useState("null");
 // set ALERT METHOD
const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type,
})
  setTimeout(() => {
    setAlert(null)
  },4000);
}
//Purple theme
const themeChange=()=>{
  if(mode==='light'){
  setMode('dark')
    document.body.style.backgroundColor='purple'
    document.body.style.color='white'
    showAlert("purple theme is enabled","success")
  
  }
  else{
  setMode('light')
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    showAlert("light theme is enabled","success")
   
  }
}
// greytheme
const themeChange1=()=>{
  if(mode==='light'){
  setMode('dark')
    document.body.style.backgroundColor='grey'
    document.body.style.color='white'
    showAlert("grey theme is enabled","success")
  }
  else{
  setMode('light')
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    showAlert("light theme is enabled","success")
  }
}

  const toggleMode=()=>{
if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='black'
  document.body.style.color='white'
  showAlert("Dark Mode Enabled","success")
  document.title="TextUtiles-DarkMode";
}
else{
 
  setMode('light')
  document.body.style.backgroundColor='white'
  document.body.style.color='black'
  showAlert("Light Mode Enabled","success")
  document.title="TextUtiles-LightMode";
}
  } 
  
   return (
    <>
 {/* <Router> */}
      {/* <Navbar title="TEXTtutles" about="about us" /> */}
      <Navbar style1="purple theme"  title1="TEXTtutles" mode={mode} toggleMode={toggleMode} themeChange={themeChange} themeChange1={themeChange1}  />
      <Alert alert={alert}/>
     
      <div className="container my-3">
       {/*<Switch>
          <Route exact path="/about">
              <About /> 
          </Route>
          <Route exact path="/">*/}
        <Textforms showAlert={showAlert}  heading="Enter your text to analyze" />
         {/*  </Route> 
        </Switch>*/}
      </div> 
      {/* </Router> */}
    </>
  );
}   
export default App;
