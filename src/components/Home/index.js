import React from 'react';
import {connect} from 'react-redux';
import {fetchQuests} from '../../core/actions';

class Home extends React.Component {
  componentDidMount() {
    let {dispatch} =this.props;
    dispatch(fetchQuests());
  }

  render() {
    let {list} = this.props;

    return (<div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            list
          })
        })}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {list: state.quests}
}


export default connect(mapStateToProps)(Home)
