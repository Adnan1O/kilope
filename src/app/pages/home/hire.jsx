import React from 'react'
import "./hire.css"
import Image from "next/image"
import hire from "./img/hire.png"

const Hire = () => {
  return (
    <div className='Hire'>  
      <div className="hire-area">
        <div className="hire-f">
        <div className="hire-text">
<h4>Hire and pay whoever
you want, anywhere in
the world.</h4>
        </div>
        <div className="hire-img">
<Image src={hire}
alt="" />
    </div>
    </div>
    <div className="s-area">
    <div className="employee">
        <div className="ep-price">
            <h4>Contractors</h4>   
            <span>Starts at $199</span>
        </div>
        
        <p>Partner with Skuad to onboard, manage and pay contractors anywhere
in the world. Manage invoices, payouts and tax filings compliantly.</p>
<button>Hire contractors worldwide</button>
    </div>

    <div className="employee">
        <div className="ep-price">
            <h4>Employees</h4>   
            <span>Starts at $199</span>
        </div>
        
        <p>Hire employees in a new country in minutes, without setting up
subsidiaries. Automate onboarding, cross-border payroll and compliance
on Skuad's unified platform.</p>
<button>Hire full-time employees globally</button>
    </div>
    </div>
    </div>
</div>
)
}

export default Hire
