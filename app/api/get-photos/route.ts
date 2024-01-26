import photoData from '@/app/_system/photoData'

export async function GET() {
	return Response.json(photoData)
}