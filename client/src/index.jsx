import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';
import GoogleMap from 'google-map-react';
import API from './components/api'
import Place from './components/place.jsx';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showOnlysingleMarker: false,
      singleMarker: [],
      listing: [1, 2, 3],
      markers: [{ lat: 37.7875711, lng: -122.3966922, des: 'Hi Adam', name: 'Yo' }, { lat: 38.7875711, lng: -122.3966922, des: 'the hooks feature is amazing', name: 'whatsup' }],
      markerClickedListing: {}

    }

  }
  componentDidMount() {

  }

  renderSingleMarker(e) {
    console.log(e);
    this.setState({
      showOnlysingleMarker: true,
      singleMarker: e
    })
    console.log('the single marker is ',this.state.singleMarker)
  }
  selectHighLightListing(e) {
    console.log(e);
  }
  render() {

    return (
      <div>
        hihihihih
        <br></br>
        Hello world
        <br></br>
        <div className='MapContainer'>
          {//when user done the search, it will show the lists of their search result and render the makrer based on their geo location
            this.state.showOnlysingleMarker === false &&
            (<Map
              isMarkerShown={true}
              defaultCenter={{lat:this.state.markers[0].lat,lng:this.state.markers[0].lng}}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API}
            `}
              markers={this.state.markers}
              markerClicked={this.selectHighLightListing.bind(this)}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: "50vh", width: '50vh' }} />}
              mapElement={<div style={{ height: `100%` }} />}

            />)
          }
          {//when user clikce the listing, it will auto center that marker or only render that one marker, not decide yet
            this.state.showOnlysingleMarker === true &&
            (<Map
              isMarkerShown={true}
              defaultCenter={{lat:this.state.singleMarker.lat,lng:this.state.singleMarker.lng}}
              defaultZoom={10}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API}`}
              markers={[this.state.singleMarker]}
              markerClicked={this.selectHighLightListing.bind(this)}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: "50vh", width: '50vh' }} />}
              mapElement={<div style={{ height: `100%` }} />}

            />)
          }
        </div>
        <div className='PlacerContainer'>
          {
            //initial render, render bunch of listing item

            (<Place onselect={this.renderSingleMarker.bind(this)}
              listing={this.state.markers}
            />)

          }
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));