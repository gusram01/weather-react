/* eslint-disable react/prop-types */
import React from 'react'
import { WeatherMiniCard } from './WeatherMiniCard'

export function WeatherMiniCards({ weatherInfoList, changeSelection }) {
  if (!weatherInfoList?.length) {
    return <h3>Sin resultados</h3>
  }

  return (
    <ul className="weatherList">
      {weatherInfoList.map((weatherInfo) => (
        <li key={weatherInfo.dt}>
          <button
            className="weatherItemButton"
            onClick={() => changeSelection(weatherInfo)}
          >
            <WeatherMiniCard weatherInfo={weatherInfo} />
          </button>
        </li>
      ))}
    </ul>
  )
}
