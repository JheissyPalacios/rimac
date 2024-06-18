import React from 'react'
import back from '../assets/back.svg'
import people from '../assets/people.svg'

export default function Summary({onShowSummary}) {
  const name = localStorage.getItem("name");
  const lastName = localStorage.getItem("lastName");
  const numberPhone = localStorage.getItem("numberPhone");
  const namePlan = localStorage.getItem("namePlan");
  const price = localStorage.getItem("price");
  const numberDoc = localStorage.getItem("numberDoc");
  const document = localStorage.getItem("document");
  return (
    <div className="page-wrapper ta-left">
      <div className="c-poniter d-flex jc-start gap-10 mt-30" onClick={onShowSummary}>
        <img src={back} alt="back" />
        <span className="fw-700 fs-18 c-4F4FFF">Volver</span>
      </div>
      <h1 className="fw-700 fs-40">Resumen del seguro </h1>
      <div className="container-box w-100">
        <p className="fw-900 fs-10 tt-uppercase">Precios calculados para:</p>
        <div className="d-flex gap-10">
          <img src={people} alt="people" />
          <h3>{name} {lastName}</h3>
        </div>
        <p className="fw-700 fs-16">Responsable de pago</p>
        <p className="fw-400 fs-14">{document}: {numberDoc}</p>
        <p className="mb-20 fw-400 fs-14">Celular: {numberPhone}</p>
        <p className="fw-700 fs-16">Plan elegido</p>
        <p className="fw-400 fs-14">{namePlan}</p>
        <p className="fw-400 fs-14">Costo del Plan: ${price} al mes</p>
      </div>
    </div>
  )
}
