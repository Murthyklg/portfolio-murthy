import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>MK<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#clients" onClick={closeMenu}>Clients</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="mailto:klgmurthy4797@gmail.com" onClick={closeMenu}>Start a project <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"></span> Independent developer & DevOps engineer · India</p>
          <h1>Digital systems that<br /><em>move</em> businesses.</h1>
          <p className="hero-intro">I’m Murthy KLG — a freelance developer and DevOps engineer building websites, cloud foundations and secure delivery systems from first sketch to live domain.</p>
          <a className="button button-dark" href="#work">See selected work <span>↓</span></a>
        </div>
        <div className="hero-visual" aria-label="A curated workspace with a bright orange notebook">
          <div className="visual-label">DESIGN / BUILD / GROW</div>
          <div className="notebook"><span>MK</span><strong>make it<br />matter.</strong><i>01 — 04</i></div>
          <div className="sun-shape"></div>
          <div className="visual-note">A small practice<br />with a big attention<br />to detail.</div>
        </div>
      </section>

      <section className="marquee" aria-label="Services offered">
        <div>Strategy <b>✳</b> Design <b>✳</b> Development <b>✳</b> SEO <b>✳</b> Deployment <b>✳</b></div>
      </section>

      <section className="clients shell" id="clients">
        <div className="section-heading"><p className="eyebrow">01 / Clients</p><p className="section-aside">Trusted to shape the digital<br />side of growing businesses.</p></div>
        <div className="client-thread" role="list" aria-label="Murthy KLG clients">
          <div className="client-item" role="listitem"><span className="client-index">01</span><strong>TS Interseats</strong><small>India Pvt Ltd · Seat manufacturing</small><i>↗</i></div>
          <div className="client-item" role="listitem"><span className="client-index">02</span><strong>Topin</strong><small>Technologies · Cybersecurity</small><i>↗</i></div>
          <div className="client-item" role="listitem"><span className="client-index">03</span><strong>Batuka</strong><small>Properties · Real estate</small><i>↗</i></div>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><p className="eyebrow">02 / Selected work</p><p className="section-aside">Three businesses. Three different<br />ways to make an impression.</p></div>
        <div className="project-grid">
          <article className="project project-orange"><div className="project-art art-seats"><span className="art-word">TSISIN</span><span className="art-stamp">BUILT FOR<br />THE JOURNEY</span></div><div className="project-meta"><div><h2>TS Interseats India</h2><p>Brand website and ITSM · Seat manufacturing</p></div><a href="mailto:klgmurthy4797@gmail.com?subject=TS%20Interseats%20case%20study" aria-label="View TS Interseats project">↗</a></div></article>
          <article className="project project-blue"><div className="project-art art-tech"><span className="tech-orbit"></span><span className="art-word">TOPIN<span>.</span></span><span className="tech-caption">SECURITY<br />IN MOTION</span></div><div className="project-meta"><div><h2>Topin Technologies</h2><p>Digital presence · Cybersecurity</p></div><a href="https://www.topin.co.in" aria-label="View Topin Technologies project">↗</a></div></article>
          <article className="project project-yellow"><div className="project-art art-property"><span className="property-house">⌂</span><span className="property-copy">A PLACE<br /><i>to begin.</i></span><span className="art-stamp">BATUKA<br />PROPERTIES</span></div><div className="project-meta"><div><h2>Batuka Properties</h2><p>Property platform · Real estate</p></div><a href="https://batuka91.vercel.app" aria-label="View Batuka Properties project">↗</a></div></article>
        </div>
      </section>

      <section className="services shell" id="services"><div className="section-heading"><p className="eyebrow">03 / The full picture</p><p className="section-aside">One partner from the blank page<br />to the live cloud environment.</p></div><div className="service-list"><div><span>01</span><h2>Websites & digital design</h2><p>Clear positioning, a sharp visual identity and interfaces people want to spend time with.</p></div><div><span>02</span><h2>Cloud & DevOps</h2><p>Reliable infrastructure, automated deployments and practical operations that keep products moving.</p></div><div><span>03</span><h2>Domain & SEO</h2><p>Security-minded delivery, technical SEO, domain setup and a thoughtful handover for long-term growth.</p></div></div></section>

      <section className="about shell" id="about"><div className="about-mark">✳</div><div><p className="eyebrow">04 / Hello, I’m Murthy</p><h2>Web craft with<br /><em>operational depth.</em></h2><p className="about-copy">I work directly with founders and teams who need more than a good-looking website. I connect thoughtful design with dependable cloud infrastructure, automated delivery and secure DevSecOps practices.</p><a className="text-link" href="mailto:klgmurthy4797@gmail.com">Let’s make something useful <span>↗</span></a></div></section>

      <footer className="footer shell"><div><a className="wordmark" href="#top">MK<span>.</span></a><p>Designing useful things<br />for the internet.</p></div><div className="footer-right"><p>Have a project in mind?</p><a href="mailto:klgmurthy4797@gmail.com">klgmurthy4797@gmail.com <span>↗</span></a><small>© {new Date().getFullYear()} Murthy KLG</small></div></footer>
    </main>
  )
}

export default App
