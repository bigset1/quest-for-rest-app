import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';

export default class extends React.Component {
  componentDidMount() {
    new QRCode(document.getElementById("qrcode"), {
      width: 100,
      height: 100
    });
  }

  render() {
    return (<div>
      <TextField hintText="Task description" multiLine={true} rows={2} rowsMax={10}/>
      <TextField hintText="Question result"/>
      <div id="qrcode"></div>
    </div>)
  }
}

