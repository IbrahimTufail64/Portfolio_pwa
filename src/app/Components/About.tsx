import React from 'react'

const About = () => {
  return (
    <div className="w-full flex justify-center py-[50px] ">
          <div>
            <div className="flex justify-center">
              <div>
                <div className="text-[35px] font-bold">What I do</div>
            <div className='bg-secondary h-[4px] w-[50px] rounded-xl ml-[42px] '></div>
              </div>
            </div>
            <div className="text-center w-[40vw] font-light mt-5">
              I build Progressive Web Apps for businesses, 
              that are responsive on both Web and Mobile. 
              No need to port your web app to Android or Play Store.
              Each App with a Unique User Interface to match your business requirements. 
            </div>
          </div>
        </div>
  )
}

export default About