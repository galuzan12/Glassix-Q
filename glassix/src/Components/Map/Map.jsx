import React, { useState, useEffect } from 'react';

const Map = ({ location }) => {
    return (
        <iframe
            width="600"
            height="450"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=
                ${process.env.REACT_APP_GOOGLE_API_KEY}
                &q=${location?.latitude},${location?.longitude}`}
            allowFullScreen={true}>
        </iframe>
    );
}

export default Map;
//