import React from 'react';
import {Panel} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Tasks from './Tasks';
import Subheader from 'material-ui/Subheader';

export default class CreateQuest extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e)
  }

  render() {
    return (
      <Panel>
        <form onSubmit={this.onSubmit.bind(this)} style={{width: '800px', margin: '0 auto'}}>
          <Subheader>Create your own quest</Subheader>

          <TextField hintText="Quest name" fullWidth={true}/>
          <TextField hintText="Description" fullWidth={true} multiLine={true} rows={2} rowsMax={10}/>
          <Tasks tasks={this.state.tasks}/>
          <Divider />
        </form>
      </Panel>
    )
  }
}
