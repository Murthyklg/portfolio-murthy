import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappNumber = "9113674869";
  const defaultWhatsappMessage = "Hi Murthy, I need a website to be built. Can we have a talk?";
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          MURTHY <span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#clients" onClick={closeMenu}>
            Clients
          </a>
          <a href="#work" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a
            className="nav-cta"
            href="mailto:webdevmurthy@gmail.com"
            onClick={closeMenu}
          >
            Start a project <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot"></span> Independent developer & DevOps
            engineer · Kolar, Bangalore & worldwide
          </p>
          <h1>
            Digital systems that
            <br />
            <em>move</em> businesses.
          </h1>
          <p className="hero-intro">
            I’m Murthy KLG — a freelance developer and DevOps engineer helping
            businesses in Kolar, Bangalore and remote teams worldwide with
            websites, cloud foundations and secure delivery systems from first
            sketch to live domain.
          </p>
          <a className="button button-dark" href="#work">
            See selected work <span>↓</span>
          </a>
        </div>
        <div
          className="hero-visual"
          aria-label="A curated workspace with a bright orange notebook"
        >
          <div className="visual-label">DESIGN / BUILD / GROW</div>
          <div className="notebook">
            <span>MK</span>
            <strong>
              make it
              <br />
              matter.
            </strong>
            <i>01 — 04</i>
          </div>
          <div className="sun-shape"></div>
          <div className="visual-note">
            A small practice
            <br />
            with a big attention
            <br />
            to detail.
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Services offered">
        <div>
          Strategy <b>✳</b> Design <b>✳</b> Development <b>✳</b> SEO <b>✳</b>{" "}
          Deployment <b>✳</b>
        </div>
      </section>

      <section className="clients shell" id="clients">
        <div className="section-heading">
          <p className="eyebrow">01 / Clients</p>
          <p className="section-aside">
            Trusted to shape the digital
            <br />
            side of growing businesses.
          </p>
        </div>
        <div
          className="client-thread"
          role="list"
          aria-label="Murthy KLG clients"
        >
        <a href="https://tsisin.vercel.app/" aria-label="View TS Interseats project">
          <div className="client-item" role="listitem">
            <span className="client-index">01</span>
            <strong>TS Interseats</strong>
            <small>India Pvt Ltd · Seat manufacturing</small>
            <i>↗</i>
          </div>
        </a>
        <a href="https://www.topin.co.in"  aria-label="View Topin Technologies project">
          <div className="client-item" role="listitem">
            <span className="client-index">02</span>
            <strong>Topin</strong>
            <small>Technologies · Cybersecurity</small>
            <i>↗</i>
          </div>
          </a>
          <a href="https://batuka-properties.vercel.app/"  aria-label="View Batuka Properties project">
          <div className="client-item" role="listitem">
            <span className="client-index">03</span>
            <strong>Batuka</strong>
            <small>Properties · Real estate</small>
            <i>↗</i>
          </div>
          </a>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">02 / Selected work</p>
          <p className="section-aside">
            Three businesses. Three different
            <br />
            ways to make an impression.
          </p>
        </div>
        <div className="project-grid">
          <a
                href="https://tsisin.vercel.app/"
                aria-label="View TS Interseats project"
              >
          <article className="project project-orange">

            <a
                href="https://tsisin.vercel.app/"
                aria-label="View TS Interseats project"
              >
            <div className="project-art art-seats"> <a
                href="https://tsisin.vercel.app/"
                aria-label="View TS Interseats project"
              >
              <span className="art-word">TSISIN</span>
              <span className="art-stamp">
                BUILT FOR
                <br />
                THE JOURNEY
              </span>
           </a></div>
            <div className="project-meta">
              <div>
                <h2>TS Interseats India</h2>
                <p>Brand website and ITSM · Seat manufacturing</p>
              </div>
              <a
                href="https://tsisin.vercel.app/"
                aria-label="View TS Interseats project"
              >
                ↗
              </a>
            </div> 

