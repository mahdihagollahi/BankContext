import React from 'react'
import { IoCard } from "react-icons/io5";
export default function Logo(props) {
  return (
    <div className='flex  justify-between text-black'>
         <div className='flex  justify-between text-black'>
          
            <IoCard className='w-7 h-7 bg-blue-500 text-white rounded-full '  />
            <h2 className='text-2xl'>{props.tittle}
              <span className='opacity-70'>{props.span}</span>
            </h2>
           
           </div>
           
          
          
    </div>
  )
}
