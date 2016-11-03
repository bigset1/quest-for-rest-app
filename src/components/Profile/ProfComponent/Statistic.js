import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  }
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    position: 'relative',
    maxWidth: '1024px',
    minWidth: '680px',
    height: "100%",
    overflowY: 'hidden',
  },
  paper: {
    height: 400,
    width: "100%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  }
}


export default class Statistic extends React.Component {
  render() {
    return (
      <div>
        <GridList cols={4} cellHeight={180} style={styles.gridList}>
          <Subheader>Already completed</Subheader>
          {tilesData.map((tile, index) => (
            <GridTile key={index} title={tile.title} subtitle={<span>by <b>{tile.author}</b></span>}
                      actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
              <img src={"http://loremflickr.com/g/320/200/paris"}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
