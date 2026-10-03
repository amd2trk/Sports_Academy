import CoverImage from '/Cover.jpg'
import { NavLink } from 'react-router-dom'

export type Sport = "swimming" | "basketball" | "tennis";


const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/teams', label: 'Teams' },
  { to: '/members', label: 'Members' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/finances', label: 'Finances' },
  { to: '/login', label: 'Login', end: true },
]
const SPORTS: { key: Sport; emoji: string; label: string }[] = [
  { key: "swimming", emoji: "🏊", label: "Swimming" },
  { key: "basketball", emoji: "🏀", label: "Basketball" },
  { key: "tennis", emoji: "🎾", label: "Tennis" },
];
export default function Navbar({ sport, setSport }) {
  return (
    <header className="sticky top-0 z-50 overflow-hidden">
      <img
        src={CoverImage}
        alt="Dashboard background"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 border-b border-slate-200/30  shadow-sm shadow-slate-900/10 backdrop-blur-xl">
        <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-900">Sports Academy</p>
              <h1 className="text-xl font-semibold text-slate-600">Management Dashboard</h1>
            </div>
          </div>
          <div className='flex items-center gap-1 bg-black/10 backdrop-blur-sm rounded-full px-2 py-1 mx-auto'>
            {SPORTS.map(({ key: sportKey, emoji, label }) => 
            <button key={sportKey} title={label} onClick={() => {
              setSport(sportKey)
              console.log(sportKey)
            }} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                sport === sportKey
                  ? "bg-white shadow text-gray-800"
                  : "text-gray-700 hover:bg-white/50"
              }`}>
              <span>{emoji}</span>
              <span className="hidden sm:inline">{label}</span>
              </button>
              
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 md:w-1/3 w-full  ">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-200 text-slate-950 shadow-sm'
                      : 'text-slate-800 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
            to="/logout"
            end
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-200 text-slate-950 shadow-sm'
                  : 'border border-slate-300/50 bg-white/80 text-slate-900 hover:border-slate-400 hover:bg-slate-100'
              }`
            }
          >
            Logout
           </NavLink>
          </div>
          
        </div>
      </div>
    </header>
    
  )
}
