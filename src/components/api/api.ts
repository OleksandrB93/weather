//api.openweathermap.org/geo/1.0/derect&q=${term}&limit=5&appid={API_KEY}

import axios from 'axios';

const API_KEY: any = process.env.REACT_APP_API_KEY;
const BASE_URL: string = 'https://api.openweathermap.org';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchForecast = async (term: string) => {
  const { data } = await axios.get(
    `/geo/1.0/direct?q=${term}&limit=5&appid=${API_KEY}`
  );
  return data;
};

export const fetchCurrentForecast = async (option: any) => {
  const { data } = await axios.get(
    `/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&appid=${API_KEY}`
  );
  console.log(data);
  return data;
};
