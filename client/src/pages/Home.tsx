/*
Design philosophy: Cyber-Industrial Utility Minimalism. Preserve the supplied DougABomb logo as the flagship asset, use restrained cyan/red utility accents, and keep every section focused on fast contractor lead routing into NGauge.
*/
import { useMemo, useState } from "react";

const logoUrl = "/manus-storage/Dougabombversion1_554f3997.png";
const heroBackplate = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-hero-backplate-evLANe2JJfhUE4yqmT9f7s.webp";
const routingPanel = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-routing-panel-Zx8NqyQzKsSnzgWf3SVb3d.webp";
const cardTexture = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-card-texture-EV8XxrqZrLgxRhBgWfAM23.webp";

const serviceRoutes = [
  {
    id: "development",
    label: "Land, development, or site work",
    route: "Doug Oliver Development",
    tag: "DOD_SITE_DEVELOPMENT",
    note: "Best for development planning, land improvement, site prep, and contractor coordination.",
  },
  {
    id: "building",
    label: "Build, remodel, or construction project",
    route: "MGM Builders",
    tag: "MGM_BUILD_REMODEL",
    note: "Best for residential or commercial construction conversations that need builder follow-up.",
  },
  {
    id: "debris",
    label: "Dumpster, junk, or debris removal",
    route: "TrashMax",
    tag: "TRASHMAX_DEBRIS",
    note: "Best for roll-off dumpsters, cleanup, hauling, and debris removal requests.",
  },
  {
    id: "unknown",
    label: "Not sure yet — route me",
    route: "DougABomb Intake",
    tag: "DAB_ROUTING_NEEDED",
    note: "Best when the customer knows the problem but needs help choosing the right company.",
  },
];

const companies = [
  {
    name: "Doug Oliver Development",
    href: "https://dougoliverdevelopment.com/",
    focus: "Development, site preparation, land improvement, and project coordination.",
    cta: "Visit development site",
    tag: "Development",
  },
  {
    name: "MGM Builders",
    href: "https://mgmfla.com/",
    focus: "Construction, building projects, remodeling, and contractor-led execution.",
    cta: "Visit builder site",
    tag: "Build",
  },
  {
    name: "TrashMax",
    href: "https://mytrashmax.com/",
    focus: "Dumpsters, junk removal, construction debris, and cleanup support.",
    cta: "Visit cleanup site",
    tag: "Cleanup",
  },
];

