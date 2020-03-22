import React, { Component } from 'react'
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';


export class BottomNav extends Component {

  constructor(props) {
    super(props)

    this.emitter = this.props.emitter

    this.state = {
      active: 0
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);

  }

  handleNext() {
    this.setState({
      active: this.state.active + 1
    })
    switch (this.state.active) {
      case 0:
        this.emitter.emit('what_is_kaendoki')
        break
      case 1:
        this.emitter.emit('feature_of_kaendoki')
        break
      case 2:
        this.emitter.emit('differences_of_kaendoki')
        break
      case 3:
        this.emitter.emit('joumon_culture')
        break
      case 4:
        this.emitter.emit('climate_of_joumon')
        break
      case 5:
        this.emitter.emit('village_of_joumon')
        break
      case 6:
        this.emitter.emit('art_and_kaendoki')
        break
      case 7:
        this.emitter.emit('XVL')
        window.open( "http://karen.ecd.media.teu.ac.jp/3ds2xvl/c-1T7punvPgFXnnPU/index.html", "_blank" ) ;
        break
      default:
        break
    }
  }

  handleBack() {
    this.setState({
      active: this.state.active - 1
    })
    switch (this.state.active) {
      case 1:
        this.emitter.emit('default')
        break
      case 2:
        this.emitter.emit('what_is_kaendoki')
        break
      case 3:
        this.emitter.emit('feature_of_kaendoki')
        break
      case 4:
        this.emitter.emit('differences_of_kaendoki')
        break
      case 5:
        this.emitter.emit('joumon_culture')
        break
      case 6:
        this.emitter.emit('climate_of_joumon')
        break
      case 7:
        this.emitter.emit('village_of_joumon')
        break
      case 8:
        this.emitter.emit('art_and_kaendoki')
        break
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <MobileStepper
          variant="dots"
          steps={9}
          position="static"
          activeStep={this.state.active}
          nextButton={
            <Button onClick={this.handleNext} disabled={this.state.active === 8}>
              Next
            </Button>
          }
          backButton={
            <Button onClick={this.handleBack} disabled={this.state.active === 0}>
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default BottomNav