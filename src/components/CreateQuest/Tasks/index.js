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

const _title = (index, type) =>(`Task ${index + 1} (${type})`);

class TaskStep extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      type: types.text
    }
  }

  changeHandler(field, e, value) {
    this.setState({
      [field]: value
    })
  }

  handleChange = (event, index, type) => {
    event.stopPropagation();
    this.setState({type});
  }

  render() {
    let {title, description, type} = this.state;
    let {step, activate, ...otherProps} = this.props;
    let Component = TaskComponent(type);
    return <Step {...otherProps}>
      <StepButton onTouchTap={() => activate(otherProps.index)}>
        {_title(otherProps.index, type)}
      </StepButton>
      <StepContent>
        <SelectField value={type} onChange={this.handleChange}>
          {Object.entries(types).map(([key,value])=> {
            return <MenuItem key={key} value={value} primaryText={getTitle(value)}/>
          })}
        </SelectField>
        <TextField hintText="Task description" multiLine={true} fullWidth={true} width={600} rows={2} rowsMax={10}/>
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
    this.activateStep = this.activateStep.bind(this);
  }

  activateStep(stepIndex) {
    if (this.state.stepIndex == stepIndex)
      stepIndex = null;

    this.setState({stepIndex})
  }

  createStep() {
    this.setState({
      steps: [...this.state.steps, {}],
      stepIndex: this.state.steps.length
    });
  }

  render() {
    const {steps, stepIndex} = this.state;

    return <div>
      <Stepper activeStep={stepIndex} orientation="vertical" linear={false} style={{marginBottom: '10px'}}>
        {steps.map((step, index)=> {
          return <TaskStep key={index} step={step} activate={this.activateStep}/>
        })}
        <Step>
          <StepButton onTouchTap={this.createStep.bind(this)}>
            {"Add more task"}
          </StepButton>
        </Step>
      </Stepper>
      <RaisedButton label={"Create quest"} primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
      />
    </div>
  }
}
