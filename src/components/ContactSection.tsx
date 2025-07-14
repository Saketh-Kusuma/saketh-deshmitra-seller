import React from 'react'
import icon3 from '../assets/icons/Frame (1).png';

const Center = () => {
  return (
    <div className="box-content bg-sky-100 w-[91%] h-[365px] mx-auto my-10 grid lg:grid-cols-2 sm:grid-cols-1 py-7 gap-3">
   <div className="flex justify-baseline items-center"><div className="font-bold text-2xl lg:w-[343px]   px-6 sm:w-[127px] 
   h-[63px] -mt-16"><p className="lg:text-2xl sm:text-sm py-0">Deshmitra Supplier Support Available 24/7</p></div> </div>
   <div className="flex  items-center justify-end">
    <div className="flex flex-col lg:w-[530px]  mx-8 sm:w-[145px] h-[88px] -mt-12  gap-y-4" >
    <div><p className="lg:text-[16px] sm:text-[8px]">Meesho supplier support is available to solve all your doubts and issues before and after you start your online selling business.</p></div>
    <div className="w-[224px] h-[48px] flex gap-x-4">
      <div><img src={icon3} width="90px" height="50px" /></div>
      <div><p className="lg:text-[16px] sm:text-[8px]">You can reach out to <a href="" className="text-blue-900">sell@deshmitra.com</a></p></div>
    </div>
    </div>

   </div>
    </div>
    
  )
}
export default Center;