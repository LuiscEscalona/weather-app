import { WeatherResponse } from "../interfaces";

export const flattenWeatherResponse = (data: WeatherResponse[]) => {
  return data.map((item) => ({
    coord_lon: item.coord.lon,
    coord_lat: item.coord.lat,
    weather_main: item.weather[0]?.main,
    weather_description: item.weather[0]?.description,
    weather_icon: item.weather[0]?.icon,
    base: item.base,
    temp: item.main.temp,
    feels_like: item.main.feels_like,
    temp_min: item.main.temp_min,
    temp_max: item.main.temp_max,
    pressure: item.main.pressure,
    humidity: item.main.humidity,
    visibility: item.visibility,
    wind_speed: item.wind.speed,
    wind_deg: item.wind.deg,
    clouds_all: item.clouds.all,
    dt: item.dt,
    sys_country: item.sys.country,
    sys_sunrise: item.sys.sunrise,
    sys_sunset: item.sys.sunset,
    timezone: item.timezone,
    id: item.id,
    name: item.name,
    cod: item.cod,
  }));
};
