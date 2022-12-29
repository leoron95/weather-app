import { WeatherSearch } from './WeatherSearch'
import dayjs from 'dayjs'


export const WeatherInfo = ({setSearchPage, weatherData, getDataWithLatAndLong, tempUnit}) => {
    
    const name = weatherData.address;
    const { temp, icon, conditions } = weatherData.currentConditions;
    const temperatureC = Math.round(temp)
    const temperatureF = Math.round(temperatureC * (9 / 5) + 32)

    const date = dayjs().format('ddd, D MMM')
    const timezone = `${weatherData.tzoffset} ${weatherData.timezone}`.replaceAll('_', ' ')


return (
    <div className=' flex flex-col h-[810px] lg:h-full  '>

        <WeatherSearch 
            setSearchPage={setSearchPage} 
            getDataWithLatAndLong={getDataWithLatAndLong}
        />

            <div className='flex flex-col h-[326px] relative'>
                <div className='bg-[url("/assets/Cloud-background.webp")]  bg-cover bg-no-repeat bg-center opacity-10 h-full'>
                    </div>
                <img className='animate__animated animate__fadeIn absolute inset-0 m-auto w-32 h-32 ' src={`/assets/icons/${icon}-min.svg`} alt="" />
            </div>

            <div className='flex justify-center flex-col'>

                <div className='text-center'>
                    <h1 className='text-[144px]  font-medium text-[#E7E7EB] leading-[170px] '>
                    {
                        (tempUnit === 'celsius') ?
                        temperatureC :
                        temperatureF
                    }
                        <span className='text-5xl leading-[56px] font-medium text-[#A09FB1] '>
                        &deg;
                        {(tempUnit === 'celsius') ? 'C' :'F'}
                        </span>
                    </h1>
                    
                    <p className='mt-6 text-4xl text-[#A09FB1] font-semibold '>
                        {conditions}
                    </p>
                </div>
                
                <div className='flex flex-col text-center mt-12 gap-9'>
                    
                    <p className='text-[#88869D] font-medium text-lg'>{timezone}<span className='mx-4'>•</span><span>{date}</span></p>

                    <p className='text-[#88869D] font-semibold text-lg'>
                    <i className="fa-solid fa-location-dot mr-2.5 "></i>{name}</p>
                </div>
            </div>
            
        </div>
  )
}
