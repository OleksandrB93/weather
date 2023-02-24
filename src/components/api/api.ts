//api.openweathermap.org/geo/1.0/derect&q=${term}&limit=5&appid={API_KEY}

import axios from 'axios';

const API_KEY: any = 'eaaf6cfc0da3f9c25461c07466df8e0a';
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

export const fetchCurrentForecast = async ({ lat, lon }: any) => {
  const { data } = await axios.get(
    `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return data;
};
