import React, { useEffect } from 'react';
import L from 'leaflet';

const LincolnMap = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map').setView([40.8136, -96.7026], 13);

    // Add tile layer (you can choose different tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add click event handler
    map.on('click', function(e) {
      var clickedLatLng = e.latlng;
      // Send clickedLatLng to your server for prediction
      // Use AJAX or Fetch API to send data to the server and handle the response
      // Display prediction result on the map
      console.log(clickedLatLng)
    });
  }, []);

  return (
    <div id="map" className="map-container"></div>
  );
}

export default LincolnMap;
