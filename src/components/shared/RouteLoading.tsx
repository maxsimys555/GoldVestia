export function RouteLoading() {
  return (
    <div className="relative overflow-hidden bg-[#070707] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="h-4 w-40 animate-pulse rounded-full bg-amber-200/20" />
        <div className="mt-8 h-12 max-w-2xl animate-pulse rounded-2xl bg-white/10 sm:h-16" />
        <div className="mt-5 h-5 max-w-xl animate-pulse rounded-full bg-white/8" />
        <div className="mt-3 h-5 max-w-lg animate-pulse rounded-full bg-white/8" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-56 animate-pulse rounded-[2rem] border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
