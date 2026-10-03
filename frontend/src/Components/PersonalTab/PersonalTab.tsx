
import { Card, SectionTitle } from '../Atoms/atoms'

export default function PersonalTab() {
  return (
    <div className="space-y-6">
      <SectionTitle>Personal Profile</SectionTitle>
      <Card className="p-6">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            {(
              [
                ['Name', 'Ahmed'],
                ['Age', '23'],
                ['Position', 'Coach'],
                ['Sport', 'Swimming'],
                ['Teams under', '2'],
                ['Athletes under', '16'],
              ] as [string, string][]
            ).map(([label, value]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-40 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {label}
                </span>
                <span className="text-base font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Profile"
              className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-lg shadow-slate-200"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
