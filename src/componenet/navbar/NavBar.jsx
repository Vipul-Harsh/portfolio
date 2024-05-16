import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";
const NavBar = () => {
  return (

    <div className="navbar">
    <SideBar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="name">Vipul</span> Harsh
        </motion.span>
        <motion.div
          className="socials"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Vipul-Harsh" target="blank">
            <img src="../../../public/github.png" alt="github" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/vipul-harsh-b8722322a/"
            target="blank"
          >
            <img src="../../../public/linkedien.png" alt="linkedin" />{" "}
          </a>
          <a href="" target="blank">
            <img src="../../../public/mail.webp" alt="linkedin" />{" "}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
