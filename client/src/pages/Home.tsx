/*
 * MGM BUILDERS — Home.tsx v2.0
 * Visual Thesis: "Precision-Built Luxury" — architect's drafting table meets twilight construction cinema.
 * Palette: blueprint navy (#0A1B3F), amber glow (#E6A822), stone gray, charcoal, paper white
 * Typography: Bebas Neue (all-caps architect accent) + Source Sans 3 (body)
 * Hero: full-bleed autoplay video with layered overlay and asymmetric text composition
 */

import { useState, useEffect } from "react";
import {
  Phone,
  Shield,
  Award,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Home as HomeIcon,
  Layers,
  Square,
  DoorOpen,
  Hammer,
  PlusSquare,
  Mail,
} from "lucide-react";

const PHONE = "(407) 542-4797";
const LICENSE = "CBC1263736";
const LOGO_URL = "/assets/mgm-builders-logo.png";
const VIDEO_URL = "/assets/mgm-hero-video.mp4";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Roofing",
    desc: "Share your roofing repair, replacement, or storm-related project needs with the MGM team.",
    detail: "Repair \u00b7 Replacement \u00b7 Project Review",
  },
  {
    icon: Layers,
    title: "Siding",
    desc: "Discuss siding repair or replacement needs and the materials you are considering.",
    detail: "Repair \u00b7 Replacement \u00b7 Material Review",
  },
  {
    icon: Square,
    title: "Windows",
    desc: "Submit window project details for a follow-up conversation about scope and options.",
    detail: "Replacement \u00b7 Project Planning \u00b7 Options",
  },
  {
    icon: DoorOpen,
    title: "Doors",
    desc: "Share entry, French, sliding, or exterior door project needs for review.",
    detail: "Entry \u00b7 French \u00b7 Sliding \u00b7 Exterior",
  },
  {
    icon: Hammer,
    title: "Remodeling",
    desc: "Outline a kitchen, bathroom, or broader remodeling project for an initial discussion.",
    detail: "Kitchen \u00b7 Bath \u00b7 Whole-Home",
  },
  {
    icon: PlusSquare,
    title: "Additions",
    desc: "Describe a room addition or structural expansion project and the outcome you are exploring.",
    detail: "Room Additions \u00b7 Structural \u00b7 Planning",
  },
];

const STATS = [
  { value: "ACTIVE", label: "Florida LLC Record" },
  { value: "2019", label: "Florida Formation Year" },
  { value: LICENSE, label: "License Reference" },
  { value: "6", label: "Project Inquiry Categories" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Share Your Project",
    desc: "Provide the location, project category, and a short description of what you need.",
  },
  {
    num: "02",
    title: "Initial Review",
    desc: "MGM reviews the inquiry and determines what information is needed for a useful follow-up.",
  },
  {
    num: "03",
    title: "Discuss Scope",
    desc: "The team can clarify priorities, existing conditions, and the next appropriate planning step.",
  },
  {
    num: "04",
    title: "Confirm Next Steps",
    desc: "Any scope, schedule, pricing, permit, or warranty details should be confirmed in writing before work begins.",
  },
];

