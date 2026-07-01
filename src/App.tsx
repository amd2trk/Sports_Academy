import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Teams from './Components/Teams/Teams'
import Members from './Components/Members/Members'
import Reservations from './Components/Reservations/Reservations'
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import NotFound from './Components/NotFound/NotFound'
import PersonalTab from './Components/PersonalTab/PersonalTab'
import Financial from './Components/Financial/Financial'
import Team from './Components/Team/Team'
import Reservation from './Components/Reservation/Reservation'
import Member from './Components/Member/Member'

function App() {

  let routes = createBrowserRouter([
    {path:"/" , element:<Layout/> , children:[
      {path:"/" , element: <Home/> , children:[
        {index:true , element: <PersonalTab/>},/* There can only be one index:true rpute and it cnat have children */
        {path:"financial" , element:<Financial/>}
      ]},
      {path:"teams" , element:<Teams/> ,children:[
        {path:"team",element: <Team/>}
    ]},
      {path:"members" , element:<Members/> , children:[
        {path:"member" , element:<Member/>}
      ]},
      {path:"reservations" , element:<Reservations/> , children:[
        {path:"reservation", element:<Reservation/>}
      ]
      },
      {path:"login", element:<Login/>},
      {path:"logout",element:<Logout/>},
      {path:"*", element:<NotFound/>}
    ]}
    
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
