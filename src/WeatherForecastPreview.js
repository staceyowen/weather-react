import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecastPreview(props) {

    function hours(){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
          if (hours < 10) {
          hours = `0${hours}`;
    }
       return `${hours}:00`;
    }

    function temperature() {
        let maxTemp = Math.round(props.data.main.temp_max)
        let minTemp = Math.round(props.data.main.temp_min)

        return <div>
                    <strong>
                        {maxTemp}°
                    </strong>
                    {" "}{minTemp}°
                </div>;
    }

    return  (
        <div className=" WeatherForecastPreview col-2">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            {temperature()}
        </div>
        );

}
    
