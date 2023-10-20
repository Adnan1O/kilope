import React from 'react'
import "./support.css"
import Image from "next/image"
import s from "./img/s.png"
const Support = () => {
  return (
    <div className='support'>
      <div className="support-area">
<div className="s-one">
<Image
  src={s}
  alt=""/>
  <p>Expert support, whenever and wherever <br />
you need it.</p>
  </div>
  <div className="s-two">
    <div className="sup-item">
        <h3>Global People Ops <br />
Partner</h3>
<span>
Managing a globally distributed team can be challenging, but Skuad has you
covered. Design your talent requirements, streamline virtual onboarding,
understand local employment and strategize people management with
Skuad's people ops experts. Skuad partners with you at every step of your
global employee and contractor lifecycle.
</span>
<button>Request demo</button>
    </div>
    <div className="sup-item">
        <h3>Talent Discovery
Partner</h3>
<span>
Find exceptional talent without letting the challenges of remote hiring get in
the way. Whether you are looking for employees or contractors, our talent
experts work with you to source the best global talent. Simplify every aspect
of talent discovery and recruitment with KiloPe global employment
infrastructure.
</span>
<button>Request demo</button>
    </div>
  </div>
</div>
      </div>
  
  )
}

export default Support
