import { useState } from 'react'
import { Pencil, Trash2, X } from 'lucide-react'

const START_H = 8
const END_H = 24
const TOTAL_MIN = (END_H - START_H) * 60
const LANE_COUNT = 8
const LANE_H = 60

export type PoolReservation = {
  id: number
  team: string
  laneStart: number
  laneEnd: number
  startH: number
  startM: number
  endH: number
  endM: number
  coaches: number
  athletes: number
  paid: boolean
  color: string
}

const PALETTE = [
  'rgba(59,130,246,0.82)',
  'rgba(139,92,246,0.82)',
  'rgba(249,115,22,0.82)',
  'rgba(34,197,94,0.82)',
  'rgba(236,72,153,0.82)',
  'rgba(6,182,212,0.82)',
]

function toPct(h: number, m: number) {
  return (((h - START_H) * 60 + m) / TOTAL_MIN) * 100
}

function fmt(h: number, m: number) {
  const p = h >= 12 ? h < 24 ? 'PM' : 'AM' :'AM'
  const hh = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${hh}:${String(m).padStart(2, '0')} ${p}`
}

function parseTime(t: string): [number, number] {
  const [h, m] = t.split(':').map(Number)
  return [h, m]
}

function toTimeStr(h: number, m: number) {
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

const HOUR_MARKS = Array.from({ length: END_H - START_H + 1 }, (_, i) => START_H + i)

type ResForm = {
  team: string
  laneStart: number
  laneEnd: number
  startTime: string
  endTime: string
  coaches: number
  athletes: number
  paid: boolean
}

const BLANK_FORM: ResForm = {
  team: '',
  laneStart: 1,
  laneEnd: 3,
  startTime: '16:00',
  endTime: '17:00',
  coaches: 2,
  athletes: 20,
  paid: true,
}

const INPUT =
  'w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all bg-white'

function ReservationFormPanel({
  title,
  form,
  setForm,
  onSave,
  onCancel,
}: {
  title: string
  form: ResForm
  setForm: (f: ResForm) => void
  onSave: () => void
  onCancel: () => void
}) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 w-72">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <button onClick={onCancel} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
          <X size={14} />
        </button>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
            Team Name
          </label>
          <input
            className={INPUT}
            value={form.team}
            onChange={(e) => setForm({ ...form, team: e.target.value })}
            placeholder="e.g. Team 1"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              Lane From
            </label>
            <select
              className={INPUT}
              value={form.laneStart}
              onChange={(e) => setForm({ ...form, laneStart: Number(e.target.value) })}
            >
              {Array.from({ length: LANE_COUNT }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              Lane To
            </label>
            <select
              className={INPUT}
              value={form.laneEnd}
              onChange={(e) => setForm({ ...form, laneEnd: Number(e.target.value) })}
            >
              {Array.from({ length: LANE_COUNT }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              Start
            </label>
            <input
              className={INPUT}
              type="time"
              value={form.startTime}
              onChange={(e) => setForm({ ...form, startTime: e.target.value })}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              End
            </label>
            <input
              className={INPUT}
              type="time"
              value={form.endTime}
              onChange={(e) => setForm({ ...form, endTime: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              Coaches
            </label>
            <input
              className={INPUT}
              type="number"
              min={0}
              value={form.coaches}
              onChange={(e) => setForm({ ...form, coaches: Number(e.target.value) })}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
              Athletes
            </label>
            <input
              className={INPUT}
              type="number"
              min={0}
              value={form.athletes}
              onChange={(e) => setForm({ ...form, athletes: Number(e.target.value) })}
            />
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
            Payment
          </label>
          <div className="flex gap-2">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                type="button"
                onClick={() => setForm({ ...form, paid: v })}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  form.paid === v
                    ? v
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                      : 'bg-rose-50 border-rose-400 text-rose-600'
                    : 'border-gray-200 text-gray-400'
                }`}
              >
                {v ? 'Paid' : 'Unpaid'}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <button
            onClick={onCancel}
            className="flex-1 py-1.5 rounded-lg border border-gray-300 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

let nextId = 10

