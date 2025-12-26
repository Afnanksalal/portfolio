import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lightning, PaintBrush, Brain, RocketLaunch, ArrowRight, ArrowDown, ArrowUpRight, Envelope, MapPin, Code } from "@phosphor-icons/react";

// ═══════════════════════════════════════════════════════════════
// TEXT REVEAL ANIMATION - smooth with proper clipping
// ═══════════════════════════════════════════════════════════════
const RevealText = ({ children, className, delay = 0, style }: { children: string; className?: string; delay?: number; style?: React.CSSProperties }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <span ref={ref} className={cn("inline-block overflow-hidden pb-[0.1em]", className)} style={style}>
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ 
          duration: 0.8, 
          delay, 
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.4, delay }
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════
// FADE UP WRAPPER
// ═══════════════════════════════════════════════════════════════
const FadeUp = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════
// PARALLAX IMAGE
// ═══════════════════════════════════════════════════════════════
const ParallaxImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img src={src} alt={alt} style={{ y }} className="h-[115%] w-full object-cover" loading="lazy" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════
const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-12 md:mb-16">
    <FadeUp>
      <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">{`// ${label}`}</p>
    </FadeUp>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
      <RevealText className="text-stone-100">{title}</RevealText>
    </h2>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const navItems = ["about", "skills", "work", "contact"];

  // Reset any scroll locks on mount
  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(id => document.getElementById(id));
      const scrollPos = window.scrollY + 150;
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Ensure scroll is always enabled on mount
    document.body.style.overflow = "";
    
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => { 
      document.body.style.overflow = ""; 
    };
  }, [mobileMenuOpen]);

  const skills = [
    { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "Rust", "C", "C++", "Java", "Bash", "SQL", "Lua"] },
    { category: "AI & ML", items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Claude", "Hugging Face", "RAG", "ONNX", "MLflow", "Weights & Biases"] },
    { category: "Hardware & Firmware", items: ["Embedded C", "RTOS", "ESP32", "STM32", "Arduino", "Raspberry Pi", "PCB Design", "Verilog", "VHDL", "FPGA"] },
    { category: "Wearables & IoT", items: ["BLE", "LoRa", "Zigbee", "MQTT", "Sensors", "Edge ML", "Low Power", "OTA Updates", "Thread", "Matter"] },
    { category: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Kafka", "Redis", "Nginx"] },
    { category: "Data & Databases", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Prisma", "Drizzle", "ClickHouse", "TimescaleDB", "Neo4j", "Pinecone"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue", "Svelte", "Tailwind", "Framer Motion", "Three.js", "WebGL", "Electron", "React Native"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "Django", "NestJS", "Express", "GraphQL", "tRPC", "gRPC", "WebSockets", "REST"] },
    { category: "Design & CAD", items: ["Figma", "Blender", "Fusion 360", "KiCad", "MATLAB", "Simulink", "SolidWorks", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "Dev Tools", items: ["Git", "Linux", "Vim", "VS Code", "Cursor", "Notion", "Jira", "Postman", "Insomnia", "Wireshark"] }
  ];

  const projects = [
    {
      title: "Acadly",
      tagline: "Campus Marketplace & Collaboration",
      description: "Transform your campus experience—where students connect, trade, learn, and grow together. Building the future of academic collaboration.",
      tech: ["Next.js", "PostgreSQL", "Redis", "Supabase", "Vercel"],
      link: "https://github.com/Afnanksalal/Acadly",
      live: "https://acadlyy.vercel.app",
      gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/15"
    },
    {
      title: "Co-op",
      tagline: "Multi-Agent LLM Council",
      description: "Expert guidance across legal, finance, investor relations, and competitive analysis. Powered by multi-model LLM Council with mandatory cross-critique.",
      tech: ["Python", "FastAPI", "LangChain", "NestJS", "Supabase"],
      link: "https://github.com/Afnanksalal/co-op",
      live: "https://co-op-dev.vercel.app",
      gradient: "from-purple-500/15 via-indigo-500/10 to-violet-500/15"
    },
    {
      title: "TenderTalks",
      tagline: "Podcast Streaming Platform",
      description: "Modern podcast streaming with subscription management, merchandise store, and comprehensive admin dashboard.",
      tech: ["React", "TypeScript", "PostgreSQL", "Neon", "Supabase"],
      link: "https://github.com/Afnanksalal/tendertalks",
      live: "https://tendertalks.live",
      gradient: "from-fuchsia-500/15 via-violet-500/10 to-purple-500/15"
    },
    {
      title: "Frag",
      tagline: "Systems & Robotics Language",
      description: "Experimental, compiler-based programming language written in Rust. Designed as a modern systems + robotics language.",
      tech: ["Rust", "Compiler", "Verilog", "Hardware", "Robotics"],
      link: "https://github.com/Afnanksalal/frag",
      gradient: "from-indigo-500/15 via-purple-500/10 to-violet-500/15"
    }
  ];

  const experiences = [
    { role: "Chief Technology Officer", company: "Nyvra", period: "2025 — Now", desc: "Hardware, firmware, AI/ML, data platform, wearable & cloud architecture." },
    { role: "Technical Consultant", company: "Inker Robotics", period: "Oct 2025 — Now", desc: "Robotics systems, embedded firmware, and hardware-software integration." },
    { role: "Founder", company: "pls intern me", period: "Jul 2025 — Now", desc: "Building tools to help students find internships and opportunities." },
    { role: "Chief Executive Officer", company: "Kaizen Solutions", period: "Jan 2025 — Now", desc: "AI-powered SaaS products. Technical strategy and product development." },
    { role: "Chief Technology Officer", company: "Avolta Technologies", period: "Jan 2025 — Now", desc: "Full-stack development, AI integration, and cloud infrastructure." },
    { role: "IEDC NEST Team", company: "IEDC Kerala", period: "Oct 2024 — Now", desc: "Innovation and entrepreneurship development initiatives." },
    { role: "Internship Trainee", company: "Purpose Technology LLP", period: "Mar 2024 — Apr 2024", desc: "On-site internship focused on practical development skills." },
    { role: "Developer", company: "Assistify Labs", period: "Feb 2024 — Now", desc: "Full-time development work on AI-powered products." },
    { role: "IEDC Member", company: "IEDC Kerala", period: "Jul 2022 — Now", desc: "Active member contributing to innovation ecosystem." },
    { role: "Management Staff", company: "FalixNodes", period: "Aug 2019 — Jul 2021", desc: "Part-time management role for hosting platform based in London." }
  ];

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen bg-[#0d0a14] text-stone-100 selection:bg-violet-500/30">
        {/* Grid background with subtle violet hue */}
        <div className="pointer-events-none fixed inset-0 z-0 grid-bg" />
        
        {/* Center radial glow */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/[0.03] blur-[100px]" />
        </div>

        {/* Noise texture */}
        <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        {/* Progress bar */}
        <motion.div className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500" style={{ scaleX: smoothProgress }} />

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HEADER */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl bg-[#0d0a14]/70 border-b border-violet-900/30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <a href="#" className="group flex items-center gap-2" data-hover>
              <p className="text-sm font-medium">Afnan K Salal</p>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  data-hover
                  className={cn(
                    "relative px-4 py-2 text-sm font-mono capitalize transition-colors",
                    activeSection === item ? "text-violet-400" : "text-stone-400 hover:text-stone-100"
                  )}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div layoutId="nav" className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-violet-400" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button asChild size="sm" className="hidden sm:inline-flex bg-violet-600 text-white hover:bg-violet-500 font-medium text-xs sm:text-sm" data-hover>
                <a href="/afnan-resume.pdf" download>Resume</a>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-400 hover:text-stone-100"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-[#0d0a14]/95 backdrop-blur-xl md:hidden"
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center justify-center h-full gap-8"
              >
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                    className="text-3xl font-medium capitalize text-stone-100 hover:text-violet-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }} className="mt-8">
                  <Button asChild size="lg" className="bg-violet-600 text-white hover:bg-violet-500 font-medium px-8" data-hover>
                    <a href="/afnan-resume.pdf" download onClick={() => setMobileMenuOpen(false)}>Resume</a>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HERO */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 pt-28 pb-24 sm:pt-32 sm:pb-32">
          {/* Ambient blurs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 -left-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-violet-600/10 blur-[80px] sm:blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-purple-600/8 blur-[60px] sm:blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="grid gap-32 lg:gap-16 lg:grid-cols-[1.3fr_0.7fr] items-center">
              {/* Left content */}
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-tight">
                  <RevealText className="block text-stone-100 pb-1">Hey, I'm Afnan.</RevealText>
                  <motion.span 
                    className="block mt-2 pb-2 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent" 
                    style={{ fontFamily: "'Space Grotesk', sans-serif", WebkitBackgroundClip: "text" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    I build things that work.
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-xl text-base sm:text-lg leading-relaxed text-stone-400 font-mono"
                >
                  Building at the intersection of Hardware, Firmware, AI/ML, Data Platforms, Wearables & Cloud Architecture.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-3 sm:gap-4 items-stretch"
                >
                  <Button asChild size="lg" className="group gap-2 bg-violet-600 text-white hover:bg-violet-500 font-medium px-6 h-11" data-hover>
                    <a href="#work">
                      View work
                      <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-violet-700/50 text-stone-200 hover:bg-violet-950/50 hover:text-stone-100 hover:border-violet-600/50 px-6 h-11" data-hover>
                    <a href="#contact">Let's talk</a>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 sm:pt-8"
                >
                  {[
                    { value: "6+", label: "Years Experience" },
                    { value: "10+", label: "SaaS Products" },
                    { value: "5+", label: "Custom Models" }
                  ].map(stat => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <p className="text-3xl sm:text-4xl font-bold text-stone-100">{stat.value}</p>
                      <p className="text-xs sm:text-sm font-mono text-stone-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Scroll indicator - mobile only, before photo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-center lg:hidden"
                >
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2 text-stone-500">
                    <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                    <ArrowDown weight="bold" className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right - Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto lg:mx-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] flex items-center justify-center"
              >
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-500/20 via-transparent to-purple-500/20 blur-2xl" />
                <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] overflow-hidden rounded-full border-2 border-violet-600/50">
                  <img src="/afnan.png" alt="Afnan K Salal" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator - desktop only, below content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:flex justify-center mt-12 sm:mt-16 lg:mt-20"
            >
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2 text-stone-500">
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <ArrowDown weight="bold" className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* ABOUT */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
              <div>
                <SectionHeader label="About" title="I care about craft." />
              </div>

              <FadeUp delay={0.2} className="space-y-6 text-base sm:text-lg text-stone-400 leading-relaxed">
                <p className="font-mono">
                  6 years building across the full stack—from silicon to cloud. Hardware, firmware, AI/ML, data platforms, wearables, and scalable infrastructure.
                </p>
                <p className="font-mono">
                  What drives me? That moment when hardware meets software perfectly. When the whole system just <span className="text-stone-200">works</span>.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-6">
                  {[
                    { icon: Lightning, label: "Performance" },
                    { icon: PaintBrush, label: "Design" },
                    { icon: Brain, label: "AI-First" },
                    { icon: RocketLaunch, label: "Ship Fast" }
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 rounded-xl border border-violet-800/30 bg-violet-950/20 px-3 sm:px-4 py-3">
                      <item.icon weight="duotone" className="h-5 w-5 text-violet-400" />
                      <span className="text-xs sm:text-sm font-mono text-stone-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Experience timeline */}
            <div className="mt-16 sm:mt-24">
              <FadeUp>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-violet-400 mb-8">{`// Experience`}</p>
              </FadeUp>
              <div className="space-y-4 sm:space-y-6">
                {(showAllExperiences ? experiences : experiences.slice(0, 3)).map((exp, i) => (
                  <FadeUp key={`exp-${i}`} delay={i * 0.1}>
                    <div className="group relative rounded-xl sm:rounded-2xl border border-violet-800/30 bg-violet-950/20 p-4 sm:p-6 hover:bg-violet-950/40 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-stone-100">{exp.role}</h3>
                          <p className="text-xs sm:text-sm font-mono text-violet-400">{exp.company}</p>
                        </div>
                        <span className="text-xs font-mono text-stone-500">{exp.period}</span>
                      </div>
                      <p className="text-sm font-mono text-stone-400">{exp.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
              {experiences.length > 3 && (
                <FadeUp delay={0.3}>
                  <button
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-violet-700/50 bg-violet-950/30 text-stone-300 hover:bg-violet-950/50 hover:text-stone-100 hover:border-violet-600/50 transition-colors font-mono text-sm"
                    data-hover
                  >
                    {showAllExperiences ? "Show less" : `Show all ${experiences.length} experiences`}
                    <motion.span
                      animate={{ rotate: showAllExperiences ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowDown weight="bold" className="h-4 w-4" />
                    </motion.span>
                  </button>
                </FadeUp>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SKILLS */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <SectionHeader label="Skills" title="My toolkit." />

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {skills.map((group, i) => (
                <FadeUp key={group.category} delay={i * 0.08} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <div className="rounded-xl sm:rounded-2xl border border-violet-800/30 bg-violet-950/20 p-4 sm:p-6 hover:bg-violet-950/40 transition-colors h-full">
                    <p className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-4">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(skill => (
                        <span key={skill} className="rounded-full border border-violet-700/40 bg-violet-900/30 px-3 py-1 text-xs sm:text-sm font-mono text-stone-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* WORK */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="work" className="relative py-20 sm:py-32 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
              <SectionHeader label="Work" title="Selected projects." />
              <div className="hidden sm:block">
                <Button asChild variant="outline" className="border-violet-700/50 text-stone-200 hover:bg-violet-950/50 hover:text-stone-100 hover:border-violet-600/50" data-hover>
                  <a href="https://github.com/afnanksalal" target="_blank" rel="noreferrer">
                    All projects
                    <ArrowUpRight weight="bold" className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {projects.map((project, idx) => (
                <FadeUp key={project.title} delay={idx * 0.1}>
                  <div className="group relative h-full">
                    <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-3xl", project.gradient)} />
                    <div className="relative h-full flex flex-col rounded-2xl border border-violet-800/30 bg-violet-950/30 p-5 sm:p-6 backdrop-blur-sm">
                      <div className="flex-1 space-y-4">
                        <div>
                          <p className="text-xs font-mono text-violet-400 mb-1">{project.tagline}</p>
                          <h3 className="text-xl sm:text-2xl font-semibold text-stone-100 group-hover:text-white transition-colors">{project.title}</h3>
                        </div>
                        <p className="text-sm font-mono text-stone-400 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="rounded-full border border-violet-700/40 bg-violet-900/30 px-2.5 py-1 text-xs font-mono text-stone-400">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Button asChild size="sm" className="bg-violet-600 text-white hover:bg-violet-500" data-hover>
                          <a href={project.link} target="_blank" rel="noreferrer">
                            GitHub
                            <ArrowUpRight weight="bold" className="ml-1.5 h-3.5 w-3.5" />
                          </a>
                        </Button>
                        {project.live && (
                          <Button asChild size="sm" variant="outline" className="border-violet-600/50 text-stone-200 hover:bg-violet-600 hover:text-white hover:border-violet-600" data-hover>
                            <a href={project.live} target="_blank" rel="noreferrer">
                              Live Demo
                              <ArrowUpRight weight="bold" className="ml-1.5 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <Button asChild variant="outline" className="w-full border-violet-700/50 text-stone-200 hover:bg-violet-950/50 hover:text-stone-100" data-hover>
                <a href="https://github.com/afnanksalal" target="_blank" rel="noreferrer">
                  View all on GitHub
                  <ArrowUpRight weight="bold" className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* CONTACT */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-violet-600/5 blur-[100px] sm:blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-violet-400 mb-4">{`// Contact`}</p>
            </FadeUp>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 sm:mb-8 leading-[1.15]">
              <RevealText className="text-stone-100 pb-1">Let's create</RevealText>
              <motion.span 
                className="block mt-2 pb-2 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent" 
                style={{ fontFamily: "'Space Grotesk', sans-serif", WebkitBackgroundClip: "text" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                something great.
              </motion.span>
            </h2>
            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg font-mono text-stone-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
                Got a project? Want to collaborate? Just want to say hi? I'd love to hear from you.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="gap-2 bg-violet-600 text-white hover:bg-violet-500 font-medium px-6 w-full sm:w-auto min-w-[140px]" data-hover>
                  <a href="mailto:afnanksalal@gmail.com">
                    <Envelope weight="bold" className="h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-violet-700/50 text-stone-200 hover:bg-violet-950/50 hover:text-stone-100 hover:border-violet-600/50 px-6 w-full sm:w-auto min-w-[140px]" data-hover>
                  <a href="https://linkedin.com/in/afnanksalal" target="_blank" rel="noreferrer">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-violet-700/50 text-stone-200 hover:bg-violet-950/50 hover:text-stone-100 hover:border-violet-600/50 px-6 w-full sm:w-auto min-w-[140px]" data-hover>
                  <a href="https://twitter.com/afnanksalal" target="_blank" rel="noreferrer">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Twitter
                  </a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FOOTER */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <footer className="border-t border-violet-900/30 py-6 sm:py-8 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl flex items-center justify-center">
            <span className="text-xs sm:text-sm font-mono text-stone-500">© 2025 Afnan K Salal</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
