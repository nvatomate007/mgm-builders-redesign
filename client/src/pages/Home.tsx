/*
 * MGM BUILDERS — Home.tsx v2.0
 * Visual Thesis: "Precision-Built Luxury" — architect's drafting table meets twilight construction cinema.
 * Palette: blueprint navy (#0A1B3F), amber glow (#E6A822), stone gray, charcoal, paper white
 * Typography: Bebas Neue (all-caps architect accent) + Source Sans 3 (body)
 * Hero: full-bleed autoplay video with layered overlay and asymmetric text composition
 */

import { useState, useEffect } from 'react';
import {
  Phone, MapPin, Clock, Shield, Award, ChevronRight,
  CheckCircle2, Star, ArrowRight, Menu, X,
  Home as HomeIcon, Layers, Square, DoorOpen, Hammer, PlusSquare, Mail,
} from 'lucide-react';

const PHONE = '(407) 542-4797';
const LICENSE = 'CBC-1263736';
const ADDRESS = '121 S Orange Ave #1500, Orlando, FL 32801';
const HOURS = 'Mon\u2013Fri 8am\u20138pm  |  Sat\u2013Sun 10am\u20136pm';
const LOGO_URL = '/manus-storage/mgm_builders-logo_1c67ec7e.png';
const VIDEO_URL = '/manus-storage/MGMFINALVIDEO_7b0116e2.mp4';
const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/placeholder/mgm-builders/';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { icon: HomeIcon, title: 'Roofing', desc: 'Full replacement, repair, and storm-damage restoration. Manufacturer-certified installations with transferable warranty.', detail: 'Shingle \u00b7 Metal \u00b7 Flat \u00b7 TPO' },
  { icon: Layers, title: 'Siding', desc: 'Fiber cement, vinyl, and engineered wood siding that protects your home and elevates curb appeal for decades.', detail: 'Fiber Cement \u00b7 Vinyl \u00b7 Engineered Wood' },
  { icon: Square, title: 'Windows', desc: 'Impact-rated and energy-efficient windows. Florida-code compliant installation with full weatherproofing.', detail: 'Impact \u00b7 Double-Hung \u00b7 Casement \u00b7 Bay' },
  { icon: DoorOpen, title: 'Doors', desc: 'Entry, French, and sliding doors installed with precision. Storm-rated options available for Florida code compliance.', detail: 'Entry \u00b7 French \u00b7 Sliding \u00b7 Storm-Rated' },
  { icon: Hammer, title: 'Remodeling', desc: 'Kitchen, bath, and whole-home remodels managed directly by the owners \u2014 no subcontractor hand-offs.', detail: 'Kitchen \u00b7 Bath \u00b7 Whole-Home' },
  { icon: PlusSquare, title: 'Additions', desc: 'Room additions and structural expansions designed and built to code, on schedule, and within budget.', detail: 'Room Additions \u00b7 Structural \u00b7 Permitted' },
];

const STATS = [
  { value: '50+', label: 'Years Combined Experience' },
  { value: '$32M', label: 'Airport Re-Roof Contract' },
  { value: '100%', label: 'Owner-Managed Projects' },
  { value: 'CBC-1263736', label: 'FL State Certified' },
];

const TESTIMONIALS = [
  { stars: 5, name: 'Joanne Haywood', text: "Doug has always been a very helpful, knowledgeable contractor with great contacts and advice. I've known Doug for over 20 years and have always had positive experiences. I highly recommend his services." },
  { stars: 5, name: 'Verified Google Review', text: 'We had an emergency ceiling issue. I contacted him and he was here the next day. He did a complete assessment and explained how to immediately address the issue. Amazing professionalism. 100% recommend Mr. Oliver.' },
  { stars: 5, name: 'Central Florida Homeowner', text: "MGM Builders replaced our entire roof and siding in one project. The crew was professional, the timeline was accurate, and the quality exceeded what we paid for. We'll use them again without question." },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Free Estimate', desc: 'We visit your property, assess the scope, and deliver a transparent, itemized estimate \u2014 no pressure, no hidden fees.' },
  { num: '02', title: 'Scope & Schedule', desc: 'Doug or Rene personally reviews the plan with you. Materials are selected, permits pulled, and a firm start date is set.' },
  { num: '03', title: 'Owner-Managed Build', desc: 'Your project is managed directly by the owners on-site. No subcontractor hand-offs. Daily updates if you want them.' },
  { num: '04', title: 'Final Walkthrough', desc: 'We walk the finished project with you before we close. Every detail is signed off by the owner \u2014 not a crew foreman.' },
];

