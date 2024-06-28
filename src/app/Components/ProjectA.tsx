import React, { useEffect, useRef } from 'react'

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
    <div className='w-full flex justify-end h-[100vh] absolute top-24 ' ref={elementRef}>
        <div className='w-[50vw] right-0'>
            <img
            className='w-[50vw]'
            src={demo} 
            />
        </div>
        
    </div>
  )
}

export default ProjectA