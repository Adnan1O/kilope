"use client";
import React , {useState} from 'react'
import Image from "next/image"
import kipope from "./KiloPe.png"
import { BiMenuAltRight } from 'react-icons/bi';
import Resnav from '../../comps/resnav/resnav';
import "./hero.css"
import { BsArrowRightShort } from 'react-icons/bs';
const Hero = () => {
  const [openNav, setOpenNav] = useState(false);

  const open =()=>{
    setOpenNav(!openNav)
  }
  return (
    <div>
      <div className='home-page'>
   <div className="offer-bar">
    <p>✨ Limited time offer. EOR in <span>india, Indonesia & Nigeria </span> at <span>$169</span> in <span>Portugal, UK & Serbia</span> at <span>$229</span> . Valid for new customers! ✨</p>
  <button>Explore more countries <BsArrowRightShort/></button>
  </div>
  <div className="navbar">
    <div className="logo-area">
   
  </div>
  <div className="links-area">
    <ul>
      <li>Platform</li>
      <li>Use Cases</li>
      <li>Why Deel</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
  </div>
  <div className="login-area">
    <button className="demo">Request A Demo</button>
    <BiMenuAltRight size={28} className='menu' onClick={open} />
    {
   openNav &&(<Resnav close={open}/>)
  }
  </div>
  </div>
<div className="hire">
  <h3>Hire and expand globally,</h3>
  <h3>at a fraction of the cost</h3>
  <span>Start today, cancel any time. No hidden costs, no long-term commitments.</span>
</div>

      </div>
    </div>
  )
}

export default Hero
