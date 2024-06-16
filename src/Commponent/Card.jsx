import React from 'react'



export default function Card({name,Number,Password,Cvv2,Year,Month,Inventory,SelectCard ,  History,
  setHistory,imageCard,
 }) {
  return (
    <div  style={{ display: "flex" }} className="w-96 h-56 mb-12  m-auto bg-white rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110 hover:shadow-md hover:border-[#fafa]">
            <div onClick={SelectCard}  className="  w-full px-8 absolute top-8 ">
              <div className="flex justify-between">
                <div className="">
                   <p className="font-light">Name</p>
                   <p className="font-medium tracking-widest">{name}</p>
                 </div>
                {/* <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" /> */}
                {imageCard && <img className="w-14 h4 " src={imageCard} />}

                 </div>


              <div className="pt-1">
                <p class="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{Number}</p>
              </div>


              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light  text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm"> {Year} / {Month} </p>
                  </div>


                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Cvv2}</p>
                  </div>


                  <div className="">
                    <p className="font-light text-xs">Password</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Password}</p>
                  </div>



                  <div className="">
                    <p className="font-light text-xs">Inventory</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Inventory}</p>
                  </div>

                  


                </div>
              </div>
            </div>
            </div>
  )
}
