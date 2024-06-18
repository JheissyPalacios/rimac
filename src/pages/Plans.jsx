import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import back from '../assets/back.svg'
import '../styles/plans.scss'
import forMe from '../assets/forMe.svg'
import forOther from '../assets/forOther.svg'
import PlanCard from '../components/PlanCard';

export default function Plans({onShowSummary}) {
  const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    const [plans, setPlans] = useState([]);
    const name = localStorage.getItem("name");
    const [forWho, setForWho] = useState('');
    const birthDay = 2024 - localStorage.getItem("birthDay").slice(-4);

  useEffect(() => {
    fetch(`https://rimac-front-end-challenge.netlify.app/api/plans.json`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((response) => {
            const filtered = response.list.filter(plan => plan.age >= birthDay);
            setPlans(filtered);
          })
          .catch((error) => {
            //setLoading(false);
            console.log(error);
          });
  }, []);
    
    const toggleVisibility2 = (x) => {
        setForWho(x)
    };
  return (
    <div className="ta-center">
      <div>
          <div className="page-wrapper">
          <div className="c-poniter d-flex jc-start gap-10 mt-30" onClick={() => navigate("/")}>
            <img src={back} alt="back" />
            <span className="fw-700 fs-18 c-4F4FFF">Volver</span>
          </div>
            <h1 className="fw-700 fs-40">{name} ¿Para quién deseas cotizar?</h1>
            <p className="fw-400 fs-16">Selecciona la opción que se ajuste más a tus necesidades.</p>
            <div className="forWho d-flex jc-center gap-40">
              <div className="container-box ta-left">
                <div className="d-flex jc-end" style={{height: "24px"}}>
                  <input type="radio" name="forWho" onClick={() => toggleVisibility2('Para mí')} />
                </div>
                  <img src={forMe} alt="Para mí" />
                  <h3 className="fw-900 fs-20">Para mí</h3>
                  <p className="fs-12 fw-400 lh-20">Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
              </div>
              <div className="container-box ta-left">
                <div className="d-flex jc-end" style={{height: "24px"}}>
                  <input type="radio" name="forWho" onClick={() => toggleVisibility2('Para alguien más')} />
                </div>
                  <img src={forOther} alt="forOther" />
                  <h3 className="fw-900 fs-20">Para alguien más</h3>
                  <p className="fs-12 fw-400 lh-20">Realiza una cotización para uno de tus familiares o cualquier persona.</p>
              </div>
            </div>
          </div>
            {forWho !== '' && 
              <div className="typePlan d-flex jc-center gap-40 mt-30">
                      {plans.map(plan => (
                          <PlanCard name={plan.name} price={plan.price} description={plan.description} type={forWho} onShowSummary={onShowSummary} />
                      ))}
              </div>
            }
        </div>
    </div>
  )
}
