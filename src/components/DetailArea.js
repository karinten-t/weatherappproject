import React from 'react';

function Details({weather}) {
  return (
    <div>
         {weather?.city?.name && (
        <div>
            <p>{weather.city.name}</p>
            <p>{weather.list[0].main.temp}</p>
            <p>{weather.list[0].weather[0].main}</p>
            <p>{weather.list[0].weather[0].description}</p>
        </div>
    )}
    </div>
  )
}

export default Details
