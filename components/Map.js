import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/guillaumeayad/cktfgj6ea2fha18pm8kla2m2e"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map(({ long, lat, title }) => (
        <div key={long} className="">
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation({ long, lat })}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={lat}
              longitude={long}
            >
              {title}
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
