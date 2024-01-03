/**
 * @typedef {Object} Weather
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} MainWeather
 * @property {number} temp
 * @property {number} feels_like
 * @property {number} temp_min
 * @property {number} temp_max
 * @property {number} pressure
 * @property {number} humidity
 * @property {number} sea_level
 */

/**
 * @typedef {Object} OWResponse
 * @property {number} dt - timestamp
 * @property {Weather[]} weather
 * @property {Object} MainWeather
 */

/**
 *
 * @param {string} lat
 * @param {string} long
 * @returns {Promise<OWResponse[] | null>}
 */

export {}
