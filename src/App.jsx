import React, { useState } from 'react'
import './App.css'

function App(){
    var [input,setInput] = useState("")
    var [data,setData] = useState({})

    async function getWeatherData(){
        var API_KEY = "fd1f54732a824107aae54d91292c21fc"
        var  result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
        var myresult = await  result.json()
        setData(myresult.main)
        console.log(data);
    }
    console.log(data);

//     return(
//         <div>
//             <h1>Weather App </h1>
//             <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
//             <button onClick={getWeatherData}>Weather</button>
//             {
//                 data ? <div>
//                     <h1>{data.temp}</h1>
//                     <h1>{data.humidity}</h1>

//                 </div> : "not found"
//             }

//         </div>
//     )
// }

// export default App

return (
    <div className="app">
      <h1 className="title">🌤 Weather App</h1>

      <div className="search-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city name..."
        />
        <button onClick={getWeatherData}>Weather</button>
      </div>

      {data ? (
        <div className="weather-card">
          <h2>Temperature: {(data.temp - 273.15).toFixed(2)} °C</h2>
          <h2>Feels Like: {(data.feels_like - 273.15).toFixed(2)} °C</h2>
          <h2>Min Temp: {(data.temp_min - 273.15).toFixed(2)} °C</h2>
          <h2>Max Temp: {(data.temp_max - 273.15).toFixed(2)} °C</h2>
          <h2>Pressure: {data.pressure} hPa</h2>
          <h2>Humidity: {data.humidity}%</h2>
        </div>
      ) : (
        <p className="not-found">Enter a city name to get weather details</p>
      )}
    </div>
  )
}

export default App