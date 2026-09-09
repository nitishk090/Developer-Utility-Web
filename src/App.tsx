import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Download,
  GitBranch,
  LockKeyhole,
  Menu,
  Monitor,
  X,
  Zap,
} from "lucide-react";
import { faqs, featureCards, tools } from "./data";
import { siteConfig } from "./config";

const externalProps = { target: "_blank", rel: "noreferrer" };

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Developer Utility home">
      <img className="logo-mark" src="/assets/Logo.png" alt="" />
      <span>Developer Utility</span>
    </a>
  );
}

function DownloadButton({ platform }: { platform: "windows" | "mac" }) {
  const url = siteConfig.downloads[platform];
  const label =
    platform === "windows" ? "Download for Windows" : "Download for macOS";
  return url ? (
    <a className="button button-primary" href={url} {...externalProps}>
      <Download size={16} />
      {label}
    </a>
  ) : (
    <span className="button button-disabled" aria-disabled="true">
      <Download size={16} />
      {platform === "windows" ? "Windows download soon" : "macOS download soon"}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Features", "#features"],
    ["Tools", "#tools"],
    ["Download", "#download"],
  ];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button
          className="icon-button menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#download"
            onClick={() => setOpen(false)}
          >
            Download <ArrowRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function AppPreview() {
  return (
    <div className="app-preview">
      <img
        src="/assets/tool%20preview.png"
        alt="Developer Utility desktop application preview"
      />
    </div>
  );
}

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return (
    <>
      <Nav />
      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="kicker">
                <span className="kicker-dot" /> BUILT FOR THE WAY DEVELOPERS
                WORK
              </div>
              <h1>
                Developer tools.
                <br />
                <span>One powerful</span>
                <br />
                desktop utility.
              </h1>
              <p>
                Bring everyday development utilities into one fast, focused
                desktop application, so you spend less time switching between
                tools and more time building.
              </p>
              <div className="hero-actions">
                <DownloadButton platform="windows" />
                <a
                  className="button button-ghost"
                  href={siteConfig.repositoryUrl}
                  {...externalProps}
                >
                  View on GitHub <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <Check size={14} /> Desktop-first
                </span>
                <span>
                  <Check size={14} /> Developer-focused
                </span>
                <span>
                  <Check size={14} /> Open development
                </span>
              </div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="visual-glow" />
              <AppPreview />
              <span className="float-tag tag-one">cURL generation</span>
              <span className="float-tag tag-two">Encoding &amp; decoding</span>
            </div>
          </div>
        </section>
        <section className="trust-strip">
          <div className="container trust-grid">
            <span className="trust-intro">
              A tighter toolkit
              <br />
              <strong>for daily development.</strong>
            </span>
            <span>
              <Zap size={17} /> Fast & lightweight
            </span>
            <span>
              <Monitor size={17} /> Desktop-first
            </span>
            <span>
              <LockKeyhole size={17} /> Local utilities
            </span>
            <span>
              <Code2 size={17} /> Open development
            </span>
          </div>
        </section>
        <section className="section" id="features">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">THE TOOLKIT</div>
                <h2>
                  Everything you need.
                  <br />
                  <span>In one place.</span>
                </h2>
              </div>
              <p>
                Purpose-built surfaces for the small, repetitive tasks that slow
                down good development days.
              </p>
            </div>
            <div className="feature-grid">
              {featureCards.map(
                ({ eyebrow, title, description, icon: Icon, accent }) => (
                  <article className={`feature-card ${accent}`} key={title}>
                    <div className="card-top">
                      <span className="card-number">{eyebrow}</span>
                      <span className="icon-tile">
                        <Icon size={19} />
                      </span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#tools" className="text-link">
                      Explore tool <ArrowRight size={15} />
                    </a>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <section className="showcase section">
          <div className="container showcase-grid">
            <div className="showcase-copy">
              <div className="eyebrow">ONE FLOW, FEWER TABS</div>
              <h2>
                From request idea
                <br />
                to <span>useful output.</span>
              </h2>
              <p>
                Compose a request, inspect the details, and take the generated
                cURL with you. Developer Utility keeps the working context
                together while you iterate.
              </p>
              <ul className="check-list">
                <li>
                  <Check size={16} /> Request builder with familiar HTTP
                  controls
                </li>
                <li>
                  <Check size={16} /> Generated cURL ready to copy
                </li>
                <li>
                  <Check size={16} /> Response status and timing at a glance
                </li>
              </ul>
              <a className="text-link" href="#download">
                Get the desktop app <ArrowRight size={15} />
              </a>
            </div>
            <div className="showcase-visual">
              <AppPreview />
            </div>
          </div>
        </section>
        <section className="section tools-section" id="tools">
          <div className="container">
            <div className="section-heading compact">
              <div>
                <div className="eyebrow">DEVELOPER TOOLKIT</div>
                <h2>
                  The useful stuff,
                  <br />
                  <span>close at hand.</span>
                </h2>
              </div>
              <p>
                No tab archaeology. Just a focused set of tools for the work in
                front of you.
              </p>
            </div>
            <div className="tools-grid">
              {tools.map(({ name, description, icon: Icon }) => (
                <article className="tool-item" key={name}>
                  <Icon size={20} />
                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                  <ArrowRight className="tool-arrow" size={16} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="why-section section">
          <div className="container why-grid">
            <div>
              <div className="eyebrow">WHY DEVELOPER UTILITY</div>
              <h2>
                Less context switching.
                <br />
                <span>More forward motion.</span>
              </h2>
            </div>
            <div className="why-copy">
              <p>
                Good tools should disappear into the workflow. Developer Utility
                gives common development tasks a calm, consistent home on your
                desktop.
              </p>
              <div className="why-stats">
                <div>
                  <strong>01</strong>
                  <span>One focused workspace</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>Less browser tab sprawl</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>Utilities built for developers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section section" id="download">
          <div className="container download-inner">
            <div className="download-copy">
              <div className="eyebrow">READY WHEN YOU ARE</div>
              <h2>
                Make room for
                <br />
                <span>better flow.</span>
              </h2>
              <p>
                Download Developer Utility and keep your everyday development
                tools in one place.
              </p>
            </div>
            <div className="download-actions">
              <DownloadButton platform="windows" />
              <DownloadButton platform="mac" />
              <a
                className="button button-outline"
                href={siteConfig.releasesUrl || siteConfig.repositoryUrl}
                {...externalProps}
              >
                View releases <ArrowRight size={16} />
              </a>
              <small>
                Installers are distributed through configured release links.
              </small>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <div className="eyebrow">QUESTIONS, ANSWERED</div>
              <h2>
                Good to
                <br />
                <span>know.</span>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div
                  className={
                    activeFaq === index ? "faq-item active" : "faq-item"
                  }
                  key={question}
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {activeFaq === index && <p>{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="open-section">
          <div className="container open-inner">
            <div>
              <GitBranch size={24} />
              <div className="eyebrow">BUILT IN THE OPEN</div>
              <h2>
                Follow the work.
                <br />
                <span>Shape what comes next.</span>
              </h2>
            </div>
            <a
              className="button button-primary"
              href={siteConfig.repositoryUrl}
              {...externalProps}
            >
              View on GitHub <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>A modern toolkit for everyday development work.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#tools">Tools</a>
            <a href="#download">Download</a>
            <a href={siteConfig.repositoryUrl} {...externalProps}>
              GitHub
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Developer Utility. Built for developers.</span>
            <span>Fast tools. Clear thinking.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
