import React from 'react'
import "./TrustedBy.scss"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import linkedin from "../../img/linkedin.png"
import pintrest from "../../img/pinterest.png"
const TrustedBy = () => {
  return (
    <div className='trustedBy'>
    <span>Trusted By :</span>
    <img src={facebook} alt="" />
    <img src={twitter} alt="" />
    <img src={linkedin} alt="" />
    <img src={pintrest} alt="" />
   
    </div>
  )
}

export default TrustedBy