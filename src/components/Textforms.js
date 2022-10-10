import React, { useState } from 'react';


export default function Textforms(props) {
    const [text,setText] = useState('');
  const handleUpClick=()=>{
    // console.log("upper case button was clicked" + text)
    let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("Converted To Upper Case","success")
  }

  const handleLoClick=()=>{
    // console.log("lower case button was clicked" + text)
    let newText=text.toLowerCase();
   setText(newText);
   props.showAlert("Converted To Lower Case","success")
  }
  const handleClearClick=()=>{
    // console.log("lower case button was clicked" + text)
    let newText="";
   setText( newText);
   props.showAlert("Text Cleard  Successfuly","success")
  }
 const handleCopyClick=()=>{
  let text=document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied Successfuly","success")
 }
 
  const handleOnChange=(event)=>{
    // console.log("On change")
    setText(event.target.value)
  }
  return (
<>
    <div className='container'>
        <h1>{props.heading}</h1>
       <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick }>Convert to upper case</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick }>Convert to lower case</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick }>Clear Text</button>
<button className="btn btn-primary mx-3" onClick={handleCopyClick} >Copy text</button> 
  </div>
  <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and{text.length}characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read this paragraph</p>
    <h2>PREVIEW</h2>
    <p>{text.length>0?text:"Enter Your Text In Text Area"}</p>
  </div>
  </>
  )
}
