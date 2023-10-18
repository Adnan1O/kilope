import React from 'react'
import "./resnav.css"
import Image from "next/image"
import k from "./K.png"
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Resnav = ({close1}) => {

  const closenav=()=>{
    close1()
  }
  return (
    <div className='resnav'>
      <div className="res-area">
      <div className="logo-close-btn">
<Image src={k} alt=''/>
<AiOutlineClose onClick={closenav}/>
      </div>
       <ul>
<li>Platform <MdOutlineKeyboardArrowRight/></li>
<li>Use Cases <MdOutlineKeyboardArrowRight/></li>
<li>Why Deel <MdOutlineKeyboardArrowRight/></li>
<li>Pricing <MdOutlineKeyboardArrowRight/></li>
<li>Resources <MdOutlineKeyboardArrowRight/></li>
</ul>
    </div>
    </div>
  )
}

export default Resnav
