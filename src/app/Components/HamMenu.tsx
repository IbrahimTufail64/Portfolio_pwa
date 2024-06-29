import React from 'react'

const HamMenu = () => {
  return (
 <div className='sticky'>
       <nav role="navigation" className='lg:hidden'>
  <div id="menuToggle">

    <input type="checkbox" />
    

    <span></span>
    <span></span>
    <span></span>
    
 
    <ul id="menu">
      <a href="#"><li>Contact Me</li></a>
      <a href="#"><li>LinkedIn</li></a>
      <a href="#"><li>My Work</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
</nav>
 </div>
  )
}

export default HamMenu