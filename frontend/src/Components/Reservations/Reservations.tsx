import Schedule from '../Schedule/Schedule'
import type { PoolReservation } from '../Schedule/Schedule'

const PALETTE = [
  'rgba(59,130,246,0.82)',
  'rgba(139,92,246,0.82)',
  'rgba(249,115,22,0.82)',
  'rgba(34,197,94,0.82)',
  'rgba(236,72,153,0.82)',
  'rgba(6,182,212,0.82)',
]

const INITIAL_RESERVATIONS: PoolReservation[] = [
  {
    id: 1,
    team: 'Team 1',
    laneStart: 1,
    laneEnd: 3,
    startH: 16,
    startM: 30,
    endH: 17,
    endM: 30,
    coaches: 3,
    athletes: 40,
    paid: true,
    color: PALETTE[0],
  },
  {
    id: 2,
    team: 'Team 2',
    laneStart: 4,
    laneEnd: 6,
    startH: 18,
    startM: 0,
    endH: 19,
    endM: 0,
    coaches: 2,
    athletes: 30,
    paid: false,
    color: PALETTE[1],
  },
]

export default function Reservations() {
  return (
    <div className="space-x-6 space-y-6">
        <Schedule initialReservations={INITIAL_RESERVATIONS} />
    </div>
  )
}
