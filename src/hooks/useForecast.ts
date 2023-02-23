import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { IOptionType, forecastType } from '../components/types';
import { fetchForecast } from '../components/api/api';

const API_KEY: any = process.env.REACT_APP_API_KEY;
const BASE_URL: string = 'https://api.openweathermap.org';

const useForecast = () => {
  const [term, setTerm] = useState<string>('');
  const [city, setCity] = useState<IOptionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value.toLowerCase().trim();
    const result = event.charAt(0).toUpperCase() + event.slice(1);
    setTerm(result);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!term) return;

    async function renderFetchForecast() {
      try {
        const data = await fetchForecast(term);
        setOptions(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    renderFetchForecast();
  }, [term]);

  const getForecast = (city: IOptionType) => {
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOptionalSelect = (option: IOptionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);
  return {
    term,
    options,
    forecast,
    onChange,
    onFormSubmit,
    onOptionalSelect,
    onSubmit,
  };
};

export default useForecast;
