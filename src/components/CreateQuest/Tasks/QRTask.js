import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';

var qrCode = require('qrcode-npm');

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  onChange = (e, value)=> {
    this.setState({
      text: value
    })
  }

  componentDidMount() {
  }

  componentDidUpdate() {

  }

  render() {
    var qr = qrCode.qrcode(5, 'M');
    qr.addData(this.state.text);
    qr.make();

    let img = qr.createImgTag(5);    // creates an <img> tag as text

    return (<div>
      <TextField hintText="Task description" multiLine={true} rows={2} rowsMax={10}/>
      <TextField hintText="Question result" value={this.state.text} onChange={this.onChange}/>
      <div id="qrcode" dangerouslySetInnerHTML={{__html: img}}/>
    </div>)
  }
}

