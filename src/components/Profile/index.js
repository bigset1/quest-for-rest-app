import React from 'react';
import QuestGrid from '../QuestGrid';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  avatarImg: {
    marginTop: -100,
    marginLeft: 80,
  }
};


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

export default class Profile extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <QuestGrid list={tilesData} title="Already completed"/>
      </div>
    )
  }
}
