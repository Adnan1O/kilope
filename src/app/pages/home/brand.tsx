import React from 'react'
import Image from "next/image"
import brands from "../../brands.png"
import "./brands.css"
const Brand = () => {
  return (
    <div className='brand'>
        <div className="trust">
    <p>Trusted by global leaders across industries</p>
    <Image
    src={brands}
    alt=""
    />
  </div>
  <div className="support">
    <div className="sup-txt">
      <p>Employing globally is painful.</p>  
      <strong>Not with Skuad!</strong>
    </div>
  </div>
    </div>
  )
}

export default Brand
