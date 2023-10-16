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
    <ul>
      <li className='heading'>Company</li>
      <li>About</li>
      <li>Why KiloPe</li>
      <li>Pricing</li>
      <li>Careers</li>
    </ul>
    <ul>
      <li className='heading'>Global Hiring Toolkit</li>
      <li>Library</li>
      <li>Blogs</li>
      <li>Glossary</li>
      <li>Cost Calculator</li>
      <li>FAQs</li>
    </ul>
    <ul>
      <li className='heading'>Global Compliance</li>
      <li>Leave Policy</li>
      <li>Employment Laws</li>
      <li>Background Checks</li>
    </ul>
    <ul>
      <li className='heading'>Global Employment</li>
      <li>EOR Guide</li>
      <li>Payroll Guide</li>
      <li>PEO Guide</li>
      <li>Work Permit Guide</li>
      <li>Hire Remote Teams</li>
      <li>Hire Remote Developers</li>
    </ul>
    <ul>
      <li className='heading'>Join our Newsletter</li>
      <li>Receive the latest news <br />about international hiring,<br /> employment,
      compliance<br /> and payroll</li>
    <div className="input-btn">
      <input type="text" />
      <button>Subscribe</button>
    </div>
    </ul>
</div>   
<div className="f-s3">
<div className="copyright">
  <p>Copyright © Skuad 2023. All Rights Reserved</p>
  <p>Privacy Policy | Terms & Conditions</p>
</div>
<div className="disclaimer">
  <h4>Disclaimer:</h4>
  <span>For clients based in the European Economic Area, payment services for Skuad Netherlands B.V. are provided by CurrencyCloud B.V.. Registered in the Netherlands No. 72186178. Registered Office: Nieuwezijds Voorburgwal 296 - 298, Mindspace Nieuwezijds
Office 001 Amsterdam. CurrencyCloud B.V. is authorised by the DNB under the Wet op het financieel toezicht to carry out the business of an electronic-money institution (Relation Number: R142701).</span>
</div>
<span>For clients based in the United Kingdom and rest of the world, payment services for Skuad Pte are provided by The Currency Cloud Limited. Registered in England and Wales No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward Street London
E1 6FQ. The Currency Cloud Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN: 900199).</span>
</div>   
        </div>
    
    </div>
  )
}

export default Footer
