import React from 'react'

const ColorBox = ({search, hexValue, isDarkText}) => {
  return (
    <div 
        className='colorBox'
        style= {{
          backgroundColor: ((search)),
          color: isDarkText ? "#000" : "#FFF"
        }}
    >
    {search ? search : 'Empty Value'}<br/>
    {hexValue ? hexValue: null}
    </div>
  )
}

ColorBox.defaultPops = {search: 'Sem valor'}

export default ColorBox