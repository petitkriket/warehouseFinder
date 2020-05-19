import React, { useState } from 'react'
export default function WarehouseSearchInput(props) {
  const [query, setQuery] = useState('')
  return (
    <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="reference">Item reference :</label>
        <input
          className="form-control"
          id="reference"
          placeholder="i.e : dq324"
          maxLength="5"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => props.onSubmit(query)}
          type="submit"
          className="btn btn-dark mx-2"
          disabled={query.length === 5 ? false : true}
        >
          Find
        </button>
      </div>
    </form>
  )
}
