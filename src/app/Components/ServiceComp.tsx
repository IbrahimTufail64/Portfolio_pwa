import React from 'react'
import Image from 'next/image'

const ServiceComp = ({title,content,href}:{title:string,content:string,href:string}) => {
  return (
    <div className='px-20 py-10 lg:p-10 lg:w-1/4 lg:space-y-3'>
     <div className='w-full flex lg:block justify-center'>
        <Image
            src={href}
            width={50}
            height={50}
            alt="service"
            />
     </div>
     <div className='font-normal text-xl w-full flex lg:block justify-center'>
        {title}
     </div>
     <div className='text-sm font-light lg:pr-10 w-full flex lg:block justify-center lg:text-left text-center'>
        {content}
     </div>
    </div>
  )
}

export default ServiceComp