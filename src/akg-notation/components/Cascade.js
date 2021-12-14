import React, { useState } from 'react';
import one from '../svgs/one.svg';
import specialone from '../svgs/specialone.svg';
import seven from '../svgs/seven.svg';
import six from '../svgs/six.svg';
import four from '../svgs/four.svg';
import '../Math.css';

function Cascade() {    
    const [oneAdd, setOne] = useState(0);
    const [twoAdd, setTwo] = useState(0);
    const [sixAdd, setSix] = useState("disappear");
    function addThem() {
        setOne("one-slide");
        setTwo("two-slide");
        setTimeout(function() {
            setOne("disappear");
            setTwo("disappear");
        }, 4000);
        setTimeout(function() {
            setSix(0);            
        }, 6000);
        setTimeout(function() {
            setSix(1);            
        }, 8000);
    }

    return(
    <div>
        <h2>ADDING CASCADE (advanced)</h2>
        <h3>IF multiple rotations are necessary, we get a "cascade" during addition.</h3>
        <div className="num-container"  onClick = {addThem}>
            <img alt="seven" className={oneAdd} src={seven}/>
            {/* {oneAdd === 'one-slide' && <img alt="six" className={sixAdd} src={three}/>} */}
            {/* after that, do opacity change and throw six in*/}
            {oneAdd === "disappear" && sixAdd != 1 && <img alt="four" className="special-six" src={four}/>}
            {oneAdd === "disappear" && sixAdd != 0 && sixAdd != 1 && <img alt="six" className="special-six" src={six}/>}
            {oneAdd === "disappear" && <img alt="one" className="rotate-cascade" src={specialone}/>}
            <img alt="one" className={twoAdd} src={one}/>
            
        </div>
        <div className="num-container">
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>7</p>}
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>+</p>}
            {oneAdd === "disappear" && <p>8</p>}
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>1</p>}
        </div>
    </div>)
  }
  
  export default Cascade;