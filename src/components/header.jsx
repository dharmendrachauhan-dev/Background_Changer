import React from 'react'
import { useState } from "react"

function Header() {

    const [color, setColor] = useState("whitesmoke")

    return (
        <>
        <div className='flex justify-center min-h-screen items-start px-2'
        style={{backgroundColor: color}}>
            <div className='bg-gray-400 rounded-2xl w-120 flex mt-3'>
                <div className='flex justify-center m-1 p-2'>
               <button
                className='bg-red-500 px-5 py-2 text-white rounded-2xl'
                onClick={() => setColor("red")}
                >    
                Red
                </button> 
            </div>
            <div className='flex justify-center m-1 p-2'>
                <button
                className='bg-green-500 px-5 py-2 text-white rounded-2xl'
                onClick={() => setColor("green")}
                >    
                Green
                </button> 
            </div>
           <div className='flex justify-center m-1 p-2'>
            <button
                className='bg-cyan-500 px-5 py-2 text-white rounded-2xl'
                onClick={() => setColor("cyan")}
                >    
                Cyan
            </button>
           </div>

            <div className='flex justify-center m-1 p-2'>
            <button
            className='bg-pink-400 px-5 py-2 text-white rounded-2xl'
            onClick={() => setColor("pink")}
            >    
            Pink
            </button>
            </div>
            
            <div className='flex justify-center m-1 p-2'>
            <button
            className='bg-blue-500 px-5 py-2 text-white rounded-2xl'
            onClick={()=>setColor("blue")}
            >    
            Blue
            </button>
            </div>

            </div>
            
            
        </div>
        </>
    )
}

export default Header
