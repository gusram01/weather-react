const OPENWEATHER_API_URL = 'https://api.openweathermap.org'
const FIVE_DAYS_FORECAST = '/data/2.5/forecast'

/**
 * @param {string} lat
 * @param {string} long
 * @returns {Promise<import('../types/weather').OWResponse[] | null>}
 */
export const getWeatherByLocation = (lat, long) => {
  const url = new URL(FIVE_DAYS_FORECAST, OPENWEATHER_API_URL)
  const params = new URLSearchParams({
    lat: lat,
    lon: long,
    appid: '0eebd1fcf852d29ca0340c5c451d4c9a',
    units: 'metric',
    lang: 'es',
  })

  url.search = params.toString()

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener el clima de la ciudad')
      }

      return response.json()
    })
    .then((data) => (Array.isArray(data.list) ? data.list : []))
    .catch((err) => {
      console.warn('GetWeatherByLocation::unexpected', err)

      return []
    })
}
