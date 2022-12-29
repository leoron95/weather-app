import { useState } from 'react'

// url to fetch cities suggestions when typing in the search input
const baseUrl = 'https://api.weatherapi.com/v1'
const API_KEY = import.meta.env.VITE_SEARCH_CITY_API_KEY

export const useFetchSuggestions = () => {

    const [suggestions, setSuggestions] = useState([])

    const getSuggestions = async (city) => {
        try {
            const response = await fetch(`${baseUrl}/search.json?key=${API_KEY}&q=${city}`);

          const data = await response.json()
          console.log(data);
          setSuggestions(data)
        } catch (error) {
          console.log('There was an error with fetch request:' + error.message);
        }
      }

  return {
    // Properties
    suggestions,

    // Methods
    getSuggestions
  }
}
