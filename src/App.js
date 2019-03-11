import React, { Component } from 'react';
import "./App.css"
import { Button, Input, ClearButton } from "./components/index"
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  };

  // Concatenate input state with clicked button
  handleInput = val => {
    this.setState({ input: this.state.input + val });
  };

  // Event handler for completing arithmetic operations using mathjs
  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });  
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}/>
          <div className="row">
            <Button handleClick={this.handleInput}>7</Button>
            <Button handleClick={this.handleInput}>8</Button>
            <Button handleClick={this.handleInput}>9</Button>
            <Button handleClick={this.handleInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>4</Button>
            <Button handleClick={this.handleInput}>5</Button>
            <Button handleClick={this.handleInput}>6</Button>
            <Button handleClick={this.handleInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>1</Button>
            <Button handleClick={this.handleInput}>2</Button>
            <Button handleClick={this.handleInput}>3</Button>
            <Button handleClick={this.handleInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>.</Button>
            <Button handleClick={this.handleInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
