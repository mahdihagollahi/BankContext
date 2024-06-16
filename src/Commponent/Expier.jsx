import React from 'react'

export default function Expier(props) {
  return (
    <div>
         <div className='flex mt-10 text-right text-black'>
          <div className=''>
          <h2 className='text-bold text-lg mr-[111px]'>{props.tittle}</h2>
          <p className='text-xs opacity-50dark:border-gray-200'>{props.detail}</p>

          </div>
          
          <div className='flex gap-2 ml-[90px] text-black'>
          <input style={{color:"black"}} placeholder='xx' maxLength='2' type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
            <span className='mt-2 text-bold '>/</span>
            <input  style={{color:"black"}} placeholder='xx' maxLength='2' type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
          </div>
          </div>
    </div>
  )
}
