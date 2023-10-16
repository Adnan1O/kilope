import React from 'react'
import Hero from './hero'
import Brand from './brand'
import Hr from './hr'
import Hire from "./hire"
import "./home.css"
import International from './international/international'
import Tools from './tools/tools'

const Home = () => {
  return (
    <div className='home'>
   <Hero/>
   <Brand/>
   <Hr/>
   <Hire/>
   <International/>
   <Tools/>
    </div>
  )
}

export default Home
