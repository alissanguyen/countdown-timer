import logo from "./timer.svg";
import "./App.css";
import Form from "./components/Form";
import React from "react";



const ANIMATION = "App-logo"


function App() {
  const [timeLeft, setTimeLeft] = React.useState(0);

  const intervalId = React.useRef(null);

  function countdown(milliseconds) {
    console.log(milliseconds);
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="logo" className={intervalId.current ? ANIMATION : null} alt="logo" />
        <p>Countdown Timer</p>
      </header>
      {(intervalId.current == null) ? (<Form
        onSubmit={(milliseconds) => {
          countdown(milliseconds);
        }}
      />) : null}
      <div>
        <p>Time left: {timeLeft / 1000} </p>
      </div>
    </div>
  );
}

export default App;
