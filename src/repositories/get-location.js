import defaultResponse from '../mocks/reservamos-default-cdmx.json'

const RESERVAMOS_API_URL = 'https://search.reservamos.mx'
const PLACE_BY_NAME_ENDPOINT = '/api/v2/places'

/**
 * @param {string} city
 * @returns {Promise<{ city: string, lat: string, long: string }>}
 */
export const getLocationByName = (city) => {
  const url = new URL(PLACE_BY_NAME_ENDPOINT, RESERVAMOS_API_URL)
  const params = new URLSearchParams({ q: city })

  url.search = params.toString()

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener la ubicación de la ciudad')
      }

      return response.json()
    })
    .catch((err) => {
      console.warn('GetLocationByName::unexpected', err)

      return []
    })
    .then((data) => {
      if (!data.length) {
        const defaultCity = defaultResponse.find(
          (type) => type.result_type === 'city'
        )

        return {
          city: defaultCity?.city_name ?? '',
          lat: defaultCity?.lat ?? '',
          long: defaultCity?.long ?? '',
        }
      }

      const city = data.find((type) => type.result_type === 'city')

      return {
        city: city?.city_name ?? '',
        lat: city?.lat ?? '',
        long: city?.long ?? '',
      }
    })
}
