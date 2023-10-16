import React from 'react'
import Hero from './hero'
import Brand from './brand'
import Hr from './hr'
import Hire from "./hire"
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
   <Hero/>
   <Brand/>
   <Hr/>
   <Hire/>
    </div>
  )
}

export default Home
