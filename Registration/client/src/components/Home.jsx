import React from 'react'


function Home({authorized}){
    if(authorized){
        return ""
    }
    return(
        <div>
            
       <center><h1>Home Page!</h1></center>

        </div>
    )
}
export default Home;