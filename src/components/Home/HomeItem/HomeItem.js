import React from 'react';
import {Row, Col, Button,Image} from 'react-bootstrap';

export default class HomeItem extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Col md={6}>
            <Image src="" responsive />
            <p>description</p>
            <Button>Take place...</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
