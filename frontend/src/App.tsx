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
import Member from './Components/Member/Member'
import Finances from './Components/Finances/Finances'
import { useState } from 'react'
import type { Sport } from './Components/Navbar/Navbar'

function App() {
  const [sport, setSport] = useState<Sport>("swimming");

  const routes = createBrowserRouter([
    {path:"/" , element:<Layout sport={sport} setSport={setSport}/> , children:[
      {path:"/" , element: <Home/> , children:[
        {index:true , element: <PersonalTab/>},/* There can only be one index:true rpute and it cnat have children */
        {path:"financial" , element:<Financial />}
      ]},
      {path:"teams" , element:<Teams/> ,children:[
        {path:":teamId",element: <Team />}
    ]},
      {path:"members" , element:<Members/> , children:[
        {path:":memberId" , element:<Member/>}
      ]},
      {path:"reservations" , element:<Reservations/>},
      {path:"finances" , element:<Finances/>},
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
