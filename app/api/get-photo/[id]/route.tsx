import photoData from '@/app/_system/photoData'

export const GET = async (_request: Request, { params }: { params: { id: string }}) => {
	const photo = photoData.find(
		photo => photo.id === params.id
	)

	return Response.json(photo)
}