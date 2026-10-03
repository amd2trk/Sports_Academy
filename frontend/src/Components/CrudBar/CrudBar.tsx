import { Plus, Edit3, Trash2, RefreshCw } from 'lucide-react'

export default function CrudBar({
  onCreate,
  onEdit,
  onDelete,
  onRefresh,
}: {
  onCreate?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onRefresh?: () => void
}) {
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onCreate}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
      >
        <Plus size={14} />
        Create
      </button>

      <button
        onClick={onEdit}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition"
      >
        <Edit3 size={14} />
        Edit
      </button>

      <button
        onClick={onDelete}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition"
      >
        <Trash2 size={14} />
        Delete
      </button>

      <button
        onClick={onRefresh}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition"
      >
        <RefreshCw size={14} />
        Refresh
      </button>
    </div>
  )
}
