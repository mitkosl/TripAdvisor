import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { useLoadScript } from 'google-map-react'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    const coordinates = { lat: 0, long: 0 };

    // const { isLoading } = useLoadScript({
    //     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    // });

    // if(!isLoading) return <div>Loading...</div>

    // return <div>Maps</div>

    return(
        <div id="Map" className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLkeys={{ key: 'AIzaSyDgAeHRRNSqZTKK69FjG3CYtA8PplzfAag' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
                >
            </GoogleMapReact>
        </div>
    );
} 

export default Map;