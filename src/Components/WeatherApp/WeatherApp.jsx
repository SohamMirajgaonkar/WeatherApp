import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"


export const WeatherApp = () => {

  let api_key="6f6875fef75b87970a718633c7d4d825"
  const [wicon, setWicon]=useState(cloud_icon);

    const search = async () =>{
        const element= document.getElementsByClassName("CityInput")
        if(element[0].value==="")
        {
          return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response= await fetch(url);
        let data= await response.json();
        const humidity= document.getElementsByClassName("humidity-percentage");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature= document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");

        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+"Km/h";
        temperature[0].innerHTML=data.main.temp+"°C";
        location[0].innerHTML=data.name;

    }




  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="CityInput "placeholder='Search' />
        <div className="SearchIcon" onClick={()=>{search()}}>
          <img src={search_icon} alt=""/>
        </div>
      </div>
      <div className="weather-image">
      </div>
        <img src={cloud_icon} alt="" />
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="classname" />
            <div className="data">
              <div className="humidity-percentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="classname" />
            <div className="data">
              <div className="wind-rate">18 km/hr</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}
