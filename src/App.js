import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import './App.css';

import Viewer from "./Viewer"
import BottomNav from "./BottomNav"
import TopNav from "./TopNav";


class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Viewer />
        <BottomNav />
      </div>
    )
  }
}

export default App;
