import React, { useState, useEffect } from 'react'
import './WarehouseFloor.scss'
import data from './data.json'

function StorageBox({ id, active }) {
  return (
    <div
      className={
        active
          ? 'storage-box border border border-light shadow'
          : 'storage-box border'
      }
    >
      <div className="text-center">{id}</div>
    </div>
  )
}

export default function WarehouseFloor({ activeItem }) {
  const [boxes, setBoxes] = useState(data)

  function toggleBox(id) {
    if (id) {
      var data = [...boxes]
      var index = data.findIndex((obj) => obj.id === id)
      if (index >= 0 && data[index]) {
        for (let i = 0; i < data.length; i++) {
          i === index ? (data[i].active = true) : (data[i].active = false)
        }
        setBoxes(data)
      }
    }
  }

  useEffect(() => {
    if (activeItem !== '') {
      toggleBox(activeItem)
    }
  }, [activeItem])

  const [locations] = useState(boxes)

  return (
    <div className="row mt-4 mx-auto">
      {locations.map((location) => (
        <StorageBox
          id={location.id}
          active={location.active}
          key={location.id}
        />
      ))}
    </div>
  )
}
