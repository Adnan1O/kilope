import React from 'react'
import "./left.css"
import Image from "next/image"
import banner from "../../home/img/banner.png"
const Left = () => {
  return (
    <div className='left'>
      <h2>Spend 3X less time in hiring and managing global employees</h2>
   <span>Let us handle global HR for you — including hiring, compliance,
onboarding, invoicing, payments, and more.</span>
<Image src={banner} alt="" />
    </div>
  )
}

export default Left
