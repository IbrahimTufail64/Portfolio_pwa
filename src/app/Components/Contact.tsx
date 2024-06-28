import React from 'react'
import handshake from '../assets/handshake.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <div className='bg-primary w-full h-[90vh]'>
            <div className='flex justify-center pt-[70px]'>
                <img
                    className='w-[150px]'
                    src={handshake.src} 
                    />
            </div>
            <div className='flex justify-center mt-10'>
                <div className="text-[45px] font-semibold flex justify-center">Lets plan your next project</div>
            </div>
            <div className='flex justify-center mt-10'>
                <a href='mailto:ibrahimkhudai03@gmail.com' className='cursor-pointer text-[13px] group font-normal bg-secondary px-[40px] py-5 rounded-full text-white'>
                    <div className='flex space-x-3 group-hover:underline'>
                    <div>Email Me</div>
                    <div >
                    <IoIosArrowRoundForward size='20' className='-rotate-45'/>
                    <div className='bg-primary h-[1px] w-4 '></div>  
                    </div>
                    </div>
                </a>
            </div>
            <div className='flex justify-center pt-[15vh]'>
                <div className="w-[60vw] h-[2px] bg-[#CCCCCC]"></div>
            </div>
            <div className='flex justify-center space-x-10 pt-10'>
                <a  href='https://github.com/IbrahimTufail64'><FaGithub size={35}/></a>
                <a href='https://www.linkedin.com/in/ibrahim-tufail-a2b134289'><FaLinkedin size={35}/></a>
                <a  href='mailto:ibrahimkhudai03@gmail.com'><MdEmail  size={35}/></a>
            </div>
        </div>
    </div>
  )
}

export default Contact