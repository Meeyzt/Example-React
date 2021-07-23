import { WeatherProvider } from "./Context/WeatherContext";
import "./App.css";
import ListWeather from "./Components/ListWeather";

function App() {
  return (
    <WeatherProvider>
      <ListWeather />
    </WeatherProvider>
  );
}
export default App;
