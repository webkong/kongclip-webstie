import React from "react";
import { createRoot } from "react-dom/client";
import { Apple, ArrowDown, Check, Cloud, FileText, Folder, Gift, Image, LockKeyhole, Pin, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import "./styles.css";

const SITE_URL = "https://clip.webkong.top";
const GITHUB_REPO_URL = "https://github.com/webkong/kongclip-webstie";
const DMG_DOWNLOAD_URL = "https://github.com/webkong/kongclip-webstie/releases/latest/download/KongClip.dmg";

const features = [
  {
    icon: Sparkles,
    title: "Free forever",
    text: "A focused clipboard manager without subscriptions, accounts, or artificial limits.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    text: "Open the panel with a shortcut, search instantly, and paste back into the app you were using.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "Your clipboard history stays local by default. No third-party server sits between you and your data.",
  },
];

const timeline = ["Copy text, images, links, or files", "KongClip captures and deduplicates them", "Search, pin, and paste without breaking focus"];

function App() {
  const path = window.location.pathname;

  return (
    <main className='site-shell'>
      <div className='ambient ambient-one' />
      <div className='ambient ambient-two' />

      <Navigation />
      {path === "/about" ? (
        <AboutPage />
      ) : (
        <>
          <Hero />
          <FeatureBand />
          <ProductStory />
          <SyncSection />
          <PrivacySection />
        </>
      )}
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className='nav-wrap'>
      <nav className='nav'>
        <a className='brand' href='/' aria-label='KongClip home'>
          <img src='/kongclip-logo.png' alt='' />
          <span>KongClip</span>
        </a>
        <div className='nav-links'>
          <a href='/#features'>Features</a>
          <a href='/#sync'>iCloud Sync</a>
          <a href='/#privacy'>Privacy</a>
          <a href='/about'>About</a>
          <a href={GITHUB_REPO_URL} target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </div>
        <a className='nav-cta' href={DMG_DOWNLOAD_URL}>
          Download free
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className='hero' id='top'>
      <div className='hero-copy'>
        <h1>Free, Fast, Private clipboard manager</h1>
        <p>KongClip keeps the things you copy close at hand, searchable in a second, and ready to paste straight back into the app you were using.</p>
        <div className='hero-actions' id='download'>
          <a className='primary-button' href={DMG_DOWNLOAD_URL}>
            <Apple size={19} />
            Download DMG for macOS
          </a>
          <a className='secondary-button' href='#features'>
            See how it works
            <ArrowDown size={17} />
          </a>
        </div>
        <div className='hero-proof' aria-label='Product highlights'>
          <span>
            <Check size={16} />
            Free
          </span>
          <span>
            <Check size={16} />
            Local-first
          </span>
          <span>
            <Check size={16} />
            DMG from GitHub
          </span>
        </div>
      </div>
      <div className='hero-visual' aria-label='KongClip clipboard panel preview'>
        <ClipboardPanel />
      </div>
    </section>
  );
}

function ClipboardPanel() {
  return (
    <div className='panel-stage'>
      <div className='panel-glow' />
      <div className='clip-panel'>
        <div className='panel-toolbar'>
          <div className='search-box'>
            <Search size={18} />
            <span>Search clipboard...</span>
          </div>
          <button>All</button>
          <button>Text</button>
          <button>Image</button>
          <button>File</button>
          <div className='pin-chip'>
            <span />
            Important
          </div>
        </div>
        <div className='clip-grid'>
          <ClipCard type='Text' meta='12m ago' tone='blue'>
            Stop losing the line you just copied. Keep it nearby, then paste it back instantly.
          </ClipCard>
          <ClipCard type='Image' meta='24m ago' tone='amber'>
            <div className='image-preview'>
              <Image size={46} />
            </div>
          </ClipCard>
          <ClipCard type='File' meta='1h ago' tone='green'>
            <div className='file-preview'>
              <Folder size={44} />
              <strong>Proposal.pdf</strong>
            </div>
          </ClipCard>
        </div>
      </div>
    </div>
  );
}

function ClipCard({ type, meta, tone, children }) {
  return (
    <article className={`clip-card ${tone}`}>
      <div className='clip-card-header'>
        <span>{type}</span>
        <small>{meta}</small>
      </div>
      <div className='clip-card-body'>{children}</div>
    </article>
  );
}

function FeatureBand() {
  return (
    <section className='feature-band' id='features'>
      {features.map(({ icon: Icon, title, text }) => (
        <article className='feature-card' key={title}>
          <div className='feature-icon'>
            <Icon size={24} />
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

function ProductStory() {
  return (
    <section className='story-section'>
      <div>
        <h2>Clipboard history that stays out of your way.</h2>
        <p>
          KongClip opens as a compact launcher, so your current work remains the center of attention. Filter by type, pin important snippets, and use a double click to send content back where it
          belongs.
        </p>
      </div>
      <div className='workflow-card'>
        {timeline.map((item, index) => (
          <div className='workflow-step' key={item}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SyncSection() {
  return (
    <section className='sync-section' id='sync'>
      <div className='sync-card'>
        <div className='cloud-orbit'>
          <Cloud size={54} />
          <span className='orbit-dot dot-one' />
          <span className='orbit-dot dot-two' />
          <span className='orbit-dot dot-three' />
        </div>
        <div>
          <h2>Sync through iCloud when you want continuity.</h2>
          <p>
            Keep your clipboard history local by default, then enable iCloud sync when you want the same library across your Macs. No separate KongClip account required. Releases are published on
            GitHub and downloaded directly as a signed DMG package.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  return (
    <section className='privacy-section' id='privacy'>
      <div className='privacy-copy'>
        <LockKeyhole size={34} />
        <h2>Your clipboard deserves a quieter home.</h2>
        <p>
          Clipboard data can include passwords, client notes, screenshots, drafts, and private files. KongClip is designed around local storage, optional Apple iCloud sync, and clear user control.
        </p>
      </div>
      <div className='privacy-list'>
        <div>
          <FileText size={20} />
          <span>Text, images, and files stay organized locally.</span>
        </div>
        <div>
          <Pin size={20} />
          <span>Pin boards keep sensitive snippets separate.</span>
        </div>
        <div>
          <ShieldCheck size={20} />
          <span>No third-party cloud account required.</span>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className='about-page'>
      <div className='about-hero'>
        <div className='about-mark'>
          <img src='/kongclip-logo.png' alt='' />
        </div>
        <div>
          <h1>Built by WebKong, for people who build their own tools.</h1>
          <p>WebKong is a 15-year internet practitioner who enjoys building a personal toolset, refining daily workflows, and sharing useful products with other makers.</p>
        </div>
      </div>

      <div className='about-grid'>
        <article className='about-card'>
          <div className='feature-icon'>
            <Sparkles size={24} />
          </div>
          <h2>About the author</h2>
          <p>
            After years of product, engineering, and internet work, WebKong prefers small tools that solve real friction: fast launchers, repeatable workflows, local-first utilities, and products that
            stay understandable.
          </p>
          <p>KongClip started from that habit: a clipboard app should feel fast, safe, and quiet, not like another account-based service trying to own your data.</p>
        </article>

        <article className='about-card free-card'>
          <div className='feature-icon'>
            <Gift size={24} />
          </div>
          <h2>Why KongClip is free</h2>
          <p>Clipboard management is a basic productivity need. KongClip is free because the best version of this tool is simple: download it, use it, and keep your workflow moving.</p>
          <p>There is no third-party cloud backend to pay for. Local-first storage and optional iCloud sync keep operating costs low, so the product can stay accessible.</p>
        </article>
      </div>

      <div className='about-statement'>
        <ShieldCheck size={28} />
        <p>The long-term goal is to keep KongClip practical, transparent, and useful. If a paid feature ever appears, the core clipboard experience should remain free.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='brand footer-brand'>
          <img src='/kongclip-logo.png' alt='' />
          <span>KongClip</span>
        </div>
        <div className='footer-links'>
          <a href={GITHUB_REPO_URL} target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a href={DMG_DOWNLOAD_URL}>Download DMG</a>
        </div>
      </div>
      <p className='footer-copyright'>Copyright © 2026 WebKong. All rights reserved.</p>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
