import React from 'react'
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import ind from "./img/ind.png"
import pak from "./img/pak.png"
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
  <Image src={ind} alt='' className='flag-img'/>
  </div>
  </div>
      </div>

      <div className="img-div-type-2 img-div " >
  <Image src={c2} alt=''/>
  <div className="overlay-txt">
  <p>South Africa</p>
  <div className="c-i-area">
    <div className="bottom-part">
    <span>EOR</span>
    <span>Contractor</span>
  </div>
  <Image src={pak} alt='' className='flag-img'/>
  </div>
  </div>
      </div>

      <div className="img-div" >
  <Image src={c3} alt=''/>
  <div className="overlay-txt">
  <p>South Africa</p>
  <div className="c-i-area">
    <div className="bottom-part">
    <span>EOR</span>
    <span>Contractor</span>
  </div>
  <Image src={ind} alt='' className='flag-img'/>
  </div>
  </div>
      </div>

      </div>
    </div>
  )
}

export default Country
 