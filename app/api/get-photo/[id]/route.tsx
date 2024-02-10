import photoData from '@/data/photoData'

export const GET = async (_request: Request, { params }: { params: { id: string }}) => {
	const photo = photoData.find(
		photo => photo.id === params.id
	)

	return Response.json(photo)
}