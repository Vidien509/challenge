import React from 'react'
import colorNames from 'colornames'

const SearchColor  = ({
  setSearch, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'/>
        <input
            autoFocus
            type='text'
            placeholder='Add color name'
            required
            onChange={(e) => {
              setSearch(e.target.value);
              setHexValue(colorNames(e.target.value));
            }} 
        />
        <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default SearchColor
