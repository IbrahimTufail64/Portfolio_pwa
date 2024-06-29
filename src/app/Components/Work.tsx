"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import demo from '../assets/project.png'
import Project from './Project';
import { useRouter } from 'next/navigation';
import ProjectA from './ProjectA';
import Link from 'next/link';
import gsap from 'gsap';

const Work = () => {
    
    const [counter, setCounter] = useState(1); 
    const [projectName, setProjectName] = useState('Ecommerce App'); 
    const [projectLink, setProjectLink] = useState('https://ibrahim-eshop-v8.vercel.app'); 
    const counterRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(()=>{
        if (counterRef.current !== null) {
            gsap.from(counterRef.current, {
            duration: 0.4,
            translateY: '-100%',
            ease: "none",
            });
            gsap.from(nameRef.current, {
            duration: 0.4,
            translateY: '-100%',
            ease: "none",
            });
            console.log('hey');
        }
        
    },[counter])


  return (
    <div className='relative'>
        <div className="text-[35px] font-bold flex justify-center">My Work</div>
        <div className='flex justify-center'>
            <div className='bg-secondary h-[4px] w-[70px] rounded-xl '></div>
        </div>
        {/* counter  */}
            <div className='bg-white w-[50vw] h-[100vh] sticky top-0 z-10 hidden lg:block'>
            <div className='flex justify-center'>
                <div className=' pt-[30vh] space-y-10'>
                <div className='overflow-hidden'>
                    <div 
                className='font-black text-[100px] flex justify-center ' ref={counterRef}>0{counter}.</div>
                </div>
                <div className='overflow-hidden'>
                    <div className='font-black text-[45px] ' >{projectName}</div>
                </div>
                <div className='flex justify-center'>
                <a href={projectLink} className='cursor-pointer text-[13px] group font-normal bg-secondary px-[40px] py-5 rounded-full text-white'>
                    <div className='flex space-x-3 group-hover:underline'>
                    <div>View Live</div>
                    <div >
                    <IoIosArrowRoundForward size='20' className='-rotate-45'/>
                    <div className='bg-primary h-[1px] w-4 '></div>  
                    </div>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </div>
        {/* projects */}
        <ProjectA demo={demo.src} projectlink = 'https://ibrahim-eshop-v8.vercel.app' setProjectLink = {setProjectLink} name='Ecommerce App' setProjectName = {setProjectName} count={1} setCounter = {setCounter}/>
        <Project demo={demo.src} projectlink = '/' setProjectLink = {setProjectLink} name='Diet Tracker' setProjectName = {setProjectName} count={2} setCounter = {setCounter}/>
        <div className='w-full h-[100px]'></div>
         <div className='bg-primary w-full h-[100px] rounded-t-[100px] z-30 absolute bottom-0'></div>
    </div>
  )
}

export default Work