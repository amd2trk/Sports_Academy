import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <ul className='flex w-full bg-center bg-no-repeat p-4 object-cover ' style={{backgroundImage: "url('/Cover.jpg')"}}>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="">Home</NavLink></li>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="teams">Teams</NavLink></li>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="members">Members</NavLink></li>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="reservations">Reservations</NavLink></li>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="login">Login</NavLink></li>
        <li className="p-2 flex-1 hover:text-red-600"><NavLink to="logout">Logout</NavLink></li>
      </ul>
    </>
  )
}
