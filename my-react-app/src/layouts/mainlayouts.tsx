const MainLayout = () => {
  const navItems = [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Analytics", icon: "analytics" },
    { label: "Projects", icon: "folder" },
    { label: "Tasks", icon: "task_alt" },
    { label: "Settings", icon: "settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white">
              <span className="material-symbols-outlined text-[1.4rem]">dashboard</span>
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500">My Company</p>
              <h1 className="text-lg font-semibold text-slate-900">Main Dashboard</h1>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
              Reports
            </button>
            <button className="rounded-2xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
              New Project
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-6 lg:flex-row lg:px-8">
        <aside className="hidden w-full max-w-xs flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm lg:flex">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Menu</p>
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center gap-3 rounded-3xl border border-transparent px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-200 hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-slate-500">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-700">Today</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">72</p>
            <p className="text-sm text-slate-500">Tasks completed</p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Dashboard</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900">Overview</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  Weekly
                </button>
                <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Monthly
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Revenue", value: "$24.8K", icon: "currency_exchange" },
                { label: "Users", value: "4.3K", icon: "groups" },
                { label: "Growth", value: "18%", icon: "trending_up" },
                { label: "Bugs", value: "12", icon: "bug_report" },
              ].map((card) => (
                <article key={card.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">{card.label}</p>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-sm">
                      <span className="material-symbols-outlined text-xl">{card.icon}</span>
                    </span>
                  </div>
                  <p className="mt-5 text-3xl font-semibold text-slate-900">{card.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">Latest activity</h3>
                <span className="text-sm text-slate-500">Updated 2m ago</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { title: "New user signups", detail: "1.2K this week" },
                  { title: "Server response time", detail: "120ms average" },
                  { title: "Feature requests", detail: "24 pending" },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-50 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Project status</h3>
              <div className="mt-5 space-y-4">
                {[
                  { name: "Design", progress: 80 },
                  { name: "Development", progress: 60 },
                  { name: "QA", progress: 45 },
                ].map((project) => (
                  <div key={project.name}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <p>{project.name}</p>
                      <p>{project.progress}%</p>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white/95 px-4 py-5 text-sm text-slate-500">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 My React App. All rights reserved.</p>
          <p>Built with Tailwind and Material Symbols.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
