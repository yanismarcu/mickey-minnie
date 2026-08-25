'use client'

import { useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Pause, Play, Sparkles } from 'lucide-react'

const photos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare-JGOM1kJTf1svuCxWXk0ZVnnZr0NG3F.jpg',
    alt: 'Mickey and Minnie inside a heart-shaped frame',
    caption: 'O iubire care nu are nevoie de cuvinte.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%281%29-dUgZH60aWsvHfybJ24w0qnkFAgTbyb.jpg',
    alt: 'Mickey and Minnie embracing on a bridge at sunset',
    caption: 'Oriunde am fi, acasă suntem împreună.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mickey%20and%20Minnie%20in%20Paris-uRutnsazW2IoK6L5itJeu24UX5MLxB.jpg',
    alt: 'Mickey and Minnie sitting together in front of the Eiffel Tower',
    caption: 'Parisul e mai frumos când îl privim unul lângă altul.',
  },
]

function PhotoCarousel() {
  const [active, setActive] = useState(0)
  const go = (direction: number) => setActive((active + direction + photos.length) % photos.length)
  const current = photos[active]

  return (
    <div className="album-wrap">
      <div className="photo-stack" aria-live="polite">
        <div className="photo-card photo-card-back" aria-hidden="true">
          <img src={photos[(active + 1) % photos.length].src} alt="" />
        </div>
        <figure className="photo-card photo-card-main">
          <img src={current.src} alt={current.alt} />
          <figcaption>{current.caption}</figcaption>
        </figure>
      </div>
      <div className="carousel-controls">
        <button className="round-button" onClick={() => go(-1)} aria-label="Fotografia anterioară"><ArrowLeft size={18} /></button>
        <span className="photo-count"><strong>{String(active + 1).padStart(2, '0')}</strong> / 0{photos.length}</span>
        <button className="round-button" onClick={() => go(1)} aria-label="Fotografia următoare"><ArrowRight size={18} /></button>
      </div>
    </div>
  )
}

function MusicCard() {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="music-card">
      <div className={`record ${playing ? 'record-playing' : ''}`}>
        <div className="record-label">M<br /><span>&amp;</span><br />M</div>
      </div>
      <div className="music-copy">
        <span className="eyebrow">Piesa noastră</span>
        <h3>Minnie&apos;s Yoo Hoo!</h3>
        <p>Un cântec mic pentru o iubire cât o lume.</p>
        <div className="music-actions">
          <button className="play-button" onClick={() => { setPlaying(!playing); if (!playing) window.open('https://www.youtube.com/results?search_query=Minnie%27s+Yoo+Hoo', '_blank', 'noopener,noreferrer') }} aria-label={playing ? 'Pauză' : 'Redare'}>
            {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
            {playing ? 'Pauză' : 'Ascultă'}
          </button>
          <a href="https://www.youtube.com/results?search_query=Minnie%27s+Yoo+Hoo" target="_blank" rel="noreferrer" className="spotify-link">Deschide melodia <ExternalLink size={14} /></a>
        </div>
        {playing && <p className="player-note">Melodia se deschide pe YouTube într-o filă nouă, pentru redare.</p>}
      </div>
    </div>
  )
}

function Bouquet() {
  return <div className="bouquet" aria-label="Buchet ilustrat de trandafiri" role="img"><div className="bouquet-paper" /><div className="stem stem-one" /><div className="stem stem-two" /><div className="stem stem-three" /><div className="leaf leaf-one" /><div className="leaf leaf-two" /><div className="rose rose-one"><i /><i /><i /></div><div className="rose rose-two"><i /><i /><i /></div><div className="rose rose-three"><i /><i /><i /></div><div className="bouquet-ribbon" /></div>
}

export default function Page() {
  return (
    <main>
      <section className="hero" id="acasa">
        <nav className="nav"><a href="#acasa" className="monogram">M<span>&amp;</span>M</a><span className="nav-note">povestea noastră, în imagini</span><a href="#scrisoare" className="nav-link">Cu drag, mereu <Sparkles size={14} /></a></nav>
        <div className="hero-content">
          <div className="hero-copy"><span className="eyebrow">Pentru tine, iubirea mea</span><h1>Tu ești<br /><em>acasă.</em></h1><p className="hero-lede">Dintre toate poveștile din lume,<br />aș alege-o pe a noastră de fiecare dată.</p><a className="scroll-cue" href="#amintiri">Descoperă povestea <ArrowDown size={17} /></a></div>
          <div className="hero-image-wrap"><div className="hero-image-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%282%29-ta1DKsyRcbfyWU62Sqh0ckLtkB0f0S.jpg" alt="Mickey și Minnie zâmbind împreună" /></div><span className="image-stamp">din<br />inimă</span></div>
        </div>
      </section>

      <section className="memories section" id="amintiri"><div className="section-heading"><span className="eyebrow">Capitolul I</span><h2>Amintiri pe care<br /><em>le păstrăm.</em></h2><p>Unele momente merită să fie retrăite<br className="desktop-only" /> la nesfârșit.</p></div><PhotoCarousel /></section>

      <section className="letter-section section" id="scrisoare"><div className="letter-paper"><div className="paper-pin" /><span className="eyebrow">Capitolul II · O scrisoare</span><h2>Dragostea mea,</h2><div className="letter-body"><p>Dragă mea Minnie,</p><p>Fără tine, întreaga mea lume își pierde culorile. Râsul tău dulce este muzica mea preferată, iar fiecare aventură alături de tine e pură magie. Îți mulțumesc că îmi luminezi fiecare zi cu zâmbetul tău minunat.</p><p>Ești fericirea mea dintotdeauna.</p></div><p className="signature">Cu toată dragostea din lume,<br />Al tău forever, Mickey</p></div></section>

      <section className="music-section section"><div className="section-heading"><span className="eyebrow">Capitolul III · Coloana sonoră</span><h2>Dacă iubirea<br /><em>ar avea un sunet.</em></h2></div><MusicCard /></section>

      <section className="final-section section"><div className="floating-mark mark-one">✦</div><div className="floating-mark mark-two">✧</div><Bouquet /><span className="eyebrow">Capitolul IV · Pentru totdeauna</span><h2>Și dacă ar trebui<br />să aleg din nou,</h2><p className="final-line">te-aș alege pe tine. <em>De fiecare dată.</em></p><div className="final-sign">M <span>&amp;</span> M</div><p className="copyright">o poveste scrisă cu dragoste · 2024</p></section>
    </main>
  )
}
