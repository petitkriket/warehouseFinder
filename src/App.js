import React, { useState } from 'react'
import StockossTest from './StockossTest'
import WarehouseFloor from './WarehouseFloor'
import WarehouseSearchInput from './WarehouseSearchInput'
import WarehouseFloorSvg from './WarehouseFloorSvg'
import './App.scss'

function App() {
  const [reference, setReference] = useState('')

  function handleQuery(formState) {
    const reference = StockossTest(formState)
    setReference(reference.position)
  }

  return (
    <div className="App">
      <main className="container">
        <WarehouseSearchInput onSubmit={handleQuery} />
        <WarehouseFloor activeItem={reference} />
        <hr className="my-5" />
        <WarehouseFloorSvg activeItem={reference} />
      </main>
    </div>
  )
}

export default App
