import { useState } from "react";
import { useWeather } from "../Context/WeatherContext";

function Weathers() {
  const { weather } = useWeather();

  const dayOrNight = (day) => {
    let icon = "";
    new Date().getHours() > 18 ? (icon = day.Icon) : (icon = day.Icon);
    return icon;
  };
  const IconPhrase = (day) => {
    let iconPhrase = "";
    new Date().getHours() > 18
      ? (iconPhrase = day.IconPhrase)
      : (iconPhrase = day.IconPhrase);
    return iconPhrase;
  };

  const getDate = (date) => {
    return new Date(date).toLocaleString("tr-tr", {
      weekday: "long",
    });
  };

  if (!weather || !weather.DailyForecasts) return <div> yükleniyor.. </div>;
  return (
    <div className="container">
      {weather?.DailyForecasts.map((d, i) => {
        return (
          <div className="Row" key={i}>
            <span className="Day">{getDate(d.Date)}</span>

            <img
              src={`https://www.accuweather.com/images/weathericons/${dayOrNight(
                d.Day
              )}.svg`}
              alt={IconPhrase(d.Day)}
            />
            <span className="Phrase">{IconPhrase(d.Day)}</span>
            <div className="Temp">
              <span className="Max">{d.Temperature.Maximum.Value}</span>
              <span className="Min">{d.Temperature.Minimum.Value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Weathers;
