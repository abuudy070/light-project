import { useState } from "react"
function Imageslider(){
    const  [index,setindex]=useState(0)

    const images =[
      "https://img.freepik.com/free-photo/medium-shot-blurry-woman-holding-phone_23-2149148908.jpg?w=900&t=st=1709552524~exp=1709553124~hmac=d40a8185f6bfcbbb0a2d1563907437223a8740ca19635d024043bd1e898b62ac",
      "https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?t=st=1709552496~exp=1709553096~hmac=c698a9bd70795d8e513d0c1ae77dabc85f8ce5ca036a9feab63f9f8d11a4498b",
      "https://img.freepik.com/free-photo/simple-christmas-background_23-2147722766.jpg?w=900&t=st=1709552694~exp=1709553294~hmac=97444283189a1e099209a1b786a631ac904c4a74b9de4ec4e842d69de563e7a2",
      "https://img.freepik.com/free-photo/beautiful-pet-portrait-small-dog_23-2149218430.jpg?t=st=1709552620~exp=1709553220~hmac=601924f249f27c8470ca8ab83f691f3dc7e108a1a95a3d3901c36e5658d6dd32"
    ]

      const handelindex = ()=>{
        if (index < images.length -1){
            setindex(index +1)
        }

      }
      const handelprev =()=>{
        if (index > 0 ){
        setindex(index-1)
        }
      }
   




    return <div className="text-center ">

        <div className="px-20 py-8  ml-72">
            <img className="w-[500px] h-[400px]" src={images[index]} alt="" />
         

        </div>
        <button onClick={handelindex} className="bg-purple-600 px-6 m-4 py-2 rounded mt-3 text-white text-3xl ">Next</button>
        <button onClick={handelprev} className="bg-purple-600 px-6  py-2 rounded mt-3 text-white text-3xl ">Prev</button>

      








    </div>
}
export default Imageslider