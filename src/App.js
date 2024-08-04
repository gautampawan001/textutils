import "./App.css";
import Navbar from "./component/Navbar";
import Forms from "./component/Forms";
import React, { useState } from 'react';
import Alert from "./component/Alert";
import About from "./component/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);
  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toogleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText="About" mode={mode} toogleMode ={toogleMode}/>
      <Alert  alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <Forms heading = "Enter the text to analyse"  showAlert = {showAlert} mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
