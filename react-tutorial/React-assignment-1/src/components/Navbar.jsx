import { useState } from "react"
import Guest from "./Guest";
import User from "./User";

export default function Navbar(){
    const [guest,setGuest]= useState(true);
    function changeComponents (){
        if(guest ==false) setGuest(true);
        else setGuest(false); 
    }
    console.log(guest)
    return(
        <div className="w-full ">
            <div className="bg-[#ddd]">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-3 py-6">
                    <h1 className="text-3xl font-mono font-semibold leading-tight">Navbar</h1>
                    <div onChange={changeComponents} className="py-2 px-2 border-2  rounded hover:bg-black hover:text-white cursor-pointer">
                        <button onClick={changeComponents} className="inline-block text-sm font-medium transition duration-150 ease-in">{ guest? 'Guest Account':'User Account' }</button>
                    </div>
                </div>
            </div>
            { guest? <Guest/>:<User/> }
        </div>
    )
}