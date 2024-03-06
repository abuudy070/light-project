import { useState } from "react";


function Header (){
    
const  [open ,setisopen]= useState(false)

 const menuopen = () =>{
     setisopen(true)
 }



   const closemenu= () =>{
      setisopen(false)
   }







    return  <div>

   
     <div className="bg-cyan-700  w-[100%] h-[90px] flex justify-between px-10">
       <h1 className="text-4xl text-white font-semibold pt-4 relative">Our Menu</h1>
       <div>
       <i  style={{ display : open == true ? "none" : " "}} onClick={menuopen} class="sm:hidden text-4xl    text-white pt-4  fa-solid fa-bars"></i>

       <i onClick={closemenu} style={{ display : open == true ? "block" : "none "}} class="fa-light fa-x sm:hidden text-4xl    text-white pt-4   "></i>

        <ul className=" hidden sm:flex gap-16 text-2xl text-white pt-6">
            <li>home</li>
            <li>menu</li>
            <li>about</li>
            <li>contact us</li>
        </ul>
       </div>


      
    </div>
    <ul style={{ display : open == true ? "flex" : " "}} className="  hidden flex-col space-y-5 sm:hidden bg-orange-500 absolute w-[100%] text-3xl text-black pt-2 pb-4 pl-2">
            <li className="pt-2">home</li>
            <li className="pt-2">menu</li>
            <li className="pt-2">about</li>
            <li className="pt-2">contact us</li>
        </ul>



    </div>
}
export default Header;