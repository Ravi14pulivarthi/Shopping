import React from 'react'
import {useNavigate} from "react-router-dom";
import Womens from './Womens';

function Navbar() {
    
    const pagenav=useNavigate()

    function mens(){
   pagenav("/")
    }
    function womens(){
      pagenav("/womens")
       }
       function kids(){
        pagenav("/kids")
         }
  return (
    <div >
         <center>
         <div style={{ display:"flex",gap:"20px",alignItems:"center",paddingLeft:"450px"}}> 
   <button onClick={mens} style={{ backgroundColor:"black",color:"white",width:"200px",height:"45px",border:"none",borderRadius:"5px"}}>Mens</button>  
   <button  onClick={womens} style={{ backgroundColor:"black",color:"white",width:"200px",height:"45px",border:"none",borderRadius:"5px"}}>Womens</button>  
   <button  onClick={kids}style={{ backgroundColor:"black",color:"white",width:"200px",height:"45px",border:"none",borderRadius:"5px"}}>Kids</button> </div>
         </center>
   
    </div>
  )}

export default Navbar