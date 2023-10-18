import React from 'react'
import "./team.css"
import i1 from "./img/i1.png"
import i2 from "./img/i2.png"
import i3 from "./img/i3.png"
import i4 from "./img/i4.png"
import i5 from "./img/i5.png"
import i6 from "./img/i6.png"
import i7 from "./img/i7.png"
import i8 from "./img/i8.png"
import Image from "next/image"
const Team = () => {
  return (
    <div className='team'>
      <h2>Everything you need to grow  your
global team</h2>
<div className="detail-area">
    <div className="indi-de">
        <Image src={i1} alt='' />
        <span>Offer localized benefits</span>
    </div>
    <div className="indi-de">
        <Image src={i2} alt='' />
        <span>Send equipment anywhere</span>
    </div>
    <div className="indi-de">
        <Image src={i3} alt='' />
        <span>Hire Pre-vetted Talent</span>
    </div>
    <div className="indi-de">
        <Image src={i4} alt='' />
        <span>Run background checks</span>
    </div>
    <div className="indi-de">
        <Image src={i5} alt='' />
        <span>Hire contractors in 150+ countries</span>
    </div>
    <div className="indi-de">
        <Image src={i6} alt='' />
        <span>Pay teams globally with ease</span>
    </div>
    <div className="indi-de">
        <Image src={i7} alt='' />
        <span>Hire employees without an entity</span>
    </div>
    <div className="indi-de">
        <Image src={i8} alt='' />
        <span>Offer workspaces worldwide</span>
    </div>
</div>
    </div>
  )
}

export default Team
