import { useState } from 'react'
import { LoaderSpinner, Search, TempConverterButtons, WeatherHightlights, WeatherInfo, WeatherPronostication} from './components'
import { useFetchData } from './hooks'

export const WeatherApp = () => {

  const [searchPage, setSearchPage] = useState(false)
  const [tempUnit, setTempUnit] = useState('celsius')
  const {isLoading, weatherData, getDataWithLatAndLong, getDataWithCityName} = useFetchData()

  if (isLoading) {
    return <LoaderSpinner/>
}


  return (
    <>
    <div className='flex flex-col  lg:flex-row bg-[#100E1D]  h-full'>
      <div className=' lg:w-80 lg:grow xl:max-w-[459px] w-full  bg-[#1E213A]'>
        {
            (searchPage) ?
            <Search 
              setSearchPage={setSearchPage}
              getDataWithCityName={getDataWithCityName}
            />
            : <WeatherInfo 
                setSearchPage={setSearchPage} 
                weatherData={weatherData}
                getDataWithLatAndLong={getDataWithLatAndLong}
                tempUnit={tempUnit}
            />
        }
      </div>
      
      

      <div className=' lg:pt-[42px] md:mx-auto  md:flex md:flex-col lg:px-4 2xl:px-0 pb-10 '>

      <div className='flex flex-row gap-3 pt-5 mb-5 pr-[23px] justify-end lg:mb-[66px]'>
        <TempConverterButtons setTempUnit={setTempUnit} tempUnit={tempUnit}/>
      </div>

        <WeatherPronostication weatherData={weatherData} tempUnit={tempUnit}/>
        <WeatherHightlights weatherData={weatherData} tempUnit={tempUnit}/>
      </div>
      
    </div>

    </>
  )
}
