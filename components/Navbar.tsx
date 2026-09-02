import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ResumeModal from './ResumeModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, isAr } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isAr ? 'الرئيسية' : 'Home', path: '/' },
    { name: isAr ? 'عن المحللة' : 'About', path: '/about' },
    { name: isAr ? 'الأعمال والمشاريع' : 'Projects', path: '/projects' },
    { name: isAr ? 'الخدمات والحلول' : 'Services', path: '/services' },
    { name: isAr ? 'تواصل معنا' : 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div 
            className={`flex justify-between items-center transition-all duration-300 rounded-2xl px-5 sm:px-8 py-3.5 ${
              scrolled 
                ? 'glass-nav border border-slate-200/80 shadow-md shadow-slate-900/5' 
                : 'bg-white/70 backdrop-blur-md border border-slate-200/50'
            }`}
          >
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-slate-950 p-2.5 rounded-xl text-blue-400 group-hover:scale-105 group-hover:bg-blue-900 transition-all">
                <Cpu size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-950 uppercase leading-none">
                  {isAr ? 'ريما الفيفي' : 'REEMA ALFAIFI'}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase mt-0.5">
                  {isAr ? 'محللة بيانات ونظم' : 'Data & Systems Analyst'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-blue-600 ${
                    isActive(link.path) 
                      ? 'text-blue-700 font-extrabold border-b-2 border-blue-600 pb-0.5' 
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Controls (Language Switcher + CV Button) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switch Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
              >
                <Globe size={14} className="text-blue-600" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {/* Resume Modal Trigger */}
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm"
              >
                <FileText size={14} />
                <span>{isAr ? 'السيرة الذاتية' : 'Resume / CV'}</span>
              </button>
            </div>

            {/* Mobile Actions Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
              >
                {language === 'ar' ? 'EN' : 'عربي'}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-4 top-20 bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 z-50 animate-fadeIn space-y-5">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {isAr ? 'القائمة الرئيسية' : 'Navigation'}
              </span>
              <button onClick={() => setIsOpen(false)} className="p-1 text-slate-400 hover:text-slate-900">
                <X size={20}/>
              </button>
            </div>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-bold py-2 px-3 rounded-xl transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsResumeOpen(true);
                }}
                className="w-full py-3 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <FileText size={16} />
                <span>{isAr ? 'عرض السيرة الذاتية (CV)' : 'View Full Resume'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
