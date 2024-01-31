export const POST = async (request: Request) => {
	const data = await request.json()
	console.log(data)
	return new Response(
		{"status": "success"}, 
		{
			headers: {
				"Content-Type": "application/json"
			},
			status: 200
	})
}