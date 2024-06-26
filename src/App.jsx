import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Credits from './Pages/CreditPage/Credits.jsx'
import Home from './Pages/HomePage/Home.jsx'
import Error from './Pages/ErrorPage/Error.jsx'



// const router = createBrowserRouter([
//   {
//     path: "/PokeStats/",
//     element: <Home/>,
//     children: [
//       {
//         path: "/PokeStats/",
//         element: <Home/>,
//       },
//       {
//         path: "/PokeStats/Credits",
//         element: <Credits/>,
//       },
//     ]
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/PokeStats/',
    element: <Home />},
  {
    path: '/PokeStats/Credits',
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
      <Outlet/>
    </>
  )
}

export default App
