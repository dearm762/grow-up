import photoData from '../_src/photoData'

export async function GET() {
	return Response.json(
		photoData
	)
}