import logo from "./logo.svg";
import "./App.css";
import image from "./assets/midoriya.png";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Hamza Ayechi",
      bio: "Student at Isitcom Hammem-Aousse and Go My Code student",

      profession: "Futur Web Developer ",
      show: true,
      counter: 0,
    };
  }
  show = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount = () => {
    this.myint = setInterval(() => {
      this.setState((pstate) => ({
        counter: pstate.counter + 1,
      }));
    }, 1000);
  };
  render() {
    return (
      <div>
        {this.state.show ? (
          <div>
            <h1>{this.state.fullName}</h1>

            <h2>{this.state.bio}</h2>
            <h2>{this.state.profession}</h2>
            <img src={image} width={100} height={100} />
          </div>
        ) : null}
        <button className="btn" onClick={this.show}>
          Click me{" "}
        </button>
        <p>Counter : {this.state.counter}</p>
      </div>
    );
  }
}
export default App;
