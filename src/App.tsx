import React from "react";
import "./App.css";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="App">
      <h1>Deploy by Vercel</h1>
      <p> Easy and simple</p>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}

export default App;
