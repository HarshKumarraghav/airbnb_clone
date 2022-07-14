import React, { useState } from 'react'
import ReactMapGL, { Popup } from 'react-map-gl'
import { Marker } from 'react-map-gl'
import { getCenter } from 'geolib'
const Map = ({ searchResults }) => {
  //    transform the search result object into the {latitude:52 ,longitude:13} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  //  the latitude and longitude of the center location coordinates
  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/raghu12/cl30bnnei000214nq8ak01c1g"
      mapboxAccessToken={process.env.mapbox_key}
      //   onViewportChange is remove from the new versions
      //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onMove={(nextViewport) => setViewport(nextViewport.viewport)}
      {...viewport}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
          key={result.long }
            longitude={result.long}
            latitude={result.lat}
            Left={-20}
            Top={-10}
          > <p className="cursor-pointer text-2xl">📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map;
