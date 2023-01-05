
import './App.css';
import AXIOS from 'axios'; 
import React from 'react'  
import {useState} from 'react';

	function Reg(){
		
		const [us,setName] = useState("");
		const[ps,setPassword]=useState("");
		const[ms,setEmail]=useState("");
    const[p,setPost]=useState([]);
		        
		        function display(){
				  console.log(us+ps+ms);
          AXIOS.post("http://localhost:9000/create",{us:us,ps:ps,ms:ms}).then(()=>{
            console.log("success");
          })
		}
    function showData(){
		//e.preventDefault();
      
      AXIOS.get("http://localhost:9000/viewdata").then((response)=>{
	   console.log(response.data)
	   setPost(response.data)
	   
        
      });
    }
		return (
		  <>
			<label>
			  Username:
			  <input name="name"type="text" onChange={(event)=>{setName(event.target.value);}} /> 
        
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
      <button type="button" onClick={showData}>view Data</button>

      <table>
		<tr>
			<th>id</th> <th>Name</th>
		</tr>

      {p.map((val)=>{
		return(<>
			<tr>
				<td>{val.id}</td>
				<td>{val.name}</td>
			</tr>
		</>)
	  })}
	  </table>
		  </>
		);
	}  
	export default Reg
