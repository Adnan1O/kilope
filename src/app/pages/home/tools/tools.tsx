import React from 'react'
import "./tools.css"
import { HiArrowSmallRight } from 'react-icons/hi2';
import { HiArrowSmallLeft } from 'react-icons/hi2';
const Tools = () => {
  return (
    <div className='tools'>
      <div className="tools-area">
        <div className="tool-heading">
            <div className="tool-txt">
                <h4>See you later 16
different HR tools</h4>
<p>We’re simplifying every aspect of managing a worldwide team, from benefits and
equity to working visas and equipment. It’s one platform made to get you set up
compliantly in just 5 minutes.</p>
            </div>
            <div className="tool-arr">
                <HiArrowSmallRight/>
                <HiArrowSmallLeft/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
