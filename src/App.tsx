import { motion } from 'motion/react';
import {
  Server,
  Terminal,
  Wrench,
  GitMerge,
  Github,
  Box,
  Layers,
  HardDrive,
  ChevronRight,
  Globe,
  ShieldCheck,
  Zap,
  Cloud
} from 'lucide-react';

const tools = [
  { name: 'Terraform', iconUrl: 'https://cdn.simpleicons.org/terraform', bg: 'bg-[#844FBA]/10' },
  { name: 'Ansible', iconUrl: 'https://cdn.simpleicons.org/ansible/EE0000', bg: 'bg-[#EE0000]/10' },
  { name: 'ArgoCD', iconUrl: 'https://cdn.simpleicons.org/argo', bg: 'bg-[#EF7B4D]/10' },
  { name: 'GitHub Actions', iconUrl: 'https://cdn.simpleicons.org/githubactions/2088FF', bg: 'bg-[#2088FF]/10' },
  { name: 'Kubernetes', iconUrl: 'https://cdn.simpleicons.org/kubernetes', bg: 'bg-[#326CE5]/10' },
  { name: 'OpenShift', iconUrl: 'https://cdn.simpleicons.org/redhatopenshift', bg: 'bg-[#EE0000]/10' },
  { name: 'Ceph', iconUrl: 'https://cdn.simpleicons.org/ceph', bg: 'bg-[#ED710E]/10' },
  { name: 'OpenStack', iconUrl: 'https://cdn.simpleicons.org/openstack', bg: 'bg-[#ED1944]/10' },
];

const clouds = [
  { name: 'GCP', iconUrl: 'https://cdn.simpleicons.org/googlecloud' },
  { name: 'AWS', iconUrl: 'https://cdn.simpleicons.org/amazonaws/white' },
  { name: 'Azure', iconUrl: 'https://cdn.simpleicons.org/microsoftazure' },
  { name: 'Ali Cloud', iconUrl: 'https://cdn.simpleicons.org/alibabacloud' },
  { name: 'Open Telekom Cloud', iconUrl: 'https://cdn.simpleicons.org/deutschetelekom' },
  { name: 'On-Prem', icon: Server },
];

const brands = [
  { name: "Kohl's", domain: 'kohls.com' },
  { name: "Macy's", domain: 'macys.com' },
  { name: "American Eagle", domain: 'ae.com' },
  { name: "Neiman Marcus", domain: 'neimanmarcus.com' },
  { name: "PetSmart", domain: 'petsmart.com' },
  { name: "WM Group", domain: 'wm.group' },
  { name: "Comtrade", domain: 'comtrade.com' },
  { name: "ZuluTrade", domain: 'zulutrade.com' },
  { name: "AAAFx", domain: 'aaafx.com' },
  { name: "MSKCC", domain: 'mskcc.org' },
  { name: "AppCargo", domain: 'appcargo.com' },
  { name: "Evermed TV", domain: 'evermedtv.com' },
  { name: "Mister D", domain: 'misterd.rs' },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500 flex items-center justify-center glow">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tight">RAPID_OPS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#tools" className="hover:text-white transition-colors">Tools</a>
            <a href="#clients" className="hover:text-white transition-colors">Clients</a>
            <a href="https://www.rapidops.dev" className="text-cyan-400 hover:text-cyan-300 transition-colors">www.rapidops.dev</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
                <Zap className="w-3 h-3" />
                <span>Enterprise DevOps Excellence</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Scale your infrastructure with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kubernetes & OpenShift</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Specialized DevOps services delivering robust, scalable, and secure infrastructure across multi-cloud and on-premise environments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="px-8 py-4 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  Get Started <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#tools" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium text-center w-full sm:w-auto">
                  View Our Stack
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Environments Section */}
        <section id="services" className="py-24 border-y border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3">Environments</h2>
              <h3 className="text-3xl font-bold">Deploy Anywhere</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {clouds.map((cloud, i) => (
                <motion.div
                  key={cloud.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  {cloud.iconUrl ? (
                    <img src={cloud.iconUrl} alt={cloud.name} className="w-8 h-8 mb-4 object-contain" />
                  ) : cloud.icon ? (
                    <cloud.icon className="w-8 h-8 text-zinc-400 mb-4" />
                  ) : null}
                  <span className="text-sm font-medium text-zinc-300 text-center">{cloud.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3">Our Stack</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Modern tools for modern infrastructure.
                </h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  We leverage industry-leading open-source technologies to build resilient, automated, and observable systems. From infrastructure as code to continuous delivery, we've got you covered.
                </p>
                <ul className="space-y-4">
                  {['Infrastructure as Code', 'GitOps & CI/CD', 'Container Orchestration', 'Distributed Storage'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300">
                      <ShieldCheck className="w-5 h-5 text-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:border-white/10 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center`}>
                      <img src={tool.iconUrl} alt={tool.name} className="w-6 h-6 object-contain" />
                    </div>
                    <span className="font-semibold text-lg">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-24 border-t border-white/5 bg-black/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3">Trusted By</h2>
              <h3 className="text-3xl font-bold">Brands we've worked with</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand.name}
                  title={brand.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-center w-32 h-16 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-help"
                >
                  <img
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('clearbit.com')) {
                        target.src = `https://icon.horse/icon/${brand.domain}`;
                      } else if (target.src.includes('icon.horse')) {
                        target.src = `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`;
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-500" />
            <span className="font-mono font-bold tracking-tight">RAPID_OPS</span>
          </div>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Rapid OPS. All rights reserved.
          </p>
          <div className="text-sm font-mono text-zinc-500">
            <a href="https://www.rapidops.dev" className="hover:text-cyan-400 transition-colors">www.rapidops.dev</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
