import { useEffect } from 'react'
import { useState } from 'react'
import { Search } from './components/Search'
import { WeatherHightlights } from './components/WeatherHightlights'
import { WeatherInfo } from './components/WeatherInfo'
import { WeatherPronostication } from './components/WeatherPronostication'

const baseUrl = 'https://api.weatherapi.com/v1/forecast'

export const WeatherApp = () => {

  const [searchPage, setSearchPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weatherData, setWeatherData] = useState()
  const [tempUnit, setTempUnit] = useState('celsius')


  useEffect(() => {
    getDataWithLatAndLong()
  }, [lat, long])
  

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
        setLat(latitude);
        setLong(longitude);
      }, (error) => {
        alert('Something went wrong getting your position!')
      },options)
    }
  }


  const getDataWithLatAndLong = async () => {
    getUserCoordinates()
    try {
      const response = await fetch(`${baseUrl}.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${lat},${long}&days=6&aqi=no`);
      
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.log('There was an error with fetch request:' + error.message);
    }
    setIsLoading(false)
  }

  const getDataWithCityName = async (city) => {
    try {
      const response = await fetch(`${baseUrl}.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=6&aqi=no`);
      
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.log('There was an error with fetch request:' + error.message);
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen bg-[#1E213A]">
    <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1E213A] rounded-full border-2 border-[#1E213A]"></div>
    </div>
</div>
}


  return (
    <>
    <div className='flex flex-col  lg:flex-row bg-[#100E1D]  '>
      <div className=' lg:w-80 lg:grow xl:max-w-[459px] w-full  bg-[#1E213A] '>
        {
            (searchPage) ?
            <Search 
              setSearchPage={setSearchPage}
              getDataWithCityName={getDataWithCityName}
            />
            : <WeatherInfo 
                setSearchPage={setSearchPage} 
                weatherData={weatherData}
                getUserCoordinates={getUserCoordinates}
                getDataWithLatAndLong={getDataWithLatAndLong}
                tempUnit={tempUnit}
            />
        }
      </div>
      
      

      <div className=' h-[1718px] lg:h-[1023px]  lg:pt-[42px] md:mx-auto  md:flex md:flex-col lg:px-4 2xl:px-0 '>

      <div className='flex flex-row gap-3 pt-5 mb-5 pr-[23px] justify-end lg:mb-[66px]'>
        <button onClick={() => setTempUnit('celsius')} className={`w-10 h-10  font-bold text-lg rounded-full ${tempUnit === 'celsius' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'}`}>&deg;C</button>
        <button onClick={() => setTempUnit('farenheit')} className={`w-10 h-10 font-bold text-lg rounded-full ${tempUnit === 'farenheit' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'}`}>&deg;F</button>
      </div>

        <WeatherPronostication weatherData={weatherData} tempUnit={tempUnit}/>
        <WeatherHightlights weatherData={weatherData}/>
      </div>
      
    </div>

    </>
  )
}