const amber = "#E6A822";
const navyRaw = "#0A1B3F";
const archFont: React.CSSProperties = {
  fontFamily: "'Bebas Neue', sans-serif",
};
const monoFont: React.CSSProperties = {
  fontFamily: "'Courier Prime', monospace",
};
const bodyFont: React.CSSProperties = {
  fontFamily: "'Source Sans 3', sans-serif",
};

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    service: "",
    details: "",
    company: "",
    consent: false,
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".animate-fade-up");
    els.forEach(el => el.classList.add("will-animate"));
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response
        .json()
        .catch(() => ({ accepted: false, error: "Invalid server response." }));

      if (!response.ok || result.accepted !== true) {
        throw new Error(result.error || "Your request was not delivered.");
      }

      setFormStatus("sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        service: "",
        details: "",
        company: "",
        consent: false,
      });
    } catch (error) {
      setFormStatus("error");
      setFormError(
        error instanceof Error
          ? error.message
          : "Your request was not delivered."
      );
    }
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    ...monoFont,
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    marginBottom: "0.4rem",
  };

  return (
    <div style={{ ...bodyFont, background: "#FAFAF8", color: "#2C2C2E" }}>
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}
        style={{
          background: scrolled
            ? undefined
            : "linear-gradient(to bottom, rgba(10,27,63,0.82) 0%, transparent 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
            }}
          >
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={LOGO_URL}
                alt="MGM Builders LLC"
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </a>
            <div
              className="hidden md:flex"
              style={{ alignItems: "center", gap: "2rem" }}
            >
              {NAV_LINKS.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  style={{
                    ...archFont,
                    fontSize: "0.8rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = amber)}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                  }
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="btn-primary"
                style={{
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.82rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={13} />
                {PHONE}
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div
            style={{
              background: "rgba(10,27,63,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="container"
              style={{
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {NAV_LINKS.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  style={{
                    ...archFont,
                    fontSize: "1rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="btn-primary"
                style={{
                  alignSelf: "flex-start",
                  marginTop: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="hero-video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={VIDEO_URL}
          />
        </div>
        <div className="hero-overlay" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 10,
            paddingTop: "8rem",
            paddingBottom: "6rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              Florida LLC &middot; License Reference {LICENSE}
            </div>
            <h1
              style={{
                ...bodyFont,
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Built Right.
              <br />
              <span style={{ color: amber }}>Built to Last.</span>
            </h1>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "540px",
                marginBottom: "2.5rem",
              }}
            >
              Review common project categories, share your project details, and
              request a follow-up conversation with MGM Builders LLC.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary"
              >
                Submit a Project Inquiry <ArrowRight size={16} />
              </button>
              <a
                href={`tel:${PHONE}`}
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {[
                { icon: Shield, text: "Active Florida LLC" },
                { icon: Award, text: "License Status Verified" },
                { icon: CheckCircle2, text: "Written Scope Recommended" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Icon size={15} style={{ color: amber }} />
                  <span
                    style={{
                      ...archFont,
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: navyRaw }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            className="md:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "2rem 1rem",
                  textAlign: "center",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  borderBottom:
                    i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    ...archFont,
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    color: amber,
                    letterSpacing: "0.06em",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    ...monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="grid-paper"
        style={{ padding: "6rem 0" }}
      >
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              What We Build
            </div>
            <h2
              style={{
                ...bodyFont,
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: navyRaw,
                letterSpacing: "-0.02em",
                maxWidth: "480px",
                lineHeight: 1.1,
              }}
            >
              Project Categories.
              <br />
              One Inquiry Path.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {SERVICES.map(svc => (
              <div key={svc.title} className="service-card animate-fade-up">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: navyRaw,
                    color: amber,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <svc.icon size={22} />
                </div>
                <h3
                  style={{
                    ...archFont,
                    fontSize: "1.4rem",
                    letterSpacing: "0.1em",
                    color: navyRaw,
                    marginBottom: "0.5rem",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    color: "#6B6B6B",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    marginBottom: "0.75rem",
                  }}
                >
                  {svc.desc}
                </p>
                <div
                  style={{
                    ...monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: amber,
                  }}
                >
                  {svc.detail}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button onClick={() => handleNav("#contact")} className="btn-dark">
              Submit an Inquiry <ChevronRight size={16} />
            </button>
            <a
              href={`tel:${PHONE}`}
              style={{
                ...archFont,
                letterSpacing: "0.15em",
                fontSize: "0.88rem",
                color: navyRaw,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                textDecoration: "none",
              }}
            >
              <Phone size={13} /> Or call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="grid-paper-dark"
        style={{ padding: "6rem 0" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="lg:grid-cols-2"
          >
            <div>
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                About MGM Builders
              </div>
              <h2
                style={{
                  ...bodyFont,
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                }}
              >
                Verified Records.
                <br />
                <span style={{ color: amber }}>Project Terms in Writing.</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                  fontSize: "1rem",
                }}
              >
                Florida corporate records list{" "}
                <strong style={{ color: "#ffffff" }}>MGM Builders LLC</strong>{" "}
                as an active Florida limited liability company and identify{" "}
                <strong style={{ color: "#ffffff" }}>Douglas D. Oliver</strong>{" "}
                as its authorized manager.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                  fontSize: "1rem",
                }}
              >
                Florida licensing records list{" "}
                <strong style={{ color: amber }}>{LICENSE}</strong> as a
                current, active Certified Building Contractor license issued to
                Joseph Rene Dube, with J.R.D. Enterprises LLC shown as the DBA.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontSize: "1rem",
                }}
              >
                License attribution, insurance, scope, pricing, scheduling,
                permits, warranties, and the party responsible for each project
                should be confirmed in writing before work begins.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Active Florida LLC record",
                  "License status publicly verified",
                  "Project categories clearly listed",
                  "Scope reviewed per inquiry",
                  "Written terms recommended",
                  "No unsupported performance promises",
                ].map(prop => (
                  <div
                    key={prop}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{ color: amber, flexShrink: 0 }}
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.78)",
                        fontSize: "0.88rem",
                      }}
                    >
                      {prop}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                className="corner-bracket"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "2.5rem",
                }}
              >
                <div
                  style={{
                    ...monoFont,
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: amber,
                    marginBottom: "0.75rem",
                  }}
                >
                  Public License Reference
                </div>
                <div
                  style={{
                    ...archFont,
                    fontSize: "2rem",
                    letterSpacing: "0.1em",
                    color: "#ffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {LICENSE}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.85rem",
                  }}
                >
                  Current, active Certified Building Contractor license issued
                  to Joseph Rene Dube / J.R.D. Enterprises LLC through August
                  31, 2028.
                </div>
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    { label: "Entity", value: "MGM Builders LLC" },
                    { label: "State Record", value: "Active" },
                    { label: "Formed", value: "Nov. 2019" },
                    { label: "Document", value: "L19000277604" },
                  ].map(item => (
                    <div key={item.label}>
                      <div
                        style={{
                          ...monoFont,
                          fontSize: "0.62rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.38)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          color: "#ffffff",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  { icon: Phone, text: PHONE, href: `tel:${PHONE}` },
                  {
                    icon: Mail,
                    text: "info@mgmfla.com",
                    href: "mailto:info@mgmfla.com",
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <Icon
                      size={15}
                      style={{
                        color: amber,
                        marginTop: "0.2rem",
                        flexShrink: 0,
                      }}
                    />
                    {href ? (
                      <a
                        href={href}
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                        }}
                      >
                        {text}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="grid-paper"
        style={{ padding: "6rem 0" }}
      >
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              How It Works
            </div>
            <h2
              style={{
                ...bodyFont,
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: navyRaw,
                letterSpacing: "-0.02em",
              }}
            >
              Our Four-Step Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {PROCESS_STEPS.map(step => (
              <div
                key={step.num}
                className="animate-fade-up"
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "2rem",
                  background: "#FAFAF8",
                  border: "1px solid #E2E0DB",
                  borderLeft: `4px solid ${amber}`,
                }}
              >
                <div
                  style={{
                    ...archFont,
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: amber,
                    opacity: 0.3,
                    minWidth: "3.5rem",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      ...archFont,
                      fontSize: "1.3rem",
                      letterSpacing: "0.1em",
                      color: navyRaw,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "#6B6B6B",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT VERIFICATION ── */}
      <section style={{ background: "#EAE8E3", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              Before Work Begins
            </div>
            <h2
              style={{
                ...bodyFont,
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: navyRaw,
                letterSpacing: "-0.02em",
              }}
            >
              Confirm the Details
              <br />
              For Your Project
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                title: "Verify the Contracting Party",
                text: "Confirm the legal business name, qualifying license holder, and party responsible for the proposed work.",
              },
              {
                title: "Confirm Insurance & Permits",
                text: "Request current insurance documentation and confirm permit responsibilities for the specific project.",
              },
              {
                title: "Use Written Terms",
                text: "Document scope, pricing, schedule, change orders, materials, warranties, and payment terms before work starts.",
              },
            ].map(item => (
              <div key={item.title} className="service-card animate-fade-up">
                <CheckCircle2
                  size={22}
                  style={{ color: amber, margin: "1rem 0" }}
                />
                <h3
                  style={{
                    ...archFont,
                    fontSize: "1.1rem",
                    letterSpacing: "0.1em",
                    color: navyRaw,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#444",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${navyRaw} 0%, #0D2456 100%)`,
          position: "relative",
          overflow: "hidden",
          padding: "5rem 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
          >
            <div
              className="section-label"
              style={{ marginBottom: "1.5rem", justifyContent: "center" }}
            >
              Ready to Start?
            </div>
            <h2
              style={{
                ...bodyFont,
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Start With Clear
              <br />
              <span style={{ color: amber }}>Project Information.</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              Share the project category, location, and conditions you want the
              MGM team to review. Confirm all resulting terms in writing.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary"
              >
                Submit a Project Inquiry <ArrowRight size={16} />
              </button>
              <a
                href={`tel:${PHONE}`}
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section
        id="contact"
        className="grid-paper-dark"
        style={{ padding: "6rem 0" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="lg:grid-cols-5"
          >
            <div className="lg:col-span-2">
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                Get in Touch
              </div>
              <h2
                style={{
                  ...bodyFont,
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                  lineHeight: 1.1,
                }}
              >
                Share Your
                <br />
                <span style={{ color: amber }}>Project Details</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontSize: "0.95rem",
                }}
              >
                This non-production preview sends submissions only to a
                controlled test sink. It does not contact MGM Builders or any
                client recipient.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: PHONE,
                    href: `tel:${PHONE}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@mgmfla.com",
                    href: "mailto:info@mgmfla.com",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "rgba(230,168,34,0.12)",
                        border: "1px solid rgba(230,168,34,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "0.1rem",
                      }}
                    >
                      <Icon size={14} style={{ color: amber }} />
                    </div>
                    <div>
                      <div
                        style={{
                          ...monoFont,
                          fontSize: "0.62rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.38)",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "0.9rem",
                            textDecoration: "none",
                          }}
                        >
                          {value}
                        </a>
                      ) : (
                        <span
                          style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "0.9rem",
                          }}
                        >
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="lg:col-span-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2.5rem",
              }}
            >
              {formStatus === "sent" ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <CheckCircle2
                    size={48}
                    style={{ color: amber, margin: "0 auto 1rem" }}
                  />
                  <h3
                    style={{
                      ...archFont,
                      fontSize: "1.8rem",
                      letterSpacing: "0.1em",
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Controlled Test Received
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                    }}
                  >
                    The non-client verification endpoint accepted this preview
                    submission.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      ...archFont,
                      fontSize: "1.3rem",
                      letterSpacing: "0.1em",
                      color: "#ffffff",
                      marginBottom: "1.75rem",
                    }}
                  >
                    Project Details
                  </div>
                  <div className="form-grid">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        className="arch-input"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        className="arch-input"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        placeholder="(407) 000-0000"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Email</label>
                    <input
                      className="arch-input"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Property Address</label>
                    <input
                      className="arch-input"
                      type="text"
                      name="address"
                      autoComplete="street-address"
                      placeholder="Street address (optional)"
                      value={formData.address}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-grid">
                    <div>
                      <label style={labelStyle}>City</label>
                      <input
                        className="arch-input"
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>ZIP *</label>
                      <input
                        className="arch-input"
                        type="text"
                        name="zip"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        required
                        placeholder="32801"
                        value={formData.zip}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>Service Needed *</label>
                    <select
                      className="arch-select"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleFormChange}
                    >
                      <option value="">Select a service&hellip;</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Siding">Siding</option>
                      <option value="Windows">Windows</option>
                      <option value="Doors">Doors</option>
                      <option value="Remodeling">Remodeling</option>
                      <option value="Additions">Additions</option>
                      <option value="Multiple / Not Sure">
                        Multiple / Not Sure
                      </option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Project Details *</label>
                    <textarea
                      className="arch-input"
                      name="details"
                      required
                      rows={5}
                      placeholder="Describe the work, current condition, and questions you want reviewed."
                      value={formData.details}
                      onChange={handleFormChange}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-10000px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label>
                      Company
                      <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company}
                        onChange={handleFormChange}
                      />
                    </label>
                  </div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      marginBottom: "1.25rem",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleFormChange}
                      style={{ marginTop: "0.2rem" }}
                    />
                    <span>
                      I consent to being contacted about this project inquiry.
                      This preview currently routes only to a non-client test
                      sink.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formStatus === "sending"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {formStatus === "sending" ? (
                      "Sending\u2026"
                    ) : (
                      <>
                        <span>Send Controlled Test Inquiry</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  {formStatus === "error" && (
                    <p
                      role="alert"
                      style={{
                        color: "#f87171",
                        fontSize: "0.85rem",
                        marginTop: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      {formError} Call {PHONE} if immediate assistance is
                      needed.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#0A1020",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container" style={{ padding: "3rem 0" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <img
                src={LOGO_URL}
                alt="MGM Builders LLC"
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  marginBottom: "1rem",
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  maxWidth: "300px",
                }}
              >
                MGM Builders LLC project information. Public license reference{" "}
                {LICENSE} is issued to Joseph Rene Dube / J.R.D. Enterprises
                LLC.
              </p>
            </div>
            <div>
              <div
                style={{
                  ...archFont,
                  fontSize: "0.82rem",
                  letterSpacing: "0.2em",
                  color: amber,
                  marginBottom: "1rem",
                }}
              >
                Services
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {[
                  "Roofing",
                  "Siding",
                  "Windows",
                  "Doors",
                  "Remodeling",
                  "Additions",
                ].map(s => (
                  <button
                    key={s}
                    onClick={() => handleNav("#services")}
                    style={{
                      textAlign: "left",
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.88rem",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = amber)}
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  ...archFont,
                  fontSize: "0.82rem",
                  letterSpacing: "0.2em",
                  color: amber,
                  marginBottom: "1rem",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  href={`tel:${PHONE}`}
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.88rem",
                    textDecoration: "none",
                  }}
                >
                  {PHONE}
                </a>
                <a
                  href="mailto:info@mgmfla.com"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.88rem",
                    textDecoration: "none",
                  }}
                >
                  info@mgmfla.com
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.8rem" }}
            >
              &copy; {new Date().getFullYear()} MGM Builders LLC. All rights
              reserved.
            </span>
            <span
              style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.8rem" }}
            >
              Florida entity record L19000277604 &middot; License reference{" "}
              {LICENSE}
            </span>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "rgba(10,27,63,0.97)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "0.75rem 1rem",
          display: "flex",
          gap: "0.75rem",
        }}
      >
        <a
          href={`tel:${PHONE}`}
          className="btn-primary"
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: "0.88rem",
            padding: "0.75rem 1rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <Phone size={14} /> Call Now
        </a>
        <button
          onClick={() => handleNav("#contact")}
          className="btn-outline"
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: "0.88rem",
            padding: "0.75rem 1rem",
          }}
        >
          Project Inquiry
        </button>
      </div>
    </div>
  );
}
