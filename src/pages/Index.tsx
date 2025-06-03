import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github, Linkedin, Download, ExternalLink, Code, Palette, Database,
  Server, Award, MapPin, Calendar, Brain, Cpu, Terminal,
  Cloud, Layers, GitBranch, Zap, Target, Bot, Twitter
} from 'lucide-react';

const lucideSkillIconMap = {
  'Python': Code,
  'TypeScript': Code,
  'Next.js': Layers,
  'Node.js': Server,
  'Django': Server,
  'TensorFlow': Brain,
  'PyTorch': Brain,
  'LangChain': GitBranch,
  'MongoDB': Database,
  'PostgreSQL': Database,
  'AWS': Cloud,
  'Docker': Server,
  'Kubernetes': Server,
  'OpenAI API': Bot,
  'Supabase': Zap,
  'Tailwind': Palette,
};

const SkillIcon = ({ name, className, size = 24 }) => {
  const IconComponent = lucideSkillIconMap[name];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'Python', iconKey: 'Python', color: 'from-yellow-400 to-blue-500' },
    { name: 'TypeScript', iconKey: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Next.js', iconKey: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Django', iconKey: 'Django', color: 'from-green-600 to-green-800' },
    { name: 'TensorFlow', iconKey: 'TensorFlow', color: 'from-orange-400 to-red-500' },
    { name: 'PyTorch', iconKey: 'PyTorch', color: 'from-red-500 to-pink-500' },
    { name: 'MongoDB', iconKey: 'MongoDB', color: 'from-green-400 to-green-600' },
    { name: 'PostgreSQL', iconKey: 'PostgreSQL', color: 'from-blue-400 to-purple-500' },
    { name: 'AWS', iconKey: 'AWS', color: 'from-orange-400 to-yellow-400' },
  ];

  const projects = [
    {
      title: 'TextWave - AI Text-to-Speech',
      description: 'TextWave is your one-stop solution for transforming text into natural-sounding speech. With its support for diverse languages, accents, and customizable settings, you can unlock a world of possibilities. From crafting immersive games and enhancing accessibility to exploring new frontiers in creative expression, TextWave empowers you to bring your ideas to life through the magic of voice..',
      image: 'https://raw.githubusercontent.com/Afnanksalal/TextWave/refs/heads/main/textwave.png',
      tech: ['Django', 'Flask', 'NLP', 'TTS', 'Audio Processing'],
      github: 'https://github.com/Afnanksalal/TextWave',
      live: 'https://github.com/Afnanksalal/TextWave'
    },
    {
      title: 'Malayalee.ai - Your AI Malayalam Companion',
      description: 'Malayalee.ai is your friendly, AI-powered guide to the Malayalam language and culture, now with both text and voice interaction! It acts as your personal translator, conversation partner.',
      image: 'https://raw.githubusercontent.com/Afnanksalal/Malayalee.ai/main/malayalee-ai.png',
      tech: ['Python', 'Flask', 'GenAI', 'Gemini', 'TTS'],
      github: 'https://github.com/Afnanksalal/Malayalee.ai',
      live: 'https://github.com/Afnanksalal/Malayalee.ai'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative text-foreground overflow-x-hidden bg-background">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="floating-icon top-[10vh] left-[5vw] from-violet-600 to-purple-600 animate-float">
          <Brain size={28} className="text-white" />
        </div>
        <div className="floating-icon top-[20vh] right-[10vw] from-cyan-600 to-blue-600 animate-float-delayed">
          <Code size={24} className="text-white" />
        </div>
        <div className="floating-icon top-[40vh] left-[25vw] from-pink-600 to-violet-600 animate-float-slow">
          <Cpu size={26} className="text-white" />
        </div>
         <div className="floating-icon bottom-[40vh] right-[5vw] from-purple-600 to-pink-600 animate-float">
          <Terminal size={24} className="text-white" />
        </div>
        <div className="floating-icon bottom-[20vh] left-[15vw] from-indigo-600 to-purple-600 animate-float-delayed">
          <Cloud size={26} className="text-white" />
        </div>
        <div className="floating-icon top-[50vh] right-[30vw] from-violet-700 to-blue-600 animate-float-slow">
          <Layers size={22} className="text-white" />
        </div>
        <div className="floating-icon bottom-[10vh] right-[20vw] from-purple-700 to-pink-600 animate-glow-pulse">
          <GitBranch size={24} className="text-white" />
        </div>
         <div className="floating-icon top-[70vh] left-[5vw] from-green-600 to-teal-600 animate-float-slow">
            <Zap size={20} className="text-white" />
         </div>
          <div className="floating-icon top-[15vh] left-[40vw] from-red-600 to-orange-600 animate-float">
            <Target size={22} className="text-white" />
         </div>
      </div>

      <div className="relative z-10">
        <nav className="floating-nav hidden md:block fixed top-7 left-1/2 transform -translate-x-1/2 w-full max-w-8xl z-50 rounded-half glass-card backdrop-blur-xl">
          <div className="px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-caveat font-bold text-primary py-1 px-1">
                Afnan K Salal
              </h1>
              <div className="flex space-x-8">
                <a href="#about" className="hover:text-primary transition-colors py-2">About</a>
                <a href="#skills" className="hover:text-primary transition-colors py-2">Skills</a>
                <a href="#projects" className="hover:text-primary transition-colors py-2">Projects</a>
                <a href="#contact" className="hover:text-primary transition-colors py-2">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <section className="pt-4 md:pt-40 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing font-bold mb-4 text-primary leading-tight py-2">
                  Hello, I'm Afnan
                </h1>
                <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                  A passionate <span className="text-primary font-semibold">AI Engineer & Full Stack Developer</span> crafting intelligent digital experiences with cutting-edge technologies
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button asChild className="bg-card hover:bg-card/80 text-foreground px-8 py-3 rounded-full text-lg">
                    <a href="/afnan-resume.pdf" download="afnan_salal_resume.pdf">
                      <Download className="mr-2" size={20} />
                      Download CV
                    </a>
                  </Button>
                  <a href="#projects" >
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-full text-lg">
                    View Projects
                  </Button>
                  </a>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full bg-gradient-to-br from-card to-background p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-background to-card flex items-center justify-center overflow-hidden">
                    <img
                      src="/afnan.png"
                      alt="Afnan K Salal's profile picture"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 right-8 sm:right-10 md:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-600 to-violet-600 rounded-2xl flex items-center justify-center animate-glow-pulse shadow-2xl">
                  <Brain size={32} className="text-white" />
                </div>
                <div className="absolute -bottom-4 left-8 sm:left-10 md:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center animate-glow-pulse shadow-2xl">
                  <Code size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-center mb-12 md:mb-16 text-primary py-2">
              About Me
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bento-card lg:col-span-2">
                <h3 className="text-2xl font-caveat font-semibold mb-4 text-primary py-1">My Story</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  I'm a passionate AI Engineer and Full-Stack Developer with 6+ years of experience building intelligent applications
                  that solve real-world problems. I specialize in machine learning, deep learning, and creating scalable web applications.
                </p>
                <p className="text-foreground leading-relaxed">
                  My expertise spans from training neural networks and deploying ML models to building modern web applications
                  with Next.js, Django, Express, Flask, and more. I love exploring the intersection of AI and web development.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-card/50 text-primary border-primary/30">AI Specialist</Badge>
                  <Badge className="bg-card/50 text-primary border-primary/30">Full Stack</Badge>
                  <Badge className="bg-card/50 text-primary border-primary/30">ML Engineer</Badge>
                </div>
              </Card>

              <Card className="bento-card">
                <h3 className="text-xl font-caveat font-semibold mb-4 text-primary py-1">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-foreground">Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-foreground">6+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={16} className="text-primary" />
                    <span className="text-foreground">20+ Projects Completed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-center mb-12 md:mb-16 text-primary py-2">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill: { color: string; iconKey: string; name: string }, index: number) => (
                <Card key={index} className="bento-card group hover:bg-gradient-to-br hover:from-card/40 hover:to-background/40">
                  <div className="flex items-center gap-4">
                    <div className={`macos-icon bg-gradient-to-br ${skill.color} text-white group-hover:scale-110 transition-transform flex items-center justify-center`}>
                      <SkillIcon name={skill.iconKey} size={20} className="text-white" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-8 md:mt-16">
              <Card className="bento-card">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-primary" size={24} />
                  <h3 className="text-xl font-caveat font-semibold text-primary py-1">AI & Machine Learning</h3>
                </div>
                <p className="text-foreground">Building intelligent systems with deep learning, NLP, and computer vision techniques.</p>
              </Card>

              <Card className="bento-card">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-primary" size={24} />
                  <h3 className="text-xl font-caveat font-semibold text-primary py-1">Full Stack Development</h3>
                </div>
                <p className="text-foreground">Creating end-to-end applications with modern frameworks and scalable architectures.</p>
              </Card>

              <Card className="bento-card">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="text-primary" size={24} />
                  <h3 className="text-xl font-caveat font-semibold text-primary py-1">Cloud & DevOps</h3>
                </div>
                <p className="text-foreground">Deploying and scaling applications using cloud services and containerization.</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-center mb-12 md:mb-16 text-primary py-2">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {projects.map((project, index) => (
                <Card key={index} className="bento-card group overflow-hidden flex flex-col">
                  {/* Removed the fixed height container and rely on image scaling */}
                  <div className="relative mb-4 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-caveat font-semibold mb-2 text-primary py-1">{project.title}</h3>
                    <p className="text-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-card/50 text-primary border-primary/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button size="sm" className="bg-card hover:bg-card/80 text-foreground">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-dancing font-bold mb-8 text-primary py-2">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-foreground text-xl mb-12 leading-relaxed">
              I'm always interested in new opportunities and collaborations in AI and web development.
              Whether you have a project in mind or want to discuss the latest in technology, I'd love to connect!
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <Button asChild className="bg-card hover:bg-card/80 text-foreground px-8 py-4 rounded-full text-lg">
                <a href="https://github.com/afnanksalal" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild className="bg-card hover:bg-card/80 text-foreground px-8 py-4 rounded-full text-lg">
                <a href="https://www.linkedin.com/in/afnanksalal" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 rounded-full text-lg">
                 <a href="https://twitter.com/afnanksalal" target="_blank" rel="noopener noreferrer">
                   <Twitter size={20} className="mr-2" />
                   X
                 </a>
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-foreground mb-4">
              © 2025 Afnan K Salal
            </p>
            <p className="text-gray-400 text-sm">
              "Building the future with AI and code"
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;