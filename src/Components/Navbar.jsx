import React, { useState } from 'react'
import{HiMenuAlt2} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import {BsCartPlus} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'

const Navbar = () => {
  const [toggle,  setToggle] = useState(true);
  const BtnToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div className='cursor-pointer' onClick={BtnToggle}>
                <HiMenuAlt2 size={30}/>
           </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Habtech <span className='font-bold'>Foods</span></h1>
             <div className='hidden lg:flex items- center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p> 
             </div>
        </div>
        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <BiSearch size={25}/>
            <input type="text" placeholder='search' className='bg-transparent p-2 focus:outline-none'/>
        </div>
        {/* cart */}
        <button className='bg-black text-white hidden md:flex py-2 items-center rounded-full'>
            <BsCartPlus size={20} className='mr-2'/> cart
        </button>
       
        {toggle ? <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: "" }
        {/* <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> */}
        {/* side draw menu */}
        <div className={toggle ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" }>
            <AiOutlineClose size={20} className='absolute right-4 cursor-pointer' onClick={BtnToggle}/>
            <h2 className='text-2xl p-4'>Habtech <span className='font-bold'>food</span></h2>
             <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>orders</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Favourte</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>wallet</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Help</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>promotion</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Best ones</li>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>invite friends</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar
