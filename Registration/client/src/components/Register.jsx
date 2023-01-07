import AXIOS from 'axios'; 
import React from 'react'  
import {useState} from 'react';
import {Route,Routes,Link,BrowserRouter,} from 'react-router-dom';
import Log from './Login';
import {useNavigate}from "react-router-dom";

	function Reg(){
		
		const[us,setName] = useState("");
		const[ms,setEmail]=useState("");
		const[ps,setPassword]=useState("");
		const[gs,setMessage]=useState("");

        const[p,setPost]=useState([]);

		let navigator=useNavigate();

		        
		        function display(){
				  console.log(us+ms+ps+gs);
          AXIOS.post("http://localhost:9000/register",{us:us,ms:ms,ps:ps,gs:gs}).then((response)=>{
			console.log(response.data);
			if(response.data){
			  navigator("/Login");
			 
			}
          })
		}
   
		return (
		  <>
			<label>
			  Username:
			  <input name="name"type="text" onChange={(event)=>{setName(event.target.value);}} /> 
        
			</label>
    
			<br />
			<label>
			Email:
			  <input name="email" type="text" onChange={(event)=>{setEmail(event.target.value);}} />
			</label>
			<br/> 
			<label>
			Password:
			  <input name="password" type="password" onChange={(event)=>{setPassword(event.target.value);}} />
			</label>
			<br />
			<label>
			Message:
			  <input name="message" type="text" onChange={(event)=>{setMessage(event.target.value);}} />
			</label>
			<br />
			<button type="button" onClick={display}>Submit</button>

			<div id="rs"></div>
			<Routes>
         <Route path="/Login" element={<Log/>} />
        </Routes>
	  </>
		);
	}  
	export default Reg
