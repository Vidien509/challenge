import SearchColor from './Components/SearchColor'
import ColorBox from './Components/ColorBox'
import {useState} from 'react';

function App() {
  const [search, setSearch] = useState('Empty Value')

  return (
    <div className="App">
      <ColorBox
        search={search}
      />
      <SearchColor
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
