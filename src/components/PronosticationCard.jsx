import dayjs from 'dayjs'
import isTomorrow from 'dayjs/plugin/isTomorrow'
dayjs.extend(isTomorrow)

export const PronosticationCard = ({
  tempmax,
  tempmin,
  datetime,
  tempUnit,
  icon
}) => {

  const minTempC = Math.round(tempmin)
  const maxTempC = Math.round(tempmax)

  const minTempF = Math.round(minTempC * (9 / 5) + 32)
  const maxTempF = Math.round(maxTempC * (9 / 5) + 32)
  const day = dayjs(datetime).format('ddd, D MMM')

  const isTomorrow = dayjs(datetime).add(1).isTomorrow()

  return (
    <div className='h-44 w-[120px] bg-[#1E213A] flex flex-col items-center'>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[18px]'>
            { 
              (isTomorrow) ? 
                'Tomorrow' : 
                day
            }
        </h1>

        <img src={`/assets/icons/${icon}-min.svg`} className='h-16 w-14 mt-2.5 animate__animated animate__fadeIn' alt="" />
        
        <p className='text-base font-medium text-[#E7E7EB] mt-5 '>
          {
            (tempUnit === 'celsius') ?
            maxTempC :
            maxTempF
          } &deg;{(tempUnit === 'celsius') ? 'C' :'F'}
          <span className='text-[#A09FB1] ml-4'>
            {
              (tempUnit === 'celsius') ?
              minTempC :
              minTempF
            } &deg;{(tempUnit === 'celsius') ? 'C' :'F'}
          </span>
        </p>
    </div>
  )
}
