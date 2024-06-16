// import React from 'react'

// export default function InputCard2() {


    
//   return (
//     <div className='container'>


//     <div className="container w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-20  text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
//       <div className='flex px-10'>
//            <IoCard className='w-7 h-7 bg-blue-500 text-white rounded-full '  />
//      <h2 className='text-2xl text-black'>Acoin
//      <span className=' text-black opacity-70'>
//         Pay
//      </span>
//      </h2>
          
//         <div>

//         </div>
//       </div>

//       <div className='flex gap-96 mt-10 text-black '>
//         <div>
//           <h2 className='text-bold text-lg mr-[143px]'>CardNumber</h2>
//           <p className='text-xs opacity-50'>Enter the 16-digit card number on the Card</p>
//         </div>
//         <a className='flex  justify-between text-black ml-[30px]'>
//          <FaRegEdit className='mt-1 text-blue-500' />
//          <p>Edit</p>
//          </a>
//       </div>


//        <form onSubmit={handleSubmit(onFormSubmit)}>



//        <div className='my-5 -ml-[60px]'>
//         <input {...register("CardNumber")} style={{color:"black"}}  value={Number} onChange={(e)=>setNumber(e.target.value) } 
//     onKeyPress='return event.charCode >= 48 && event.charCode <= 57 || event.key === "Backspace"'  type="number"  className=" text-black bg-gray-100 text-center 
//       border border-gray-100 
//        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
//        ml-[64px] block w-9/12 p-2.5  dark:border-gray-200
//         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
//          dark:focus:border-blue-500"    placeholder='2412   -    7512   -   3412   -   3456' required  />
//       </div>


//       <div className='flex mt-10 text-right text-black'>
//         <div>
//           <h2 className='text-bold text-lg mr-[128px]'>CVV Number</h2>
//           <p className='text-xs opacity-50'>Enter the 3 or 4 digit number on the Card</p>
//         </div>
//         <div className='ml-20 mt-3'>
//         <input {...register("Cvv2")}  style={{color:"black"}} value={Cvv2} onChange={(e)=>setCvv2(e.target.value)} placeholder='5643'  type="password" className=' text-center text-white bg-white px-[113px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
//         </div>
//         </div>


//         <div className='flex mt-10 text-right text-black'>
//         <div className=''>
//         <h2 className='text-bold text-lg mr-[111px]'>Expiry Date</h2>
//         <p className='text-xs opacity-50dark:border-gray-200'>Enter the expiration date of the card</p>

//         </div>
        
//         <div className='flex gap-2 ml-[90px] text-black'>
//         <input {...register("Year")}    style={{color:"black"}} value={Year} onChange={(e)=>setYear(e.target.value)} placeholder='Y'  type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
//           <span className='mt-2 text-bold '>/</span>
//           <input {...register("Mounth")}    style={{color:"black"}} value={Mounth} onChange={(e)=>setMounth(e.target.value)} placeholder='M' type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
//         </div>
//         </div>

//            <div className='flex mt-10 text-black'>
//           <div>
//             <h2 className='text-bold text-lg mr-[80px]'>Name</h2>
//             <p className='text-xs opacity-50'>Please enter u're name</p>
//           </div>
//           <div className='flex gap-2 ml-[187px]'>
//           <input {...register("Name")} style={{color:"black"}} placeholder='Mahdi'  value={Name} onChange={(e)=>setName(e.target.value)}  type="text" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
//           </div>
//       </div>



//       <div className='flex mt-10 text-black'>




// <div>

// <h2 className='text-bold text-lg mr-[120px]'>Password</h2>
// <p className='text-xs opacity-50'>Please enter u're dynomic password</p>
// </div>
// <div className='flex gap-2 ml-[113px]'>
// <input style={{color:"black"}} {...register("Password")}  value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='xxxx' type="password" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
// </div>
// </div>



// <div className='flex mt-10 text-black'>




// <div>

// <h2 className='text-bold text-lg mr-[120px]'>Inventory</h2>
// <p className='text-xs opacity-50 mr-11'>Please enter u're inventory</p>
// </div>
// <div className='flex gap-2 ml-[113px]'>
// <input {...register("Inventory")} style={{color:"black"}} value={Inventory} onChange={(e)=>setInventory(e.target.value)} placeholder='xxxxxx'  type="number" className=' text-center ml-3  text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg  block'  />
// </div>
// </div>

// <div className='mt-10'>
//       <button href="" type='sumbit'onClick={send} className='text-blue-700 w-9/12  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>AddCard</button>
//      </div>


//        </form>

     

        

      




//     </div> 
    

 

     
//   </div>
//   )
// }


import React, { useState } from 'react';

function AddCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save card data to backend or localStorage
    // Redirect to transaction page
    window.location.href = '/transaction';
  };

  return (
    <div>
      <h2>Add Card</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        <input type="text" placeholder="Balance" value={balance} onChange={(e) => setBalance(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCard;
