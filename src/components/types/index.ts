export interface IOptionType {
  name: string;
  lat: number;
  lon: number;
}

export type forecastType = {
  name: string;
  country: string;
  sunrise: number;
  sundet: number;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: { all: number };
      pop: number;
      visibility: number;
    }
  ];
};
