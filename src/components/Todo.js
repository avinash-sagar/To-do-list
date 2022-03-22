import React from "react";
// import { TiDelete } from "@react-icons/all-files/fa/FaBeer"
// import { TiDelete } from "@react-icons/all-files/fa/TiDelete";
import { AiFillDelete } from "react-icons/ai";

const Todo = (props)=>{

  
 return (<>
    <div className="list">
    <li  >{props.text} </li> 
    <AiFillDelete onClick={()=>{
       props.oncelect(props.id)
    }}
     />
    {/* return <h3> Lets go for a <FaBeer />? </h3> */}
    
    </div>
 </>)
}

export default Todo;