import { useState } from "react";

function Tasbih(){

    const [counter,setcounter] = useState(0)

    // function  handelincrement   action

    const handelincrement = ()=>{
        setcounter(counter +1)
    }
    const handeldecrement = ()=>{
        
        if( counter > 0){
            setcounter(counter -1)
        }
    }
    const rest = ()=>{
        setcounter(0)
    }

    return <div className="text-center bg-blue-200 h-[300px] rounded-full pt-[50px] mt-20">
        <h1 className=" bg-black w-[100px] text-white rounded-full text-4xl h-[100px] pt-6   ml-[580px] mb-[30px]">{counter}</h1>

        <button onClick={handelincrement} className="bg-orange-500 px-5 py-2 text-2xl mx-2 ">+</button>
        <button onClick={handeldecrement} className="bg-blue-500 px-5 py-2 text-2xl mx-2 ">-</button>
        <button onClick={rest} className="bg-green-500 px-5 py-2 text-2xl mx-2 ">rest</button>
    </div> 
    
    
    







}
export default Tasbih
