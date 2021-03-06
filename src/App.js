import logo from "./timer.svg";
import "./App.css";
import Form from "./components/Form";
import React from "react";

const ANIMATION = "App-logo";

function App() {
  const [timeLeft, setTimeLeft] = React.useState(0);

  const intervalId = React.useRef(null);

  function countdown(milliseconds) {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    setTimeLeft(milliseconds);

    intervalId.current = setInterval(
      () =>
        setTimeLeft((timeLeft) => {
          const returnValue = timeLeft - 1000;

          if (returnValue <= 0) {
            // Clear the interval if the countdown is finished
            clearInterval(intervalId.current);
          }

          return Math.max(returnValue, 0);
        }),
      1000
    );
  }

  const hoursLeft = Math.floor(timeLeft / (3600 * 1000));
  const minutesLeft = Math.floor(
    (timeLeft - hoursLeft * 3600 * 1000) / (60 * 1000)
  );
  const secondsLeft =
    (timeLeft - hoursLeft * 3600 * 1000 - minutesLeft * 60 * 1000) / 1000;

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          id="logo"
          className={intervalId.current ? ANIMATION : null}
          alt="logo"
        />
        <h1 className="app-name">Countdown Timer</h1>
      </header>
      <Form
        onSubmit={(milliseconds) => {
          countdown(milliseconds);
        }}
      />

      <div className="counter-data">
        <p className="counter">{hoursLeft} Hours</p>
        <p className="counter">{minutesLeft} Minutes</p>
        <p className="counter">{secondsLeft} Seconds</p>
      </div>
    </div>
  );
}

export default App;
