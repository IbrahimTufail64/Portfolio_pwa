import React from 'react'
import image from '../assets/Profile.png';
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='flex w-full justify-center pt-[10vh] '>
        <div>
          <div className='flex justify-center ml-24 mb-10'>
          <img src={image.src} className='w-[250px]'/>
        </div>
        <div className='text-[33px] px-10 lg:px-0 lg:text-[45px] font-black text-center  lg:max-w-[33vw] '>
          <div className='heading '>
            Building Cross-Platform Progressive Web Apps For Your Business.
          </div>
          <button className='text-[13px] group font-normal bg-secondary px-7 mt-10 lg:px-[40px] py-4 lg:py-5 rounded-full text-white'>
            <div className='flex space-x-3 group-hover:underline'>
              <div>Lets Work Together</div>
            <div >
              <IoIosArrowRoundForward size='20' className='-rotate-45'/>
              <div className='bg-primary h-[1px] w-4 '></div>  
            </div>
            </div>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Hero