import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {vkAuth} from '../../config';
import {connect} from 'react-redux';
import {login} from '../../core/actions';

const style = {
  width: '300px',
  textAlign: 'center',
  height: '400px',
  margin: '0 auto'
}, input = {
  display: 'block',
  width: '100%'
};

export default connect()(class extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
  }

  changeHandler(field, e, value) {
    this.setState({
      [field]: value
    })
  }

  submit = (e)=> {
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(login('', this.state.login, this.state.password))
  }

  tapHandler = (e)=> {
    e.preventDefault();
    window.location.replace(vkAuth(`${window.location.origin}/auth/redirect`));
  }

  render() {
    let {login, password} = this.state;

    return <form onSubmit={this.submit} style={style}>
      <TextField style={input} value={login} onChange={this.changeHandler.bind(this, 'login')}
                 floatingLabelText="Login"/>
      <TextField type="password" style={input} value={password} onChange={this.changeHandler.bind(this, 'password')}
                 floatingLabelText="Password"/>
      <RaisedButton primary style={input} type="submit">LOGIN</RaisedButton>
      <Divider style={{margin: '10px 0'}}/>
      <RaisedButton label="Login with VK" primary={true} onTouchTap={this.tapHandler}/>
    </form>
  }
})
