import { Outlet } from 'react-router-dom'
import { AppShell } from '../AppShell/AppShell'

export default function Teams() {
   const teams: {id:string , name:string}[] = [
    { id: '1', name: 'A' },
    { id: '2', name: 'B' },
    { id: '3', name: 'C' },
  ]

  const items = teams.map((team) => ({
    to: team.id,
    label: team.name,
  }))
  return (
    <div className="space-y-6">
      <AppShell
        title="Teams"
        items={items}
      >
        <Outlet />
      </AppShell>
    </div>
  )
}
