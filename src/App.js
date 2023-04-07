import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import List from './components/List/List';
import GoogleMap from './components/GoogleMap/GoogleMap.jsx';
import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    })
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <GoogleMap />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
