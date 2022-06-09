import { useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }


  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#363532";
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enable","success");

    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="my-3">
     <Routes>
        <Route exact path="/" element={<TextForm  heading="Enter your text here" showAlert={showAlert} mode={Mode}/>}/> 
        <Route exact path="/About" element={<About  mode={Mode}/>}/>
        
     </Routes>
   
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
