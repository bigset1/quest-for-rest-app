import React, {PropTypes} from 'react';
import './main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { connect } from 'react-redux';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
};

class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    return <MuiThemeProvider>
      <div>
        <Header/>
        <Container>
          {this.props.children}
        </Container>
        <Footer/>
      </div>
    </MuiThemeProvider>;
  }
}
/*
const mapStateToProps = (state) => {
  return {
    profile: getVisibleTodos(state.profile, state.visibilityFilter)
  }
}*/

export default connect(
  //mapStateToProps,
  //mapDispatchToProps
)(App);
