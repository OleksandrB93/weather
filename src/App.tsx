import useForecast from './hooks/useForecast';
import './App.css';
import { Header } from './components/Header/Header';
import { Description } from './components/Description/Description';
import { ForecastSearch } from './components/ForecastSearch/ForecastSearch';
import { Forecast } from './components/icons/Forecast'


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
    <main
      className="flex justify-center items-center bg-gradient-to-br 
      from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full"
    >
      <section
        className="w-full md:max-w-[600px] p-4 flex flex-col text-center 
        items-center justify-center md:px-10 lg:p-24 h-full lg:h[500px]
        bg-white bg-opacity-10 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700"
      >
        <Header />
        {!forecast && <Description />}
        {forecast ? (
          <Forecast data={forecast}/>
        ) : (
          <div>
            <div className="flex flex-col">
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
      </section>
    </main>
  );
};

export default App;
