import React, { useState } from "react";
import { Quiz } from "..";
import "./home.css";
const Home = (props) => {
  const [isOpen, isShow] = useState(false);
  let btnShow = isOpen ? "none" : "block";

  return (
    <div className="container">
      <section className="button" style={{ display: btnShow }}>
        <div className="start__Menu">
          <label htmlFor="inp" className="inp">
            <input type="text" id="inp" placeholder="&nbsp;" />
            <span className="label">name</span>
            <span className="focus-bg"></span>
          </label>
          <button className="raise btn" onClick={() => isShow(!isOpen)}>
            Start
          </button>
        </div>
      </section>
      {isOpen && <Quiz />}
    </div>
  );
};

export default Home;
