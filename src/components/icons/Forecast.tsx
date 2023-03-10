import {
  getHumidityValue,
  getSunTime,
  getPop,
  getVisibilityValue,
} from '../../helpers';
import { Tile } from '../Tile';
import { forecastType } from '../types';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import { motion } from 'framer-motion';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Virtual,
  Manipulation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { listVAriatns2 } from '../../helpers/motion';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Manipulation, Virtual]);

type Props = {
  data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

export const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];
  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name}
            <span className="font-thin"> {data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm">
            {today.weather[0].main} {today.weather[0].description}
          </p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{' '}
            <Degree temp={Math.ceil(today.main.temp_min)} />
          </p>
        </section>

        <section className=" mt-4 pb-2 mb-5">
          {
            <div>
              <Swiper
                initialSlide={5}
                spaceBetween={1}
                slidesPerView={5}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                // lazy={true}
              >
                {data.list.map((item, i) => (
                  <SwiperSlide
                    className=" text-center w-[50px] flex-shrink-0"
                    key={i}
                  >
                    <motion.div
                      variants={listVAriatns2}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      <p>
                        {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
                      </p>
                      <img
                        alt={`weather-icon-${item.weather[0].description}`}
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      />
                      <p>
                        <Degree temp={Math.round(item.main.temp)} />
                      </p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          }
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[140px] text-xs font-bold flex flex-col items-center
           bg-white/30 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5"
          >
            <Sunrise />
            <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[140px] text-xs font-bold flex flex-col items-center
           bg-white/30 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5"
          >
            <Sunset />
            <span className="mt-2">{getSunTime(data.sunset)}</span>
          </motion.div>
          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${Math.round(
              today.wind.deg
            )}  gusts ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={today.main.feels_like} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 1000)} %`}
            description={` ${getPop(today.pop)}, clouds at ${
              today.clouds.all
            } `}
          />
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${Math.round(today.main.pressure)} hPa`}
            description={`${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </div>
    </div>
  );
};
