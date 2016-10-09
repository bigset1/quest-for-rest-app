import React from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {fetchQuests} from '../../core/actions';
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

const QuestCard = ({quest})=> {
  return <Paper style={paper}>
    <Card style={style}>
      <CardMedia overlay={<CardTitle title={quest.name}/>}>
        <img src={quest.pictureUrl}/>
      </CardMedia>
      <CardText>
        {quest.description}
      </CardText>
    </Card>
  </Paper>
}
/*

 <CardActions>
 <FlatButton label="Action1"/>
 <FlatButton label="Action2"/>
 </CardActions>
 */

class Home extends React.Component {
  componentDidMount() {
    let {dispatch} =this.props;
    dispatch(fetchQuests());
  }

  render() {
    let {list} = this.props;
    return (
      <div>
        {list.map((g, i)=> {
          return <QuestCard key={i} queest={g}/>
        })}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  //debugger;
  return {list: state.quests}
}


export default connect(mapStateToProps)(Home)
