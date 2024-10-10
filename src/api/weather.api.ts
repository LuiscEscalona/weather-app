import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const APP_ID = import.meta.env.VITE_OPEN_WEATHER_TOKEN;

const LANG = "es";

export const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: APP_ID,
    lang: LANG,
  },
});
