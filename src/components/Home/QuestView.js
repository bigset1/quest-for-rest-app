import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class extends React.Component {
  render() {
    let {params, list} = this.props;
    let currentQuest = list.find(q=>q.id == params.id);

    return <Card>
      <CardMedia overlay={<CardTitle title={currentQuest.name}/>}>
        <img src={currentQuest.pictureUrl}/>
      </CardMedia>
      <CardText>
        {currentQuest.description}
      </CardText>
    </Card>
  }
}
