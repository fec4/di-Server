import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';
import GoogleMap from 'google-map-react';
import API from './components/api'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [1, 2, 3],
      markers:[{ lat: 37.7875711, lng: -122.3966922 , des:'Hi Adam',name:'Yo'}, { lat: 38.7875711, lng: -122.3966922 ,des:'the hooks feature is amazing',name:'whatsup'}]

    }

  }
  render() {

    return (
      <div>
        hihihihih
        <br></br>
        Hello world
        <br></br>
        <Map
          isMarkerShown={true}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            API
          }`}
          markers={this.state.markers}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100vh",width:'100vh'}} />}
          mapElement={<div style={{ height: `100%` }} />}

/>

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));