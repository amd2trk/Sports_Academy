
import { useParams } from 'react-router-dom'
import { Card, SectionTitle } from '../Atoms/atoms'

export default function Team() {
  const { teamId } = useParams()

  const teams = [
    {
      id: '1',
      name: 'Red Raptors',
      coach: 'Tarek Mansour',
      league: 'Premier League',
      record: '12-3',
      members: [
        { name: 'Ahmed Hassan', attendance: 92, status: 'Active' },
        { name: 'Omar Mohamed', attendance: 88, status: 'Active' },
        { name: 'Sara Ahmed', attendance: 95, status: 'Active' },
      ],
    },
    {
      id: '2',
      name: 'Blue Falcons',
      coach: 'Mina Sharif',
      league: 'Elite League',
      record: '10-5',
      members: [
        { name: 'Mostafa Ibrahim', attendance: 90, status: 'Active' },
        { name: 'Layla Hassan', attendance: 85, status: 'Active' },
        { name: 'Hussein Ali', attendance: 82, status: 'Active' },
      ],
    },
    {
      id: '3',
      name: 'Green Wolves',
      coach: 'Sara Nabil',
      league: 'Champion League',
      record: '8-7',
      members: [
        { name: 'Amr Salah', attendance: 78, status: 'Active' },
        { name: 'Mariam Fathy', attendance: 84, status: 'Active' },
        { name: 'Youssef Adel', attendance: 80, status: 'Injured' },
      ],
    },
  ]

  const team = teams.find((t) => t.id === teamId)

  if (!team) {
    return (
      <div className="space-y-6">
        <SectionTitle>Team Detail</SectionTitle>
        <Card className="p-6">Team not found</Card>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      <SectionTitle>Team Details</SectionTitle>
      {team.members.map((member) => (
        <Card className="p-6">
          <div className="space-y-4">
            <div key={team.name} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-semibold text-slate-900">{member.name}</span>
              <span className="text-sm text-slate-500">Attendance: {member.attendance}%</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{member.status}</span>
            </div>
          </div>
        </Card>
      ))}

    </div>
  )
}