export default function Schedule({
  initialReservations = [],
  onReservationsChange,
}: {
  initialReservations?: PoolReservation[]
  onReservationsChange?: (reservations: PoolReservation[]) => void
}) {
  const [reservations, setReservations] = useState<PoolReservation[]>(initialReservations)
  const [panel, setPanel] = useState<{ mode: 'add' | 'edit'; res?: PoolReservation } | null>(null)
  const [form, setForm] = useState<ResForm>(BLANK_FORM)
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleReservationsChange = (newReservations: PoolReservation[]) => {
    setReservations(newReservations)
    onReservationsChange?.(newReservations)
  }

  const totalH = LANE_COUNT * LANE_H

  function openAdd() {
    setForm(BLANK_FORM)
    setPanel({ mode: 'add' })
    setActiveId(null)
  }

  function openEdit(res: PoolReservation) {
    setForm({
      team: res.team,
      laneStart: res.laneStart,
      laneEnd: res.laneEnd,
      startTime: toTimeStr(res.startH, res.startM),
      endTime: toTimeStr(res.endH, res.endM),
      coaches: res.coaches,
      athletes: res.athletes,
      paid: res.paid,
    })
    setPanel({ mode: 'edit', res })
    setActiveId(null)
  }

  function save() {
    if (!form.team.trim()) return
    const [startH, startM] = parseTime(form.startTime)
    const [endH, endM] = parseTime(form.endTime)
    const laneStart = Math.min(form.laneStart, form.laneEnd)
    const laneEnd = Math.max(form.laneStart, form.laneEnd)

    if (panel?.mode === 'add') {
      const id = nextId++
      const newReservation: PoolReservation = {
        id,
        team: form.team,
        laneStart,
        laneEnd,
        startH,
        startM,
        endH,
        endM,
        coaches: form.coaches,
        athletes: form.athletes,
        paid: form.paid,
        color: PALETTE[id % PALETTE.length],
      }
      handleReservationsChange([...reservations, newReservation])
    } else if (panel?.res) {
      const updated = reservations.map((r) =>
        r.id !== panel.res!.id
          ? r
          : {
              ...r,
              team: form.team,
              laneStart,
              laneEnd,
              startH,
              startM,
              endH,
              endM,
              coaches: form.coaches,
              athletes: form.athletes,
              paid: form.paid,
            }
      )
      handleReservationsChange(updated)
    }
    setPanel(null)
  }

  function del(id: number) {
    const filtered = reservations.filter((r) => r.id !== id)
    handleReservationsChange(filtered)
    setActiveId(null)
  }

  return (
    <div className="space-y-3">
      {/* Add button */}
      <div className="flex justify-end">
        <button
          onClick={openAdd}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow"
        >
          + Add Reservation
        </button>
      </div>

      <div className="flex gap-4 items-start">
        {/* Pool */}
        <div className="flex-1 rounded-[2rem] overflow-hidden shadow-2xl" style={{ border: '10px solid #cbd5e1' }}>
          {/* Top deck + time labels */}
          <div className="bg-slate-200 border-b-4 border-slate-300 ps-3 pe-3">
            <div className="flex justify-center pb-1 pt-3 ms-5 me-5 ">
              <div className="relative flex-1 h-6">
                {HOUR_MARKS.map((h) => (
                  <span
                    key={h}
                    className="absolute text-[10px] font-bold text-slate-500 -translate-x-1/2 whitespace-nowrap"
                    style={{ left: `${toPct(h, 0)}%` }}
                  >
                    {fmt(h, 0)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Water */}
          <div className="flex" style={{ background: 'linear-gradient(170deg, #38bdf8 0%, #0284c7 60%, #075985 100%)' }}>
            {/* Lane numbers */}
            <div className="w-14 shrink-0 flex flex-col border-r-2 border-white/30">
              {Array.from({ length: LANE_COUNT }, (_, i) => i + 1).map((lane) => (
                <div key={lane} className="flex items-center justify-center" style={{ height: LANE_H }}>
                  <div className="w-7 h-7 rounded-full bg-white/25 border border-white/50 flex items-center justify-center text-white text-xs font-bold select-none">
                    {lane}
                  </div>
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="relative flex-1" style={{ height: totalH }}>
              {/* Hour lines */}
              {HOUR_MARKS.map((h) => (
                <div
                  key={h}
                  className="absolute top-0 bottom-0 border-l border-white/20"
                  style={{ left: `${toPct(h, 0)}%` }}
                />
              ))}

              {/* Lane ropes */}
              {Array.from({ length: LANE_COUNT - 1 }, (_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-0.75 rounded-full opacity-60"
                  style={{
                    top: (i + 1) * LANE_H - 1,
                    background:
                      i % 2 === 0
                        ? 'repeating-linear-gradient(90deg,#fbbf24 0 12px,transparent 12px 18px)'
                        : 'repeating-linear-gradient(90deg,#f87171 0 12px,transparent 12px 18px)',
                  }}
                />
              ))}

              {/* Lane tint */}
              {Array.from({ length: LANE_COUNT }, (_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 pointer-events-none"
                  style={{
                    top: i * LANE_H,
                    height: LANE_H,
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                  }}
                />
              ))}

              {/* Reservations */}
              {reservations.map((res) => {
                const left = toPct(res.startH, res.startM)
                const width = toPct(res.endH, res.endM) - left
                const top = (res.laneStart - 1) * LANE_H
                const height = (res.laneEnd - res.laneStart + 1) * LANE_H
                const active = activeId === res.id

                return (
                  <div
                    key={res.id}
                    className="absolute rounded-2xl overflow-hidden border border-white/40 cursor-pointer select-none"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      top: top + 6,
                      height: height - 12,
                      backgroundColor: res.color,
                      backdropFilter: 'blur(4px)',
                      zIndex: active ? 30 : 20,
                    }}
                    onClick={() => setActiveId(active ? null : res.id)}
                  >
                    <div className="p-2.5 flex flex-col justify-center gap-0.5 h-full">
                      <p className="text-white font-bold text-sm leading-tight drop-shadow">{res.team}</p>
                      <p className="text-white/80 text-xs">
                        {fmt(res.startH, res.startM)} – {fmt(res.endH, res.endM)}
                      </p>
                      <p className="text-white/70 text-xs">
                        {res.athletes} athletes · {res.coaches} coaches
                      </p>
                      <span
                        className={`mt-1 self-start text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          res.paid ? 'bg-emerald-400/80 text-white' : 'bg-rose-400/80 text-white'
                        }`}
                      >
                        {res.paid ? '✓ Paid' : '✗ Unpaid'}
                      </span>
                    </div>
                    {/* Action overlay */}
                    {active && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openEdit(res)
                          }}
                          className="p-2 rounded-xl bg-white/90 text-blue-600 hover:bg-white transition-colors shadow"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            del(res.id)
                          }}
                          className="p-2 rounded-xl bg-white/90 text-red-500 hover:bg-white transition-colors shadow"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom deck */}
          <div className="bg-slate-200 h-5 border-t-4 border-slate-300" />
        </div>

        {/* Side panel (add / edit form) */}
        {panel && (
          <div className="shrink-0">
            <ReservationFormPanel
              title={panel.mode === 'add' ? 'New Reservation' : 'Edit Reservation'}
              form={form}
              setForm={setForm}
              onSave={save}
              onCancel={() => setPanel(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
