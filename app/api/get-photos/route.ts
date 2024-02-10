import photoData from '@/data/photoData'

export const GET = async (_request: Request) => Response.json(photoData)