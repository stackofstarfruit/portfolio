import React, { useState } from 'react';
import '../Math.css';
import plus from '../svgs/plus.svg';
import times from '../svgs/times.svg';
import exp from '../svgs/exp.svg';

function Operations() {    
    return (
        <div>
            <h2>OPERATIONS</h2>
            <h3>We constructed the operations in a similar way: rotate the central line 45 degrees to get the repeated form of an operation.</h3>
            <div className="num-container">
                <img src = {plus} />
                <img src = {times} />
                <img src = {exp} />
            </div>
            <div className="num-container">
                <p>PLUS</p>
                <p>TIMES</p>
                <p>EXPONENT</p>
            </div>
        </div>
    )
  }
  
  export default Operations;