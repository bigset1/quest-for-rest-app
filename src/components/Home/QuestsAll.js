import React from 'react';
import Paper from 'material-ui/Paper';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Link from 'react-router/lib/Link';

import QuestGrid from '../QuestGrid';
import Subheader from 'material-ui/Subheader';


const tilesData = [
  {
    id: 10,
    name: 'Breakfast',
    pictureUrl: `http://loremflickr.com/g/320/200/paris?random=${10}`
  },
  {
    id: 11,
    name: 'Tasty burger',
    pictureUrl: `http://loremflickr.com/g/320/200/paris?random=${11}`
  },
  {
    id: 12,
    name: 'Camera',
    pictureUrl: `http://loremflickr.com/g/320/200/paris?random=${12}`
  },
  {
    id: 13,
    name: 'Morning',
    pictureUrl: `http://loremflickr.com/g/320/200/paris?random=${12}`
  }
];


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

const staticList = [
  {
    id: 1,
    name: 'Insta Kiev',
    description: `Kiev. It is one of the most beautiful places in the world. It exites with its picturesque views, ancient buildings and wide roads.
This quest will let you find out more about the hidden magic of this city. Ready, steady, go!`,
    pictureUrl: 'http://loremflickr.com/320/200/paris'
  }, {
    id: 2,
    name: 'Magic Kiev',
    description: `Kiev. It is one of the most beautiful places in the world. It exites with its picturesque views, ancient buildings and wide roads.
This quest will let you find out more about the hidden magic of this city. Ready, steady, go!`,
    pictureUrl: 'http://loremflickr.com/g/320/200/paris'
  },
  {
    id: 3,
    name: 'Insta Kiev',
    description: `Kiev. It is one of the most beautiful places in the world. It exites with its picturesque views, ancient buildings and wide roads.
This quest will let you find out more about the hidden magic of this city. Ready, steady, go!`,
    pictureUrl: 'http://loremflickr.com/320/200?random=3'
  }, {
    id: 4,
    name: 'Magic Kiev',
    description: `Kiev. It is one of the most beautiful places in the world. It exites with its picturesque views, ancient buildings and wide roads.
This quest will let you find out more about the hidden magic of this city. Ready, steady, go!`,
    pictureUrl: 'http://loremflickr.com/320/200?random=5'
  }
];

const QuestCard = ({quest})=> {
  return <Paper style={paper}>
    <Card style={style}>
      <CardMedia overlay={<CardTitle title={quest.name}/>}>
        <img src={quest.pictureUrl}/>
      </CardMedia>
      <CardText>
        {quest.description}
      </CardText>
      <CardActions>
        <Link to="/"><FlatButton label="Start"/></Link>
      </CardActions>
    </Card>
  </Paper>
}

export default class extends React.Component {
  render() {
    let {list} = this.props;

    return (
      <div>
        <QuestGrid title="Recommended for you" list={[...list, ...tilesData].slice(0, 4)}/>
        <Subheader>Recently added</Subheader>
        {[...list, ...staticList].slice(0, 4).map((g, i)=> {
          return <QuestCard key={i} quest={g}/>
        })}
      </div>
    )
  }
}
