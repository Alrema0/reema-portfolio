import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, Briefcase, CheckCircle2, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCE, CERTIFICATIONS, CORE_SKILLS, TOOLS_CATEGORIZED } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t, isAr } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Cpu size={18} />
            </div>
            <span className="text-sm font-black uppercase tracking-wider">
              {isAr ? 'السيرة الذاتية المهنية' : 'Curriculum Vitae'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Printer size={15} />
              <span>{isAr ? 'طباعة / PDF' : 'Print / PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-10 text-slate-800 bg-white" id="resume-content">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {isAr ? 'ريما الفيفي' : 'Reema Alfaifi'}
              </h1>
              <p className="text-base font-bold text-blue-700 mt-1">
                {isAr ? 'مختصة في تحليل البيانات وتوثيق النظم (Data & Systems Analyst)' : 'Data & Systems Analyst'}
              </p>
              <p className="text-xs text-slate-500 mt-2 max-w-xl leading-relaxed">
                {isAr 
                  ? 'مختصة في علوم الحاسب وتحليل البيانات والنظم. خبرة في بناء لوحات التحكم التفاعلية (Power BI / Excel)، وتوثيق مسارات العمليات (BPMN / Visio)، وتصميم الحلول الرقمية لدعم اتخاذ القرارات وتحسين الأداء.'
                  : 'Computer Science, Data & Systems Analyst. Experienced in building interactive dashboards (Power BI / Excel), mapping business process workflows (BPMN / Visio), and designing digital solutions to drive performance.'}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[240px]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-600 shrink-0" />
                <span>{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-600 shrink-0" />
                <span>reema0alf@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-600 shrink-0" />
                <span dir="ltr">+966 551641847</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={14} className="text-blue-600 shrink-0" />
                <span>{isAr ? 'معتمدة ومرخصة مهنياً' : 'Professionally Certified'}</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Briefcase size={16} className="text-blue-600" />
              {isAr ? 'الخبرات المهنية' : 'Professional Experience'}
            </h2>

            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base font-bold text-slate-900">{t(exp.role)}</h3>
                    <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      {t(exp.period)}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 mb-2">{t(exp.company)} — {t(exp.location)}</p>
                  <p className="text-xs text-slate-600 mb-3">{t(exp.description)}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{t(ach)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Award size={16} className="text-blue-600" />
                {isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications'}
              </h2>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div key={cIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs font-bold text-slate-900">{t(cert.title)}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {cert.issuer} • {cert.credentialId}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                <BookOpen size={16} className="text-blue-600" />
                {isAr ? 'التعليم الأكاديمي' : 'Education'}
              </h2>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900">
                    {isAr ? 'بكالوريوس علوم الحاسب' : 'Bachelor of Computer Science'}
                  </h4>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    09/2017 – 01/2022
                  </span>
                </div>
                <p className="text-xs text-blue-700 font-semibold">
                  {isAr ? 'جامعة الملك خالد (KKU)' : 'King Khalid University (KKU)'}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {isAr 
                    ? 'تأهيل أكاديمي وتقني متكامل في علوم الحاسب، يعزز القدرة على تحليل المشكلات، تصميم الحلول التقنية، وتوظيف التقنيات الحديثة لتطوير الأنظمة والحلول الرقمية وتحسين العمليات.' 
                    : 'A comprehensive academic and technical foundation in Computer Science, fostering problem analysis, technical solution design, and systems development.'}
                </p>
              </div>

              {/* Skills Quick Matrix */}
              <div className="mt-6">
                <h3 className="text-xs font-bold text-slate-700 mb-2">
                  {isAr ? 'المهارات والتقنيات الأساسية:' : 'Core Skills & Tools:'}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Microsoft Excel', 'Microsoft Visio', 'Postman', 'Selenium (QA)', 'Active Directory', 'JIRA / Confluence', 'Analytical Skills', 'Data Management', 'Teamwork'].map(tool => (
                    <span key={tool} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
