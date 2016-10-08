import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Badge from 'material-ui/Badge';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1024,
    height: "100%",
    overflowY: 'auto',
  },
  paper: {
    height: 400,
    width: "100%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  }
}


export default class Statistic extends React.Component{
  render(){
    return(
      <div>
        <GridList
          cols={2}
          padding={2}
          cellHeight={250}
          >
          <GridTile>
            <Paper style={styles.paper} zDepth={1}></Paper>
          </GridTile>
          <GridTile>
            <Paper style={styles.paper} zDepth={1}></Paper>
          </GridTile>
        </GridList>
      </div>
    )
  }
}
