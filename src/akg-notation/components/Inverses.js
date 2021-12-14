import React, { useState } from 'react';
import '../Math.css';
import minus from '../svgs/minus.svg';
import divide from '../svgs/divide.svg';
import expinv from '../svgs/expinv.svg';

function Inverses() {    
    return (
        <div>
            <h2>INVERSES</h2>
            <h3 className="numContainer">Inverses are marked by a center dot. But we have a problem! Exponentiation is non-commutative, so it has two inverses (root and log).</h3>
            <div className="num-container">
                <img src = {minus} />
                <img src = {divide} />
                <img src = {expinv} />
            </div>
            <div className="num-container">
                <p>MINUS</p>
                <p>DIVIDE</p>
                <p>???</p>
            </div>
        </div>
    )
  }
  
  export default Inverses;