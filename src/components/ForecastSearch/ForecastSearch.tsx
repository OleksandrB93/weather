import {
  FormEvent,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';
import { fetchForecast } from '../api/api';
import { optionType } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const ForecastSearch = () => {
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value.toLowerCase().trim());
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onOptionSelect = (option: optionType) => {
    console.log(option.name);
  };

  useEffect(() => {
    if (!term /*|| term.length<3*/) return;

    async function renderFetchForecast() {
      try {
        const forecastResp = await fetchForecast(term);
        setOptions(forecastResp);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    renderFetchForecast();
  }, [term]);

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-l-md border-2 border-white"
        onChange={onChange}
      />
      <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {options.map((option: optionType) => (
          <li key={uuidv4()}>
            <button
              className="text-left text-sm w-full hover:bg-zinc-700
                hover:text-white px-2 py-1 cursor-pointer"
              onClick={() => onOptionSelect(option)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="rounded-r-md border-4 border-zinc-100 px-2 py-[2px]
           hover:border-zinc-500 hover:text-zinc-500 text-zinc-100"
      >
        search
      </button>
    </form>
  );
};
