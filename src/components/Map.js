import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div``;
const MapContent = styled.div`
    height: 100vh;
    width: 100vw;
`;


function Map() {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const { google } = window
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
    });

    return (
        <MapContainer>
            <MapContent id="map"/>
        </MapContainer>
    );
}

export default Map;
