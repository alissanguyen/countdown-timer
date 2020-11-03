import React from "react";

const Form = (props) => {
  const [hour, setHour] = React.useState("00");
  const [minute, setMinute] = React.useState("00");
  const [second, setSecond] = React.useState("00");

  function startTimer(hour, minute, second) {

  }

  return (
    <React.Fragment>
      <form>
        <label className="time-data">
          {" "}
          Hours
          <input onChange={(e) => setHour(e.target.value)} value={hour}></input>
        </label>
        <label className="time-data">
          {" "}
          Minutes
          <input
            onChange={(e) => setMinute(e.target.value)}
            value={minute}
          ></input>
        </label>
        <label className="time-data">
          {" "}
          Seconds
          <input
            onChange={(e) => setSecond(e.target.value)}
            value={second}
          ></input>
        </label>
        <div>
          <button onClick={() => startTimer()}>Start Timer</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