</a>


          </article></a>

  <a
                href="https://www.topin.co.in"
                aria-label="View Topin Technologies project"
              >

          <article className="project project-blue">
            <div className="project-art art-tech">
              <span className="tech-orbit"></span>
              <span className="art-word">
                TOPIN<span>.</span>
              </span>
              <span className="tech-caption">
                SECURITY
                <br />
                IN MOTION
              </span>
            </div>
            <div className="project-meta">
              <div>
                <h2>Topin Technologies</h2>
                <p>Digital presence · Cybersecurity</p>
              </div>
              <a
                href="https://www.topin.co.in"
                aria-label="View Topin Technologies project"
              >
                ↗
              </a>
            </div>
          </article>

</a>
 <a
                href="https://batuka-properties.vercel.app/"
                aria-label="View Batuka Properties project"
              >
          <article className="project project-yellow">
            <div className="project-art art-property">
              <span className="property-house">⌂</span>
              <span className="property-copy">
                A PLACE
                <br />
                <i>to begin.</i>
              </span>
              <span className="art-stamp">
                BATUKA
                <br />
                PROPERTIES
              </span>
            </div>
            <div className="project-meta">
              <div>
                <h2>Batuka Properties</h2>
                <p>Property platform · Real estate</p>
              </div>
              <a
                href="https://batuka-properties.vercel.app/"
                aria-label="View Batuka Properties project"
              >
                ↗
              </a>
            </div>
          </article>
          </a>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">03 / The full picture</p>
          <p className="section-aside">
            One partner from the blank page
            <br />
            to the live cloud environment.
          </p>
        </div>
        <div className="service-list">
          <div>
            <span>01</span>
            <h2>Websites & digital design</h2>
            <p>
              Clear positioning, a sharp visual identity and interfaces people
              want to spend time with.
            </p>
          </div>
          <div>
            <span>02</span>
            <h2>Cloud & DevOps</h2>
            <p>
              Reliable infrastructure, automated deployments and practical
              operations that keep products moving.
            </p>
          </div>
          <div>
            <span>03</span>
            <h2>Domain & SEO</h2>
            <p>
              Security-minded delivery, technical SEO, domain setup and a
              thoughtful handover for long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-mark">✳</div>
        <div>
          <p className="eyebrow">04 / Hello, I’m Murthy</p>
          <h2>
            Web craft with
            <br />
            <em>operational depth.</em>
          </h2>
          <p className="about-copy">
            Based in Kolar, working with clients in Bangalore and  remote
            clients worldwide, I connect thoughtful design with dependable
            cloud infrastructure, automated delivery and secure DevSecOps
            practices.
          </p>
          <a className="text-link" href="mailto:webdevmurthy@gmail.com">
            Let’s make something useful <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <a className="wordmark" href="#top">
            MK<span>.</span>
          </a>
          <p>
            Designing useful things
            <br />
            for the internet.
          </p>
        </div>
        <div className="footer-right">
          <p>Have a project in mind?</p>
          <a href="mailto:webdevmurthy@gmail.com">
            webdevmurthy@gmail.com <span>↗</span>
          </a>
          <small>© {new Date().getFullYear()} Murthy KLG</small>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Murthy KLG"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.52 3.49A11.82 11.82 0 0 0 12.1 0C5.53 0 .12 5.4.12 12.05c0 2.12.56 4.2 1.62 6.02L0 24l6.08-1.59a11.94 11.94 0 0 0 5.99 1.9h.02c6.57 0 11.9-5.4 11.9-12.03.02-3.2-1.26-6.22-3.47-8.79Zm-8.42 18.45h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.6.94 1-3.5-.24-.37A9.82 9.82 0 0 1 2.22 12c0-5.46 4.45-9.9 9.94-9.9a9.8 9.8 0 0 1 6.98 2.89 9.88 9.88 0 0 1 2.9 7.03c0 5.45-4.45 9.9-9.94 9.9Zm5.44-7.4c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.63-.92-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.7.62.72.22 1.38.19 1.9.11.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}

export default App;
