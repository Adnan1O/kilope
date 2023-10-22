import React from 'react'
import "./tools.css"
import Image from "next/image"
import t1 from "./img/t1.png"
import t2 from "./img/t2.png"
import t3 from "./img/t3.png"
import t4 from "./img/t4.png"

import { HiArrowSmallRight } from 'react-icons/hi2';
import { HiArrowSmallLeft } from 'react-icons/hi2';
const Tools = () => {
  return (
    <div className='tools'>
      <div className="tools-area">
        <div className="tool-heading">
            <div className="tool-txt">
                <h4>See you later 16 <br />
different HR tools</h4>
<p>We’re simplifying every aspect of managing a worldwide team, from benefits and
equity to working visas and equipment. It’s one platform made to get you set up
compliantly in just 5 minutes.</p>
        </div>
        <div className="tool-arr">  
        
        <span>
            <HiArrowSmallLeft className="left-arr"/>
            </span>
            <span>
            <HiArrowSmallRight/></span>
        
        </div>
    </div>
    <div className="ser-list">
        <div className="ser-item">
        <Image
        src={t1}
        alt=''
        />
    <h3>Use kilope HR free to
manage your global
team in one system</h3>
<div className="learn-more">
    <p>Learn More     <HiArrowSmallRight/> </p>
</div>
        </div>
        <div className="ser-item" style={{backgroundColor:"#519AF4"}}>
        <Image
    src={t2}
    alt=''
    />
    <h3>Hire or relocate team
members with in-
house visa support</h3>
<div className="learn-more">
    <p>Learn More     <HiArrowSmallRight/> </p>
</div>
        </div>
        <div className="ser-item" style={{backgroundColor:"#1C4396"}}>
        <Image
    src={t3}
    alt=''
    />
    <h3>Send equipment
worldwide, without
the hassle</h3>
<div className="learn-more">
    <p>Learn More     <HiArrowSmallRight/> </p>
</div>
        </div>
        <div className="ser-item" style={{backgroundColor:"#F78400"}} >
        <Image
    src={t4}
    alt=''
    />
    <h3>Offer country-specific
benefits at
competitive rates</h3>
<div className="learn-more">
    <p>Learn More     <HiArrowSmallRight/> </p>
</div>
        </div>
    </div>
    <div className="end-demo-btn">
    <button className='demo-btn'>Get A Demo</button>
    </div>
    </div>
</div>
  )
}

export default Tools
