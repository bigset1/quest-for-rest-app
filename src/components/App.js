import React, {PropTypes} from 'react';
import './main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
};

class App extends React.Component {

  static propTypes = {
    //context: PropTypes.shape(ContextType).isRequired,
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

export default App;
