import { NavLink, Outlet } from 'react-router-dom'

export default function Reservations() {
  return (
    <>
     <div className='flex gap-4 m-4 p-2'>
        <div className='border border-black w-1/4 p-2'>
          <h2 className='text-xl '>Tabs</h2>
          <ul>
            <li className='p-2'><NavLink to="reservation">Team 1</NavLink></li>
            <li className='p-2'><NavLink to="reservation">Team 2</NavLink></li>
          </ul>
        </div>
        <div className='border border-black w-3/4'>
        <Outlet></Outlet>
        </div>
      </div> 
    </>
  )
}
