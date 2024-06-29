import React, { useEffect, useRef } from 'react'
import Link from 'next/link';

const ProjectA = ({demo,setProjectName,name,count,setCounter,projectlink, setProjectLink}:
    {name:string,count:number, demo:string,projectlink:string, setProjectLink:React.Dispatch<React.SetStateAction<string>> , setCounter:React.Dispatch<React.SetStateAction<number>>, setProjectName:React.Dispatch<React.SetStateAction<string>>}) => {

  const elementRef = useRef(null);
    
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(projectlink); // Replace with your desired action
        setProjectName(name);
        setCounter(count);
        setProjectLink(projectlink);
      }
    }, { threshold: 0.5 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);

  return (
    <div className='w-full p-10 lg:p-0 flex lg:justify-end justify-center h-[40vh] lg:h-[100vh] absolute top-24 ' ref={elementRef}>
        <div>
          <div className='lg:w-[50vw] '>
            <img
            className='lg:w-[50vw]'
            src={demo} 
            />
        </div>
        <div className='lg:hidden font-bold text-xl py-3 pl-2'>{name}</div>
        <Link href={projectlink} className=' hover:underline lg:hidden mx-2 px-5 py-2 bg-secondary text-white rounded-full'>View Live</Link>
        </div>
    </div>
  )
}

export default ProjectA