import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React, { useState, useEffect } from "react";
import API from './api'

function Map(props) {
  console.log(props);
  console.log(props.markers);
  const [selectedMark, setSelectedMark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedMark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.7875711, lng: -122.3966922  }}

    >
      {props.markers.map((park,index) => (

        <Marker
          key={index}
          position={{
            lat: park.lat,
            lng: park.lng,
          }}
          onClick={() => {
            setSelectedMark(park);
          }}
        />
      ))}
            {selectedMark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMark(null);
          }}
          position={{
            lat: selectedMark.lat,
            lng: selectedMark.lng
          }}
        >
          <div>
            <h2>{selectedMark.name}</h2>
            <p>{selectedMark.des}</p>
          </div>
        </InfoWindow>
      )}


    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
