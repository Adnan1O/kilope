import React from 'react'
import "./right.css"
import { GoLinkExternal } from 'react-icons/go';
const Right = () => {
  return (
    <div className='right'>
      <h2>Get started with Kilope</h2>
      <span>Schedule a 30-minute product demo with expert Q&A</span>
    <form className='form'>
      <div className="inputs">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <div className="inputs">
        <input type="text" placeholder='Work email' />
        <input type="text" placeholder='Pin' />
        </div>
<select name="" id="">

<option value="">Which countries you want to hire in</option>
<option value="">India</option>
<option value="">China</option>
<option value="">Japan</option>

</select>

<div className="policy-area">
  <span>We respect your data. By submitting this form, you agree that we will contact you in relation to our</span>
  <span>products and services, in accordance with our 
    <p>Privacy policy<GoLinkExternal/></p> </span>
<button>Talk to an expert</button>
<span>Contractor or employee? <p>Sign up here <GoLinkExternal/></p></span>

</div>
     
    </form>
    </div>
  )
}

export default Right
