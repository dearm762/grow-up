export const POST = async (req: Request) => {
	const { email, password } = await req.json()

	console.log(email)

	return Response.json({
        status: 'ok',
        message: 'test message'
    })
}
