import React, { useState } from 'react';
import '../App.css';
import Title from "./components/Title.js";
import Counting from "./components/Counting.js";
import Digits from "./components/Digits.js";
import Adding from "./components/Adding.js";
import AddingMore from "./components/AddingMore.js";
import Cascade from "./components/Cascade.js";
import Operations from "./components/Operations.js";
import Inverses from "./components/Inverses.js";
import HalfCircle from "./components/HalfCircle.js";
import HalfCircleMore from "./components/HalfCircleMore.js";
import Finish from "./components/Finish.js";

function Math() {
    const [mathCount, setMath] = useState(0);
    
    return (
        <div className="App">
            <header className="App-header">
            {mathCount === 0 && <Title mathCount = {mathCount} setMath = {setMath}/>}
            {mathCount === 1 && <Counting mathCount = {mathCount} setMath = {setMath}/>}
            {mathCount === 2 && <Digits mathCount = {mathCount} setMath = {setMath}/>}
            {mathCount === 3 && <Adding mathCount = {mathCount} setMath = {setMath}/>}
            {mathCount === 4 && <AddingMore />}
            {mathCount === 5 && <Cascade />}
            {mathCount === 6 && <Operations />}
            {mathCount === 7 && <Inverses />}
            {mathCount === 8 && <HalfCircle />}
            {mathCount === 9 && <HalfCircleMore />}
            {mathCount >= 10 && <Finish />}
            <div className="button-container">
            {mathCount !== 0 && <button className="button_slide slide_left" onClick={() => setMath(mathCount - 1)}>BACK</button>}
            {mathCount !== 10 && <button className="button_slide slide_left" onClick={() => setMath(mathCount + 1)}>NEXT</button>}
            </div>
            </header>
        </div>
    );
  }
  
  export default Math;