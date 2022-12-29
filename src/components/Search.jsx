import { useState } from 'react'
import { useRef } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useFetchSuggestions } from '../hooks'


export const Search = ({setSearchPage, getDataWithCityName}) => {

    const [inputValue, setInputValue] = useState('')

    const {suggestions, getSuggestions } = useFetchSuggestions()


    const inputFocus = useRef(null);

    const handleClose = () => {
        setSearchPage(false)
    }

    const onInputChange = ({target}) => {
        const value = target.value
        if(value.length < 1) return [];
        setInputValue(value)
        getSuggestions(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newInputValue = inputValue.trim()
        if(newInputValue.length <= 1) return;
        getDataWithCityName(inputValue)
        setInputValue('');
        setSearchPage(false);
    }


    const handleClick = (name, country, region) => {
        const city = `${name}, ${region}, ${country}`
        getDataWithCityName(city)
        setSearchPage(false);
    }

return (
    <div className='pt-4 px-3 flex flex-col min-h-[672px] lg:h-[1023px] '>

        <button className='flex flex-row justify-end mb-8' onClick={handleClose}>
            <i className="fa-solid fa-xmark text-[#E7E7EB] fa-lg"></i>
        </button>

        <form onSubmit={handleSubmit} className='flex flex-row gap-2  justify-between w-full'>
            <label className="relative block">  
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#616475]">
                    <i className="fa-solid fa-magnifying-glass fa-md"></i>
                </span>

                    <DebounceInput
                        className="w-full  h-12 bg-transparent border-[#E7E7EB] pl-12 text-[#616475] text-base font-medium border-[1px] placeholder:text-[#616475] placeholder:font-medium placeholder:text-base"
                        placeholder="search location"
                        minLength={3}
                        debounceTimeout={500}
                        onChange={onInputChange}
                        value={inputValue}
                        inputRef={inputFocus}
                    />
            </label>

            <button className='bg-[#3C47E9] text-[#E7E7EB] font-semibold text-base h-12 w-[86px]'>
                Search
            </button>
        </form>

        <ul className='mt-9 '>

        {
            suggestions?.map( ({name, country, region, id}) => (
            
            <li onClick={()=>handleClick(name, country, region)} key={id} className='h-16 w-full text-base font-medium text-[#E7E7EB] hover:border-[1px] hover:border-[#616475] pl-3 pt-[23px] mb-2 flex flex-row justify-between cursor-pointer '>
                {name}, {region}, {country}
                <span className='pr-2.5'>
                    <i className="fa-solid fa-angle-right text-[#616475]"></i>
                </span>
            </li>
            
        ))
       } 
        </ul>
       
    </div>
  )
}
