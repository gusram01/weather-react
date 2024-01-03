import React, { useEffect, useState } from 'react'
import { CityForm } from './components/CityForm'
import { WeatherCard } from './components/WeatherCard'
import { WeatherMiniCards } from './components/WeatherMiniCards'
import { getLocationByName } from './repositories/get-location'
import { getWeatherByLocation } from './repositories/get-wheater'

export function App() {
  const [location, setLocation] = useState({
    lat: '',
    long: '',
    city: '',
  })
  const [weather, setWeather] = useState(
    /** @type {import('./types/weather').OWResponse[]} */ ([])
  )
  const [currentSelection, setCurrentSelection] = useState(
    /** @type {import('./types/weather').OWResponse | null} */ (null)
  )

  const changeSelection = (weatherInfo) => {
    setCurrentSelection(weatherInfo)
  }

  /**
   *
   * @param {SubmitEvent | null} event
   * @param {string} city
   */
  const searchByCity = (event = null, city = '') => {
    event?.preventDefault()

    if (!city) {
      return
    }

    getLocationByName(city).then((data) => {
      setLocation(data)
    })
  }

  useEffect(() => {
    searchByCity()
  }, [])

  useEffect(() => {
    if (!location || !location.lat || !location.long) {
      return
    }

    getWeatherByLocation(location.lat, location.long).then((data) => {
      if (!data) {
        return
      }

      setWeather(data)
      changeSelection(data[0])
    })
  }, [location])

  return (
    <>
      <CityForm searchByCity={searchByCity} />

      <h2>
        {location.city ? `Clima en ${location.city}` : 'Ingresa una ciudad'}
      </h2>

      <WeatherCard weatherInfo={currentSelection} />

      <WeatherMiniCards
        weatherInfoList={weather}
        changeSelection={changeSelection}
      />
    </>
  )
}
