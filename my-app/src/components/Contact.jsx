import React from 'react'  
import {useState} from 'react';

	function Contact(){
		
		const [us,setName] = useState("");
		const[ps,setPassword]=useState("");
		const[ms,setMessage]=useState("");
		        
		        function display(){
				  console.log(us);
				  console.log(ps);
				  console.log(ms);
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
			<label>
			  Message:
			  <input name="message" type="text" onChange={(event)=>{setMessage(event.target.value);}} />
			</label>
			<br/>
			<button type="button" onClick={()=>{
				document.getElementById("rs").innerHTML=us+ps+ms;
			}}>Submit</button>

			<div id="rs"></div>
		  </>
		);
	//class Contact extends React.Component {  
	 // render() {  
	  //  return <h1>Contact</h1>  
	  //}  
	}  
	export default Contact
