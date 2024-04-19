'use client'

import { useEffect, useState } from "react"

export default function AnimalsClient() {
  const [animals, setAnimals] = useState([])

  async function getAnimals() {
    const resp = await fetch('/api/todo')
    const animals: [] = await resp.json()
    setAnimals(animals)
  }

  useEffect(()=> { getAnimals() }, [])

  return (
    <ul>
      { animals?.map((animal, i)=> (
        <li key={i} className="py-3 border-b">{animal}</li>
      )) }
    </ul>
  )
}