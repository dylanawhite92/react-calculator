import React, { Component } from 'react';
import {Button, Buttons, Display, Logo} from "./components/index"

class App extends Component {

  constructor() {
    super()

    this.state = { 
      operations: [] 
    }
  };

  render() {
    return (
      // <div className="App">
      //   <Display data= {this.state.operations}/>
      // </div>

      <Logo />
    );
  }
}

export default App;
