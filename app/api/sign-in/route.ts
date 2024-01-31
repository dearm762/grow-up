export const POST = async (request: Request) => {
	const data = await request.json()
	const res = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: 'success' }),
  }
 
  return Response.json(res)
}