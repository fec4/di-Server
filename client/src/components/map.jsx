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
      defaultZoom={14}

      center={props.defaultCenter}

    >
      {props.markers.map((e,index) => {
         return(

        <Marker
          key={index}
          position={{
            lat: e.lat,
            lng: e.lng,
          }}
          onClick={() => {
            console.log(e);
            setSelectedMark(e);
            props.markerClicked(e)
          }}
        />
      )})}
            {
              selectedMark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMark(null);
            props.markerClicked(null);
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
