
import { Card, SectionTitle } from '../Atoms/atoms'

export default function Financial() {
  return (
    <div className="space-y-6">
      <SectionTitle>Financial Overview</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Attendance</p>
          <p className="text-2xl font-semibold text-slate-900">85%</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Salary</p>
          <p className="text-2xl font-semibold text-slate-900">60,000 EGP</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-2">Salary paid</p>
          <p className="text-2xl font-semibold text-emerald-600">Yes</p>
        </Card>
      </div>
    </div>
  )
}
