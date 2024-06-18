import React, { useState, useEffect } from 'react';
import '../styles/plans.scss'
import Plans from './Plans';
import Summary from './Summary';

export default function Home() {
    const [isVisible, setIsVisible] = useState(true);
  
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  return (
    <div className="ta-center">
        <div className="steeps jc-center d-flex ai-center bg-EDEFFC">
            <div className={isVisible === true ? "steep active ai-center d-flex" : "steep ai-center d-flex"}>
                <span className="number-steep">1</span>
                <span>Planes y coberturas</span>
            </div>
            <p className="c-7981B2">- - - - - </p>
            <div className={isVisible === false ? "steep active ai-center d-flex" : "steep ai-center d-flex"}>
                <span className="number-steep">2</span>
                <span>Resumen</span>
            </div>
        </div>
        <div className="">
            {isVisible && 
                <Plans onShowSummary={toggleVisibility}/>
            }
            {!isVisible && 
                <Summary onShowSummary={toggleVisibility}/>
            }
        </div>
    </div>
  )
}
