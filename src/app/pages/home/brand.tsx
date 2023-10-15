import React from 'react'
import Image from "next/image"
import brands from "../../brands.png"
import "./brands.css"
import s1 from "./img/s1.png"
import s2 from "./img/s2.png"
import s3 from "./img/s3.png"
import s4 from "./img/s4.png"
import e1 from "./img/e1.png"

const Brand = () => {
  return (
    <div className='brand'>
        <div className="trust">
    <p>Trusted by global leaders across industries</p>
    <Image
    src={brands}
    alt=""
    />
  </div>
  <div className="support">
    <div className="sup-txt">
      <p>Employing globally is painful.</p>  
      <strong>Not with Skuad!</strong>
    </div>
    <div className="services">
    <div className="service-div">
        <Image
        src={s1}
        alt=''
        />
        <span>Hire in</span>
        <span>160+ countries</span>
    </div>
    <div className="service-div">
        <Image
        src={s2}
        alt=''
        />
        <span>Pay in 100+</span>
        <span>currencies</span>
    </div>
    <div className="service-div">
        <Image
        src={s3}
        alt=''
        />
        <span>Get 24x7</span>
        <span>expert support</span>
    </div>
    <div className="service-div last-ser">
        <Image
        src={s4}
        alt=''
        />
        <span>Experience same</span>
        <span>day onboarding</span>
    </div>
    </div>
    <div className="employees">
        <div className="employees-area">
        <Image
        src={e1}
        alt=''
        />
        <span>Experience same</span>
        <p>Easily hire and pay employees where you
             don’t have entities with Deel’s worldwide infrastructure.</p>

        </div>
        <div className="employees-area">
        <Image
        src={e1}
        alt=''
        />
        <span>Experience same</span>
        <p>Easily hire and pay employees where you
             don’t have entities with Deel’s worldwide infrastructure.</p>

        </div>
        <div className="employees-area">
        <Image
        src={e1}
        alt=''
        />
        <span>Experience same</span>
        <p>Easily hire and pay employees where you
             don’t have entities with Deel’s worldwide infrastructure.</p>

        </div>
    </div>
  </div>
    </div>
  )
}

export default Brand
