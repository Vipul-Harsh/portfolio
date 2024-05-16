import React, { useState } from 'react'
import "./SideBar.scss"
import {delay, motion} from "framer-motion"
import Links from './links/Links'
import Toggle from './toggle/Toggle'
const SideBar = () => {
  const [open,setOpen]=useState(false);
  const variants={
    open :{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:"20",
      }
    },
    closed :  {
       clipPath:"circle(25px at 30px 35px)",
       transition:{
        delay:"0.0",
        type:"spring",
        stiffness:"400",
        damping:"40",
       },

    },
  };
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className='links' variants={variants}>
      
        <Links/>
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  )
}

export default SideBar
