import { useEffect } from "react";
import { getData } from "../API/Data";
import { useWeather } from "../Context/WeatherContext";
import Weathers from "./Weathers";

function ListWeather() {
  const { setWeather } = useWeather();

  useEffect(async () => {
    const data = await getData();
    setWeather(data);
  }, []);

  return (
    <div>
      <Weathers />
    </div>
  );
}

export default ListWeather;
