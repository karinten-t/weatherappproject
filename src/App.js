import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Details from './components/Details';

const API ='e71d7b8ef275c89a7b08ea95b391c447'  
  
function App() {
    const [search, setSearch] = useState(' ')
    const [weather, setweather] = useState(null)


  const searching =() =>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${API}`)
        .then(res => res.json())
        .then((result) =>{
        setweather(result)
        })}

return (
    <>
    <SearchBar search ={search} setSearch={setSearch} onSearch={searching}/>
    <Details weather={weather}/>
  
  </>
  )
}

export default App