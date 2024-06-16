import React from 'react'

export default function inventory(props) {
  return (
    <div>
    <div className='flex mt-10 text-black'>




<div>

<h2 className='text-bold text-lg mr-[120px]'>{props.tittle}</h2>
<p className='text-xs opacity-50'>{props.detail}</p>
</div>
<div className='flex gap-2 ml-[113px]'>
<input placeholder='xxxxxx' maxLength='4' type="text" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg  block'  />
</div>
</div>
</div>
  )
}
