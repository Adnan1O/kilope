"use client";
import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi';

const Resnav = () => {
  return (
    <div className='resnav'>
  <BiMenuAltRight size={28} className='menu' onClick={()=>console.log("object")} />
    </div>
  )
}

export default Resnav
{/* <ul>
<li>Platform</li>
<li>Use Cases</li>
<li>Why Deel</li>
<li>Pricing</li>
<li>Resources</li>
</ul> */}