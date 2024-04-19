export default async function TodosServer() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: {title: string}[] = await resp.json()

  return (
    <ul>
      { todos.map((todo, i)=> (
        <li key={i} className="py-3 border-b">{todo.title}</li>
      )) }
    </ul>
  )
}