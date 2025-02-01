
import { useState } from "react";

export default function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrehheit] = useState("");

  const convertToFahrenheit = () => {
    let fehrenheit = celsius;
    if (celsius === "") {
      fehrenheit = "";
    } else {
      fehrenheit = parseInt(celsius) + 2;
    }
    return fehrenheit;
  };

  const convertToCelsius = () => {
    let updatedFahrenheit = fahrenheit;
    if (fahrenheit === "") {
      updatedFahrenheit = "";
    } else {
      updatedFahrenheit = parseInt(fahrenheit) - 2;
    }
    return updatedFahrenheit;
  };

  return (
    <div className="text-center justify-center">
      <h1>Temperature Converter</h1>
      <div className="m-5 ">
        <h2>Celsius</h2>
        <input
          type="text"
          className="p-2 border-zinc-900 border-2 "
          value={celsius}
          onChange={(e) => {
            const newCelsius = e.target.value;
            console.log(newCelsius);
            setCelsius(newCelsius);
            // setFahrehheit(convertToFahrenheit());
            setFahrehheit(convertToFahrenheit());
          }}
        />
        <h1>{convertToFahrenheit()}</h1>
      </div>

      <div className="m-5">
        <h2>Fehrenheit</h2>
        <input
          type="text"
          className="p-2 border-zinc-900 border-2 "
          value={fahrenheit}
          onChange={(e) => {
            const newFahrenheit = e.target.value;
            console.log(newFahrenheit);
            setFahrehheit(convertToFahrenheit());
            // setFahrehheit()
            setCelsius(convertToFahrenheit());
          }}
        />
        <h1>{convertToCelsius()}</h1>
      </div>
    </div>
  );
}
