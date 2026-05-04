/*
Design philosophy: Cyber-Industrial Utility Minimalism. Preserve the supplied DougABomb logo as the flagship asset, use restrained cyan/red utility accents, and keep every section focused on helping customers choose the right Doug Oliver company.
*/
import { useMemo, useState } from "react";

const logoUrl = "/manus-storage/Dougabombversion1_554f3997.png";
const heroBackplate = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-hero-backplate-evLANe2JJfhUE4yqmT9f7s.webp";
const routingPanel = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-routing-panel-Zx8NqyQzKsSnzgWf3SVb3d.webp";
const cardTexture = "https://d2xsxph8kpxj0f.cloudfront.net/94907206/kz5YP7UVmQ8afKUVRR3tmL/dougabomb-card-texture-EV8XxrqZrLgxRhBgWfAM23.webp";

const serviceRoutes = [
  {
    id: "roofing",
    label: "Roofing Help",
    copy: "Leaks, storm damage, aging roofs, inspections, or full replacement.",
    cta: "Get Roofing Help",
    path: "Doug Oliver Development",
  },
  {
    id: "exterior",
    label: "Exterior Upgrades",
    copy: "Siding, windows, doors, and builder-led exterior improvements.",
    cta: "Explore Exterior Upgrades",
    path: "MGM Builders",
  },
  {
    id: "remodeling",
    label: "Remodeling / Additions",
    copy: "Improve layout, function, and value with owner-managed construction work.",
    cta: "Talk Through the Project",
    path: "MGM Builders",
  },
  {
    id: "savings",
    label: "Property Cost Savings",
    copy: "Waste/recycling invoice audits, hauler contract review, and savings analysis.",
    cta: "Check My Waste Savings",
    path: "TrashMax",
  },
  {
    id: "commercial",
    label: "Commercial / Multi-Property Help",
    copy: "Support for larger scopes, multiple properties, roofs, vendors, or service contracts.",
    cta: "Route My Portfolio",
    path: "DougABomb Concierge",
  },
  {
    id: "partner",
    label: "Partner With Doug",
    copy: "Referral partner, investor, manager, operator, or contractor connection.",
    cta: "Connect With Doug",
    path: "Doug Oliver",
  },
];

const companies = [
  {
    name: "Doug Oliver Development",
    href: "https://dougoliverdevelopment.com/",
    focus: "Roofing repair, roof replacement, inspections, and contractor routing for Central Florida homeowners and commercial property owners.",
    cta: "Visit Doug Oliver Development",
    tag: "Roofing",
  },
  {
    name: "MGM Builders",
    href: "https://mgmfla.com/",
    focus: "Owner-managed roofing, siding, windows, doors, remodeling, and additions from a licensed Orlando builder.",
    cta: "Visit MGM Builders",
    tag: "Build",
  },
  {
    name: "TrashMax",
    href: "https://mytrashmax.com/",
    focus: "Waste and recycling cost-reduction consulting for businesses, property managers, commercial properties, and multi-location operators.",
    cta: "Explore TrashMax Savings",
    tag: "Savings",
  },
];

