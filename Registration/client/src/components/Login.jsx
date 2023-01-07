import AXIOS from 'axios'; 
import React from 'react'  
import {useState} from 'react';
import {Route,Routes,Link,BrowserRouter,} from 'react-router-dom';
import Home from './Home';
import {useNavigate}from "react-router-dom";

function Log(){
		
    const [us,setName] = useState("");
    const[ps,setPassword]=useState("");
    
    let navigator=useNavigate();
            
            function display(){
              console.log(us+ps);
      AXIOS.post("http://localhost:9000/log",{us:us,ps:ps}).then((response)=>{
        console.log(response.data);
        if(response.data){
          navigator("/Home");
          //console.log("home")
        }
      });
}

    return (
      <>
        <label>
          Username:
          <input name="username"type="text" onChange={(event)=>{setName(event.target.value);}} /> 
        </label>
        <br />
        <label>
          Password:
          <input name="password" type="password" onChange={(event)=>{setPassword(event.target.value);}} />
        </label>
        <br />
        <button type="button" onClick={display}>Submit</button>
        
        <div id="rs"></div>
        <Routes>
         <Route path="/Home" element={<Home/>} />
        </Routes>
        <p> Don't you have an account? <Link to="/register">Register</Link></p>
      </>
    );
}  
export default Log;