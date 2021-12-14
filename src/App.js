import './App.css';
import React, { useState } from 'react';

import Test from './apple-test/Test';
import Main from './Main';
import Math from './akg-notation/Math';
import Map from './map-photos/Map';

function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    
    <div className="App">
      <header className="App-header">
        {count === 0 && <Main count = {count} setCount = {setCount}/>}
        {count === 1 && <Test count = {count} setCount = {setCount}/>}
        {count === 3 && <Math count = {count} setCount = {setCount}/>}
        {count === 4 && <Map count = {count} setCount = {setCount}/>}
        {count !== 0 && <div className="back-button">
        <button className="button_slide slide_left" onClick={() => setCount(0)}>
            Back to Portfolio
        </button></div>}
      </header>
    </div>
  );
}

export default App;
