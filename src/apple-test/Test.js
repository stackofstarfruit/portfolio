import './Test.css';
import React, { useState } from 'react';

import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

function Test() {
  const [count, setCount] = useState(0);
  const [skin, setSkin] = useState(0);
  const [flesh, setFlesh] = useState(0);
  const [core, setCore] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        {count === 0 && <Start count = {count} setCount = {setCount}/>}
        {count >= 1 && count < 10 && <Quiz count = {count} setCount = {setCount} skin = {skin} setSkin = {setSkin} flesh = {flesh} setFlesh = {setFlesh} core = {core} setCore = {setCore}/>}
        {count >= 10 && <Result count = {count} setCount = {setCount} skin = {skin} setSkin = {setSkin} flesh = {flesh} setFlesh = {setFlesh} core = {core} setCore = {setCore}/>}
      </header>
    </div>
  );
}

export default Test;