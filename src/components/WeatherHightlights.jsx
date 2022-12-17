import { HightlightsCard } from './HightlightsCard'

export const WeatherHightlights = ({weatherData}) => {

  const {wind_mph, humidity, vis_miles, pressure_mb, wind_dir } = weatherData.current;

  return (
    <>
    <h1 className='text-2xl text-[#E7E7EB] font-bold leading-7 pl-5 md:pl-0 mb-8'>
        Today’s Hightlights 
    </h1>

    <div className='px-6 md:ml-0 grid grid-cols-1 md:grid-cols-2  gap-y-8 md:gap-x-7 md:pl-0 xl:gap-x-12 xl:gap-y-12 '>

        <HightlightsCard
          wind_mph = {wind_mph}
          humidity = {humidity}
          vis_miles = {vis_miles} 
          pressure_mb = {pressure_mb}
          wind_dir = {wind_dir}
        />
    </div>

    </>
  )
}
