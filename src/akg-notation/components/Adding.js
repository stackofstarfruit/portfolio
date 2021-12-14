import React, { useState } from 'react';
import one from '../svgs/one.svg';
import two from '../svgs/two.svg';
import '../Math.css';



function Adding({mathCount, setMath}) {
    const [oneAdd, setOne] = useState(0);
    const [twoAdd, setTwo] = useState(0);
    function addThem() {
        if(oneAdd === "one-slide") {
            setOne(0);
            setTwo(0);
        } else {
            setOne("one-slide");
            setTwo("two-slide");
        }
    }

    // ".rotate-one".addEventListener("animationend", function() {
    //     change.innerHTML = "The animation has ended!";
    // });

    return(
    <div>
        <h2>ADDING</h2>
        <h3>To add two numbers, put them on top of each other!</h3>
        <div className="num-container"  onClick = {addThem}>
            <img alt="one" className={oneAdd} src={one}/>
            <img alt="two" className={twoAdd} src={two}/>
        </div>
        <div className="num-container">
            {oneAdd !== "one-slide" && <p>1</p>}
            {oneAdd !== "one-slide" && <p>+</p>}
            {oneAdd === "one-slide" && <p>3</p>}
            {oneAdd !== "one-slide" && <p>2</p>}
            
            {/* <p id='change'>
            This text will change when the animation has ended.
            </p> */}
        </div>
    </div>)
}

export default Adding;