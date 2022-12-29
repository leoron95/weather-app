import { convertDegreesToDirection } from "../helpers/convertDegreesToDirection"

export const HightlightsCard = ({wind_mph, humidity, vis_miles, pressure_mb, wind_dir, feelslike, dew, tempUnit}) => {

    const humidityPercentage = Math.round(humidity).toString()
    const windSpeedMph = Math.round(wind_mph)
    const airPressure = Math.round(pressure_mb)
    const windDir = convertDegreesToDirection(wind_dir)
    const feelsLikeC = Math.round( feelslike )
    const feelsLikeF = Math.round( feelsLikeC * (9 / 5) + 32 )
    const dewPointC = Math.round( dew )
    const dewPointF = Math.round( dewPointC * (9 / 5) + 32 )


return (
   <>
    <div className='h-52 w-full bg-[#1E213A] flex flex-col items-center  '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-1.5'>
            Wind status
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>{windSpeedMph}<span className='text-4xl font-medium'>mph</span></p>

        <p className='text-[#E7E7EB] text-sm font-medium leading-4 mt-8'><i className='fa-solid  fa-arrow-up fa-lg mr-1.5' style={{rotate:(`${wind_dir}deg`)}}></i>{windDir}</p>
    </div>
    
    <div className='h-52 w-full bg-[#1E213A] flex flex-col items-center '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-3'>
            Humidity
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>{humidityPercentage}<span className='text-4xl font-medium'>%</span></p>

        <div className='w-[229px] mt-3'>
           <div className='flex flex-row justify-between text-xs font-bold text-[#A09FB1]'>
            <span>0</span>
            <span>50</span>
            <span>100</span>
           </div>

            <div className="w-full bg-[#E7E7EB] h-2 rounded-full">
                <div style={{backgroundColor:'#FFEC65', height:'8px',borderRadius: '9999px', width: `${humidityPercentage}%` }} ></div>
            </div>
            <span className='flex justify-end text-[#A09FB1] font-bold text-xs mt-1'>%</span>
        </div>
    </div>

    {
        vis_miles && 
        <div className='h-40 w-full bg-[#1E213A] flex flex-col items-center '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-1.5'>
            Visibility
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>{vis_miles}<span className='text-4xl font-medium'> miles</span></p>

    </div>
    }

    <div className='h-40 w-full bg-[#1E213A] flex flex-col items-center '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-1.5'>
            Feels like
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>
            {
                (tempUnit === 'celsius') ?
                    feelsLikeC :
                    feelsLikeF
            }
            <span className='text-4xl font-medium'> 
            &deg;{(tempUnit === 'celsius') ? 'C' :'F'}
            </span>
        </p>

    </div>
    <div className='h-40 w-full bg-[#1E213A] flex flex-col items-center '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-1.5'>
            Dew point
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>
            {
                (tempUnit === 'celsius') ?
                    dewPointC :
                    dewPointF
            }
            <span className='text-4xl font-medium'> 
            &deg;{(tempUnit === 'celsius') ? 'C' :'F'}
            </span>
        </p>


    </div>

    <div className='h-40 w-full bg-[#1E213A] flex flex-col items-center '>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[22px] mb-1.5'>
            Air Pressure
        </h1>

        <p className='text-[#E7E7EB] text-[64px] font-bold leading-[75px]'>{airPressure}<span className='text-4xl font-medium'> mb</span></p>

    </div>

   </>
  )
}
