import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { morning: 0, noon: 0, night: 0, MO: 0 };
  addMorning = (event) => {
    this.setState({ morning: event.target.value });
  };
  addNoon = (event) => {
    this.setState({ noon: event.target.value });
  };
  addNight = (event) => {
    this.setState({ night: event.target.value });
  };

  mesosOros = (event, morning, noon, night) => {
    let sum = Number(morning) + Number(noon) + Number(night);
    let mesos = sum / 3.0;
    this.setState({ MO: mesos });
  };
  render() {
    return (
      <body className="background">
        <div className="App">
          <div>
            <h1>Άσκηση 4 (Θερμοκρασίες)</h1>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Πρωινή Θερμοκρασία"
              onChange={this.addMorning}
              type="number"
            ></input>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Μεσημεριανή Θερμοκρασία"
              onChange={this.addNoon}
              type="number"
            ></input>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Βραδινή Θερμοκρασία"
              onChange={this.addNight}
              type="number"
            ></input>
          </div>
          <div>
            <button
              className="koubi"
              onClick={(e) =>
                this.mesosOros(
                  e,
                  this.state.morning,
                  this.state.noon,
                  this.state.night
                )
              }
            >
              {" "}
              Πατήστε για αποτέλεσμα
            </button>
          </div>
          <div>
            <p>Ο μέσος όρος είναι: {this.state.MO} C° </p>
          </div>
          <div>
            <p className="keno"> ‎‎</p>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
