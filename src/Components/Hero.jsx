import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      {/* overlay */}
      <div className='relative max-h-[500px] '>
      <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
       <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-600'>Best</span></h1>
       <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Food <span className='text-orange-600'>Delivery</span></h1>
      </div>
      <img src="https://images.pexels.com/photos/5908049/pexels-photo-5908049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-[500px] w-full object-cover ' />
      </div>
    </div>
  )
}

export default Hero
