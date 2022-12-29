import AXIOS from 'axios'; //axios is an api used to connect within function
import React from 'react'  
import {useState} from 'react';

	function Reg(){
		
		const [us,setName] = useState("");
		const[ps,setPassword]=useState("");
		const[ms,setEmail]=useState("");
		        
		        function display(){
				  console.log(us+ps+ms);
          AXIOS.post("http://localhost:9000/create",{us:us,ps:ps,ms:ms}).then(()=>{
            console.log("success");
          })
		}
		return (
		  <>
			<label>
			  Username:
			  <input name="username"type="text" onChange={(event)=>{setName(event.target.value);}} /> //setting onChange function inside calling arrow function with parameter 'event' calling setName(function) inside this func (event.target.value)given so that values in the text box get stored
			</label>
			<br />
			<label>
			  Password:
			  <input name="password" type="password" onChange={(event)=>{setPassword(event.target.value);}} />
			</label>
			<br />
			<label>
			  Email:
			  <input name="email" type="text" onChange={(event)=>{setEmail(event.target.value);}} />
			</label>
			<br/>
			<button type="button" onClick={display}>Submit</button>

			<div id="rs"></div>
		  </>
		);
	}  
	export default Reg

