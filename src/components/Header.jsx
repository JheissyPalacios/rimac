import React from 'react'
import logoRojo from '../assets/logo-rojo.png'
import phone from '../assets/phone.svg'

export default function Header() {
  return (
    <div className="header">
      <div className="page-wrapper d-flex jc-between">
        <img src={logoRojo} alt="peopleBig" />
        <div className="d-flex ai-center">
          <span className="fw-600 fs-12 only-desk">¡Compra por este medio!</span>
          <img src={phone} alt="phone" style={{marginLeft: '20px'}}/>
          <a href="tel:(01)4116001" style={{textDecoration:'none'}}><span className="fw-700 fs-18 c-03050F">(01) 411 6001</span></a>
          
        </div>
      </div>
    </div>
  )
}
