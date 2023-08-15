import React from 'react'

const SearchColor = ({setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'/>
        <input
            autoFocus
            type='text'
            placeholder='Add color name'
            required
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchColor
