"use client";

import React, { useState } from 'react';
import { 
  GitBranch, 
  ExternalLink, 
  Menu, 
  X, 
  Copy, 
  Check, 
  ArrowRight,
  Code2,
  Shield,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: React.ReactNode;
  github: string;
  demo?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "DeepSeek CLI",
    subtitle: "DeepSeek CLI",
    description: "A powerful, elegant command-line interface designed to seamlessly integrate DeepSeek’s AI models into the developer workflow.",
    longDescription: "DeepSeek CLI is a modern CLI tool that brings the power of DeepSeek AI directly into your terminal. Features include streaming responses, dynamic plugin system, DSML (DeepSeek Markup Language) support, local model integration, and advanced context management. Built with Python and optimized for speed and developer experience.",
    tags: ["PYTHON", "CLI", "DEEPSEEK AI", "DSML", "LOCAL LLM"],
    image: (
      <div className="flex items-center justify-center h-full w-full bg-[#1a1a1a]">
        <svg width="180" height="130" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 90 Q55 55 85 70 Q110 50 130 75 Q160 55 170 90" stroke="#52525b" strokeWidth="18" strokeLinecap="round" fill="none"/>
          <path d="M45 88 Q65 62 90 75 Q115 58 135 78 Q155 62 165 88" stroke="#71717a" strokeWidth="13" strokeLinecap="round" fill="none"/>
          <circle cx="62" cy="68" r="7" fill="#52525b"/>
          <circle cx="62" cy="68" r="3.5" fill="#18181b"/>
          <path d="M155 72 L172 62 L175 82" stroke="#52525b" strokeWidth="7" strokeLinecap="round"/>
          <path d="M35 95 Q50 110 80 98" stroke="#3f3f46" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    github: "https://github.com/xbibz/deepseek-cli",
    tech: ["Python", "Typer", "Rich", "Pydantic"]
  },
  {
    id: 2,
    title: "Evillimiter",
    subtitle: "Evillimiter",
    description: "A tool that monitors, analyzes, and limits the bandwidth of devices on the local network without administrative access. Uses ARP spoofing and traffic shaping.",
    longDescription: "Evillimiter gives you full control over your local network bandwidth. It uses ARP spoofing to impersonate the gateway and apply traffic shaping rules. Features real-time device discovery, custom bandwidth limits per device, traffic analysis graphs, and automatic network mapping. Perfect for network administration and security research.",
    tags: ["PYTHON", "ARP SPOOFING", "NETWORKING", "SCAPY"],
    image: (
      <div className="flex items-center justify-center h-full w-full bg-[#1a1a1a] relative overflow-hidden">
        <div className="text-center">
          <div className="text-[56px] font-bold tracking-[-6px] text-[#52525b] leading-none font-mono">LUMIT</div>
          <div className="text-[10px] tracking-[4px] text-[#3f3f46] mt-[-4px]">v2.0.8</div>
        </div>
        <div className="absolute bottom-4 right-4 text-[#3f3f46] text-xs font-mono">NET</div>
      </div>
    ),
    github: "https://github.com/xbibz/evillimiter",
    tech: ["Python", "Scapy", "Netfilter", "Matplotlib"]
  },
  {
    id: 3,
    title: "PromptForge",
    subtitle: "PromptForge AI",
    description: "Advanced prompt engineering platform with version control, testing suites, and automated optimization for large language models.",
    longDescription: "PromptForge is a complete suite for crafting, testing, and deploying high-performance prompts. Includes A/B testing, evaluation metrics, prompt versioning, chain-of-thought templates, and integration with multiple LLM providers. Used by AI researchers and production teams worldwide.",
    tags: ["PYTHON", "AI", "PROMPT ENG", "FASTAPI"],
    image: (
      <div className="flex items-center justify-center h-full w-full bg-[#1a1a1a]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#52525b] rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-[#71717a]" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#ef4444] rounded-full flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">AI</span>
          </div>
        </div>
      </div>
    ),
    github: "https://github.com/xbibz/promptforge",
    tech: ["Python", "FastAPI", "React", "LangChain"]
  }
];

const skills = [
  "Python", "PyTorch", "TensorFlow", "Scapy", "CLI Development",
  "Prompt Engineering", "LLMs", "DeepSeek", "Cybersecurity", "Network Security",
  "ARP Spoofing", "Data Analysis", "Machine Learning", "Linux", "Bash"
];

export default function XbibzPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    
    setTimeout(() => setCopied(false), 2000);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Mobile Status Bar Simulation */}
      <div className="md:hidden bg-black h-9 flex items-center justify-between px-4 text-[10px] text-[#52525b] font-mono">
        <div>7:08</div>
        <div className="flex items-center gap-1">
          <div className="flex gap-px">
            <div className="w-1 h-1 bg-[#52525b] rounded-full"></div>
            <div className="w-1 h-1 bg-[#52525b] rounded-full"></div>
            <div className="w-1 h-1 bg-[#52525b] rounded-full"></div>
          </div>
          <div className="flex items-center gap-0.5">
            <span>5G</span>
            <div className="w-6 h-2.5 border border-[#52525b] rounded-[2px] relative">
              <div className="absolute right-0.5 top-0.5 w-[13px] h-[5px] bg-[#52525b] rounded-[1px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#ef4444] flex items-center justify-center">
                <span className="text-black text-[13px] font-bold tracking-tighter">X</span>
              </div>
              <span className="font-heading font-semibold tracking-[-1.5px] text-2xl">XBIBZ.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToSection('projects')} className="nav-link">Proyek</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">Tentang</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Keahlian</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontak</button>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/xbibz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs border border-[#27272a] rounded hover:bg-[#111111] transition-colors"
            >
              <GitBranch size={14} />
              <span>GITHUB</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 text-[#a1a1aa]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#27272a] bg-[#0a0a0a]"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm">
                <button onClick={() => scrollToSection('projects')} className="text-left py-1 nav-link">Proyek Unggulan</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-1 nav-link">Tentang Saya</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-1 nav-link">Keahlian</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-1 nav-link">Kontak</button>
                <div className="pt-2 border-t border-[#27272a]">
                  <a href="https://github.com/xbibz" target="_blank" className="flex items-center gap-2 text-[#a1a1aa]">
                    <GitBranch size={15} /> GitBranch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#27272a] text-[10px] tracking-[2px] text-[#ef4444]">
            WELCOME TO THE VOID
          </div>
        </div>

        <div className="text-center">
          <h1 className="font-heading text-[52px] md:text-[72px] leading-[0.92] tracking-[-3.5px] font-semibold mb-3">
            XBIBZ OFFICIAL
          </h1>
          
          <p className="text-xl md:text-2xl tracking-[-0.5px] text-[#a1a1aa] mb-2">
            DATA SCIENTIST — SECURITY ENTHUSIAST
          </p>

          <p className="max-w-md mx-auto text-sm md:text-[15px] text-[#71717a] mb-8">
            Mengeksplorasi dunia data, keamanan siber,<br />dan AI Prompt Engineering.
          </p>

          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm tracking-[0.5px]"
          >
            LIHAT PROYEK
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-3 mb-7">
          <div className="section-header">// PROYEK UNGGULAN</div>
          <div className="flex-1 h-px bg-[#27272a]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -4 }}
              className="card rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openProject(project)}
            >
              {/* Project Image / Logo */}
              <div className="h-[168px] project-image border-b border-[#27272a] relative">
                {project.image}
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/70 backdrop-blur px-2.5 py-1 rounded text-[10px] flex items-center gap-1 text-white">
                    <ExternalLink size={12} /> VIEW
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="font-semibold text-xl tracking-tight mb-1">{project.title}</div>
                <p className="text-[#a1a1aa] text-[13.5px] leading-snug mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[#ef4444] hover:underline text-xs"
                  >
<GitBranch size={15} />
                    <span>GITHUB</span>
                  </a>
                  <div className="text-[#52525b] text-xs font-mono">VIEW DETAILS →</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="bg-[#111111] border-y border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
            <div className="md:col-span-5">
              <div className="section-header mb-3">// TENTANG SAYA</div>
              <h2 className="font-heading text-4xl tracking-[-1.5px] leading-none font-medium mb-3">Halo, saya XBIBZ.</h2>
              <div className="flex gap-2 mt-5">
                <div className="flex items-center gap-1.5 text-xs px-3 py-1 rounded bg-[#1a1a1a] text-[#a1a1aa]">
                  <Code2 size={13} /> Data Scientist
                </div>
                <div className="flex items-center gap-1.5 text-xs px-3 py-1 rounded bg-[#1a1a1a] text-[#a1a1aa]">
                  <Shield size={13} /> Security
                </div>
                <div className="flex items-center gap-1.5 text-xs px-3 py-1 rounded bg-[#1a1a1a] text-[#a1a1aa]">
                  <Brain size={13} /> AI
                </div>
              </div>
            </div>

            <div className="md:col-span-7 text-[#a1a1aa] text-[15px] leading-relaxed space-y-5">
              <p>
                Halo! Saya adalah seorang antusias di bidang Data Science, Keamanan Siber, 
                dan AI Prompt Engineering. Fokus saya adalah mengembangkan solusi yang handal 
                untuk keamanan data dan AI model yang dapat mendukung workflow yang kompleks.
              </p>
              <p>
                Selain berkutat dengan data, saya juga mendalami dunia keamanan siber untuk 
                membangun pertahanan jaringan dan bagaimana cara memanfaatkan tools untuk 
                memitigasi risiko secara berkelanjutan.
              </p>
              <p>
                Saya aktif berkontribusi dalam pengembangan model bahasa besar (LLMs) melalui 
                Prompt Engineering, merancang interaksi AI yang cerdas dan mengoptimalkan alur 
                kerja yang kompleks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-7">
          <div className="section-header">// KEAHLIAN &amp; TEKNOLOGI</div>
          <div className="flex-1 h-px bg-[#27272a]"></div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="px-4 py-1.5 text-sm bg-[#111111] border border-[#27272a] rounded-lg hover:border-[#3f3f46] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[#27272a] text-sm text-[#52525b] flex flex-wrap items-center gap-x-8 gap-y-2">
          <div>Python • PyTorch • Scapy • FastAPI • LangChain</div>
          <div>Deep Learning • Network Security • Prompt Engineering</div>
        </div>
      </div>

      {/* CONTACT / CTA */}
      <div id="contact" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-[#111111] border border-[#27272a] rounded-2xl p-10 md:p-12 text-center">
          <div className="uppercase tracking-[3px] text-[#ef4444] text-xs mb-2">NEXT STEP</div>
          <h3 className="font-heading text-3xl md:text-[42px] tracking-[-1.5px] mb-3">Mau berkolaborasi?</h3>
          <p className="max-w-md mx-auto text-[#a1a1aa] mb-8">
            Saya selalu terbuka untuk diskusi tentang data science, keamanan siber, 
            atau proyek AI yang menarik.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a 
              href="mailto:xbibz@proton.me" 
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md"
            >
              KIRIM EMAIL
              <ArrowRight size={17} />
            </a>
            
            <button 
              onClick={() => copyToClipboard("xbibz@proton.me")}
              className="inline-flex items-center justify-center gap-2 border border-[#27272a] px-6 py-3 rounded-md hover:bg-[#1a1a1a] text-sm"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              Copy Email
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#27272a] bg-black py-9">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="font-heading font-semibold tracking-tight">XBIBZ.</div>
              <span className="text-[#52525b] text-xs">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
            </div>

            <div className="flex items-center gap-x-6 text-[#71717a] text-xs font-mono tracking-widest">
              <a href="https://github.com/xbibz" target="_blank" className="hover:text-white">GITHUB</a>
              <a href="https://twitter.com/xbibz" target="_blank" className="hover:text-white">TWITTER</a>
              <a href="https://linkedin.com/in/xbibz" target="_blank" className="hover:text-white">LINKEDIN</a>
              <button onClick={() => scrollToSection('projects')} className="hover:text-white">PROJECTS</button>
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={closeProject}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0a0a0a] border border-[#27272a] rounded-2xl w-full max-w-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#27272a] px-7 py-5">
                <div>
                  <div className="font-mono text-xs text-[#ef4444]">{selectedProject.subtitle}</div>
                  <h3 className="font-heading text-3xl tracking-[-1.5px]">{selectedProject.title}</h3>
                </div>
                <button onClick={closeProject} className="text-[#52525b] hover:text-white p-1">
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-7">
                <div className="h-52 md:h-60 rounded-lg overflow-hidden mb-6 border border-[#27272a]">
                  {selectedProject.image}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-7">
                  <div className="md:col-span-3">
                    <p className="text-[#a1a1aa] leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <div>
                      <div className="text-xs tracking-wider text-[#52525b] mb-2 font-mono">KEY FEATURES</div>
                      <div className="text-sm text-[#a1a1aa] space-y-1">
                        {selectedProject.id === 1 && (
                          <>
                            <div>• Seamless DeepSeek AI integration</div>
                            <div>• DSML support &amp; dynamic plugins</div>
                            <div>• Local model inference</div>
                            <div>• Rich terminal UI with streaming</div>
                          </>
                        )}
                        {selectedProject.id === 2 && (
                          <>
                            <div>• ARP spoofing &amp; traffic shaping</div>
                            <div>• Real-time device monitoring</div>
                            <div>• Per-device bandwidth limits</div>
                            <div>• Network mapping &amp; analysis</div>
                          </>
                        )}
                        {selectedProject.id === 3 && (
                          <>
                            <div>• Prompt versioning &amp; A/B testing</div>
                            <div>• Automated evaluation metrics</div>
                            <div>• Multi-LLM provider support</div>
                            <div>• Chain-of-thought templates</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="mb-7">
                      <div className="text-xs tracking-wider text-[#52525b] mb-2 font-mono">TECHNOLOGIES</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t, idx) => (
                          <span key={idx} className="tag !bg-[#1f2937] !text-xs">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs tracking-wider text-[#52525b] mb-2 font-mono">LINKS</div>
                      <div className="space-y-2">
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-3 text-sm px-4 py-[9px] bg-[#111111] border border-[#27272a] rounded-lg hover:bg-[#1a1a1a] transition-colors"
                        >
                          <GitBranch size={16} /> View on GitBranch
                          <ExternalLink size={14} className="ml-auto" />
                        </a>

                        {selectedProject.demo && (
                          <a 
                            href={selectedProject.demo} 
                            target="_blank" 
                            className="flex items-center gap-3 text-sm px-4 py-[9px] bg-[#111111] border border-[#27272a] rounded-lg hover:bg-[#1a1a1a] transition-colors"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {selectedProject.id === 1 && (
                      <div className="mt-6 pt-6 border-t border-[#27272a]">
                        <div className="text-xs tracking-wider text-[#52525b] mb-2 font-mono">QUICK START</div>
                        <div 
                          onClick={() => copyToClipboard("pip install deepseek-cli && deepseek --help")}
                          className="bg-[#111111] font-mono text-[12.5px] p-3 rounded-lg cursor-pointer border border-[#27272a] hover:border-[#3f3f46] active:bg-black"
                        >
                          pip install deepseek-cli<br />
                          deepseek --help
                          <div className="text-[#ef4444] text-[10px] mt-1">Click to copy</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-7 py-4 bg-[#111111] flex items-center justify-between text-sm border-t border-[#27272a]">
                <div className="text-[#52525b] text-xs">OPEN SOURCE • MIT LICENSE</div>
                <button 
                  onClick={closeProject}
                  className="text-xs px-4 py-1.5 rounded border border-[#27272a] hover:bg-[#1a1a1a]"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
