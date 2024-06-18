import React from 'react'
import logoBlanco from '../assets/logo-blanco.png'
import '../styles/footer.scss'

export default function Footer() {
  return (
    <div className="footer">
        <div className="page-wrapper d-flex jc-between">
            <img src={logoBlanco} alt="peopleBig" />
            <div className="d-flex ai-center">
            <span className="fw-400 fs-14">© 2023 RIMAC Seguros y Reaseguros.</span>
            </div>
        </div>
    </div>
  )
}
