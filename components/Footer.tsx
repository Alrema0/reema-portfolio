import React from 'react';
import { Mail, Linkedin, MapPin, Cpu, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { isAr } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-16">
          
          {/* Brand & Bio */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-xl text-white">
                <Cpu size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white uppercase">
                  {isAr ? 'ريما الفيفي' : 'REEMA ALFAIFI'}
                </span>
                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                  {isAr ? 'محللة بيانات ونظم | المملكة العربية السعودية' : 'Data & Systems Analyst | Saudi Arabia'}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {isAr
                ? 'تمكين قيادات الأعمال في المملكة العربية السعودية برؤى تحليلية موثوقة وأنظمة تشغيلية مؤتمتة تدعم اتخاذ القرار وتواكب مستهدفات رؤية 2030.'
                : 'Empowering Saudi executive leaders with verified business intelligence, automated data pipelines, and optimized systems architecture aligned with Vision 2030.'}
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:Reema0alf@gmail.com" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Access */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-6 border-b border-slate-800 pb-2">
              {isAr ? 'روابط سريعة' : 'Quick Navigation'}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>{isAr ? 'الصفحة الرئيسية' : 'Overview & Hero'}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>{isAr ? 'النبذة المهنية والخبرات' : 'Identity & Background'}</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>{isAr ? 'دراسات الحالة والمشاريع' : 'Featured Case Studies'}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>{isAr ? 'الخدمات والحلول' : 'Services & Solutions'}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Presence & Standards */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-6 border-b border-slate-800 pb-2">
              {isAr ? 'الموقع والمعايير' : 'Location & Standards'}
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <p>
                  <span className="font-bold text-white block">{isAr ? 'الرياض' : 'Riyadh'}</span>
                  <span className="text-slate-400">{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
                </p>
              </div>

              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-blue-400 shrink-0" />
                <span className="text-[11px] text-slate-300 leading-snug">
                  {isAr ? 'التزام كامل بضوابط حماية البيانات وسرية المعلومات المؤسسية' : 'Full compliance with NDMO data security & NDA standards'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} {isAr ? 'ريما الفيفي. جميع الحقوق محفوظة.' : 'Reema Alfaifi. All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {isAr ? 'مساهمة فاعلة في التحول الرقمي ومستهدفات رؤية المملكة 2030' : 'Contributor to Saudi Vision 2030 Transformation'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
