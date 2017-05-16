import axios from 'axios';
import FETCH_WEATHER from './weatherAction';

const API_KEY = '3a3a8e815b4297bb07052664d2fa1029';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