const amber = '#E6A822';
const navyRaw = '#0A1B3F';
const archFont: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" };
const monoFont: React.CSSProperties = { fontFamily: "'Courier Prime', monospace" };
const bodyFont: React.CSSProperties = { fontFamily: "'Source Sans 3', sans-serif" };

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', city: '', zip: '', service: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.animate-fade-up');
    els.forEach(el => el.classList.add('will-animate'));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setNavOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, source: 'MGM Builders Website' }), mode: 'no-cors' });
      setFormStatus('sent');
      setFormData({ name: '', email: '', phone: '', address: '', city: '', zip: '', service: '' });
    } catch { setFormStatus('error'); }
  };

  const labelStyle: React.CSSProperties = { display: 'block', ...monoFont, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' };

  return (
    <div style={{ ...bodyFont, background: '#FAFAF8', color: '#2C2C2E' }}>

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
        style={{ background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(10,27,63,0.82) 0%, transparent 100%)' }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={LOGO_URL} alt="MGM Builders LLC" style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
              {NAV_LINKS.map(link => (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ ...archFont, fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = amber)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                >{link.label}</button>
              ))}
              <a href={`tel:${PHONE}`} className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <Phone size={13} />{PHONE}
              </a>
            </div>
            <button className="md:hidden" onClick={() => setNavOpen(!navOpen)} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div style={{ background: 'rgba(10,27,63,0.98)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {NAV_LINKS.map(link => (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ ...archFont, fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >{link.label}</button>
              ))}
              <a href={`tel:${PHONE}`} className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <Phone size={14} />{PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="hero-video-wrapper">
          <video autoPlay loop muted playsInline preload="auto" src={VIDEO_URL} />
        </div>
        <div className="hero-overlay" />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>State Certified &middot; {LICENSE} &middot; Central Florida</div>
            <h1 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '1.5rem' }}>
              Built Right.<br /><span style={{ color: amber }}>Built to Last.</span>
            </h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.75, color: 'rgba(255,255,255,0.72)', maxWidth: '540px', marginBottom: '2.5rem' }}>
              MGM Builders LLC is Central Florida&apos;s owner-operated building contractor. Roofing, siding, windows, doors, remodeling &mdash; every project managed personally by Doug Oliver and Rene Dube. 50+ years combined experience.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <button onClick={() => handleNav('#contact')} className="btn-primary">Get a Free Estimate <ArrowRight size={16} /></button>
              <a href={`tel:${PHONE}`} className="btn-outline" style={{ textDecoration: 'none' }}><Phone size={16} /> Call Now</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {[{ icon: Shield, text: 'FL State Certified' }, { icon: Award, text: 'Manufacturer Warranted' }, { icon: CheckCircle2, text: 'Owner-Managed' }].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon size={15} style={{ color: amber }} />
                  <span style={{ ...archFont, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.65)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: navyRaw }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{ padding: '2rem 1rem', textAlign: 'center', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ ...archFont, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: amber, letterSpacing: '0.06em', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.value}</div>
                <div style={{ ...monoFont, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="grid-paper" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>What We Build</div>
            <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: navyRaw, letterSpacing: '-0.02em', maxWidth: '480px', lineHeight: 1.1 }}>
              Every Trade.<br />One Trusted Team.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {SERVICES.map(svc => (
              <div key={svc.title} className="service-card animate-fade-up">
                <div style={{ width: '48px', height: '48px', background: navyRaw, color: amber, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <svc.icon size={22} />
                </div>
                <h3 style={{ ...archFont, fontSize: '1.4rem', letterSpacing: '0.1em', color: navyRaw, marginBottom: '0.5rem' }}>{svc.title}</h3>
                <p style={{ color: '#6B6B6B', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>{svc.desc}</p>
                <div style={{ ...monoFont, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: amber }}>{svc.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => handleNav('#contact')} className="btn-dark">Request an Estimate <ChevronRight size={16} /></button>
            <a href={`tel:${PHONE}`} style={{ ...archFont, letterSpacing: '0.15em', fontSize: '0.88rem', color: navyRaw, display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
              <Phone size={13} /> Or call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="grid-paper-dark" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="lg:grid-cols-2">
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>About MGM Builders</div>
              <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Owned and Operated<br /><span style={{ color: amber }}>By the People Who Build It.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '1rem' }}>
                MGM Builders LLC is owned and operated by <strong style={{ color: '#ffffff' }}>Douglas Oliver</strong> and <strong style={{ color: '#ffffff' }}>Joseph R. (Rene) Dube</strong> &mdash; two contractors who bring a combined 50 years of experience to every project they touch.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '1rem' }}>
                Doug has led everything from neighborhood roofing jobs to the <strong style={{ color: amber }}>Orlando International Airport&apos;s $32 million re-roofing contract</strong>. Rene brings deep expertise in remodeling and additions, honed across the southern states since 1991.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
                When you hire MGM Builders, you&apos;re not handed off to a project manager. Doug or Rene is on your job site &mdash; personally accountable for every nail, every seam, and every deadline.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {['Locally Owned & Operated', 'Manufacturer Certified Installs', 'Transparent, Itemized Pricing', 'Licensed & Fully Insured', 'Owner On-Site Every Job', 'Central Florida Expertise'].map(prop => (
                  <div key={prop} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={14} style={{ color: amber, flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.88rem' }}>{prop}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="corner-bracket" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', padding: '2.5rem' }}>
                <div style={{ ...monoFont, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, marginBottom: '0.75rem' }}>State Certification</div>
                <div style={{ ...archFont, fontSize: '2rem', letterSpacing: '0.1em', color: '#ffffff', marginBottom: '0.25rem' }}>{LICENSE}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Florida State Certified Building Contractor</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '1.5rem', paddingTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[{ label: 'Founded', value: '2019' }, { label: 'Location', value: 'Orlando, FL' }, { label: 'Coverage', value: 'Central Florida' }, { label: 'Experience', value: '50+ Years' }].map(item => (
                    <div key={item.label}>
                      <div style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[{ icon: Phone, text: PHONE, href: `tel:${PHONE}` }, { icon: MapPin, text: ADDRESS, href: undefined }, { icon: Clock, text: HOURS, href: undefined }].map(({ icon: Icon, text, href }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Icon size={15} style={{ color: amber, marginTop: '0.2rem', flexShrink: 0 }} />
                    {href ? <a href={href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', textDecoration: 'none' }}>{text}</a> : <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{text}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="grid-paper" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>How It Works</div>
            <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: navyRaw, letterSpacing: '-0.02em' }}>Our Four-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {PROCESS_STEPS.map(step => (
              <div key={step.num} className="animate-fade-up" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '2rem', background: '#FAFAF8', border: '1px solid #E2E0DB', borderLeft: `4px solid ${amber}` }}>
                <div style={{ ...archFont, fontSize: '3.5rem', lineHeight: 1, color: amber, opacity: 0.3, minWidth: '3.5rem', textAlign: 'right', flexShrink: 0 }}>{step.num}</div>
                <div>
                  <h3 style={{ ...archFont, fontSize: '1.3rem', letterSpacing: '0.1em', color: navyRaw, marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: '#6B6B6B', fontSize: '0.95rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" style={{ background: '#EAE8E3', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Client Reviews</div>
            <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: navyRaw, letterSpacing: '-0.02em' }}>What Central Florida<br />Homeowners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card animate-fade-up">
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem', marginTop: '1rem' }}>
                  {Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={13} fill={amber} stroke="none" />)}
                </div>
                <p style={{ color: '#444', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{t.text}</p>
                <div style={{ ...archFont, fontSize: '0.82rem', letterSpacing: '0.15em', color: navyRaw }}>&mdash; {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: `linear-gradient(135deg, ${navyRaw} 0%, #0D2456 100%)`, position: 'relative', overflow: 'hidden', padding: '5rem 0' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>Ready to Start?</div>
            <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1 }}>
              Your Project Deserves<br /><span style={{ color: amber }}>Owner-Level Attention.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              No middlemen. No subcontractor hand-offs. Doug or Rene manages your project personally &mdash; from first estimate to final walkthrough.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => handleNav('#contact')} className="btn-primary">Get a Free Estimate <ArrowRight size={16} /></button>
              <a href={`tel:${PHONE}`} className="btn-outline" style={{ textDecoration: 'none' }}><Phone size={16} /> {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="grid-paper-dark" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }} className="lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Get in Touch</div>
              <h2 style={{ ...bodyFont, fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Request Your<br /><span style={{ color: amber }}>Free Estimate</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Fill out the form and we&apos;ll reach out within one business day to schedule your on-site assessment. No obligation, no pressure.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Phone, label: 'Call or Text', value: PHONE, href: `tel:${PHONE}` },
                  { icon: Mail, label: 'Email', value: 'info@mgmfla.com', href: 'mailto:info@mgmfla.com' },
                  { icon: MapPin, label: 'Office', value: ADDRESS, href: undefined },
                  { icon: Clock, label: 'Hours', value: HOURS, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(230,168,34,0.12)', border: '1px solid rgba(230,168,34,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                      <Icon size={14} style={{ color: amber }} />
                    </div>
                    <div>
                      <div style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: '0.15rem' }}>{label}</div>
                      {href ? <a href={href} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', textDecoration: 'none' }}>{value}</a> : <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{value}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem' }}>
              {formStatus === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <CheckCircle2 size={48} style={{ color: amber, margin: '0 auto 1rem' }} />
                  <h3 style={{ ...archFont, fontSize: '1.8rem', letterSpacing: '0.1em', color: '#ffffff', marginBottom: '0.75rem' }}>Estimate Request Received</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>We&apos;ll be in touch within one business day to schedule your on-site assessment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ ...archFont, fontSize: '1.3rem', letterSpacing: '0.1em', color: '#ffffff', marginBottom: '1.75rem' }}>Project Details</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label style={labelStyle}>Full Name *</label><input className="arch-input" type="text" name="name" required placeholder="Your name" value={formData.name} onChange={handleFormChange} /></div>
                    <div><label style={labelStyle}>Phone *</label><input className="arch-input" type="tel" name="phone" required placeholder="(407) 000-0000" value={formData.phone} onChange={handleFormChange} /></div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}><label style={labelStyle}>Email</label><input className="arch-input" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleFormChange} /></div>
                  <div style={{ marginBottom: '1rem' }}><label style={labelStyle}>Property Address *</label><input className="arch-input" type="text" name="address" required placeholder="Street address" value={formData.address} onChange={handleFormChange} /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div><label style={labelStyle}>City</label><input className="arch-input" type="text" name="city" placeholder="Orlando" value={formData.city} onChange={handleFormChange} /></div>
                    <div><label style={labelStyle}>ZIP *</label><input className="arch-input" type="text" name="zip" required placeholder="32801" value={formData.zip} onChange={handleFormChange} /></div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Service Needed</label>
                    <select className="arch-select" name="service" value={formData.service} onChange={handleFormChange}>
                      <option value="">Select a service&hellip;</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Siding">Siding</option>
                      <option value="Windows">Windows</option>
                      <option value="Doors">Doors</option>
                      <option value="Remodeling">Remodeling</option>
                      <option value="Additions">Additions</option>
                      <option value="Multiple / Not Sure">Multiple / Not Sure</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" disabled={formStatus === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                    {formStatus === 'sending' ? 'Sending\u2026' : <><span>Get My Free Estimate</span><ArrowRight size={16} /></>}
                  </button>
                  {formStatus === 'error' && <p style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>Something went wrong. Please call us at {PHONE}.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0A1020', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ padding: '3rem 0' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <img src={LOGO_URL} alt="MGM Builders LLC" style={{ height: '40px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '1rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '260px' }}>State Certified Building Contractor serving Central Florida. License #{LICENSE}.</p>
            </div>
            <div>
              <div style={{ ...archFont, fontSize: '0.82rem', letterSpacing: '0.2em', color: amber, marginBottom: '1rem' }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {['Roofing', 'Siding', 'Windows', 'Doors', 'Remodeling', 'Additions'].map(s => (
                  <button key={s} onClick={() => handleNav('#services')} style={{ textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = amber)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >{s}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ ...archFont, fontSize: '0.82rem', letterSpacing: '0.2em', color: amber, marginBottom: '1rem' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={`tel:${PHONE}`} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', textDecoration: 'none' }}>{PHONE}</a>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{ADDRESS}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>{HOURS}</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} MGM Builders LLC. All rights reserved.</span>
            <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.8rem' }}>FL License #{LICENSE} &middot; Orlando, FL</span>
            <a href="https://dougabomb.com" style={{ ...monoFont, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}
            >A DougABomb Company</a>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40, background: 'rgba(10,27,63,0.97)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', display: 'flex', gap: '0.75rem' }}>
        <a href={`tel:${PHONE}`} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem', padding: '0.75rem 1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Phone size={14} /> Call Now
        </a>
        <button onClick={() => handleNav('#contact')} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem', padding: '0.75rem 1rem' }}>
          Free Estimate
        </button>
      </div>
    </div>
  );
}
