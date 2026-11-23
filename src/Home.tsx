import { useEffect, useState, type CSSProperties } from 'react';

type Category = 'Todos' | 'Web' | 'Identidad' | 'Motion';

type Project = {
  id: number;
  number: string;
  title: string;
  category: Exclude<Category, 'Todos'>;
  year: string;
  description: string;
  stack: string;
  art: string;
  headline: string;
};

const projects: Project[] = [
  {
    id: 1, number: '01', title: 'BLOQUE STUDIO', category: 'Web', year: '2026',
    description: 'Landing editorial con bloques de color, titulares gigantes y composición asimétrica.',
    stack: 'React · Tailwind · RWD', art: 'art-bloque', headline: 'BLOQ.'
  },
  {
    id: 2, number: '02', title: 'RUIDO FEST', category: 'Identidad', year: '2026',
    description: 'Sistema gráfico para un festival: contrastes extremos, tramas y etiquetas de alto impacto.',
    stack: 'CSS · Tipografía · Branding', art: 'art-ruido', headline: 'RUIDO!'
  },
  {
    id: 3, number: '03', title: 'LOOP LAB', category: 'Motion', year: '2025',
    description: 'Experimento de movimiento con formas geométricas que responden al puntero.',
    stack: 'React · CSS · Animación', art: 'art-loop', headline: 'LOOP'
  },
  {
    id: 4, number: '04', title: 'MODO EDITORIAL', category: 'Web', year: '2025',
    description: 'Diseño de artículos con retícula modular, navegación clara y tipografía fluida.',
    stack: 'React · Tailwind · Grid', art: 'art-modo', headline: 'MODO.'
  },
  {
    id: 5, number: '05', title: 'TIPO SOCIAL', category: 'Identidad', year: '2026',
    description: 'Identidad experimental basada en letras enormes, pegatinas y superposiciones.',
    stack: 'Diseño gráfico · CSS', art: 'art-tipo', headline: 'Aa!'
  },
  {
    id: 6, number: '06', title: 'GIRA / GIRA', category: 'Motion', year: '2025',
    description: 'Pequeñas interacciones visuales y transiciones suaves para enriquecer una interfaz.',
    stack: 'Transform · Hover · React', art: 'art-gira', headline: '360°'
  }
];

const filters: Category[] = ['Todos', 'Web', 'Identidad', 'Motion'];
const accents = ['#e9ff58', '#ff6b53', '#8c9aff'];

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div className={`project-art ${project.art}`} aria-hidden="true">
      <span className="art-halo" />
      <span className="art-cross">✳</span>
      <span className="art-headline">{project.headline}</span>
      <span className="art-corner">BR/26</span>
    </div>
  );
}

