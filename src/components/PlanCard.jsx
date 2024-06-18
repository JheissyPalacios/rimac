import React from 'react'
import planHome from '../assets/plan-home.svg'
import planHospital from '../assets/plan-hospital.svg'

export default function PlanCard(props) {
    const {name, description, price, type, onShowSummary} = props
    const icon = name.includes("Clínica") ? planHospital : planHome;
    var priceDiscount = price;

    if (type === 'Para alguien más') {
        priceDiscount = priceDiscount - (priceDiscount * 0.05)
    }
    const savePlanData = (name, price, type) => {
        onShowSummary()
        localStorage.setItem("namePlan", name);
        localStorage.setItem("price", price);
    }
    
  return (
    <div className="container-box ta-left d-flex fd-column jc-between" key={name}>
        <div className="d-flex jc-between ai-start line">
            <div>
                <h2 className="fw-900 fs-24">{name}</h2>
                <span className="fw-900 fs-12 c-7981B2 tt-uppercase">Costo del plan</span>
                <p className="fw-900 fs-20">${priceDiscount} al mes</p>
            </div>
            <img src={icon} alt={icon} style={{marginTop: '0.83em'}} />
        </div>
        <ul>
            {description.map((desc, index) => (
                <li className="fw-400 fs-16 mb-20 lh-24" key={index}>{desc}</li>
            ))}
        </ul>
        <button className="login-button bg-FF1C44 c-poniter" onClick={() => savePlanData(name, priceDiscount, type)} >
            <span className="fw-700 fs-20 c-FFFFFF">Seleccionar Plan</span>
        </button>
    </div>
  )
}
