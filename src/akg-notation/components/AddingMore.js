import React, { useState } from 'react';
import three from '../svgs/three.svg';
import six from '../svgs/six.svg';
import '../Math.css';

function AddingMore() {    
    const [oneAdd, setOne] = useState(0);
    const [twoAdd, setTwo] = useState(0);
    const [sixAdd, setSix] = useState(0);
    function addThem() {
        setOne("one-slide");
        setTwo("two-slide");
        setTimeout(function() {
            setOne("disappear");
            setTwo("disappear");
        }, 4000);
    }
    function spinThem() {
        if(sixAdd === "rotate-one") {
            setSix(0);
        } else {
            setSix("rotate-one");
        }
    }
    return(
    <div>
        <h2>ADDING (advanced)</h2>
        <h3>When two lines are in the same place after addition, rotate them!</h3>
        <div className="num-container"  onClick = {addThem}>
            <img alt="three" className={oneAdd} src={three}/>
            {/* {oneAdd === 'one-slide' && <img alt="six" className={sixAdd} src={three}/>} */}
            {/* after that, do opacity change and throw six in*/}
            {oneAdd === "disappear" && <img alt="six" className="rotate-new" src={three}/>}
            <img alt="three" className={twoAdd} src={three}/>
            
        </div>
        <div className="num-container" onClick = {spinThem}>
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>3</p>}
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>+</p>}
            {oneAdd === "disappear" && <p>6</p>}
            {oneAdd !== "one-slide" && oneAdd !== "disappear" && <p>3</p>}
        </div>
    </div>)
  }
  
  export default AddingMore;