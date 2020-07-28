import React, { Component } from "react";
import List from './components/list/list';

import './App.css'

class App extends Component {
  render() {

    return (
        <div className="main-div">
          <List/>
        </div>
    )
  }
}

export default App;
