import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
};

export default ({list, title})=>(<GridList cols={4} cellHeight={180} style={styles.gridList}>
  <Subheader>{title}</Subheader>

  {list.map((tile, index) => (
    <GridTile key={index} title={tile.name} actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
      <img src={tile.pictureUrl}/>
    </GridTile>
  ))}
</GridList>)
