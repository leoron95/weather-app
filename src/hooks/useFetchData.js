import { useEffect } from "react"
import { useState } from "react"
import { useGetUserCoords } from "./useGetUserCoords"

// url to fetch weather data
const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const useFetchData = () => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [weatherData, setWeatherData] = useState()

    const {lat, long, getUserCoordinates} = useGetUserCoords()

    useEffect(() => {
        getDataWithLatAndLong()
      }, [lat, long])
  
    const getDataWithLatAndLong = async () => {
        getUserCoordinates()
        try {
          const response = await fetch(`${baseUrl}/${lat},${long}/next5days?unitGroup=metric&key=${API_KEY}`);
          
          const data = await response.json()
          setWeatherData(data)
        } catch (error) {
          console.log('There was an error with fetch request:' + error.message);
        }
        setIsLoading(false)
      }
    
      const getDataWithCityName = async (city) => {
        try {
          const response = await fetch(`${baseUrl}/${city}/next5days?unitGroup=metric&key=${API_KEY}&contentType=json`);
          
          const data = await response.json()
          setWeatherData(data)
        } catch (error) {
          console.log('There was an error with fetch request:' + error.message);
        }
        setIsLoading(false)
      }
  
    return {

        // Properties
        weatherData,
        isLoading,

        // Methods
        getDataWithLatAndLong,
        getDataWithCityName

  }
}
