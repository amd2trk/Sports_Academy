import { Outlet } from 'react-router-dom'
import { AppShell } from '../AppShell/AppShell'

export default function Home() {
  return (
    <div className="space-y-6">
      <AppShell
        title="Tabs"
        items={[
          { to: '', label: 'Personal Info' },
          { to: 'financial', label: 'Financial' },
        ]}
      >
        <Outlet />
      </AppShell>
    </div>
  )
}
