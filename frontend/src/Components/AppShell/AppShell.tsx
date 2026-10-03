import { NavLink } from "react-router-dom";

export function AppShell({
  title,
  items,
  children,
}: {
  title: string;
  items: { to: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-72px)] overflow-hidden rounded-[2rem] bg-white shadow-inner shadow-slate-200/50">
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-slate-200 px-5 py-6">
        <p className="mb-4 text-md
         font-semibold uppercase tracking-[0.3em] text-slate-400">
          {title}
        </p>
        <nav className="space-y-2">
          {items.map((item) => (
            <NavLink
              key={item.to}
              end={item.to === ""}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-3xl px-5 py-4 text-base font-medium transition ${isActive
                  ? "bg-slate-300 text-slate-900"
                  : "text-slate-600 hover:bg-slate-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
