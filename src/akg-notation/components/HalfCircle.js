import React, { useState } from 'react';
import '../Math.css';
import minus from '../svgs/minus.svg';
import exp from '../svgs/exp.svg';
import root from '../svgs/root.svg';
import log from '../svgs/log.svg';

function HalfCircle() {    
    return (
        <div>
            <h2>SOLUTION: HALF-CIRCLE NOTATION</h2>
            <h3 className="numContainer">If we use half-circles to mark non-commutative operations, then this allows us to express inverses with more freedom.</h3>
            <div className="num-container">
                4<img height="70" src={exp} />2 = 16, 
                16<img height="70" src={root} />2 = 4, 
                16<img height="70" src = {log} />4 = 2
            </div>
            <div className="num-container">
                <p>4 <sup>2</sup> = 16,</p>
                <p>&#8730;16 = 4,</p>
                <p>log <sub>4</sub> 16 = 2</p>
            </div>
        </div>
    )
  }
  
  export default HalfCircle;