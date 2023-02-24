import useForecast from './hooks/useForecast';
import './App.css';
import { Header } from './components/Header/Header';
import { Description } from './components/Description/Description';
import { ForecastSearch } from './components/ForecastSearch/ForecastSearch';
import { Forecast } from './components/icons/Forecast';

const App = (): JSX.Element => {
  const {
    term,
    options,
    forecast,
    onChange,
    onFormSubmit,
    onOptionalSelect,
    onSubmit,
  } = useForecast();

  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-sky-400 via-amber-600 to-amber-200 h-[100vh] w-full my-auto pt-8">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <div className="flex flex-col items-center">
          <Header />
          <Description />
          <ForecastSearch
            term={term}
            options={options}
            onChange={onChange}
            onFormSubmit={onFormSubmit}
            onOptionalSelect={onOptionalSelect}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </main>
  );
};

export default App;
