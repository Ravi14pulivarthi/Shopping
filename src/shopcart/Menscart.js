import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Menscart() {
    const[ data,setdata]=useState([])
    useEffect(()=>{
     fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json").
     then((responce)=> responce.json()).
     then( (result)=>   setdata(result.categories[0].category_products))
    },[])
 
  return (
     <div>
       <h1 style={{textAlign:"center"}}>SELECT YOUR CHOICE </h1><br/>
        <Navbar/>
      <div style={{display:"flex",gap:"25px",paddingLeft:"200px"}}> <br/>
{
data.map((values)=>{
     return(
         <div>    
 <br/> <br/>
 <div  style={{ height:"18rem",width:"15rem", backgroundImage:`url(${values.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px"}} >
 {(values.badge_text !== null) ? <p style={{border:"0px solid",width:"150px",height:"30px",backgroundColor:"white",color:"black",textAlign:"center",position:"relative",left:"20px",top:"20px"}} >{values.badge_text} =</p> :<p></p>}</div>
     
    <h5 style={{display:"flex" ,gap:"10px"}}>{values.title}    <div>.{values.vendor}</div></h5> 
  
   <div style={{gap:"20px"}}> RS {values.price}.00    {values.compare_at_price} <span style={{color:"red"}}>50%0ff</span></div>
     <br/>
      <button style={{ backgroundColor:"black",color:"white",width:"240px",height:"30px",border:"none",borderRadius:"5px"}}>Add to cart</button>      
         </div>
 
     )
})
}

</div>
     </div>
    
  )}

export default Menscart