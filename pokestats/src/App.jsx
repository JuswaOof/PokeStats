
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Credits from './Pages/CreditPage/Credits.jsx'
import Home from './Pages/HomePage/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />},
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
