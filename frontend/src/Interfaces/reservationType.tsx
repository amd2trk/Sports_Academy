export interface reservationType {
  id: number
  label: string
  laneStart: number
  laneEnd: number
  startHour: number
  startMinute: number
  endHour: number
  endMinute: number
  athletes: number
  coaches: number
  paid: boolean
  receipt: boolean
}
