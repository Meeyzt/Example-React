import axios from "axios";

export const getData = async () => {
  //https://www.accuweather.com/images/weathericons/34.svg
  try {
    const response = await axios.get(
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/317350?apikey=xgfu5BtPttNuu4wR39HFzz6fMnuGSloL&metric=true&language=tr"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
