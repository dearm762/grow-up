export const POST = async (request: Request) => {
	const data = await request.json()
	
  return Response.json({
		status: 'success'
	})
}