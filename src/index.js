import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './apple-test/Test';
import Main from './App';
import Math from './akg-notation/Math';
import About from './apple-test/components/About';
import Map from './map-photos/Map';
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/index.html" element={<App />} />
        <Route exact path="/apple-test" element={<Test />} />
        <Route exact path="/apple-test/about" element={<About />} />
        <Route exact path="/akg-notation" element={<Math />} />
        <Route exact path="/itinerary-planner" element={<Map />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();