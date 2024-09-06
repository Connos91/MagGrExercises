const MAIN_URL = "https://api.open-meteo.com/v1/forecast";
const PARAMETER_URL =
  "latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

export const PATIET_QUERY_URL = `${MAIN_URL}?${PARAMETER_URL}`;
export const PATIET_QUERY_KEY = "Patient.Data";

export const CONFIG = {
  retry: 0,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
};
