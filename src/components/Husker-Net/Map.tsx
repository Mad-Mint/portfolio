import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';


const LincolnMap: React.FC = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clickedLocation, setClickedLocation] = useState<L.LatLng | null>(null);
  const [predictedRSRP, setPredictedRSRP] = useState<number | null>(null);
  const [closestLocation, setClosestLocation] = useState<{ lat: number; lng: number; rsrp: number } | null>(null);

  // Initialize map on component mount
  React.useEffect(() => {
    const mapInstance = L.map('map').setView([40.8136, -96.7026], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    mapInstance.on('click', handleMapClick);

    setMap(mapInstance);

    return () => {
      mapInstance.off('click', handleMapClick);
      mapInstance.remove();
    };
  }, []);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    setClickedLocation(e.latlng);
    openSidebar();
    fetchRSRPData(e.latlng);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const fetchRSRPData = async (location: L.LatLng) => {
    // Call API to fetch RSRP data for the given GPS location
    // Example: const response = await fetch(`https://api.example.com/rsrp?lat=${location.lat}&lng=${location.lng}`);
    // Parse the response and set the predicted RSRP and closest location state
    // const data = await response.json();
    // setPredictedRSRP(data.predicted_rsrp);
    // setClosestLocation(data.closest_location);
  };

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
      {sidebarOpen && (
        <div className="sidebar">
          <div className="locations">
            <div className='location'>
              <h3>Clicked Location:</h3>
              <p>Latitude: {clickedLocation?.lat}</p>
              <p>Longitude: {clickedLocation?.lng}</p>
              <p>Predicted RSRP:{predictedRSRP}</p>
            </div>
            <div className='location'>
              <h3>Closest Location in the Dataset:</h3>
              <p>Latitude: {closestLocation?.lat}</p>
              <p>Longitude: {closestLocation?.lng}</p>
              <p>RSRP for closest location: {closestLocation?.rsrp}</p>
            </div>
          </div>
          <button className="close-button" onClick={closeSidebar}>Close</button>
        </div>
      )}
    </div>
  );
};

export default LincolnMap;
