import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";
function App() {
  var [mode, setMode] = useState('light');
  var[alert,setAlert] = useState(null);

  var showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },3000);
  }
  var toggleMode = () =>{
    if(mode=== 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor = '#0e2433';
      showAlert("Dark mode has been enabled" , "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }
  }
  return (
   <>
    {/* <Router> */}
    <Navbar title = "Textutils" AboutTextutils = "About"  mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            <Textform showAlert = {showAlert} heading = "enter the text to analyse" mode={mode}/>
            <About/>
          {/* </Route> */}
          {/* <Route exact path="/"> */}

          {/* </Route> */}
        {/* </Switch> */}

    </div>
    {/* </Router> */}
   </>
  );
}

export default App;
