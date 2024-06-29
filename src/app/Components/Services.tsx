import React from 'react'
import ServiceComp from './ServiceComp'
import fullstack from '../assets/fullstack.png'
import mobile from '../assets/mobiledev.png'
import design from '../assets/UiUx.png'
import backend from '../assets/Stack.png'

const Services = () => {
  return (
    <div className='bg-primary'>
        <div className='rounded-b-[100px] bg-white w-full h-[100px]'></div>
        <div className='flex justify-center py-[80px]'>
            <div className='space-y-10'>
              <div className="text-[35px] font-bold flex justify-center">Services I provide</div>
            <div className="w-[60vw] h-[2px] bg-[#CCCCCC]"></div>
            </div>
        </div>
        <div className='lg:flex justify-between lg:px-[100px] pb-[100px]'>
              <ServiceComp content='Experience in developing both frontends and backends of apps along with integration and app-architecture.'
                title='Full Stack Development'
                href={fullstack.src}
              />
              <ServiceComp content='Re-use your Existing Code base without the headache of porting your web app to an android app.'
                title='Progressive Web App'
                href={mobile.src}
              />
              <ServiceComp content='I craft inspiring and intuitive Ui to go with your business audience.'
                title='Ui & Ux'
                href={design.src}
              />
              <ServiceComp content='I develop backend servers that are robust and get the job done.'
                title='Backend & Databases'
                href={backend.src}
              />
            </div>
            <div className='bg-white w-full h-[100px] rounded-t-[100px]'></div>
    </div>
  )
}

export default Services