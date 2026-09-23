import { useState } from 'react';
import authorityProgrammerBg from './assets/rocket-space-bg.svg';
import { 
  Code2, 
  Building2, 
  FileText, 
  Server, 
  Cpu, 
  Terminal, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight,   
  Mail, 
  ChevronRight,
  Layers,
  BriefcaseBusiness,
  Monitor,
  Database
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hub');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] flex flex-col justify-between selection:bg-[#64FFDA] selection:text-[#0A192F]">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/80 backdrop-blur-md border-b border-[#112240]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hub')}>
            <div className="w-10 h-10 rounded-lg bg-[#112240] border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA] font-bold text-lg shadow-lg shadow-[#64FFDA]/5">
              JP
            </div>
            <div>
              <span className="font-bold text-white tracking-wide block text-sm sm:text-base">João Pedro Bittencourt</span>
              <span className="text-xs text-[#8892B0] block">Dev • DevOps • Empresário</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('tech')} className="hover:text-[#64FFDA] transition-colors">Tech & Código</button>
            <button onClick={() => scrollToSection('devops')} className="hover:text-[#64FFDA] transition-colors">DevOps & Infra</button>
            <button onClick={() => scrollToSection('business')} className="hover:text-[#64FFDA] transition-colors">Empresário</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#64FFDA] transition-colors">Portfólio</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all">Contato</button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-grow pt-20">

        {/* 1. HERO HUB */}
        <section id="hub" className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden px-6 py-20 bg-transparent">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            
            <div className="hero-business-orb absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full  blur-3xl" />
            <div className="hero-business-card hero-business-card-left absolute left-[4%] bottom-[8%] hidden lg:block w-72 rounded-3xl border border-[#64FFDA]/20  p-6 shadow-2xl shadow-[#64FFDA]/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#64FFDA]">Visão</p>
                  <h3 className="text-sm font-semibold text-white">Negócio em escala</h3>
                </div>
                <div className="rounded-full bg-[#64FFDA]/10 px-2 py-1 text-[10px] font-semibold text-[#64FFDA]">+24%</div>
              </div>
              <div className="flex h-24 items-end gap-2">
                <div className="h-1/3 w-4 rounded-t-full bg-[#64FFDA]/70" />
                <div className="h-2/3 w-4 rounded-t-full bg-[#64FFDA]/70" />
                <div className="h-full w-4 rounded-t-full bg-[#64FFDA]/70" />
                <div className="h-3/4 w-4 rounded-t-full bg-blue-400/70" />
                <div className="h-5/6 w-4 rounded-t-full bg-blue-400/70" />
              </div>
              <div className="mt-4 h-2 rounded-full bg-[#0A192F]">
                <div className="hero-business-progress h-full w-3/4 rounded-full bg-gradient-to-r from-[#64FFDA] to-blue-400" />
              </div>
            </div>
            <div className="hero-business-card hero-business-card-right absolute right-[4%] top-[18%] hidden lg:block w-80 rounded-3xl border border-[#64FFDA]/20 bg-[#0A192F]/80 p-6 shadow-2xl shadow-[#64FFDA]/10 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#64FFDA]">Operação</p>
                  <h3 className="text-sm font-semibold text-white">Gestão inteligente</h3>
                </div>
                <div className="h-8 w-8 rounded-full border border-[#64FFDA]/30 bg-[#64FFDA]/10" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-[#112240] bg-[#112240]/80 px-3 py-2">
                  <span className="text-xs text-[#8892B0]">Processos</span>
                  <span className="text-sm font-semibold text-white">87%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#112240] bg-[#112240]/80 px-3 py-2">
                  <span className="text-xs text-[#8892B0]">Clientes</span>
                  <span className="text-sm font-semibold text-white">+180</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#112240] bg-[#112240]/80 px-3 py-2">
                  <span className="text-xs text-[#8892B0]">Infra</span>
                  <span className="text-sm font-semibold text-white">Resiliente</span>
                </div>
              </div>
            </div>
            <div className="hero-business-grid absolute inset-0 opacity-30" />
          </div>
          <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(10, 25, 47, 0.92), rgba(10, 25, 47, 0.58)), url(${authorityProgrammerBg})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-[#64FFDA]/20 text-[#64FFDA] text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse"></span>
              Desenvolvimento de Software de Ponta a Ponta & Visão de Negócios
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-blue-400">
                Sistemas Web e Aplicativos Sob Medida para Fazer Seu Negócio Crescer
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#8892B0] mb-12 max-w-3xl mx-auto leading-relaxed">
              Sou João Pedro Bittencourt, desenvolvedor Full Stack com +10 anos de experiência. Ajudo empresas e startups a transformarem ideias e processos complexos em softwares robustos, escaláveis e de alta performance — como plataformas para clínicas e sistemas de gestão hoteleira.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <button 
                onClick={() => scrollToSection('tech')}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-[#112240] border border-[#1d3557] hover:border-[#64FFDA] transition-all hover:-translate-y-1 text-left w-full shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#64FFDA] mb-4 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <span className="font-semibold text-white mb-1 flex items-center gap-1">Tech & Codigo <ChevronRight size={16} className="text-[#64FFDA] group-hover:translate-x-1 transition-transform" /></span>
                <span className="text-xs text-[#8892B0]">Clean Arch, APIs e Escala</span>
              </button>

              <button 
                onClick={() => scrollToSection('devops')}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-[#112240] border border-[#1d3557] hover:border-[#64FFDA] transition-all hover:-translate-y-1 text-left w-full shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#64FFDA] mb-4 group-hover:scale-110 transition-transform">
                  <Server size={28} />
                </div>
                <span className="font-semibold text-white mb-1 flex items-center gap-1">DevOps & Infra <ChevronRight size={16} className="text-[#64FFDA] group-hover:translate-x-1 transition-transform" /></span>
                <span className="text-xs text-[#8892B0]">Clean Arch, APIs e Escala</span>
              </button>

              <button 
                onClick={() => scrollToSection('business')}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-[#112240] border border-[#1d3557] hover:border-[#64FFDA] transition-all hover:-translate-y-1 text-left w-full shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#64FFDA] mb-4 group-hover:scale-110 transition-transform">
                  <Building2 size={24} />
                </div>
                <span className="font-semibold text-white mb-1 flex items-center gap-1">Empresário <ChevronRight size={16} className="text-[#64FFDA] group-hover:translate-x-1 transition-transform" /></span>
                <span className="text-xs text-[#8892B0]">Gestão de Clínicas & Produtos</span>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-[#112240] border border-[#1d3557] hover:border-[#64FFDA] transition-all hover:-translate-y-1 text-center w-full shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#64FFDA] mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <span className="font-semibold text-white mb-1 flex items-center gap-1">Currículo & Contato <ChevronRight size={16} className="text-[#64FFDA] group-hover:translate-x-1 transition-transform" /></span>
                <span className="text-xs text-[#8892B0]">Conexões & Oportunidades</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. TECH & CLEAN ARCHITECTURE */}
        <section id="tech" className="section-shell py-24 px-6 border-t border-[#112240]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#64FFDA] font-mono text-sm">01. // DEEP TECH</span>
              <div className="h-[1px] bg-[#112240] flex-grow"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tecnologia & Código</h2>
            <p className="text-[#8892B0] max-w-2xl mb-16 text-lg">
              Especialista em construir sistemas utilizando tecnologias modernas, aplicando princípios de Clean Architecture e práticas de desenvolvimento ágil para entregar soluções escaláveis e de alta qualidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><Code2 size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Implementação de API robusta com Java e Spring Boot, focada em alta disponibilidade e integração segura de sistemas.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Java</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Spring Boot</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Maven</span>
                </div>
              </div>

              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><Monitor size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Desenvolvimento de interfaces escaláveis com Angular, priorizando a performance e a experiência de utilizador (UX).
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Angular</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">TypeScript</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">HTML/CSS</span>
                </div>
              </div>

              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><Database size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">Banco de Dados</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Modelagem e arquitetura de dados com PostgreSQL e MySQL, garantindo desempenho, escalabilidade e segurança.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">PostgreSQL</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">MySQL</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DEVOPS & INFRA */}
        <section id="devops" className="section-shell-alt py-24 px-6 border-t border-[#112240]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#64FFDA] font-mono text-sm">02. // DEVOPS & INFRA</span>
              <div className="h-[1px] bg-[#112240] flex-grow"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Infraestrutura Resiliente e de Missão Crítica</h2>
            <p className="text-[#8892B0] max-w-2xl mb-16 text-lg">
              “Código bom é código que roda em produção sem acordar ninguém às 3h da manhã.” Provisionar, operar e manter infraestrutura de alta disponibilidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="surface-card p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-[#64FFDA] mb-4"><Server size={28} /></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Orquestração & Servidores</h3>
                  <p className="text-[#8892B0] text-sm leading-relaxed mb-6">
                    Gerenciamento avançado de ambientes virtualizados com Linux, Docker, Kubernetes e infraestruturas híbridas para garantir redundância e escalabilidade contínua.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Docker</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Kubernetes</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Linux</span>
                </div>
              </div>

              <div className="surface-card p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-[#64FFDA] mb-4"><ShieldCheck size={28} /></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Segurança & CI/CD Pipelines</h3>
                  <p className="text-[#8892B0] text-sm leading-relaxed mb-6">
                    Implementação de pipelines automatizados de entrega contínua, auditorias de segurança de dados e monitoramento proativo de ambientes corporativos.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">GitHub Actions</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">CI/CD</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Cloud Security</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EMPRESÁRIO & NEGÓCIOS */}
        <section id="business" className="section-shell py-24 px-6 border-t border-[#112240]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#64FFDA] font-mono text-sm">03. // VISÃO EMPRESARIAL</span>
              <div className="h-[1px] bg-[#112240] flex-grow"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Empreendedorismo & Produtos Digitais</h2>
            <p className="text-[#8892B0] max-w-2xl mb-16 text-lg">
              Unindo a execução técnica rigorosa à visão de negócio (P&L), com experiência prática na operação de empresas reais e desenvolvimento de soluções proprietárias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><Building2 size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">Gestão & Expansão</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Experiência prática na gestão administrativa e financeira de negócios (como clínicas multidisciplinares), dominando o controle de P&L, eficiência operacional e tomada de decisão estratégica.
                </p>
              </div>

              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><TrendingUp size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">ERP & Soluções Customizadas</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Desenvolvimento de sistemas de gestão internos proprietários (Angular + Spring Boot) focados em resolver gargalos operacionais reais e impulsionar negócios.
                </p>
              </div>

              <div className="surface-card p-8 rounded-2xl">
                <div className="text-[#64FFDA] mb-4"><Users size={28} /></div>
                <h3 className="text-xl font-semibold text-white mb-3">Visão de Mercado</h3>
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Sólido background em grandes instituições públicas e privadas (DataInfo, Copel, Caixa, Itaipu Parquetec, Ecompleto), unindo rigor corporativo e agilidade de startup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PORTFOLIO */}
        <section id="portfolio" className="section-shell-alt py-24 px-6 border-t border-[#112240]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#64FFDA] font-mono text-sm">04. // PORTFÓLIO</span>
              <div className="h-[1px] bg-[#112240] flex-grow"></div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Projetos que viraram produto</h2>
                <p className="text-[#8892B0] max-w-2xl text-lg">
                  Uma seleção de soluções desenvolvidas para resolver problemas reais, equilibrando experiência do usuário, arquitetura e resultado para o negócio.
                </p>
              </div>
              <BriefcaseBusiness className="text-[#64FFDA] shrink-0" size={40} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="surface-card p-8 rounded-2xl flex flex-col justify-between min-h-[310px] group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#64FFDA] font-mono text-sm">01</span>
                    <ArrowRight size={20} className="text-[#8892B0] transition-transform group-hover:translate-x-1 group-hover:text-[#64FFDA]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Plataforma para Clínicas</h3>
                  <p className="text-[#8892B0] text-sm leading-relaxed">
                    Gestão integrada para clínicas multidisciplinares, conectando agenda, profissionais, pacientes e indicadores em uma única operação.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Angular</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Spring Boot</span>
                </div>
              </article>

              <article className="surface-card p-8 rounded-2xl flex flex-col justify-between min-h-[310px] group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#64FFDA] font-mono text-sm">02</span>
                    <ArrowRight size={20} className="text-[#8892B0] transition-transform group-hover:translate-x-1 group-hover:text-[#64FFDA]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">ERP sob medida</h3>
                  <p className="text-[#8892B0] text-sm leading-relaxed">
                    Sistema proprietário para automatizar processos, reduzir retrabalho e dar clareza sobre a operação de negócios em crescimento.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">APIs</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Docker</span>
                </div>
              </article>

              <article className="surface-card p-8 rounded-2xl flex flex-col justify-between min-h-[310px] group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#64FFDA] font-mono text-sm">03</span>
                    <ArrowRight size={20} className="text-[#8892B0] transition-transform group-hover:translate-x-1 group-hover:text-[#64FFDA]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Infraestrutura de Alta Disponibilidade</h3>
                  <p className="text-[#8892B0] text-sm leading-relaxed">
                    Ambientes virtualizados e pipelines automatizados para manter aplicações críticas estáveis, observáveis e prontas para escalar.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#1d3557]/50">
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">Proxmox</span>
                  <span className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] text-xs font-mono rounded">CI/CD</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 6. CONTACT / FOOTER */}
        <section id="contact" className="section-shell py-24 px-6 border-t border-[#112240]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#64FFDA] font-mono text-sm block mb-4">05. // PRÓXIMO PASSO</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Vamos conversar sobre tecnologia ou negócios?</h2>
            <p className="text-[#8892B0] text-lg mb-10 max-w-xl mx-auto">
              Estou sempre aberto a novos desafios de arquitetura, parcerias estratégicas e projetos ambiciosos.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="mailto:jpb_bittencourt@hotmail.com"
                className="px-8 py-4 rounded-xl bg-[#64FFDA] text-[#0A192F] font-semibold hover:bg-[#52e0bc] transition-all flex items-center gap-2 shadow-lg shadow-[#64FFDA]/10"
              >
                <Mail size={18} /> Enviar E-mail
              </a>
              <a 
                href="https://linkedin.com/in/joão-pedro-bittencourt-b71b5789"
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-[#112240] border border-[#1d3557] text-white font-semibold hover:border-[#64FFDA] transition-all flex items-center gap-2 shadow-lg shadow-[#0A192F]/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>LinkedIn
              </a>
              <a 
                href="https://github.com/joaopbittencourt/"
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-[#112240] border border-[#1d3557] text-white font-semibold hover:border-[#64FFDA] transition-all flex items-center gap-2 shadow-lg shadow-[#0A192F]/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>Github
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A192F] border-t border-[#112240] py-8 text-center text-xs text-[#8892B0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} João Pedro Bittencourt. Todos os direitos reservados.</p>
          <p className="font-mono text-[#64FFDA]">Desenvolvido com React, Vite & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}
