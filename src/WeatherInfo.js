import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faSmile, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h4>
            <ul className="main-weather">
                <li>
                    <h1 id="city">
                        {props.data.citydisplay}
                    </h1>
                </li>
                <li>
                    <h5>
                        <FormattedDate date={props.data.date} />
                    </h5>
                </li>
                <li>
                    <h5 className="text-capitalize">
                        {props.data.description}
                    </h5>
                </li>
                </ul>
            <div className="main-description">
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix">
                            <img 
                            src={props.data.icon} 
                            alt="{props.data.description}" 
                            className="float-left" 
                            />
                            <div className="float-left">
                                <span className="temperature">
                                   {Math.round(props.data.temperature)}
                                </span>
                                <span className="unit">
                                    ° c
                                </span>
                            </div>
                        </div>
                    </div>
                <div className="col-3">
                    <ul>
                        <li><FontAwesomeIcon icon={faSmile} /> Feels like: {Math.round(props.data.feelslike)}°c</li>
                        <li><FontAwesomeIcon icon={faTint} /> Humidity: {props.data.humidity}%</li>
                        <li><FontAwesomeIcon icon={faWind} /> Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                        <li><FontAwesomeIcon icon={faTemperatureHigh} /> High: {Math.round(props.data.temphigh)}°c</li>
                        <li><FontAwesomeIcon icon={faTemperatureLow} /> Low: {Math.round(props.data.templow)}°c</li>
                    </ul>
                </div>
                </div>
            </div>
            </h4>
        </div>
    );
}