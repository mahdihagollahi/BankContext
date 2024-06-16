import React from 'react'

export default function Cvv2(props) {
  return (
    <div>

<div className='flex mt-10 text-right text-black'>
          <div>
            <h2 className='text-bold text-lg mr-[128px]'>{props.tittle}</h2>
            <p className='text-xs opacity-50'>{props.detail}</p>
          </div>
          <div className='ml-20 mt-3'>
          <input style={{color:"black"}} placeholder='5643' maxLength='4' type="password" className=' text-center text-white bg-white px-[113px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
          </div>
          </div>
    </div>
  )
}
// padding-left: 115px;
//     padding-right: 115px;