function Inputs(props) {
  return (
    <div className="btn__answerCounter">
      {props.list.check.map((l, index) => {
        return (
          <div key={index}>
            <label className="rad-label">
              <input
                type="radio"
                className="rad-input"
                name={"rad"}
                value={props.list.id}
                checked={l}
                onChange={props.getAnswer}
                id={index}
              />
              <div className="rad-design"></div>
              <div className="rad-text">{props.list.answer[index]}</div>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Inputs;
