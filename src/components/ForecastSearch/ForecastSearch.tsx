import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { fetchForecast } from '../api/api';
import { IOptionType } from '../types';
import { v4 as uuidv4 } from 'uuid';
const API_KEY: any = process.env.REACT_APP_API_KEY;
const BASE_URL: string = 'https://api.openweathermap.org';

export const ForecastSearch = () => {
  const [term, setTerm] = useState<string>('');
  const [city, setCity] = useState<IOptionType | null>(null);
  const [options, setOptions] = useState<[]>([]);

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

  const getForecast = (city: IOptionType) => {    fetch(
    `${BASE_URL}/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(data => console.log({ data }));};

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

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-l-md border-2 border-white"
        onChange={onChange}
      />
      <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {options.map((option: IOptionType) => (
          <li key={uuidv4()}>
            <button
              className="text-left text-sm w-full hover:bg-zinc-700
                hover:text-white px-2 py-1 cursor-pointer"
              onClick={() => onOptionalSelect(option)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="rounded-r-md border-4 border-zinc-100 px-2 py-[2px]
           hover:border-zinc-500 hover:text-zinc-500 text-zinc-100" onClick={onSubmit}
      >
        search
      </button>
    </form>
  );
};
