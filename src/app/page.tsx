// import styles from './page.module.css'
import "./page.css"
import Image from "next/image"
import kipope from "./KiloPe2 1.png"
import banner from './banner.png'
import brands from "./brands.png"
export default function Home() {
  return (
    <main>
      <div className='home-page'>
   <div className="offer-bar">
    <p>Claim your free $1,000 when you combine global payroll and HR.</p>
  </div>
  <div className="navbar">
    <div className="logo-area">
    <Image
  src={kipope}
  alt="Kilope-logo"/>
  </div>
  <div className="links-area">
    <ul>
      <li>Platform</li>
      <li>Use Cases</li>
      <li>Why Deel</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
  </div>
  <div className="login-area">
    <button className="login">Login</button>
    <button className="demo">Request A Demo</button>
  </div>
  </div>
  <div className="banner">
    <div className="b-txt">
    <h2>Payroll, HR, and <br />
        compliance for <br /> <span>global </span>teams </h2>
<p>Deel helps thousands of companies expand globally with
unmatched speed and flexibility. It's global hiring, HR and
payroll in just one system.</p>
<button>Get Started</button>
    </div>
    <div className="b-img">
<Image
src={banner}
alt=""
/>
    </div>
  </div>
  <div className="trust">
    <p>Trusted by global leaders across industries</p>
    <Image
    src={brands}
    alt=""
    />
  </div>
      </div>
    </main>
  )
}
