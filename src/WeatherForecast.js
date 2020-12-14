import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    // tracking if the api has been loaded, by default it's false. it the forecast is loaded it's going to be true but if not it will be false.
    const [forecast, setForecast] = useState(null);
    // store forecast inside a state.
    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);  
    }

    if (loaded && props.city === forecast.city.name) {
        // if the city is the same, stay loaded
        // if the city has changed, reload
        return ( 
            <div className="WeatherForecast row">
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
            <WeatherForecastPreview data={forecast.list[5]} />
            </div>
        );
    } else {
    let apiKey = "dfc2e82cce5dfe54171afee9e327c236";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleForecastResponse);

    return null;
    }
    
}