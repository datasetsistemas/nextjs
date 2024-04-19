'use client'

import { useEffect, useState } from "react"

export default function TodosClient() {
  const [todos, setTodos] = useState<{title: string}[] | null>(null)

  async function getTodos() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos: {title: string}[] = await resp.json()
    setTodos(todos)
  }

  useEffect(()=> { getTodos() }, [])

  return (
    <ul>
      { todos?.map((todo, i)=> (
        <li key={i} className="py-3 border-b">{todo.title}</li>
      )) }
    </ul>
  )
}