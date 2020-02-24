import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

class Manipulator extends Component {

  constructor(props) {
    super(props)

    this.emitter = this.props.emitter

    this.state = {

    }
  }


  render() {
    return (
      <div className="manipulator">
        <Fab color="primary" aria-label="CenterFocusWeak">
          <CenterFocusWeakIcon />
        </Fab>
      </div>
    );
  }
}

export default Manipulator