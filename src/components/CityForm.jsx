import React, { useState } from 'react'

export function CityForm({ searchByCity, initialSearch = '' }) {
  const [search, setSearch] = useState(initialSearch)

  /** @param {import('react').ChangeEvent<HTMLInputElement>} event */
  const onSearchChange = (event) => {
    const target = event.target

    setSearch(target.value.trim())
  }

  return (
    <header className="searchHeader">
      <h1>Pronóstico del clima</h1>
      <form
        className="searchHeader__form"
        onSubmit={(e) => searchByCity(e, search)}
      >
        <input
          value={search}
          onChange={onSearchChange}
          type="text"
          placeholder="Buscar por ciudad"
          name="city"
        />

        <button type="submit">Buscar</button>
      </form>
    </header>
  )
}
