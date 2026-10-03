import { Outlet } from 'react-router-dom'
import { AppShell } from '../AppShell/AppShell'

export default function Members() {
  const members: {id:string , name:string}[] = [
    { id: '1', name: 'Ahmed Hassan' },
    { id: '2', name: 'Omar Mohamed' },
    { id: '3', name: 'Mohamed Ali' },
    { id: '4', name: 'Mostafa Ibrahim' },
    { id: '5', name: 'Sara Ahmed' },
    { id: '6', name: 'Layla Hassan' },
  ]

  const items = members.map((member) => ({
    to: member.id,
    label: member.name,
  }))

  return (
    <div className="space-y-6">
        <AppShell
        title="Members"
        items={items}>
        <Outlet />
      </AppShell>
    </div>
  )
}
