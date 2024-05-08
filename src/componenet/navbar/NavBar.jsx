import React from 'react'
import "./NavBar.scss"
const NavBar = () => {
  return (
    <div className='navbar'>
       <div className='wrapper'>
       
            <span><span className='name'>Vipul</span> Harsh</span>
            <div className='socials'>
                
                <a href='https://github.com/Vipul-Harsh' target='blank'><img src="../../../public/github.png" alt="github"/> </a>
                <a href='https://www.linkedin.com/in/vipul-harsh-b8722322a/' target='blank'><img src="../../../public/linkedien.png" alt="linkedin"/> </a>
                <a href='' target='blank'><img src="../../../public/mail.webp" alt="linkedin"/> </a>
            </div>
       </div>
    </div>
  )
}

export default NavBar
