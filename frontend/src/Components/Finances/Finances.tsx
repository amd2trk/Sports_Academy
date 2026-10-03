import { Outlet } from "react-router-dom";
import { AppShell } from "../AppShell/AppShell";

export default function Finances() {
    const items=[
        {to: "wages" , label:"Wages"},
        {to: "reservationsMoney" , label:"Reservations"}
    ]
  return (
    <>
      <div className="space-y-6">
        <AppShell
        title="Finances"
        items={items}>
        <Outlet />
      </AppShell>
    </div>
    </>
  )
}
