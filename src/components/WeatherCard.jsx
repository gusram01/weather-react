import { format, fromUnixTime } from 'date-fns'
import { es } from 'date-fns/locale'
import React from 'react'

const config = {
  locale: es,
}

export function WeatherCard({ weatherInfo }) {
  if (weatherInfo?.main?.temp == null) {
    return null
  }

  const dateFromUnix = fromUnixTime(weatherInfo.dt)
  const dayDate = format(dateFromUnix, 'PPpp', config)

  return (
    <article className="weatherCard">
      <h4> {dayDate} </h4>
      <img
        src={
          'http://openweathermap.org/img/wn/' +
          weatherInfo?.weather[0].icon +
          '.png'
        }
        alt="weather icon"
      />
      <p>{weatherInfo?.main.temp} &deg;C</p>
      <p>{weatherInfo?.weather[0].description}</p>
    </article>
  )
}
