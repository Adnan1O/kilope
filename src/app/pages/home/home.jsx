import React from 'react'
import Hero from './hero'
import Brand from './brand'
import Hr from './hr'
import Hire from "./hire"
import "./home.css"
import International from './international/international'
import Tools from './tools/tools'
import Support from './support/support'
import Review from './review/review'

const Home = () => {
  return (
    <div className='home'>
   <Hero/>
   <Brand/>
   <Hr/>
   <Hire/>
   <International/>
   <Tools/>
   <Support/>
   <Review/>
    </div>
  )
}

export default Home
