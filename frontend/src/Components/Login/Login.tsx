import { Card } from '../Atoms/atoms'

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-slate-100 px-4 py-10">
      <Card className="w-full max-w-md p-10">
        <h1 className="mb-8 text-center text-3xl font-semibold text-slate-900">Sign In</h1>
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              placeholder="••••••••"
              required
            />
          </div>
          <button className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Login
          </button>
        </form>
      </Card>
    </div>
  )
}
