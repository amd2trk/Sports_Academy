import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='flex gap-4 m-4 p-2'>
        <div className='border border-black w-1/4 p-2'>
          <h2 className='text-xl '>Tabs</h2>
          <ul>
            <li className='p-2'><NavLink to="">Personal Tab</NavLink></li>
            <li className='p-2'><NavLink to="financial">Financial</NavLink></li>
          </ul>
        </div>
        <div className='border border-black w-3/4'>
        <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}
