import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Link from 'react-router/lib/Link';



export default class Footer extends React.Component{
  render(){
    return(
      <div>
        <footer>
           <Row>
              <Col md={6} xsOffset={3}>
                <ul>
                  <li className="li_footer">
                    <Link to={"/"}> Home </Link>
                  </li>
                  <li className="li_footer">
                    <Link to={"/profile"}> Profile </Link>
                  </li>
                  <li className="li_footer">
                    <Link to={"/about"}> About </Link>
                  </li>
                  <li className="li_footer">
                    <Link to={"/support"}> Support </Link>
                  </li>
                </ul>
              </Col>
           </Row>
        </footer>
      </div>
    )
  }
}
