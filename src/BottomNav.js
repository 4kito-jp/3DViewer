import React, { Component } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


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
    if (this.state.active == 0) this.emitter.emit('what_is_kaendoki');
    if (this.state.active == 1) this.emitter.emit('feature_of_kaendoki');

  }

  handleBack() {
    this.setState({
      active: this.state.active - 1
    })
    console.log("back="+this.state.active)
    if (this.state.active == 1) this.emitter.emit('default');
    if (this.state.active == 2) this.emitter.emit('what_is_kaendoki');
  }

  render() {
    return (
      <div>
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={this.state.active}
          nextButton={
            <Button onClick={this.handleNext} disabled={this.state.active == 2}>
              Next
            </Button>
          }
          backButton={
            <Button onClick={this.handleBack} disabled={this.state.active == 0}>
              Back
            </Button>
          }
        />
      </div>
//       variant="dots"
//       steps={3}
//       position="static"
//       activeStep={activeStep}
//       nextButton={
//         <Button onClick={handleNext} disabled={activeStep === 2}>
//           Next
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </Button>
//       }
//       backButton={
//         <Button onClick={handleBack} disabled={activeStep === 0}>
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//           Back
//         </Button>
//       }
    );
  }
}

export default BottomNav


// export default function DotsMobileStepper() {

//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(prevActiveStep => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(prevActiveStep => prevActiveStep - 1);
//   };

//   return (
//     <MobileStepper
//       variant="dots"
//       steps={3}
//       position="static"
//       activeStep={activeStep}
//       nextButton={
//         <Button onClick={handleNext} disabled={activeStep === 2}>
//           Next
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </Button>
//       }
//       backButton={
//         <Button onClick={handleBack} disabled={activeStep === 0}>
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//           Back
//         </Button>
//       }
//     />
//   );
// }
