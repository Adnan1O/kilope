import React from 'react'
import c1 from "./img/c1.png"
import sa from "./img/sa.png"
import Image from 'next/image'
import "./country.css"
const Country = () => {
  return (
    <div className='country'>
      <div className="image-area">
        <div className="img-div" >
<Image src={c1} alt=''/>
<div className="overlay-txt">
<p>South Africa</p>
<div className="c-i-area">
  <div className="bottom-part">
  <span>EOR</span>
  <span>Contractor</span>
</div>
<Image src={sa} alt='' className='flag-img'/>
</div>
</div>
      </div>
      </div>
    </div>
  )
}

export default Country
 