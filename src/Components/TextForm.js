import React, { useState } from "react";

export default function Textform(props) {
  
  const handelUpclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Convert to upper case","success")
  };

  // const handelFirstletCapital = () => {
  //   let newtext = text.charAt(0).toUpperCase() + text.slice(1);
  //   settext(newtext);
  //   props.showAlert("Convert Firstletter to upper case","success")
  // };

  const handelFirstletCapital = () => {
    let newtext = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    settext(newtext);
    props.showAlert("Convert Firstletter to upper case","success")
  };

  const handelloclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Convert to lower case","success")

  };

  const handeltoclear = () => {
    let newtext = ("");
    settext(newtext);
    props.showAlert("Text is cleared","success")

  };

  const handelOnchange = (event) => {
    console.log("Converted to uppercase");
    settext(event.target.value);
  };

  const handelCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text is Copyed","success")

  };

  const handelExtraSpace = (event) => {
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "))
    props.showAlert("Extraspace has been remove","success")
  };

  const [text, settext] = useState("Enter text");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black',minHeight:"100vh"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnchange}
            id="myBox"
            rows="10"
            style={{backgroundColor:props.mode==='dark'?'#363532':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handelUpclick}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handelloclick}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handelFirstletCapital}>
          Capitalize FirstLetter
        </button>
        
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handelExtraSpace}>
            Remove Extra Space
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handelCopy}>
            Copy text
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'warning'} mx-1`} onClick={handeltoclear}>
          Clear text
        </button>

        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summery</h1>
        <p>{text.split(" ").length} words &  {text.length} character</p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>

      
    </>
  );
}
