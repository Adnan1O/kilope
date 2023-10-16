import React from 'react'
import Image from "next/image"
import "./footer.css"
import logo from "../../../KiloPe2 1.png"
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagramAlt } from 'react-icons/bi';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-area">
         <div className="f-s1">
    <div className="logo-area">
    <Image
    src={logo}
    alt=''
    />
    <span>Hire anyone, anywhere. Compliantly.</span>
</div>
<div className="socials-area">
    <BiLogoFacebook/>
    <BiLogoLinkedin/>
    <BiLogoTwitter/>
    <BiLogoInstagramAlt/>
</div>
      </div>     
      <div className="f-s2">

</div>   
<div className="f-s3">

</div>   
        </div>
    
    </div>
  )
}

export default Footer
