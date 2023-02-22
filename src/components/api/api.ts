//api.openweathermap.org/geo/1.0/derect&q=${term}&limit=5&appid={API_KEY}

import axios from 'axios';
import { optionType } from '../types';

const API_KEY: any = process.env.REACT_APP_API_KEY;
const BASE_URL: string = 'https://api.openweathermap.org';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchForecast = async (term: string) => {
  const response = await axios.get(
    `/geo/1.0/direct?q=${term}&limit=5&appid=${API_KEY}`
  );
  return response.data;
};

// export const fetchCurrentForecast = async () => {
//   const response = await axios.get(
//     `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//   );
//   return response;
// };
