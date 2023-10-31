"use client";
import React, {useState} from 'react'
import "./navbar.css"
import Link from 'next/link';
import kipope from '../images/KiloPe2 1.png'
import Resnav from '../resnav/resnav';
import Image from 'next/image';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const open =()=>{
    setOpenNav(!openNav)
  }
  
  return (
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
      <li>Why Kilope</li>
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
  )
}

export default Navbar
