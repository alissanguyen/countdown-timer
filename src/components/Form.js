import React from "react";

const Form = (props) => {
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  const milliseconds = (hour * 60 * 60 + minute * 60 + second) * 1000;

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(milliseconds);
        }}
      >
        <div className="text-inputs-wrapper">
          <div className="input-wrapper">
            <input
              id="hour-input"
              type="number"
              min={0}
              onChange={(e) => setHour(Number(e.target.value))}
              value={hour}
            ></input>
            <label htmlFor="hour-input" className="time-data">
              Hours
            </label>
          </div>
          <div className="input-wrapper">
            <input
              id="minute-input"
              type="number"
              min={0}
              onChange={(e) => setMinute(+e.target.value)}
              value={minute}
            ></input>
            <label htmlFor="minute-input" className="time-data">
              Minutes
            </label>
          </div>{" "}
          <div className="input-wrapper">
            <input
              id="second-input"
              type="number"
              min={0}
              onChange={(e) => setSecond(parseInt(e.target.value))}
              value={second}
            ></input>
            <label htmlFor="second-input" className="time-data">
              Seconds
            </label>
          </div>
        </div>
        <div>
          <button type="submit">Start Timer</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
