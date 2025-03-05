import React from "react";
import FriendlyDate from "./friendlyDate";
import WeatherTemp from "./weathertemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FriendlyDate date={props.data.date} />
        </li>
        <li className="text-captialize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="float-left"
              src={props.data.iconURL}
              alt={props.data.description}
            ></img>
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
