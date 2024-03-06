import { useState } from "react";

function State(){
 const [Color ,setColor] =useState("")
 const handleon =()=>{
    setColor("yellow")
 }  
 const handleoff =()=>{
    setColor("white")
 }

    return <div>
        


        <div className="ml-[470px] mt-10">

        
        <div style={{backgroundColor:Color }} className="border-2 border-black rounded-full  w-[300px] h-[300px] ">
            

        </div>
        <button onClick={handleon} className="bg-orange-500 px-3 py-1 ml-20 ">ON </button>
        <button onClick={handleoff} className="bg-orange-500 px-3 py-1 ml-10">OFF </button>
      
        </div>




    </div>
}
export default State;