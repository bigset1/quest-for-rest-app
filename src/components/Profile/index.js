import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar  from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Statistic from './ProfComponent/Statistic';

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
  avatarImg:{
    marginTop: -100,
    marginLeft: 80,
  }
};


const tilesData = [
  {
    img: 'http://placekitten.com/g/1000/200',
    title: 'Pirka',
    author: 'jill111',
    featured: true
  }
];

export default class Profile extends React.Component {
  render() {
    return(
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
            >
            {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              >
              <img src={tile.img} />

              <Avatar style={styles.avatarImg} size={200} src = "http://placekitten.com/g/200/200"/>
              <Statistic/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
