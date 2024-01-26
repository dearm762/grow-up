import photoData from '@/app/_src/photoData'

export async function GET() {
	return Response.json(
		photoData
	)
}