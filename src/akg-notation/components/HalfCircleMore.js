import React, { useState } from 'react';
import '../Math.css';
import plus from '../svgs/plus.svg';
import halfplus from '../svgs/halfplus.svg';

function HalfCircleMore() {    
    return (
        <div>
            <h2>HALF-CIRCLE NOTATION (CONT)</h2>
            <h3 className="numContainer">Half-circle notation also makes certain aspects of a 
                mathematical environment more apparent. For example, 
                you would know if you were in a commutative space 
                based on if addition was a full circle or a 
                half circle.</h3>
            <div className="num-container">
                <img height="70" src={plus} />
                <img height="70" src={halfplus} /> 
            </div>
            <div className="num-container">
                <p>Normal Addition (Commutative)</p>
                <p>Half Addition (Non-Commutative)</p>
            </div>
        </div>
    )
  }
  
  export default HalfCircleMore;