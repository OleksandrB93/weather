import { FormEvent, ChangeEvent } from 'react';
import { IOptionType } from '../types';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  term: string;
  options: [];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onOptionalSelect: (option: IOptionType) => void;
  onSubmit: () => void;
};

export const ForecastSearch = ({
  term,
  options,
  onChange,
  onFormSubmit,
  onOptionalSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onFormSubmit} className="relative flex justify-start mt-10 md:mt-4">
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
              {option.name}, {option.country}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="rounded-r-md border-4 border-zinc-100 px-2 py-[2px]
           hover:border-zinc-500 hover:text-white text-zinc-100"
        onClick={onSubmit}
      >
        search
      </button>
    </form>
  );
};
