import React from 'react'
import Hero from './hero/hero'
import Brand from './brands/brand'
import Hr from './hr'
import Hire from "./hire"
import "./home.css"
import International from './international/international'
import Tools from './tools/tools'
import Support from './support/support'
import Review from './review/review'
import Best from './best/best'
import Country from './country/country'

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
   <Country/>
   <Best/>
    </div>
  )
}

export default Home
