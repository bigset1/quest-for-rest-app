import React, {PropTypes} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './main.css';
import Header from './Header';
import Footer from './Footer';

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
    return <div>
      <Header/>
      {this.props.children}
      <Footer/>
    </div>
  }

}

export default App;
