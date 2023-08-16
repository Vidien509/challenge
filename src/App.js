import SearchColor from './Components/SearchColor'
import ColorBox from './Components/ColorBox'
import {useState} from 'react';

function App() {
  const [search, setSearch] = useState('Empty Value')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <ColorBox
        search={search}
        hexValue = {hexValue}
        isDarkText = {isDarkText}
      />
      <SearchColor
        setSearch={setSearch}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
