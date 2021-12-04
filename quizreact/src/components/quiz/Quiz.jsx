import React, { useState } from "react";
import Inputs from "./inputEl";
import Quest from "../Question/Quest";
import Swal from "sweetalert2";
import "./quiz.css";
import { Home } from "..";
const Quiz = () => {
  let [count, addCount] = useState(0);
  const [Question, setQuestion] = useState(Quest);
  const [resetPage, goHome] = useState(true);
  const generateAnswer = (e) => {
    const { checked, id, value } = e.target;
    let num = parseInt(id);
    setQuestion(() => {
      const arr = Question.map((l, index) => {
        if (l.id === value) {
          l.check[num] = checked;
          l.check.forEach((k, index) => {
            if (index !== num) {
              l.check[index] = !checked;
            }
          });
        }
        return l;
      });
      return arr;
    });
  };
  if (count < 0) {
    count = 0;
  } else if (count >= Question.length) {
    count = Question.length - 1;
  }
  function getId(e) {
    let k = parseInt(e.id);
    addCount(k - 1);
  }
  let btn = Question.map((k, index) => (
    <button
      className="fill"
      key={index}
      id={index + 1}
      onClick={(e) => getId(e.target)}
      style={{ background: "none" }}
    >
      {index + 1}
      <i className="uil uil-arrow-right"></i>
    </button>
  ));
  const questObject = Question.map((e, index) => {
    return (
      <div key={index}>
        {e.quest}
        <div>
          <Inputs list={e} counter={0} getAnswer={generateAnswer} />
        </div>
      </div>
    );
  });
  function resetQuiz() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reset it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const arr = Question.map((element) =>
          element.check.map((el) => (el === true ? (el = false) : (el = false)))
        );
        let resetArr = Question.map((l, index) => {
          l.check = arr[index];
          return l;
        });
        setQuestion(resetArr);
        goHome(!resetPage);
      }
    });
  }
  function Finish() {
    let getFinish = 0;
    Question.map((en, index) =>
      en.check.map((el) => (el === true ? getFinish++ : "none"))
    );
    if (getFinish === Question.length) {
      Swal.fire({
        title: "Finished",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          const arr = Question.map((element) =>
            element.check.map((el) =>
              el === true ? (el = false) : (el = false)
            )
          );
          let resetArr = Question.map((l, index) => {
            l.check = arr[index];
            return l;
          });
          setQuestion(resetArr);
          goHome(!resetPage);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have not completed the quiz!",
      });
    }
  }
  let Show = !resetPage ? "none" : "block";
  return (
    <div className="Menu">
      {!resetPage && <Home />}
      <div className="questPage" style={{ display: Show }}>
        <div className="dropDown">
          <div className="sec-center">
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label className="for-dropdown" htmlFor="dropdown">
              Question <i className="uil uil-arrow-down"></i>
            </label>
            <div className="section-dropdown">{btn}</div>
          </div>
        </div>
        <div className="gpt__Menu">
          <div className="Question">{questObject[count]}</div>
          <div className="controlBtn">
            <section className="control">
              <button className="close btn" onClick={() => addCount(count - 1)}>
                Back
              </button>
              <button className="slide btn" onClick={() => addCount(count + 1)}>
                Next
              </button>
              <button className="pulse btn" onClick={() => resetQuiz()}>
                Reset
              </button>
              <button className="offset btn" onClick={() => Finish()}>
                Finish
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
