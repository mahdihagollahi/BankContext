import React from 'react'
import TikCard from '../assets/Img/Card.png'
import Logo from '../Commponent/Logo';
import InputNumber from './InputNumber';
import Cvv2 from '../Commponent/Cvv2';
import Expier from '../Commponent/Expier';
import Password from '../Commponent/Password';
import { FaRegEdit } from "react-icons/fa";
import  {useParams} from "react-router-dom"

export default function Trakonesh() {
  return (
    <div className='container text-white'> 
        <div className='container w-9/12 h-auto ml-60 text-center mr-96  align-center justify-centertext-white p-10 px-10 border-solid border-2 rounded-2xl mt-20 bg-white' >
            <div className='flex '>
            <Logo className="ml-0"  photo={TikCard} tittle="AceCoin" span='pay'/>
              <FaRegEdit />
            </div>
            <div>

            </div>
            <InputNumber tittle='CardNumber' detail='Enter the 16-digit card number on the Card'/>
            <Cvv2 tittle='CVV2 Number' detail='Enter the 3 or 4 digit number on the Card' />


          

<Expier tittle='Expiry Date' detail='Enter the expiration date of the card'/>



  <Password tittle='Password' detail="Please enter u're dynomic password" />

  <div className='mt-10'>
        <a href="" type='sumbit' className='text-blue-700 w-9/12  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>PayNow</a>
       </div>
        </div>
    </div>
  )
}
