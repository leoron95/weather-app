import dayjs from 'dayjs'
import isTomorrow from 'dayjs/plugin/isTomorrow'
dayjs.extend(isTomorrow)

export const PronosticationCard = ({
  maxtemp_c,
  mintemp_c,
  condition,
  date,
  tempUnit
}) => {

  const minTempC = Math.round(mintemp_c)
  const maxTempC = Math.round(maxtemp_c)

  const minTempF = Math.round(minTempC * (9 / 5) + 32)
  const maxTempF = Math.round(maxTempC * (9 / 5) + 32)
  const day = dayjs(date).format('ddd, D MMM')

  const isTomorrow = dayjs(date).add(1).isTomorrow()

  return (
    <div className='h-44 w-[120px] bg-[#1E213A] flex flex-col items-center'>
        
        <h1 className='text-[#E7E7EB] font-medium text-base text-center mt-[18px]'>
            { 
              (isTomorrow) ? 
                'Tomorrow' : 
                day
            }
        </h1>

        <img src={condition.icon} className='h-16 w-14 mt-2.5' alt="" />
        
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
