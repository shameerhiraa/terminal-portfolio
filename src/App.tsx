// src/App.jsx
import "./index.css";

const skills = [
  "typescript",
  "reactjs",
  "nodejs",
  "expressjs",
  "jestjs",
  "html",
  "css",
  "git",
  "redux",
  "gcp"
];

function App() {
  return (
    <div className="screen">
      {/* BOOT / HERO */}
      <header className="boot">
        <div className="boot-logo">SHAMEER</div>
        <div className="boot-logo">
          MEETHALE&nbsp;PALORATH 
        </div>

        <div className="role-and-links">
          <div>
            <div className="boot-line">
              <span className="h">ROLE</span> &nbsp; &nbsp;
              <span className="v">FULLSTACK DEVELOPER</span>
            </div>
            <div className="boot-line">
              <span className="h">LOCATION</span> &nbsp;
              <span className="v">HELSINGBORG, SWEDEN</span>
            </div>
            <div className="boot-line">
              <span className="h">EXPERIENCE</span> &nbsp;
              <span className="v">15+ YEARS</span>
            </div>
          </div>

          {/* SOCIAL LINKS — same style as .skill-tag, different colors */}
          <div className="social-links">
            <a
              href="https://github.com/shamp1"
              target="_blank"
              rel="noreferrer"
              className="social-tag github"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
              <span>github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shameer-mp-01008a43/"
              target="_blank"
              rel="noreferrer"
              className="social-tag linkedin"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>linkedin</span>
            </a>
          </div>
        </div>

        <div className="boot-line" style={{ marginTop: 10 }}>
          LOADING PROFILE... PLEASE WAIT
        </div>

        <div className="boot-line" style={{ marginTop: 6 }}>
          SYS: <span className="v">TypeScript/React/Node</span> · BUILD:{" "}
          <span className="v">STABLE</span> · STATUS:{" "}
          <span className="v">AVAILABLE</span>
        </div>

        <div className="progress-bar">
          <div className="progress-label">BOOT SEQUENCE</div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>
      </header>

      {/* NAV */}
      <nav>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      {/* ABOUT SECTION */}
      <section id="about">
        <h2 className="section-header">ABOUT</h2>

        <div className="prompt">
          <span className="mac-user">shameer</span>
          <span className="mac-at">@</span>
          <span className="mac-host">portfolio</span>
          <span className="mac-sep">:</span>
          <span className="mac-path">~/portfolio</span>
          <span className="mac-git">(main)</span>
          <span className="mac-sym">%</span>
          <span className="cmd">&nbsp;cat about.txt</span>
        </div>

        <div className="about-text">
          <div>ABOUT.TXT</div>
          <div>---------</div>
          <p style={{ marginTop: 10 }}>
            Full Stack Developer with 15+ years in web development, specializing
            in scalable, efficient solutions. Experienced in building and
            deploying production applications using TypeScript, ReactJS,
            NodeJS, ExpressJS, and Google Cloud Platform. Currently working as a
            Software Engineer at IKEA in Helsingborg, Sweden.
            <span className="cursor"></span>
          </p>

          <div className="about-meta">
            <div className="meta-item">
              <span className="mk">STATUS&nbsp;&nbsp;:</span>{" "}
              <span className="mv">EMPLOYED @ IKEA</span>
            </div>
            <div className="meta-item">
              <span className="mk">CITY&nbsp;&nbsp;&nbsp;:</span>{" "}
              <span className="mv">HELSINGBORG, SWEDEN</span>
            </div>
            <div className="meta-item">
              <span className="mk">EXP&nbsp;&nbsp;&nbsp;&nbsp;:</span>{" "}
              <span className="mv">15+ YEARS</span>
            </div>
            <div className="meta-item">
              <span className="mk">FOCUS&nbsp;&nbsp;:</span>{" "}
              <span className="mv">FULLSTACK / CLOUD</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <h2 className="section-header">SKILLS</h2>

        <div className="prompt">
          <span className="mac-user">shameer</span>
          <span className="mac-at">@</span>
          <span className="mac-host">portfolio</span>
          <span className="mac-sep">:</span>
          <span className="mac-path">~/portfolio</span>
          <span className="mac-git">(main)</span>
          <span className="mac-sym">%</span>
          <span className="cmd">&nbsp;ls skills/</span>
        </div>

        <div className="about-text">
          <div>SKILLS.SYS</div>
          <div>----------</div>
          <div className="skills-grid" style={{ marginTop: 10 }}>
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2 className="section-header">CONTACT</h2>

        <div className="prompt">
          <span className="mac-user">shameer</span>
          <span className="mac-at">@</span>
          <span className="mac-host">portfolio</span>
          <span className="mac-sep">:</span>
          <span className="mac-path">~/portfolio</span>
          <span className="mac-git">(main)</span>
          <span className="mac-sym">%</span>
          <span className="cmd">&nbsp;cat contact.cfg</span>
        </div>

        <div className="about-text">
          <div>CONTACT.CFG</div>
          <div>-----------</div>

          <ul className="contact-list" style={{ marginTop: 10 }}>
            <li>
              <span className="lbl">EMAIL</span>
              <a href="mailto:shemimp@gmail.com">shemimp@gmail.com</a>
            </li>
            <li>
              <span className="lbl">PHONE</span>
              <a href="tel:+46761568600">+46 761 568 600</a>
            </li>
            <li>
              <span className="lbl">LOCATION</span>
              <span className="plain-val">HELSINGBORG, SWEDEN</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 SHAMEER MEETHALE PALORATH · ALL RIGHTS RESERVED
        <span className="cursor"></span>
      </footer>
    </div>
  );
}

export default App;
