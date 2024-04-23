
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Credits from './Pages/CreditPage/Credits.jsx'
import Home from './Pages/HomePage/Home.jsx'
import Error from '../src/Pages/ErrorPage/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />},
  {
    path: '/Credits',
    element: <Credits />,
  },
  {
    path: '*',
    element: <Error/>,
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
