"use client";
import React , {useState} from 'react'
import Image from "next/image"
import kipope from '../KiloPe2 1.png'
import banner from "./img/banner.png"
// import { BiMenuAltRight } from 'react-icons/bi';
import Resnav from '../comps/resnav/resnav';
import Link from 'next/link';
const Hero = () => {
  const [openNav, setOpenNav] = useState(false);

  const open =()=>{
    setOpenNav(!openNav)
  }
  return (
    <div>
      <div className='home-page'>
   <div className="offer-bar">
    <p>Claim your free $1,000 when you combine global payroll and HR.</p>
  </div>
  <div className="navbar">
    <div className="logo-area">
    <Image
  src={kipope}
  alt="Kilope-logo"/>
  </div>
  <div className="links-area">
    <ul>
      <li onClick={()=>console.log("object")}>Platform</li>
      <li>Use Cases</li>
      <li>Why Deel</li>
     <Link href='/pricing'><li>Pricing</li></Link> 
      <li>Resources</li>
    </ul>
  </div>
  <div className="login-area">
 <button className="login">Login</button>
 <Link href='/demo'><button className="demo">Request A Demo</button></Link>
    {/* <BiMenuAltRight size={28} className='menu' onClick={open} /> */}
    {
   openNav &&(<Resnav close={open}/>)
  }
  </div>
  </div>
  <div className="banner">

    <div className="b-txt">
    <h2>Payroll, HR, and <br />
        compliance for <br /> <span>global </span>teams </h2>
    <p>KiloPe helps thousands of companies expand globally with
    unmatched speed and flexibility. It's global hiring, HR and
    payroll in just one system.</p>
    <button>Get Started</button>
    </div>
    <div className="b-img">
<Image
src={banner}
alt=""
/>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Hero