const ctaRows = [
  ["Hero primary", "Tell Doug what you need", "Scrolls to NGauge intake with source=dougabomb_home_hero"],
  ["Hero call", "Call now", "Uses tracking-ready tel link with source=dougabomb_mobile_or_desktop_call"],
  ["Service cards", "Select route", "Preselects service path, route owner, and NGauge tag"],
  ["Company cards", "Visit existing site", "Links out to current company sites; no duplicate rebuild"],
  ["Final form", "Send request", "Embeddable NGauge form destination or GHL-native form"],
];

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState(serviceRoutes[3]);

  const formTitle = useMemo(() => {
    if (selectedRoute.id === "unknown") return "Tell Doug what you need";
    return `Start with ${selectedRoute.route}`;
  }, [selectedRoute]);

  const scrollToForm = () => {
    document.getElementById("ngauge-intake")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07101f]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="DougABomb home">
            <img src={logoUrl} alt="DougABomb" className="h-12 w-12 rounded-xl object-cover ring-1 ring-cyan-300/30" />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold tracking-[0.18em] text-white">DOUGABOMB</p>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">Contractor Routing Hub</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 md:flex">
            <a href="#route" className="hover:text-cyan-200">Services</a>
            <a href="#companies" className="hover:text-cyan-200">Companies</a>
            <a href="#ngauge-intake" className="hover:text-cyan-200">NGauge Intake</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+10000000000" className="rounded-md border border-cyan-300/35 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">Call Tracking Ready</a>
            <button onClick={scrollToForm} className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_0_22px_rgba(103,232,249,0.25)] transition hover:bg-cyan-200">Start Request</button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#07101f] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-54" style={{ backgroundImage: `url(${heroBackplate})` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.18),transparent_36%),linear-gradient(90deg,rgba(7,16,31,0.96),rgba(7,16,31,0.78),rgba(7,16,31,0.9))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center border-l-4 border-red-500 bg-white/7 px-3 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100">One page. Three companies. One clean route.</p>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Get the right Doug crew on the job faster.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              DougABomb is the fast contractor umbrella site for development, building, and cleanup requests. Customers pick what they need, NGauge captures the lead, and the right company gets the next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToForm} className="rounded-md bg-cyan-300 px-6 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-200">Tell Doug what you need</button>
              <a href="tel:+10000000000" className="rounded-md border border-white/20 bg-white/8 px-6 py-4 text-center text-base font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white/12">Call now</a>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="border-l border-cyan-300/50 pl-3"><strong className="block text-white">Fast MVP</strong>Static page ready.</div>
              <div className="border-l border-cyan-300/50 pl-3"><strong className="block text-white">NGauge ready</strong>Form and tags mapped.</div>
              <div className="border-l border-cyan-300/50 pl-3"><strong className="block text-white">No rebuilds</strong>Existing sites stay intact.</div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-8 rounded-[2rem] bg-cyan-300/10 blur-3xl" />
            <img src={logoUrl} alt="DougABomb cyber lion shield logo" className="relative w-full max-w-[560px] rounded-[1.35rem] border border-cyan-300/25 bg-[#050b15] object-contain p-3 shadow-2xl shadow-cyan-950/60" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-7 md:grid-cols-4 md:px-6">
          {[
            ["Primary job", "Route lead demand"],
            ["Build model", "Single-page MVP"],
            ["Form target", "NGauge / GHL embed"],
            ["Launch window", "48 hours"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
              <p className="mt-1 font-display text-2xl font-black text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="route" className="relative overflow-hidden bg-[#07101f] py-16 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${routingPanel})` }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker text-cyan-200">Service-routing logic</p>
              <h2 className="section-title text-white">Pick the problem. Route the lead.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                This is the page’s most important job. The customer should not need to understand the full company structure. They only need to choose the closest need and submit one clean request.
              </p>
              <div className="mt-6 rounded-xl border border-cyan-300/20 bg-black/25 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Current route</p>
                <p className="mt-2 font-display text-3xl font-black text-white">{selectedRoute.route}</p>
                <p className="mt-2 text-slate-300">{selectedRoute.note}</p>
                <p className="mt-4 inline-flex rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">NGauge tag: {selectedRoute.tag}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceRoutes.map((route) => (
                <button key={route.id} onClick={() => setSelectedRoute(route)} className={`group rounded-xl border p-5 text-left transition hover:-translate-y-1 ${selectedRoute.id === route.id ? "border-cyan-300 bg-cyan-300/12 shadow-[0_0_28px_rgba(34,211,238,0.16)]" : "border-white/12 bg-white/7 hover:border-cyan-300/45"}`}>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Route</span>
                  <h3 className="mt-2 font-display text-2xl font-black leading-tight text-white">{route.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{route.note}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-cyan-200">Select and continue →</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="section-kicker text-cyan-700">Company cards</p>
            <h2 className="section-title text-slate-950">Keep the three existing sites. Use DougABomb to send people to the right one.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This preview does not redesign the current company websites. It gives Doug a clean umbrella homepage that explains the options, captures routed leads, and preserves the existing destination sites.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {companies.map((company) => (
              <article key={company.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-28 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${cardTexture})` }} />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">{company.tag}</p>
                  <h3 className="mt-2 font-display text-3xl font-black leading-none">{company.name}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-6 text-slate-300">{company.focus}</p>
                  <a href={company.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-md border border-cyan-300/40 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition group-hover:bg-cyan-300 group-hover:text-slate-950">{company.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <p className="section-kicker text-cyan-700">CTA map</p>
            <h2 className="section-title text-slate-950">Every action has a conversion job.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The site is intentionally simple: call, route, submit, or visit the existing company site. There are no extra funnels, gimmicks, or custom development dependencies required for launch.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {ctaRows.map(([location, cta, behavior]) => (
              <div key={location} className="grid gap-2 border-b border-slate-100 p-5 last:border-b-0 md:grid-cols-[0.7fr_0.8fr_1.5fr]">
                <p className="font-black text-slate-950">{location}</p>
                <p className="font-semibold text-cyan-800">{cta}</p>
                <p className="text-sm leading-6 text-slate-600">{behavior}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ngauge-intake" className="bg-white py-16 pb-28 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <p className="section-kicker text-cyan-700">NGauge form placement</p>
            <h2 className="section-title text-slate-950">{formTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This block is designed to be replaced with the live NGauge or GHL form embed. The visible fields match the lead-routing logic, while hidden fields can carry page source, selected company path, campaign, and call-tracking metadata.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Hidden routing payload</p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-slate-500">selected_service</dt><dd className="font-bold text-slate-950">{selectedRoute.label}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">route_owner</dt><dd className="font-bold text-slate-950">{selectedRoute.route}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">ngauge_tag</dt><dd className="font-bold text-slate-950">{selectedRoute.tag}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">source</dt><dd className="font-bold text-slate-950">dougabomb_homepage</dd></div>
              </dl>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl" onSubmit={(event) => event.preventDefault()}>
            <div className="mb-6 border-l-4 border-red-500 pl-4">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Preview intake form</p>
              <h3 className="mt-2 font-display text-3xl font-black">Route this request</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">Name<input className="field-input" placeholder="First and last name" /></label>
              <label className="field-label">Phone<input className="field-input" placeholder="Best callback number" /></label>
              <label className="field-label sm:col-span-2">Email<input className="field-input" placeholder="Email address" /></label>
              <label className="field-label sm:col-span-2">What do you need?
                <select className="field-input" value={selectedRoute.id} onChange={(event) => setSelectedRoute(serviceRoutes.find((route) => route.id === event.target.value) || serviceRoutes[3])}>
                  {serviceRoutes.map((route) => <option key={route.id} value={route.id}>{route.label}</option>)}
                </select>
              </label>
              <label className="field-label sm:col-span-2">Project details<textarea className="field-input min-h-28 resize-y" placeholder="Location, timing, project type, and anything Doug should know." /></label>
            </div>
            <button className="mt-6 w-full rounded-md bg-cyan-300 px-5 py-4 font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-200">Send request to NGauge</button>
            <p className="mt-4 text-center text-xs leading-5 text-slate-400">Preview only. The launch build can swap this form for the live NGauge embed and preserve the same routing fields.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#07101f] px-4 py-8 text-white md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl font-black tracking-[0.16em]">DOUGABOMB</p>
          <p className="text-sm text-slate-400">Single-page MVP preview: routing, call tracking, company cards, and NGauge-ready intake.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#07101f]/96 p-3 text-white shadow-2xl backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:+10000000000" className="rounded-md border border-cyan-300/35 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.1em] text-cyan-100">Call</a>
          <button onClick={scrollToForm} className="rounded-md bg-cyan-300 px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-950">Start</button>
        </div>
      </div>
    </main>
  );
}
