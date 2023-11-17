import React, { useState } from 'react'
import{ Data} from '../Data/Data'
console.log(Data)
const Food = () => {
  const [food,setFood]= useState(Data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='teborder-orange-600 font-bold text-4xl text-center'>Top rated menu items</h1>
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'>Filter type</p>
          {/* filter button */}
          <div className='flex justify-between flex-wrap'>
            <button className="hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px] ">All</button>
            <button  className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px]'>Burgers</button>
            <button  className='hover:text-white border-orange-600 text-white hover:bg-orange-600 bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px]'>Salad</button>
            <button  className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px]'>Pizza</button>
            <button  className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px]'>Chikcen</button>
            <button  className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[50px]'>Cake</button>
          </div>
        </div>
       
        {/* fliter price */}
     <div>
     <p className='font-bold text-gray-700'>filter price</p>
     <div className='flex justify-between max-w-[390px] w-full '> 
            <button className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px] '>$</button>
            <button className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px] '>$$</button> 
            <button className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px] '>$$$</button>
            <button className='hover:text-white border-orange-600 text-white hover:bg-orange-600  bg-orange-700 mx-1 rounded-xl h-[50px] w-[100px] '>$$$$</button>  
        </div>
     </div>

      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {food.map((item,index)=>(
          <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
            <img src={item.image} alt="" className='w-full h-[200px] object-cover rounded-t-lg' />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
          
         ))}
      </div>
    </div>
  )
}

export default Food
