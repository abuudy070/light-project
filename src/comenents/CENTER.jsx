function CENTER(props){
    return <div className="flex pl-20 pt-10 gap-4">

        <img className=" w-[200px] h-[140px] rounded   " src={props.image} alt="" />

        <div className=" font-semibold">
            <h1 className="text-[17px]"  >{props.name}</h1>
            <h1  className="mt-1">{props.name2}</h1>
            <p className="mt-2">${props.price}</p>
            <button className="bg-orange-600 px-2 py-1  rounded mt-2"> Order Now</button>
            

        </div>




    </div>
}
export default CENTER;