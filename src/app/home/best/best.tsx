import React from 'react'
import Image from "next/image"
import "./best.css"
import b from "./img/b.png"
const Best = () => {
  return (
    <div className='best'>
      <div className="best-txt">
        <h3>KiloPe is the best solution to hire and
expand globally.</h3>
<button>Request demo</button>
      </div>
      <Image src={b}
alt="" />
    </div>
  )
}

export default Best
