import React, { useState } from 'react';
import { TiWeatherPartlySunny, TiWeatherShower, TiWeatherStormy, TiWeatherDownpour } from "react-icons/ti";
 
import { MdLocationCity } from "react-icons/md";
import { FaWind, FaWater, FaCloudSun } from "react-icons/fa";

const App = () => {
  const [city, setCity] = useState("nainital");
  const [weather, setWeather] = useState(null);

  const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiid = "c607e0c76c39dbddda5e572e818238f2";

  const fetchApi = async () => {
    
    let response = await fetch(`${api}${city}&appid=${apiid}`);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const getCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-200 p-4"
        style={{
          backgroundImage: "url(' https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",  
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between h-full w-full max-w-lg  hover:scale-105 rounded-3xl p-6 shadow-lg" 
         style={{
          backgroundImage: "url(' https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",  
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div>
            <h1 className="text-3xl flex justify-center font-bold text-white text-center mb-8 drop-shadow-lg">
              Weather Check  
            </h1>

            <div className="flex justify-between mb-6">
              <input
                onChange={getCity}
                value={city}
                className="h-10 w-[70%] rounded-2xl pl-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                placeholder="Enter city"
              />
              <button
                onClick={fetchApi}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
              >
                Search
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <TiWeatherPartlySunny className="text-yellow-400 text-8xl animate-pulse" />
              <TiWeatherShower className="text-yellow-400 text-8xl animate-pulse" />
              <TiWeatherStormy className="text-yellow-400 text-8xl  animate-pulse" />
              <TiWeatherDownpour className="text-yellow-400 text-8xl animate-pulse" />
            </div>

            <div className="flex flex-col items-center mt-10">
              <h1 className="text-4xl font-bold hover:text-gray-300 text-white drop-shadow-lg">
                {weather?.main?.temp} °C 
                
              </h1>
              <h2 className="text-3xl flex items-center font-bold hover:text-gray-300 text-white mt-2 drop-shadow-lg">
                <MdLocationCity /> - {weather?.name}{weather?.message}
              </h2>
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row justify-between mt-8 text-white">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <h3 className="font-bold   flex items-center">
                <FaWind className="mr-1" /> Wind Speed
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.wind?.speed} km/h</span>
              <h3 className="font-bold mt-5  flex items-center">
                <FaCloudSun className="mr-1" /> Sea Level
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.main?.sea_level} hPa</span>
              <h3 className="font-bold mt-5  flex items-center">
                <FaCloudSun className="mr-1" /> Ground Level
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.main?.grnd_level} hPa</span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold   flex items-center">
                <FaWater className="mr-1" /> Humidity
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.main?.humidity} %</span>
              <h3 className="font-bold   flex items-center mt-5">
                <FaCloudSun className="mr-1" /> Pressure
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.main?.pressure} hPa</span>
              <h3 className="font-bold    flex items-center mt-5">
                <FaCloudSun className="mr-1" /> Visibility
              </h3>
              <span className="text-lg hover:text-gray-300">{weather?.visibility / 1000} km</span> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