function Home() {
  const [filter, setFilter] = useState<Category>('Todos');
  const [liked, setLiked] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [accentIndex, setAccentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = filter === 'Todos'
    ? projects
    : projects.filter((project) => project.category === filter);

  const pageStyle = { '--accent': accents[accentIndex] } as CSSProperties;

  const toggleLike = (id: number) => {
    setLiked((previous) => previous.includes(id)
      ? previous.filter((item) => item !== id)
      : [...previous, id]);
  };

  // Interacción accesible: Escape cierra el detalle abierto.
  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-paper text-ink" style={pageStyle}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#inicio" onClick={closeMenu} className="brand" aria-label="Bruta Lab, inicio">
            BRUTA<span className="brand-exclaim">!</span><span className="brand-tail"> LAB</span>
          </a>
          <nav className="hidden items-center gap-9 font-black uppercase tracking-wide lg:flex" aria-label="Principal">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#manifiesto">Idea</a>
            <a className="nav-link" href="#proyectos">Proyectos</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="color-button"
              onClick={() => setAccentIndex((index) => (index + 1) % accents.length)}
              aria-label="Cambiar color principal"
              title="Cambiar color principal"
            >
              <span className="color-dot" />
              <span className="hidden sm:inline">CAMBIAR COLOR</span>
              <span className="sm:hidden">COLOR</span>
            </button>
            <button
              type="button"
              className="menu-button lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="nav-movil"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="nav-movil" aria-label="Menú móvil" className="mobile-nav lg:hidden">
            <a href="#inicio" onClick={closeMenu}>Inicio ↗</a>
            <a href="#manifiesto" onClick={closeMenu}>Idea ↗</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos ↗</a>
          </nav>
        )}
      </header>

      <main id="contenido">
        {/* HERO: la altura usa vh y dvh para adaptarse al alto útil de la pantalla. */}
        <section id="inicio" className="hero-viewport hero-grid border-b-4 border-ink">
          <div className="mx-auto grid w-full max-w-[1500px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12 lg:py-14">
            <div className="hero-copy relative z-10">
              <p className="eyebrow"><span className="eyebrow-square" /> ESTUDIO DIGITAL INDEPENDIENTE <span className="hidden sm:inline">/ 2026</span></p>
              <h1 className="hero-title mt-8 font-display font-black uppercase leading-[0.87] tracking-[-0.075em]">
                DISEÑA<span className="hero-dot">.</span><br />
                SIN<br />
                <span className="outline-type">MIEDO</span><span className="hero-dot">!</span>
              </h1>
              <p className="mt-8 max-w-[520px] border-l-[6px] border-ink pl-5 text-lg font-semibold leading-snug sm:text-xl">
                Hacemos interfaces que se ven, se sienten y se recuerdan.
                Sin plantillas aburridas. Sin pedir permiso.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="brutal-button" href="#proyectos">VER PROYECTOS <span aria-hidden="true">↗</span></a>
                <a className="brutal-button brutal-button-outline" href="#manifiesto">¿QUÉ HACEMOS? <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note mt-10 flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] sm:text-sm">
                <span className="note-star" aria-hidden="true">✳</span>
                <span>DISEÑO WEB / INTERACCIONES / RWD</span>
              </div>
            </div>

            <div className="poster-wrap" aria-label="Composición gráfica neobrutalista decorativa">
              <div className="poster-stage">
                <div className="poster-grid" aria-hidden="true" />
                <div className="poster-round" aria-hidden="true"><span>NO<br/>RULES</span></div>
                <div className="poster-burst" aria-hidden="true">✳</div>
                <div className="poster-sticker" aria-hidden="true">100%<br/>CREATIVO</div>
                <div className="poster-label" aria-hidden="true">BRUTA! © 2026 <span>01/06</span></div>
              </div>
              <div className="poster-undertext"><span>ARRASTRA IDEAS,</span><span>NO PLANTILLAS ↗</span></div>
            </div>
          </div>
        </section>

        <div className="ticker overflow-hidden border-b-4 border-ink py-3" aria-hidden="true">
          <div className="ticker-track">
            <span>✳ DISEÑO SIN MIEDO ✳ EXPERIMENTA ✳ ROMPE LA RETÍCULA ✳ DISEÑO SIN MIEDO ✳ EXPERIMENTA ✳ ROMPE LA RETÍCULA&nbsp;</span>
            <span>✳ DISEÑO SIN MIEDO ✳ EXPERIMENTA ✳ ROMPE LA RETÍCULA ✳ DISEÑO SIN MIEDO ✳ EXPERIMENTA ✳ ROMPE LA RETÍCULA&nbsp;</span>
          </div>
        </div>

        <section id="manifiesto" className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="section-topline"><span>01 / LA IDEA</span><span>LO DIFERENTE IMPORTA ↘</span></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="section-title">MENOS<br/><span className="text-[var(--accent)] text-stroke">NORMAL.</span><br/>MÁS WOW.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="feature-card feature-yellow sm:col-span-2">
                <span className="feature-number">/01</span><span className="feature-symbol">Aa</span>
                <h3>TIPOGRAFÍA GIGANTE</h3>
                <p>Titulares que mandan. Jerarquía clara, mucho contraste y personalidad.</p>
              </div>
              <div className="feature-card feature-coral">
                <span className="feature-number">/02</span><span className="feature-symbol">↗</span>
                <h3>MICROINTERACCIONES</h3>
                <p>Botones, filtros y tarjetas que responden a lo que haces.</p>
              </div>
              <div className="feature-card feature-blue">
                <span className="feature-number">/03</span><span className="feature-symbol">▣</span>
                <h3>LAYOUT CON VH</h3>
                <p>Una Home que utiliza la altura de la ventana y se adapta a cada pantalla.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects-section border-y-4 border-ink py-16 lg:py-24">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="section-topline"><span>02 / LABORATORIO</span><span>EXPLORA Y TOCA ↘</span></div>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="section-title">PROYECTOS<span className="hero-dot">*</span></h2>
              <p className="max-w-[230px] text-sm font-bold uppercase">Filtra, guarda favoritos y abre las tarjetas.</p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3" role="group" aria-label="Filtrar proyectos">
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  onClick={() => setFilter(option)}
                  className={`filter-pill ${filter === option ? 'filter-pill-active' : ''}`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
              <span className="ml-auto text-sm font-black" aria-live="polite">{visibleProjects.length} RESULTADOS</span>
            </div>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="relative">
                    <ProjectArtwork project={project} />
                    <button
                      type="button"
                      className={`like-button ${liked.includes(project.id) ? 'liked' : ''}`}
                      onClick={() => toggleLike(project.id)}
                      aria-pressed={liked.includes(project.id)}
                      aria-label={`${liked.includes(project.id) ? 'Quitar' : 'Guardar'} ${project.title} de favoritos`}
                    >
                      {liked.includes(project.id) ? '♥' : '♡'}
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-4 px-4 py-4 sm:px-5">
                    <div className="min-w-0">
                      <p className="mb-1 text-[11px] font-black uppercase tracking-wider">{project.number} / {project.category} / {project.year}</p>
                      <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">{project.title}</h3>
                    </div>
                    <button
                      type="button"
                      className="project-open"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Ver detalles del proyecto ${project.title}`}
                    >↗</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-block px-5 py-16 text-center sm:px-8 lg:py-24" id="final">
          <p className="font-black uppercase tracking-widest">03 / FINAL DE LA DEMO</p>
          <h2 className="contact-title mx-auto mt-4 max-w-5xl font-display font-black uppercase leading-[0.9] tracking-[-0.075em]">¿TIENES UNA<br/> IDEA <span className="contact-asterisk">✳</span> LOCA?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium">Aquí acaba esta Home de ejemplo. Lo divertido es que sus botones, filtros y tarjetas sí funcionan.</p>
          <a className="brutal-button mt-8 inline-flex bg-white" href="#inicio">VOLVER AL PRINCIPIO ↑</a>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-2 border-t-4 border-ink px-5 py-5 text-xs font-black uppercase tracking-wider sm:px-8 lg:px-12">
        <span>BRUTA! LAB © 2026</span>
        <span>HECHO CON REACT + TAILWIND</span>
        <span>DESKTOP / TABLET / MOBILE</span>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="flex items-start justify-between gap-5 border-b-4 border-ink bg-[var(--accent)] p-5 sm:p-6">
              <div><p className="mb-1 text-xs font-black uppercase">PROYECTO {selectedProject.number}</p>
                <h2 id="modal-title" className="text-3xl font-black uppercase sm:text-5xl">{selectedProject.title}</h2></div>
              <button type="button" autoFocus className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Cerrar detalle">✕</button>
            </div>
            <div className="p-5 sm:p-7">
              <ProjectArtwork project={selectedProject} />
              <p className="mt-6 text-lg font-medium leading-relaxed">{selectedProject.description}</p>
              <div className="mt-5 border-t-2 border-ink pt-4 text-sm font-black uppercase">TECNOLOGÍAS / RECURSOS: {selectedProject.stack}</div>
              <button type="button" onClick={() => setSelectedProject(null)} className="brutal-button mt-7">CERRAR DETALLE ✕</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
