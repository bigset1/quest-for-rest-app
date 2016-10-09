import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TaskComponent, {types, getTitle} from './TaskComponent';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';

class TaskStep extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      type: types.text
    }
  }

  changeHandler(field, e, value) {
    this.setState({
      [field]: value
    })
  }

  handleChange = (event, index, type) => this.setState({type});

  render() {
    let {title, description, type} = this.state;
    let {step, activate, ...otherProps} = this.props;
    let Component = TaskComponent(type);
    return <Step {...otherProps}>
      <StepButton onTouchTap={() => activate(otherProps.index)}>
        {title || "Unnamed task"}
      </StepButton>
      <StepContent>
        <TextField floatingLabelText="Task name" value={title} onChange={this.changeHandler.bind(this, 'title')}/>
        <SelectField value={type} onChange={this.handleChange}>
          {Object.entries(types).map(([key,value])=> {
            return <MenuItem key={key} value={value} primaryText={getTitle(value)}/>
          })}
        </SelectField>
        <Divider/>
        <Component/>
      </StepContent>
    </Step>
  }
}


export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      steps: [{}, {}, {}],
      stepIndex: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.activateStep = this.activateStep.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  activateStep(stepIndex) {
    this.setState({stepIndex})
  }

  render() {
    const {steps, stepIndex} = this.state;

    return <Stepper activeStep={stepIndex} orientation="vertical" linear={false} style={{marginBottom: '10px'}}>
      {steps.map((step, index)=> {
        return <TaskStep key={index} step={step} activate={this.activateStep}/>
      })}
    </Stepper>
  }
}
