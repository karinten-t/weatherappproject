import React, { useState } from 'react';
import SearchBar from './components/SeachBar';
import DetailArea from './components/DetailArea';
import Header from './components/Header';

const API = 'e71d7b8ef275c89a7b08ea95b391c447';

function App() {
    const [search, setSearch] = useState(' ');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const searching = () => {
        setError(''); 
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${API}`)
            .then(res => res.json())
            .then(result => {
                if (result.cod === "200") {
                    setWeather(result);
                    setError('');
                } else {
                    setWeather(null);
                    setError('City not found. Please try again.');
                }
            })
            .catch(() => {
                setWeather(null);
                setError('Something went wrong. Please try again later.');
            });
    };

    return (
        <>
        <Header />
            <SearchBar search={search} setSearch={setSearch} onSearch={searching} />
            {error && <p className="error-message">{error}</p>}
            <DetailArea weather={weather} />
        </>
    );
}

export default App;
