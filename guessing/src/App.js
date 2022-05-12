import "./App.css";
import React, { useState } from "react";
function App() {
  let [attempt, setAttempt] = useState(6);
  let [once, setOnce] = useState(1);

  let [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  let [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(false);
  if (once === 1) {
    setAnswer(Math.floor(Math.random() * 100) + 1);
    setOnce(0);
  }
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Playball&family=Press+Start+2P&family=Sanchez&display=swap');
        @import url('http://fonts.cdnfonts.com/css/pf-arma-five');
      </style>
      {toggle3 ? (
        <div>
          <h1>Everything in the universe is made of atoms!</h1>
          <h2>
            Guess the number of quadrillion vigintillion atoms in our beloved
            milky way galaxy!
          </h2>
          <form>
            <label>
              Guess atoms:
              <input
                onChange={(event) => setNumber(event.target.value)}
                placeholder="1-100"
                type="text"
                id="guesser"
                pattern="[1-100]*"
              />
            </label>
            (
            <button
              onClick={() => {
                console.log(answer);
                console.log(number);
                setToggle(true);
                if (number == answer) {
                  setToggle(false);
                  setToggle2(true);
                  setToggle3(false);
                }
                if (attempt <= 6 && attempt >= 1) {
                  attempt = attempt - 1;
                  setAttempt(attempt);
                }
                if (attempt === 0) {
                  setToggle4(true);
                  setToggle3(false);
                }
              }}
              type="button"
              id="match"
            >
              Match
            </button>
            ){toggle ? <h2>You have only {attempt} attempts left</h2> : null}
          </form>
          )
        </div>
      ) : null}

      {toggle2 ? (
        <div>
          <h3>You WIN the number is {answer}</h3>
          <button
            onClick={() => window.location.reload()}
            type="button"
            id="replay"
          >
            Play again
          </button>
        </div>
      ) : null}
      {toggle4 ? (
        <div>
          <h3>
            You LOSE the number is {answer} and your input was {number}
          </h3>
          <button
            onClick={() => window.location.reload()}
            type="button"
            id="replay"
          >
            Play again
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
