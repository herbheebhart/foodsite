
import {motion} from "framer-motion"
// import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
const Cards = () => {
  // const [currentIndex,setCurrentIndex]=useState(0)
  // const prev = ()=>{
  //     const firstIndex = currentIndex === 0 ? 0 : currentIndex -1
  //     // const nextIndex = firstIndex ? c.length-1: currentIndex -1
  //     setCurrentIndex(firstIndex)
  // }
  // const next = ()=>{
    
  // }
  return (
    <div>
         <div  className='max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 duration-500'>
      <div className='rounded-xl relative' >
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Sun's Out,Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2 rounded-xl py-2 px-2'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full rounded-xl " src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Sun's Out,Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2 rounded-xl py-2 px-2'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full rounded-xl " src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Sun's Out,Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2 rounded-xl py-2 px-2'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full rounded-xl " src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       {/* <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Sun's Out,Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2 rounded-xl py-2 px-2'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full rounded-xl " src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div> */}
    
    </div>
    {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer'>
        <BsChevronCompactLeft/>
       </div>
       <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer'>
        <BsChevronCompactRight/>
       </div> */}
    </div>
  )
}

export default Cards
