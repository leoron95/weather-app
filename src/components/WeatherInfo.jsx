import { WeatherSearch } from './WeatherSearch'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const WeatherInfo = ({setSearchPage, getUserCoordinates, weatherData, getDataWithLatAndLong, tempUnit}) => {
    
    const {name} = weatherData.location;
    const { temp_c, last_updated } = weatherData.current;
    const { icon, text } = weatherData.current.condition;
    const temperatureC = Math.round(temp_c)
    const temperatureF = Math.round(temperatureC * (9 / 5) + 32)

    const date = dayjs(last_updated).format('ddd, D MMM')
    const lastUpdate = dayjs(last_updated).fromNow()

return (
    <div className=' flex flex-col h-[810px] lg:h-[1023px]  '>

        <WeatherSearch 
            setSearchPage={setSearchPage} 
            getUserCoordinates={getUserCoordinates}
            getDataWithLatAndLong={getDataWithLatAndLong}
        />

            <div className='flex flex-col h-[326px] relative'>
                <div className='bg-[url("/assets/Cloud-background.png")]  bg-cover bg-no-repeat bg-center opacity-10 h-full'>
                    </div>
                <img className='absolute inset-0 m-auto w-24 h-24 ' src={icon} alt="" />
            </div>

            <div className='flex justify-center flex-col'>

                <div className='text-center'>
                    <h1 className='text-[144px]  font-medium text-[#E7E7EB] leading-[170px]'>
                    {
                        (tempUnit === 'celsius') ?
                        temperatureC :
                        temperatureF
                    }
                        <span className='text-5xl leading-[56px] font-medium text-[#A09FB1]'>
                        &deg;
                        {(tempUnit === 'celsius') ? 'C' :'F'}
                        </span>
                    </h1>
                    
                    <p className='mt-6 text-4xl text-[#A09FB1] font-semibold '>
                        {text}
                    </p>
                </div>
                
                <div className='flex flex-col text-center mt-12 gap-9'>

                    <p className='text-[#88869D] font-medium text-lg'>{lastUpdate}<span className='mx-4'>•</span><span>{date}</span></p>

                    <p className='text-[#88869D] font-semibold text-lg'>
                    <i className="fa-solid fa-location-dot mr-2.5"></i>{name}</p>
                </div>
            </div>
            
        </div>
  )
}
