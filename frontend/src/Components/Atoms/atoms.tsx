import React from "react";

export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span className="text-amber-400 tracking-tight text-base">
      {"★".repeat(rating)}
      <span className="text-gray-300">{"★".repeat(max - rating)}</span>
    </span>
  );
}

export function Badge({
  ok,
  trueLabel = "Paid",
  falseLabel = "Unpaid",
}: {
  ok: boolean;
  trueLabel?: string;
  falseLabel?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
        ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-600"
      }`}
    >
      {ok ? trueLabel : falseLabel}
    </span>
  );
}

export function AttendanceBar({ value }: { value: number }) {
  const color =
    value >= 90 ? "bg-emerald-500" : value >= 70 ? "bg-amber-400" : "bg-rose-400";

  return (
    <div className="flex items-center gap-3">
      <div className="h-2.5 w-28 overflow-hidden rounded-full bg-slate-200">
        <div className={`${color} h-full rounded-full`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-sm text-slate-600 tabular-nums">{value}%</span>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-[1.75rem] border border-slate-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold text-slate-900 mb-5">{children}</h2>;
}

export function DataTable<T extends Record<string, React.ReactNode>>({
  columns,
  rows,
}: {
  columns: { key: keyof T; label: string }[];
  rows: T[];
}) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-500">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-5 py-3 text-left text-xs uppercase tracking-[0.24em]"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-5 py-4 align-top">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
