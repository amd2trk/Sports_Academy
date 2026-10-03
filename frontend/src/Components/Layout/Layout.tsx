import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({ sport, setSport }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar sport={sport} setSport={setSport} />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <Outlet key={sport} />
      </div>
    </div>
  )
}
