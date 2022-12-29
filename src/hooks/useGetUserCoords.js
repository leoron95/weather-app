import { useState } from 'react';

export const useGetUserCoords = () => {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);


    const geolocationAPI = navigator.geolocation;
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const getUserCoordinates = () => {
        if (!geolocationAPI) {
          alert('Geolocation API is not available in your browser!')
        } else {
          geolocationAPI.getCurrentPosition((position) => {
            const { latitude, longitude} = position.coords
            setLat(latitude.toFixed(2));
            setLong(longitude.toFixed(2));
          }, (error) => {
            console.log('Something went wrong getting your position!')
          },options)
        }
      }


  return {
        // Properties
        lat,
        long,

        // Methods
        getUserCoordinates
  }
}
