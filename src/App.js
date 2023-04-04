import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import List from './components/List/List';
import Map from './components/Map/Map.jsx';

function App() {
  return (
    <>
        <CssBaseline />
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
              <List />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map />
            </Grid>
        </Grid>
    </>
  );
}

export default App;
