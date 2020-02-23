import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import './App.css';

import Viewer from "./Viewer"

class App extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Viewer />
      </div>
    )
  }
}

export default App;
