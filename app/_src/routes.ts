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
  { name: 'Users', path: '/users/1' }
]

export default routes