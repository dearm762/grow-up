import routeType from '@/types/routeType'

const routes: Array<routeType> = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Forgot Password', path: '/auth/forgot-password' },
	{ name: 'Sign In', path: '/auth/sign-in' },
	{ name: 'Sign Up', path: '/auth/sign-up' },
	{ name: 'Users/[userId]', path: '/users/1' },
	{ name: 'Photos', path: '/photos' },
	{ name: 'Photos/[photoId]', path: '/photos/1' },
	{ name: 'Get photos via API', path: '/api/get-photos' },
]

export default routes