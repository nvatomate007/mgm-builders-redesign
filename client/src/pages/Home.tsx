/*
 * MGM BUILDERS LLC — Homepage
 * Design Philosophy: Warm Craftsman Authority
 * Sections: Nav | Hero | Trust Bar | Services | About | Testimonials | CTA Band | Contact | Footer
 * Colors: MGM Red oklch(0.42 0.19 22) | Slate oklch(0.22 0.03 240) | Off-white oklch(0.985 0.003 90)
 * Typography: Playfair Display (headings) + Source Sans 3 (body)
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
  Phone, Menu, X, Star, Shield, Award, Clock, CheckCircle,
  Home, Layers, Wind, DoorOpen, Hammer, Wrench, ChevronRight,
  MapPin, Mail
} from "lucide-react";

const HERO_FINISHED = "/manus-storage/mgm-hero-finished-home_c40ed560.png";
const HERO_BLUEPRINT = "/manus-storage/mgm-hero-blueprint_17121541.png";
const DOUGABOMB_LOGO = "/manus-storage/DougabombLogoMaster_6db1101c.png";

const SERVICES = [
  { icon: Home, title: "Roofing", desc: "Full roof replacements, repairs, and inspections using top-tier materials rated for Florida's climate." },
  { icon: Layers, title: "Siding", desc: "Durable vinyl, fiber cement, and composite siding installed to protect and beautify your home." },
  { icon: Wind, title: "Windows", desc: "Energy-efficient, impact-rated window installations that reduce utility costs and enhance curb appeal." },
  { icon: DoorOpen, title: "Doors", desc: "Entry doors, patio doors, and impact doors — installed with precision and a lifetime of performance in mind." },
  { icon: Hammer, title: "Remodeling", desc: "Kitchen, bath, and interior remodeling that transforms your space without disrupting your life." },
  { icon: Wrench, title: "General Contracting", desc: "Full-scope building and renovation projects managed by a State Certified Building Contractor." },
];

const TESTIMONIALS = [
  { name: "James R.", location: "Orlando, FL", stars: 5, text: "MGM Builders replaced our entire roof after the hurricane and had it done in two days. Clean, professional, and the crew was respectful of our property. Highly recommend." },
  { name: "Maria T.", location: "Kissimmee, FL", stars: 5, text: "We had new windows and a front door installed. The difference in our energy bill was immediate. The team was on time, communicated every step, and left the house spotless." },
  { name: "David K.", location: "Winter Garden, FL", stars: 5, text: "From the estimate to the final walkthrough, MGM was the most professional contractor we have worked with. The siding looks incredible and the price was fair." },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "State Certified", sub: "Building Contractor" },
  { icon: Award, label: "50+ Years", sub: "Combined Experience" },
  { icon: CheckCircle, label: "Licensed & Insured", sub: "Florida Certified" },
  { icon: Clock, label: "Free Estimates", sub: "Fast Response" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Please fill in your name, phone, and service type.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received! We will call you within one business day.");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 1200);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "oklch(0.42 0.19 22)" }}>
              MGM Builders
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-wide">LLC · State Certified Contractor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-foreground/80">
            {["services", "about", "testimonials", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="capitalize hover:text-primary transition-colors">{s}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:4075424797" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />(407) 542-4797
            </a>
            <Button size="sm" onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Free Estimate
            </Button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
            {["services", "about", "testimonials", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="capitalize text-left text-sm font-semibold text-foreground/80 hover:text-primary">{s}</button>
            ))}
            <a href="tel:4075424797" className="flex items-center gap-2 text-sm font-bold text-primary">
              <Phone className="w-4 h-4" /> (407) 542-4797
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HERO_FINISHED})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/72 to-slate-900/30" />
        <div className="relative container grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-4">
              State Certified Building Contractor · Central Florida
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Built Right.<br />
              <span style={{ color: "oklch(0.72 0.19 22)" }}>Built to Last.</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-md mb-8 leading-relaxed">
              MGM Builders LLC brings 50+ years of combined experience to every roofing, siding, window, door, and remodeling project across Central Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo("contact")} className="bg-primary text-white hover:bg-primary/90 font-bold text-base px-8 py-4 h-auto">
                Get a Free Estimate <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <a href="tel:4075424797" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-base px-8 py-4 rounded-md hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Request a Free Estimate</h2>
            <p className="text-sm text-muted-foreground mb-6">We respond within one business day.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input placeholder="Phone Number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <Input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                <SelectTrigger><SelectValue placeholder="Service Needed *" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="siding">Siding</SelectItem>
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="doors">Doors</SelectItem>
                  <SelectItem value="remodeling">Remodeling</SelectItem>
                  <SelectItem value="general">General Contracting</SelectItem>
                  <SelectItem value="other">Other / Not Sure</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Tell us about your project (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="resize-none" rows={3} />
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12" disabled={submitting}>
                {submitting ? "Sending\u2026" : "Send My Request"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-slate-900 py-8">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.42 0.19 22 / 20%)" }}>
                <Icon className="w-5 h-5" style={{ color: "oklch(0.72 0.19 22)" }} />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{label}</p>
                <p className="text-slate-400 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">What We Do</p>
            <h2 className="mgm-section-title text-3xl md:text-4xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              From a single window replacement to a complete home renovation, MGM Builders delivers quality craftsmanship on every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="mgm-service-card bg-card rounded-lg p-6 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "oklch(0.42 0.19 22 / 10%)" }}>
                  <Icon className="w-6 h-6" style={{ color: "oklch(0.42 0.19 22)" }} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button onClick={() => scrollTo("contact")} size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold">
              Get a Free Estimate on Any Service
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">Who We Are</p>
            <h2 className="mgm-section-title text-3xl md:text-4xl mb-6">Central Florida's Trusted Contractor</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MGM Builders LLC was founded on a simple principle: do the work right, treat every homeowner with respect, and stand behind every project. With over 50 years of combined experience across roofing, siding, windows, doors, and remodeling, our team has earned a reputation as one of Central Florida's most dependable building contractors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a State Certified Building Contractor, we hold ourselves to the highest standards of safety, code compliance, and craftsmanship. Whether you are recovering from storm damage or planning a full renovation, MGM Builders is the team that shows up, communicates clearly, and delivers on every promise.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["State Certified","Building Contractor"],["50+ Years","Combined Experience"],["Licensed & Insured","Florida Certified"],["Free Estimates","No Obligation"]].map(([t,s]) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.42 0.19 22)" }} />
                  <div><p className="font-bold text-sm text-foreground">{t}</p><p className="text-xs text-muted-foreground">{s}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img src={HERO_BLUEPRINT} alt="Architectural blueprints — MGM Builders project planning" className="w-full h-80 lg:h-96 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
              <p className="text-white font-bold text-sm">Every project starts with a plan.</p>
              <p className="text-slate-300 text-xs">Precision from blueprint to final walkthrough.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">What Clients Say</p>
            <h2 className="mgm-section-title text-3xl md:text-4xl">Real Reviews from Real Homeowners</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, location, stars, text }) => (
              <div key={name} className="bg-card rounded-lg p-6 border border-border shadow-sm flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{text}"</p>
                <div>
                  <p className="font-bold text-sm text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16" style={{ background: "oklch(0.42 0.19 22)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call us today or fill out the form below. Free estimates, fast response, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:4075424797" className="inline-flex items-center gap-2 bg-white text-primary font-bold text-base px-8 py-4 rounded-md hover:bg-white/90 transition-colors">
              <Phone className="w-5 h-5" />(407) 542-4797
            </a>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="border-white text-white bg-transparent hover:bg-white/10 font-bold text-base px-8 py-4 h-auto">
              Request Online
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-50 pb-28 md:pb-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">Get in Touch</p>
            <h2 className="mgm-section-title text-3xl md:text-4xl mb-6">Request Your Free Estimate</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill out the form and a member of our team will contact you within one business day to discuss your project and schedule an on-site estimate at no charge.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.42 0.19 22)" }} />
                <div><p className="font-bold text-sm text-foreground">Phone</p><a href="tel:4075424797" className="text-sm text-primary hover:underline">(407) 542-4797</a></div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.42 0.19 22)" }} />
                <div><p className="font-bold text-sm text-foreground">Email</p><a href="mailto:info@mgmfla.com" className="text-sm text-primary hover:underline">info@mgmfla.com</a></div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.42 0.19 22)" }} />
                <div><p className="font-bold text-sm text-foreground">Service Area</p><p className="text-sm text-muted-foreground">Orlando & Central Florida</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <Input placeholder="Phone Number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <Input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                <SelectTrigger><SelectValue placeholder="Service Needed *" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="siding">Siding</SelectItem>
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="doors">Doors</SelectItem>
                  <SelectItem value="remodeling">Remodeling</SelectItem>
                  <SelectItem value="general">General Contracting</SelectItem>
                  <SelectItem value="other">Other / Not Sure</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Describe your project\u2026" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="resize-none" rows={4} />
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 text-base" disabled={submitting}>
                {submitting ? "Sending\u2026" : "Submit Free Estimate Request"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">No spam. No obligation. We will call you to schedule.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>MGM Builders LLC</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">State Certified Building Contractor serving Orlando and Central Florida. Roofing, siding, windows, doors, and remodeling.</p>
            <a href="tel:4075424797" className="inline-flex items-center gap-2 font-bold hover:text-white transition-colors" style={{ color: "oklch(0.72 0.19 22)" }}>
              <Phone className="w-4 h-4" /> (407) 542-4797
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Roofing","Siding","Windows","Doors","Remodeling","General Contracting"].map((s) => (
                <li key={s}><button onClick={() => scrollTo("services")} className="text-slate-400 hover:text-white transition-colors">{s}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Part of the DougABomb Family</h4>
            <a href="https://dougabomb.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
              <img src={DOUGABOMB_LOGO} alt="DougABomb" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed">MGM Builders is part of Doug Oliver's Central Florida contractor network. Visit DougABomb.com to explore all services.</p>
          </div>
        </div>
        <div className="container border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MGM Builders LLC. All rights reserved.</p>
          <p>State Certified Building Contractor · Orlando, FL · License #CBC1263474</p>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-lg">
        <a href="tel:4075424797" className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm text-white" style={{ background: "oklch(0.22 0.03 240)" }}>
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <button onClick={() => scrollTo("contact")} className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm text-white" style={{ background: "oklch(0.42 0.19 22)" }}>
          Free Estimate
        </button>
      </div>

    </div>
  );
}
