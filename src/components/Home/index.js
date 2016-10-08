import React from 'react';
import Paper from 'material-ui/Paper';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  width: "100%",
  display: "inline-block"
};

const paper = {
  width: "45%",
  margin: "2%",
  textAlign: 'center',
  display: 'inline-block',
};

const staticList = [1, 2, 3, 4, 5, 6];

const QuestCard = ()=> {
  return <Paper style={paper}>
    <Card style={style}>
      <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}>
        <img src="http://placekitten.com/400/200"/>
      </CardMedia>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1"/>
        <FlatButton label="Action2"/>
      </CardActions>
    </Card>
  </Paper>
}

export default class Home extends React.Component {

  render() {
    return (
      <div>
        {staticList.map((g, i)=> {
          return <QuestCard key={i}/>
        })}
      </div>
    )
  }
}
