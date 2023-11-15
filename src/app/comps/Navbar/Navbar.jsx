"use client";
import React, {useState} from 'react'
import "./Navbar.css"
import Link from 'next/link';
import kipope from '../images/KiloPe2 1.png'
import l1 from "./img/l1.png";
import l2 from "./img/l2.png";
import l3 from "./img/l3.png";
import l4 from "./img/l4.png";
import l5 from "./img/l5.png";
import l6 from "./img/l6.png";
import l7 from "./img/l7.png";
import l8 from "./img/l8.png";
import l9 from "./img/l9.png";
import Resnav from '../resnav/resnav';
import Image from 'next/image';
import { BiMenuAltRight } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Navbar1 = () => {
  const [openNav, setOpenNav] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [solution, setSolution] = useState(false);
  const [resources, setResources] = useState(false);

  const solu =()=>{
    setSolution(!solution)
    setResources(false)
    setPlatform(false)
  }
  
  const plat =()=>{
    setPlatform(!platform)
    setSolution(false)
    setResources(false)
  }
  const res =()=>{
  setResources(!resources)
  setPlatform(false)
    setSolution(false)
  }
  const open =()=>{
    setOpenNav(!openNav)
  }
  
  return (
    <div className="navbar">
    <div className="logo-area">
   <Link href="/" > <Image
  src={kipope}
  alt="Kilope-logo"/>
  </Link>
  </div>
  <div className="links-area">
    <ul>
      <li onClick={plat} style={{color: platform? "#2240CD":"white"}} >
        Platform <FaChevronDown style={{display: platform ? "none": "block"}}/>
        <IoIosArrowUp style={{display: platform ? "block" : "none"}} />
        </li>

      <li onClick={solu} style={{color: solution? "#2240CD":"white"}}>
        Use Cases <FaChevronDown style={{display: solution ? "none": "block"}} />
      <IoIosArrowUp style={{display: solution ? "block" : "none"}} />
      </li>

      <li >
        Why Kilope <FaChevronDown/>
        </li>
     <Link href='/pricing'><li>Pricing</li></Link> 

  <li onClick={res} style={{color: resources? "#2240CD":"white"}} >
    Resources <FaChevronDown style={{display: resources ? "none": "block"}} />
    <IoIosArrowUp style={{display: resources ? "block" : "none"}} />
  </li>
    </ul>
    {
      platform &&(
        <div className="platform">
        <div className="link-div">
         <Image src={l1} alt='' />
         <div className="txt-area">
          <p>Hire</p>
          <span>Hire global Contractors and full-time employees</span>
         </div>
        </div>
  
        <div className="link-div">
         <Image src={l2} alt='' />
         <div className="txt-area">
          <p>Onboard</p>
          <span>Welcome your international team compliantly</span>
         </div>
        </div>
  
     <Link href="/pay">   <div className="link-div">
         <Image src={l3} alt='' />
         <div className="txt-area">
          <p>Pay</p>
          <span>Hire global Contractors and full-time employees   </span>
         </div>
        </div></Link>
  
        <div className="link-div">
         <Image src={l4} alt='' />
         <div className="txt-area">
          <p>Manage</p>
          <span>Navigate the entire employment cycle seamlessly</span>
         </div>
        </div>
      </div>   
      )
    }

{
      solution &&(
        <div className="platform">
        <div className="link-div">
         <Image src={l5} alt='' />
         <div className="txt-area">
          <p>Blog</p>
          <span>Hire global Contractors and full-time employees</span>
         </div>
        </div>
  
        <div className="link-div">
         <Image src={l6} alt='' />
         <div className="txt-area">
          <p>Help Center</p>
          <span>Hire global Contractors and full-time employees</span>
         </div>
        </div>

      </div>   
      )
    }

{
      resources &&(
        <div className="platform" style={{marginLeft:"4rem"}} >
        <div className="link-div">
         <Image src={l7} alt='' />
         <div className="txt-area">
          <p>HR teams</p>
          <span>Hire and pay the worlds best tech talent.</span>
         </div>
        </div>
  
        <div className="link-div">
         <Image src={l8} alt='' />
         <div className="txt-area">
          <p>Finance Teams</p>
          <span>Easily manage cross  border payroll and save hours on  admin</span>
         </div>
        </div>

        <div className="link-div">
         <Image src={l9} alt='' />
         <div className="txt-area">
          <p>Global compliance</p>
          <span>Minimize risks that come with global employment</span>
         </div>
        </div>

      </div>   
      )
    }
   
  </div>
  <div className="login-area">
 <button className="login">Login</button>
 <Link href='/demo'><button className="demo">Request A Demo</button></Link>
    <BiMenuAltRight size={28} className='menu' onClick={open} />
    {
   openNav &&(<Resnav close={open}/>)
  }
  </div>
  </div>
  )
}

export default Navbar1
