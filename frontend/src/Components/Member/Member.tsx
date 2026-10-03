import { useParams } from 'react-router-dom'
import { Card, SectionTitle } from '../Atoms/atoms'
import type { memberType } from '@/Interfaces/memberType';

export default function Member() {
  const { memberId } = useParams()
  
  const members: memberType[] = [
    { id: '1', name: 'Ahmed Hassan', attendenace: 85, status: 'active' },
    { id: '2', name: 'Omar Mohamed', attendenace: 92, status: 'active' },
    { id: '3', name: 'Mohamed Ali', attendenace: 78, status: 'inactive' },
    { id: '4', name: 'Mostafa Ibrahim', attendenace: 88, status: 'active' },
    { id: '5', name: 'Sara Ahmed', attendenace: 95, status: 'active' },
    { id: '6', name: 'Layla Hassan', attendenace: 80, status: 'active' },
  ]

  const member = members.find((m) => m.id === memberId)

  if (!member) {
    return (
      <div className="space-y-6">
        <SectionTitle>Member Detail</SectionTitle>
        <Card className="p-6">Member not found</Card>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      <SectionTitle>Member Detail</SectionTitle>
      <Card className="p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Member ID</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{member.id}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Name</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{member.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Attendance</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{member.attendenace}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Status</p>
            <p className="mt-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 inline-block">{member.status}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
