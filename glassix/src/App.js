import React, { useState, useEffect } from 'react';
import Map from "./Components/Map/Map";
import './App.css';

const App = () => {

  const [data, setData] = useState({
    city: "",
    country_name: "",
    location: {
      latitude: 0,
      longitude: 0
    }
  })

  useEffect(() => {
    const URL = `https://api.ipdata.co/?api-key=${process.env.REACT_APP_IPDATA_API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(({ city, country_name, latitude, longitude }) => {
        setData({ city, country_name, location: { longitude, latitude } });
      })
  }, [])
  return (
    <div className="App">
      <h1 className="country_text">Country: {data.country_name}</h1>
      <h1 className="city_text">City: {data.city}</h1>
      <Map location={data.location} />
    </div> 
  );
}

export default App;
