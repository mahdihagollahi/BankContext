import React,{useState} from 'react'
import { FaRegEdit } from "react-icons/fa";

export default function InputNumber(props) {
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
    setInputValue(formattedValue);
  };
  return (
    <div>
         <div className='flex gap-96 mt-10 text-black '>
          <div>
            <h2 className='text-bold text-lg mr-[143px]'>{props.tittle}</h2>
            <p className='text-xs opacity-50'>{props.detail}</p>
          </div>
          <a className='flex  justify-between text-black ml-[30px]'>
           <FaRegEdit className='mt-1 text-blue-500' />
           <p>Edit</p>
           </a>
        </div>
        <div className='my-5 -ml-[60px]'>
          <input style={{color:"black"}}  value={inputValue}
      onChange={handleChange} maxLength='19' onKeyPress='return event.charCode >= 48 && event.charCode <= 57 || event.key === "Backspace"'  type="text"  className=" text-black bg-gray-100 text-center 
        border border-gray-100 
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
         ml-[64px] block w-9/12 p-2.5  dark:border-gray-200
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500" placeholder='2412   -    7512   -   3412   -   3456' required  />
        </div>
    </div>
  )
}
