
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Credits from './Pages/CreditPage/Credits.jsx'
import HomePage from '../src/Pages/HomePage/HomePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />},
  {
    path: '/Credits',
    element: <Credits />,
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
