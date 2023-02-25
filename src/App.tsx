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
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-500 via-orange-500 to-amber-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <div >
          <Header />
          <Description />
          <div className="flex justify-center">
            <ForecastSearch
              term={term}
              options={options}
              onChange={onChange}
              onFormSubmit={onFormSubmit}
              onOptionalSelect={onOptionalSelect}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
