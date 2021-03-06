import React from "react";
import "./WeatherForecast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Sun(props) {
console.log(props.data)

    function sunrise(){
        let date = new Date(props.data.sunrise * 1000);
        let hours = date.getUTCHours();
            if (hours < 10) {
            hours = `0${hours}`;
            }

        let minutes = date.getMinutes();
            if (minutes < 10) { 
            minutes = `0${minutes}`;
            }
       return `${hours}:${minutes}`;
    }

    function sunset() {
        let date = new Date(props.data.sunset * 1000);
        let hours = date.getUTCHours();
            if (hours < 10) {
            hours = `0${hours}`;
            } 
        let minutes = date.getUTCMinutes();
            if (minutes < 10) { 
            minutes = `0${minutes}`;
    }
       return `${hours}:${minutes}`;
    }
    

    return  (
        <div className="Sun">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faArrowUp} /> Sunrise: {sunrise()}
                </li>
                <li>
                    <FontAwesomeIcon icon={faArrowDown} /> Sunset: {sunset()}
                </li>
            </ul>
        </div>
        );
    }


    
