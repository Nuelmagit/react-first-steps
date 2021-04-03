import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import ChartComponent from "./ChartComponent/ChartComponent";

import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: ${(props) => (props.hasError ? "center" : "left")};
  background-color: red;
  @media (min-width: 600px) {
    background-color: blue;
  }

  &:hover {
    background-color: red;
  }
`;

class App extends Component {
  state = { input: "", inputLenght: 0, classesName: ["App"] };

  buildMainClassesArray = (valueLength) => {
    const classes = [...this.state.classesName];
    if (valueLength < 1) {
      const classIndex = classes.findIndex((item) => item === "AppTouched");
      classes.splice(classIndex, 1);
    } else {
      if (!classes.includes("AppTouched")) classes.push("AppTouched");
    }
    return classes;
  };

  changedInputHandler = (event) => {
    this.setState({
      input: event.target.value,
      inputLenght: event.target.value.length,
      classesName: this.buildMainClassesArray(event.target.value.length),
    });
  };

  deleteChar(index) {
    const stringArray = this.state.input.split("");
    stringArray.splice(index, 1);
    this.setState({
      input: stringArray.join(""),
      inputLenght: stringArray.length,
    });
  }

  chartViewSection = () => {
    return this.state.input
      .split("")
      .map((chart, index) => (
        <ChartComponent
          click={() => this.deleteChar(index)}
          chart={chart}
          key={index}
        />
      ));
  };

  render = () => {
    return (
      <StyledDiv hasError={this.state.inputLenght <= 5}>
        <button>Test </button>
        <p>The lenght is: {this.state.input}</p>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changedInputHandler}
        />

        <ValidationComponent hasError={this.state.inputLenght <= 5} />

        {this.chartViewSection()}
      </StyledDiv>
    );
  };
}

export default App;
