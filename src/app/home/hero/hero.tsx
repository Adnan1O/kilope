import React  from 'react'
import Image from "next/image"
import banner from "./img/banner.png"
// import { BiMenuAltRight } from 'react-icons/bi';
import { GoLinkExternal } from 'react-icons/go';
import Navbar from "../../comps/Navbar/navbar"
import "./hero.css"
const Hero = () => {

  return (
    <div className='hero'>
      <div className='home-page'>
   <div className="offer-bar">
    <p>Claim your free $1,500 when you combine global payroll and HR. <span>Learn more <GoLinkExternal/></span> </p>
  </div>
<Navbar/>
  <div className="banner">
    <div className="b-txt">
    <h2>Payroll, HR, and 
        compliance for <span>global </span>teams </h2>
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