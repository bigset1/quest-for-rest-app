import React from 'react';
import TextField from 'material-ui/TextField';

export default class extends React.Component {
  componentDidMount() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);

    function onMapClick(e) {
      L.marker(e.latlng).addTo(mymap);
      L.circle(e.latlng, 50).addTo(mymap);
    }

    mymap.on('click', onMapClick);
  }

  render() {
    return <div>
      <div id="mapid" style={{width: '400px', height: '400px'}}></div>
    </div>
  }
}
