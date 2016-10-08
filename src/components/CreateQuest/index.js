import React from 'react';
import {Panel} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Tasks from './Tasks';

export default class CreateQuest extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(e)
  }

  render() {
    return (
      <Panel>
        <form onSubmit={this.onSubmit.bind(this)}>
          <TextField hintText="Quest name"/>
          <Divider />
          <TextField hintText="Description" multiLine={true} rows={2} rowsMax={10}/>
          <Divider />
          <Tasks/>
          <Divider />
        </form>
      </Panel>
    )
  }
}
