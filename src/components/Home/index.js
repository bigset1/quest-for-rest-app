import React from 'react';

import {Panel, Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return <Panel>
      <Grid>
        <Row>
          <Col md={6}>
            <Thumbnail src="http://placekitten.com/242/200" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col md={6}>
            <Thumbnail src="http://placekitten.com/242/200" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col md={6}>
            <Thumbnail src="http://placekitten.com/242/200" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </Panel>
  }
}
