import React, { Component } from "react";
import {EventEmitter} from 'fbemitter'
import './App.css';



import Viewer from "./Viewer"
import BottomNav from "./BottomNav"
import TopNav from "./TopNav";
import TategakiCard from "./TategakiCard";
import Manipulator from "./Manipulator";

class App extends Component {

  constructor(props) {
    super(props)
    this.emitter = new EventEmitter()
  }

  render() {
    return (
      <div style={{position: "relative"}}>
        <TopNav emitter={this.emitter} />
        <Viewer emitter={this.emitter} />
        <BottomNav emitter={this.emitter} />
        <TategakiCard emitter={this.emitter} />
        {/* <Manipulator emitter={this.emitter} /> */}
      </div>
    )
  }
}

export default App;
