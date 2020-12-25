const weatherIcon = {
  Thunderstorm: "https://openweathermap.org/img/wn/11n@2x.png",
  Drizzle: "https://openweathermap.org/img/wn/09d@2x.png",
  Rain: "https://openweathermap.org/img/wn/09d@2x.png",
  Snow: "https://openweathermap.org/img/wn/13n@2x.png",
  Atmosphere: "https://openweathermap.org/img/wn/50d@2x.png",
  Clear: "https://openweathermap.org/img/wn/01d@2x.png",
  Clouds: "https://openweathermap.org/img/wn/04d@2x.png",
};

export function getWeatherIcon(rangeId) {
  if (rangeId >= 200 && rangeId <= 232) return weatherIcon.Thunderstorm;
  if (rangeId >= 300 && rangeId <= 321) return weatherIcon.Drizzle;
  if (rangeId >= 500 && rangeId <= 531) return weatherIcon.Rain;
  if (rangeId >= 600 && rangeId <= 622) return weatherIcon.Snow;
  if (rangeId >= 701 && rangeId <= 720) return weatherIcon.Atmosphere;
  if (rangeId === 800) return weatherIcon.Clear;
  if (rangeId >= 801 && rangeId <= 804) {
    return weatherIcon.Clouds;
  }
}
