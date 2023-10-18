import React from 'react'
import "./demo.css"
import Hero from './hero/hero'
import Price from './price/price'
import Team from './team/team'
import Tools from './tools/tools'
import Best from '../home/best/best'
import Footer from '../comps/footer/footer'
const Demo = () => {
  return (
    <div className='demo'>
     <Hero/>
     <Price/>
     <Team/>
     <Tools/>
     <Best/>
     <Footer/>
    </div>
  )
}

export default Demo
