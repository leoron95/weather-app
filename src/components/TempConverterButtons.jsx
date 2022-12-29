

export const TempConverterButtons = ({setTempUnit, tempUnit}) => {
  return (
    <>
    <button role="button" aria-label="Convert temperature to celsius" onClick={() => setTempUnit('celsius')} className={`w-10 h-10  font-bold text-lg rounded-full ${tempUnit === 'celsius' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'}`}>&deg;C</button>

    <button role="button" aria-label="Convert temperature to farenheit" onClick={() => setTempUnit('farenheit')} className={`w-10 h-10 font-bold text-lg rounded-full ${tempUnit === 'farenheit' ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'}`}>&deg;F</button>
    </>
  )
}
