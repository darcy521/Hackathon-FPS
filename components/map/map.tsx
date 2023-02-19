import { useLoadScript, GoogleMap, MarkerF, CircleF, InfoWindow} from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import PlacesAutocomplete from '@/components/map/PlacesAutocomplete'
import usePlacesAutocomplete from 'use-places-autocomplete'
import {getGeocode, getLatLng} from 'use-places-autocomplete'
import styles from "../map/Map.module.scss";
import React from 'react';
import Head from 'next/head';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Map = () => {
    const[latitude, setLatitude] = useState(37.3541);
    const[longitude, setLongitude] = useState(-121.9552);
    const libraries = useMemo(() => ['places'], []);
    // Add lat, lng as dependencies
    const mapCenter = useMemo(() => 
      ({ lat: latitude, lng: longitude }), [latitude, longitude]);
  
    React.useEffect(() => {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Position is :", position);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          },
          function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      }
    }, []);

    // const pos = {
    //   lat: latitude,
    //   lng: longitude,
    // };
    // infoWindow.setPosition(pos);
    // infoWindow.setContent("Location found.");

    const mapOptions = useMemo<google.maps.MapOptions>(
      () => ({
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: false,
      }),
      []
    );
    
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
      libraries: libraries as any,
    });
  
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
  
    return (
      <>
      {/* <Container className={styles.container}> */}
        <CardGroup className={styles.mapCardGroup}>
          <div className={styles.mapCard}>
          <Card className={styles.sidebar} style={{width: '10rem'}} >
            {/* render Places Auto Complete and pass custom handler which updates the state */}
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                setLatitude(lat);
                setLongitude(lng);
              });
            }}
          />
        </Card>
        <Card className={styles.map}>
        <GoogleMap
          options={mapOptions}
          zoom={15}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '100%', height: '80vh' }}
          onLoad={() => console.log('Map Component Loaded...')}
        >
          {/* {markers.map(({ id, name, position }) => ( */}
          <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} >
          {/* {activeMarker === id ? ( */}
            {/* <InfoWindow 
              position={mapCenter}
              
            onCloseClick={() => setActiveMarker(null)}
            >
              <div>123</div>
            </InfoWindow> */}
          {/* ) : null} */}
          </MarkerF>
           {/* ))} */}
          {[800, 0].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log('Circle Load...')}
                options={{
                  fillColor: radius > 1000 ? 'red' : 'green',
                  strokeColor: radius > 1000 ? 'red' : 'green',
                  strokeOpacity: 0.5,
                }}
              />
            );
          })}
        </GoogleMap>
        </Card>
        </div>
        {/* </Card> */}
        </CardGroup>
        {/* </Container> */}
      </>
    );
  };

  export default Map;