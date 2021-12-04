import React, { useState } from "react";
import { Quiz } from "..";
import "./home.css";
const Home = (props) => {
  const [isOpen, isShow] = useState(false);
  let btnShow = isOpen ? "none" : "block";

  return (
    <div className="container">
      <section className="button">
        <div className="startBtn">
          <button
            className="raise btn"
            style={{ display: btnShow }}
            onClick={() => isShow(!isOpen)}
          >
            Start
          </button>
        </div>
        {isOpen && <Quiz />}
      </section>
    </div>
  );
};

export default Home;
