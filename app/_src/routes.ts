type routeType = {
  name: string,
  path: string
}

const routes: Array<routeType> = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Forgot Password', path: '/forgot-password' },
  { name: 'Sign In', path: '/sign-in' },
  { name: 'Sign Up', path: '/sign-up' },
  { name: 'Users/[userId]', path: '/users/1' },
  { name: 'Photos', path: '/photos' },
  { name: 'Photos/[photoId]', path: '/photos/1' },
  { name: 'PrivatePage', path: '/private' },
  { name: 'Get photos via API', path: '/api/get-photos' }
]

export default routes