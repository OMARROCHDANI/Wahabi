import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Truck,
  MapPin,
  Mail,
  Phone,
  Award,
  Flame,
  MoveRight,
  Menu,
  X,
  ChevronRight,
  Globe,
  CheckCircle2,
  Send,
  MessageSquare,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Profil', id: 'profil' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const certifications = [
    {
      title: "CACES R485 / R489",
      sub: "Certificat d'Aptitude à la Conduite d'Engins",
      org: "NILE FORMATION, Tanger",
      date: "Février 2024",
      desc: "Maîtrise multi-catégories pour chariots élévateurs. Formation intensive de 40 heures.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Cariste Magasinier",
      sub: "Gestion de flux & Stockage",
      org: "NILE FORMATION, Tanger",
      date: "Février 2024",
      desc: "Spécialisation en gestion de flux et optimisation du stockage en magasin.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Secouriste Certifié",
      sub: "Premiers Secours Professionnels",
      org: "NILE FORMATION, Tanger",
      date: "Février 2024",
      desc: "Formation aux gestes de premiers secours en milieu professionnel et industriel.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const categories = ["1", "2", "1A", "1B", "2A", "2B", "C3", "C4", "C5", "C6"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Navigation Overlay */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter cursor-pointer group" onClick={() => scrollTo('accueil')}>
            MOURAD<span className="text-orange-500 group-hover:animate-pulse">.</span>WAHABI
          </div>

          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest uppercase">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors hover:text-orange-500 ${activeSection === link.id ? 'text-orange-500' : 'text-gray-400'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-orange-600 transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl md:text-4xl font-black italic">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-black transition-colors uppercase">
              {link.name}
            </button>
          ))}
        </div>
        <button className="absolute top-8 right-6 text-black" onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>
      </div>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-30 pb-30 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-orange-500 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 animate-fade-in text-sm md:text-base">Logistique & Manutention</h2>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] tracking-tighter mb-8 italic break-words">
              OPÉRATEUR <br /> <span className="text-transparent stroke-text">POLYVALENT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              Expert certifié en conduite d'engins (CACES) et gestion de magasin.
              Prêt à intégrer des environnements logistiques exigeants avec rigueur et sécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1">
                Me Contacter <MoveRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo('certifications')} className="px-8 py-4 border border-white/20 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Voir Certifications
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Localisation</h4>
                  <p className="text-gray-400 text-sm">Oued Zem, Maroc</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Langues</h4>
                  <p className="text-gray-400 text-sm">Arabe (M), Français (D)</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 border-l-4 border-orange-500 bg-white/5">
              <p className="text-2xl md:text-3xl font-black text-white italic">"Rigueur, Sécurité, Réactivité."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profil / About */}
      <section id="profil" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest">À propos</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-8 uppercase italic leading-tight">
                Une Expertise <br /> Certifiée sur le terrain
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                Opérateur polyvalent certifié en conduite d'engins de manutention (CACES) et en gestion de magasin. Doté d'une solide formation en secourisme, je maîtrise les procédures de sécurité industrielles, la réception de marchandises et le stockage optimisé.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12">
                {[
                  { title: "Rigueur", desc: "Focus sécuritaire" },
                  { title: "Communication", desc: "Esprit d'équipe" },
                  { title: "Curiosité", desc: "Apprentissage continu" },
                  { title: "Responsabilité", desc: "Fiabilité totale" }
                ].map((item, i) => (
                  <div key={i} className="border-t border-black/10 pt-4">
                    <h4 className="font-black text-lg md:text-xl uppercase italic">{item.title}</h4>
                    <p className="text-gray-500 font-medium text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills / Compétences */}
      <section id="competences" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Compétences <span className="text-orange-500">Clés</span>
            </h2>
            <p className="text-gray-400 max-w-sm">Maîtrise technique des engins et des processus de stockage modernes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CACES Card */}
            <div className="md:col-span-2 group relative p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start justify-between relative z-10">
                <div className="flex-grow">
                  <Truck className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mb-6" />
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 italic">Conduite CACES</h3>
                  <p className="text-gray-400 mb-8 max-w-md text-sm md:text-base">Maîtrise totale des chariots élévateurs avec respect strict des normes de sécurité.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl md:text-5xl font-black text-orange-500 italic">R485/489</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 relative z-10">
                {categories.map(cat => (
                  <span key={cat} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/5 group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                    CAT {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Skill */}
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-all group">
              <Award className="w-12 h-12 text-orange-500 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 italic">Gestion Magasin</h3>
              <ul className="space-y-4 text-gray-400 font-medium text-sm md:text-base">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Réception de marchandises</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Déchargement sécurisé</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Mise en stock optimisée</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-8 group">
              <ShieldCheck className="w-16 h-16 text-orange-500 shrink-0" />
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-2">Sécurité Industrielle</h3>
                <p className="text-gray-400">Respect strict des protocoles HSE et des procédures d'urgence.</p>
              </div>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-8 group">
              <Flame className="w-16 h-16 text-orange-500 shrink-0" />
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-2">Secourisme</h3>
                <p className="text-gray-400">Intervention rapide et certifiée en cas d'accident sur le lieu de travail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Timeline */}
      <section id="certifications" className="py-32 bg-orange-600 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-grow bg-black/20 hidden sm:block"></div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.4em] shrink-0 text-center w-full sm:w-auto">Formation & Diplômes</h2>
            <div className="h-px flex-grow bg-black/20 hidden sm:block"></div>
          </div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-black text-white p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center transition-all hover:scale-[1.02] cursor-default">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-black shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-none">{cert.title}</h3>
                    <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-bold self-center md:self-start">{cert.date}</span>
                  </div>
                  <p className="text-orange-500 font-bold mb-4 uppercase text-xs md:text-sm tracking-widest">{cert.org}</p>
                  <p className="text-gray-400 text-base md:text-lg">{cert.desc}</p>
                </div>
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-black italic tracking-tighter mb-10 md:mb-20 leading-none opacity-10 uppercase select-none">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-8">Commençons à <span className="text-orange-500 underline underline-offset-8">travailler ensemble</span></h3>
              <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                Disponible immédiatement pour des opportunités en logistique et gestion d'entrepôt sur toute la région.
              </p>

              <div className="space-y-6">
                <a href="tel:+212700354347" className="flex items-center gap-4 md:gap-6 group w-fit">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg md:text-2xl font-bold group-hover:text-orange-500 transition-colors">+212 700 354 347</span>
                </a>
                <a href="https://wa.me/212700354347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group w-fit">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-lg md:text-2xl font-bold group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                </a>
                <a href="mailto:mouradwahabi008@gmail.com" className="flex items-center gap-4 md:gap-6 group w-fit max-w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 shrink-0">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg md:text-2xl font-bold truncate group-hover:text-orange-500 transition-colors">mouradwahabi008@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 md:gap-6 group w-fit">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg md:text-2xl font-bold">Oued Zem, Maroc</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 p-8 md:p-12 rounded-[2.5rem] text-black text-left shadow-2xl shadow-orange-500/20 transform hover:scale-[1.01] transition-transform">
              <h4 className="text-2xl md:text-3xl font-black italic uppercase mb-6 flex items-center gap-4">
                <MessageSquare className="w-8 h-8" /> Contact Direct
              </h4>
              <p className="text-black font-bold mb-10 text-base md:text-lg leading-snug">
                Vous recrutez un profil rigoureux ? Appelez-moi pour discuter de votre projet logistique.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/212700354347" target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-black text-white font-black uppercase text-sm tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-[#25D366] transition-colors rounded-2xl group whitespace-nowrap overflow-hidden">
                  WhatsApp Direct <MessageCircle className="w-4 h-4" />
                </a>
                <a href="mailto:mouradwahabi008@gmail.com" className="w-full py-5 border-2 border-black text-black font-black uppercase text-sm tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all rounded-2xl whitespace-nowrap overflow-hidden">
                  Envoyer un Email <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 font-medium tracking-widest text-xs uppercase">© 2026 MOURAD WAHABI — CARISTE CERTIFIÉ</p>
          <div className="flex gap-6">
            <a href="tel:+212700354347" className="text-gray-400 hover:text-orange-500 transition-colors"><Phone size={18} /></a>
            <a href="https://wa.me/212700354347" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></a>
            <a href="mailto:mouradwahabi008@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