const trustItems = [
  ["20+ Years", "Experience"],
  ["$250M+", "Roofing Project Involvement"],
  ["3 Brands", "One Starting Point"],
  ["Central Florida", "& Tampa Region"],
];

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState(serviceRoutes[0]);

  const formTitle = useMemo(() => {
    if (selectedRoute.id === "partner") return "Connect With Doug";
    return "Tell Doug What You Need";
  }, [selectedRoute]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCompanies = () => {
    document.getElementById("companies")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07101f]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="DougABomb home">
            <img src={logoUrl} alt="DougABomb" className="h-12 w-12 rounded-xl object-cover ring-1 ring-cyan-300/30" />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold tracking-[0.18em] text-white">DOUGABOMB</p>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">Doug Oliver Brand Hub</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 md:flex">
            <a href="#services" className="hover:text-cyan-200">Services</a>
            <a href="#companies" className="hover:text-cyan-200">Companies</a>
            <a href="#about" className="hover:text-cyan-200">About Doug</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={scrollToContact} className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_0_22px_rgba(103,232,249,0.25)] transition hover:bg-cyan-200">Tell Doug What You Need</button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#07101f] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-54" style={{ backgroundImage: `url(${heroBackplate})` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.18),transparent_36%),linear-gradient(90deg,rgba(7,16,31,0.96),rgba(7,16,31,0.78),rgba(7,16,31,0.9))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center border-l-4 border-red-500 bg-white/7 px-3 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100">One place to start with Doug Oliver.</p>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Not Sure Who to Call? Start With Doug.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              DougABomb is the central hub for Doug Oliver’s roofing, building, remodeling, and property-service brands across Central Florida. Tell us what you need fixed, built, replaced, improved, or reduced — and we’ll route you to the right team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToContact} className="rounded-md bg-cyan-300 px-6 py-4 text-base font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-200">Tell Doug What You Need</button>
              <button onClick={scrollToCompanies} className="rounded-md border border-white/20 bg-white/8 px-6 py-4 text-center text-base font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white/12">Explore the Companies</button>
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
          {trustItems.map(([label, value]) => (
            <div key={`${label}-${value}`} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="font-display text-2xl font-black text-slate-950">{label}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-slate-500">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#07101f] py-16 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${routingPanel})` }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker text-cyan-200">Services</p>
              <h2 className="section-title text-white">Choose the help you need.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Whether the job is a roof, exterior upgrade, remodel, property savings review, or larger commercial scope, DougABomb gives you one clear starting point.
              </p>
              <div className="mt-6 rounded-xl border border-cyan-300/20 bg-black/25 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Selected path</p>
                <p className="mt-2 font-display text-3xl font-black text-white">{selectedRoute.path}</p>
                <p className="mt-2 text-slate-300">{selectedRoute.copy}</p>
                <button onClick={scrollToContact} className="mt-5 rounded-md bg-cyan-300 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-cyan-200">{selectedRoute.cta}</button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceRoutes.map((route) => (
                <button key={route.id} onClick={() => setSelectedRoute(route)} className={`group rounded-xl border p-5 text-left transition hover:-translate-y-1 ${selectedRoute.id === route.id ? "border-cyan-300 bg-cyan-300/12 shadow-[0_0_28px_rgba(34,211,238,0.16)]" : "border-white/12 bg-white/7 hover:border-cyan-300/45"}`}>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Start here</span>
                  <h3 className="mt-2 font-display text-2xl font-black leading-tight text-white">{route.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{route.copy}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-cyan-200">{route.cta} →</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="section-kicker text-cyan-700">Companies</p>
            <h2 className="section-title text-slate-950">Three brands. One place to begin.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              If you already know the company you need, you can go straight there. If not, start with DougABomb and Doug’s team can point you in the right direction.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {companies.map((company) => (
              <article key={company.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-28 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${cardTexture})` }} />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">{company.tag}</p>
                  <h3 className="mt-2 font-display text-3xl font-black leading-none">{company.name}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-6 text-slate-300">{company.focus}</p>
                  <a href={company.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-md border border-cyan-300/40 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition group-hover:bg-cyan-300 group-hover:text-slate-950">{company.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <p className="section-kicker text-cyan-700">About Doug</p>
            <h2 className="section-title text-slate-950">One Clear Starting Point</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you already know which company you need or you simply know the problem you’re trying to solve, DougABomb gives you one place to start. Submit the request, choose your path, or contact Doug directly — and the right team can take it from there.
            </p>
            <button onClick={scrollToContact} className="mt-7 rounded-md bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-cyan-900">Tell Doug What You Need</button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Fix", "Roofing leaks, storm damage, exterior issues, and property problems that need attention."],
                ["Build", "Construction, remodeling, additions, windows, doors, siding, and owner-managed upgrades."],
                ["Replace", "Aging roofs, exterior systems, and service arrangements that no longer fit."],
                ["Reduce", "Waste and recycling costs for businesses, property managers, and commercial operators."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-display text-3xl font-black text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 pb-28 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <p className="section-kicker text-cyan-700">Contact</p>
            <h2 className="section-title text-slate-950">{formTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Tell us what you’re trying to fix, build, replace, improve, or save money on. We’ll review the request and route it to the right company or next conversation.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-base leading-7 text-slate-700">
                Not sure which option to choose? Pick “Not Sure” and Doug’s team will point you in the right direction.
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl" onSubmit={(event) => event.preventDefault()}>
            <div className="mb-6 border-l-4 border-red-500 pl-4">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Tell us where to start</p>
              <h3 className="mt-2 font-display text-3xl font-black">Send My Request</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">Name<input className="field-input" placeholder="First and last name" /></label>
              <label className="field-label">Phone<input className="field-input" placeholder="Best callback number" /></label>
              <label className="field-label sm:col-span-2">Email<input className="field-input" placeholder="Email address" /></label>
              <label className="field-label sm:col-span-2">What do you need help with?
                <select className="field-input" value={selectedRoute.id} onChange={(event) => setSelectedRoute(serviceRoutes.find((route) => route.id === event.target.value) || serviceRoutes[0])}>
                  {serviceRoutes.map((route) => <option key={route.id} value={route.id}>{route.label}</option>)}
                  <option value="not-sure">Not Sure</option>
                </select>
              </label>
              <label className="field-label">Property Type
                <select className="field-input" defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>Home</option>
                  <option>Commercial Property</option>
                  <option>Multi-Property / Portfolio</option>
                  <option>Business / Operations</option>
                </select>
              </label>
              <label className="field-label">City / ZIP<input className="field-input" placeholder="City or ZIP code" /></label>
              <label className="field-label sm:col-span-2">How urgent is this?
                <select className="field-input" defaultValue="">
                  <option value="" disabled>Choose timing</option>
                  <option>Emergency / As soon as possible</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>Planning ahead</option>
                </select>
              </label>
              <label className="field-label sm:col-span-2">Project Details<textarea className="field-input min-h-28 resize-y" placeholder="Tell Doug what is happening, where the property is, and what outcome you want." /></label>
            </div>
            <button className="mt-6 w-full rounded-md bg-cyan-300 px-5 py-4 font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-200">Send My Request</button>
            <p className="mt-4 text-center text-xs leading-5 text-slate-400">Doug’s team will review your request and help point you toward the right next step.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#07101f] px-4 py-8 text-white md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl font-black tracking-[0.16em]">DOUGABOMB</p>
          <p className="max-w-3xl text-sm text-slate-400">DougABomb is the central front door for Doug Oliver’s roofing, building, remodeling, and property-service brands.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#07101f]/96 p-3 text-white shadow-2xl backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <button onClick={scrollToCompanies} className="rounded-md border border-cyan-300/35 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.1em] text-cyan-100">Companies</button>
          <button onClick={scrollToContact} className="rounded-md bg-cyan-300 px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-950">Start</button>
        </div>
      </div>
    </main>
  );
}
