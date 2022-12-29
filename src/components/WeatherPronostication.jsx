import { PronosticationCard } from './PronosticationCard'

export const WeatherPronostication = ({weatherData, tempUnit}) => {

const forecast = weatherData.days

  return (
    <div className='w-fit grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5  gap-y-8 gap-x-6  mx-auto mb-14 lg:mb-[72px]'>
        {
        forecast.slice(1).map( (pronostication) => {
            return( 
              <PronosticationCard  
                key={pronostication.datetime}
                tempUnit={tempUnit}
                {...pronostication}
            />)
          })
        }
    </div>
  )
}
