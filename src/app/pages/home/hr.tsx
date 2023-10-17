import React from 'react'
import "./hr.css"
import Image from "next/image"
import h from "./img/h.png"


const Hr = () => {
  return (
    <div className='hr'>
      <div className="hr-area">
      <div className="h-txt">
<h4>Kilope’s the only HR
platform with everything
you need, for everyone</h4>
<p>We're making global team management so easy, businesses don't
need to think twice. Whether you want to hire contractors and
employees worldwide without opening legal entities, streamline HR for
your global team, or consolidate payroll for everyone —Kilope does it all
(while keeping you compliant).</p>
<button>request a demo</button>
    </div>
    <div className="h-img">
<Image
src={h}
alt=""
/>
    </div>
      </div>
    </div>
  )
}

export default Hr
