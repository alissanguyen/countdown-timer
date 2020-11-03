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
        <label className="time-data">
          {" "}
          Hours
          <input
            type="number"
            min={0}
            onChange={(e) => setHour(Number(e.target.value))}
            value={hour}
          ></input>
        </label>
        <label className="time-data">
          {" "}
          Minutes
          <input
            type="number"
            min={0}
            onChange={(e) => setMinute(+e.target.value)}
            value={minute}
          ></input>
        </label>
        <label className="time-data">
          {" "}
          Seconds
          <input
            type="number"
            min={0}
            onChange={(e) => setSecond(parseInt(e.target.value))}
            value={second}
          ></input>
        </label>
        <div>
          <button type="submit">Start Timer</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
