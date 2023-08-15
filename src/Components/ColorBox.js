import React from 'react'

const ColorBox = ({search}) => {
  return (
    <div 
        className='colorBox'
        style= {{backgroundColor: ((search))}}
    >{search ? search : 'Empty Value'}</div>
  )
}

ColorBox.defaultPops = {search: 'Sem valor'}

export default ColorBox