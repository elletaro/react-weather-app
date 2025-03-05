import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("Celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temp">
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C /
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="temperature">{Math.round(farenheit())}</span>{" "}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          /°F
        </span>
      </div>
    );
  }
}
