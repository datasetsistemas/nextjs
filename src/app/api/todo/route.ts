export async function GET(req: Request) {
  const animals = [
    'Cachorro', 'Abelha', 'Vaca', 'Elefante'
  ]
  return Response.json(animals)
}