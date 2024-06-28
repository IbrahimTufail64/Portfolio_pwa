import React from 'react'
import Image from 'next/image'

const ServiceComp = ({title,content,href}:{title:string,content:string,href:string}) => {
  return (
    <div className='p-10 w-1/4 space-y-3'>
     <div className=''>
        <Image
            src={href}
            width={50}
            height={50}
            alt="service"
            />
     </div>
     <div className='font-normal text-xl '>
        {title}
     </div>
     <div className='text-sm font-light pr-10'>
        {content}
     </div>
    </div>
  )
}

export default ServiceComp