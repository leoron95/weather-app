
export const WeatherSearch = ({setSearchPage, getDataWithLatAndLong}) => {
  

  return (
    <div className=' flex flex-row pl-2 pt-4 lg:pt-[42px] justify-between pr-3'>
                
                <button role="button" aria-label="Search for places" onClick={()=>setSearchPage(true)} className='bg-[#6E707A] h-10 w-[161px] text-base font-medium text-[#E7E7EB]'>
                    Search for places
                </button>

                <button role="button" aria-label="Get location" onClick={getDataWithLatAndLong} className='bg-[#6E707A] h-10 w-10 rounded-full '>
                <span className='text-[#E7E7EB]'>
                  <i className="fa-solid fa-location-crosshairs fa-xl  align-middle "></i>
                </span>
                </button>
    </div>
  )
}
