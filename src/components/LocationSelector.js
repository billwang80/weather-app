import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

import '../styles/location-selector.css'

const defaultZoom = 10
const defaultPosition = { lat: 38.89, lng: -77.036 }

function LocationSelector({ position, setPosition }) {
  const [zoom, setZoom] = useState(defaultZoom)

  function handleLocationChange(lat, lng) {
    setPosition({lat: lat, lng: lng})
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom)
  }

  function handleResetLocation() {
    setPosition(defaultPosition)
    setZoom(defaultZoom)
  }

  return (
    <div className='map_container'>
      <div className='map_card'>
        <MapPicker 
          zoom={zoom}
          mapTypeId='roadmap'
          style={{height:'300px'}}
          onChangeLocation={handleLocationChange}
          onChangeZoom={handleChangeZoom}
          defaultLocation={position}
          apiKey={process.env.REACT_APP_MAPS_API_KEY}
        />
      </div>
      <button className='reset_button' onClick={handleResetLocation}>Reset Location</button>
    </div>
  )
}

export default LocationSelector
