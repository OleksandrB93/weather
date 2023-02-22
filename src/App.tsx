import './App.css';
import { Header } from './components/Header/Header';
import { Description } from './components/Description/Description';
import { ForecastSearch } from './components/ForecastSearch/ForecastSearch';

const App: React.FC = () =>{

  return (
    <main
      className="flex justify-center items-center bg-gradient-to-br 
                  from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full"
    >
      <section
        className="w-full md:max-w-[600px] p-4 flex flex-col text-center 
                   items-center justify-center md:px-10 lg:p-24 h-full lg:h[500px]
                   bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700"
      >
        <Header />
        <Description />
        <div className="relative flex mt-10 md:mt-4">
          <ForecastSearch />
        </div>
      </section>
    </main>
  );
};

export default App;
