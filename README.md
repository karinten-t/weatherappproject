 #### tech involved
.react
.openweathermap API
.javascript

### instalation 
git clone git@github.com:karinten-t/weatherappproject.git
cd  weatherappproject
get into vs code then run npm install in order to install all dependancies

## `npm start`
run  the command on  your terminal in order to view the project in your browser

### project structure

src/
├── App.js
├── components/
│   ├── SearchBar.js
│   └── DetailArea.js
├── App.css
└── index.js

### how it works

## `SearchBar.js`
contains an input field and search button that allows you to search any country or city in the world
# `serch`
display current value of input
# `stSearch`
updates the search input value
# `onsearch`
 called when the search button is clicked
# `error`
displays error message when wrong infomation is typed into the search bar

## `DetailArea.js`
displays all the weather details

## `App.js`
manages state and handles all  api calls

### features
- search for any country or city
- get current weather forecast
- displays temperature, main weather condition and weather description
