import React from 'react'
import "./review.css"
import { HiArrowSmallRight } from 'react-icons/hi2';
import Image from "next/image"
import r from "./img/r.png"
const Review = () => {
  return (
    <div className='review'>
      <div className="r-heading">
        <h3>Ways we've helped 15,000+ businesses <br />
save time, money, and resources</h3>
<div className="tab-btns">
  <button className='active-btn'>Employee relocation</button>
  <button>Global Payroll</button>
  <button>Compliance</button>
  <button>Merger & Acquisition</button>
  <button>Global hiring</button>
</div>
      </div>
      <div className="video-area">
        <div className="video-txt">
          <h4>How Revolut streamlined employee <br />
relocation with KiloPe</h4>
<span>“Through KiloPe, we’ve been able to hire more than 150 people so
far, and we have also relocated more than 10 employees to
countries like the UAE and Switzerland.”</span>
<strong>— Luka Besling, HR Manager at Revolut</strong>
<button>Explore Case Study   <HiArrowSmallRight/></button>
        </div>
        <div className="video">
        <Image
        src={r}
        alt=''
        />
        </div>
      </div>
    </div>
  )
}

export default Review
