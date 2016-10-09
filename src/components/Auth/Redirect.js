import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../core/actions';
import {browserHistory} from 'react-router';

class Redirect extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidMount() {
    let data = ((s)=> {
      var pairs = s.slice(1).split('&');

      var result = {};
      pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
      });

      return JSON.parse(JSON.stringify(result));
    })(location.hash);
    let {dispatch} = this.props;

    dispatch(login('vk', data.access_token, data.user_id));
    //debugger;
    this.context.router.push("/");
    //browserHistory.push("/");
  }

  render() {
    return <span/>
  }
}

export default connect()(Redirect);
