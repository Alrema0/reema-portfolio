import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Terminal, ExternalLink, Activity, ArrowRight, ArrowLeft, FileText, Download } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isAr } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const currentImage = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages[activeImageIdx] || project.imageUrl 
    : project.imageUrl;

  const handleCopyCode = () => {
    if (project.sqlOrDaxSnippet) {
      navigator.clipboard.writeText(project.sqlOrDaxSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full tracking-wide">
                {t(project.category)}
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full">
                {t(project.industry)}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
              {t(project.title)}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {isAr ? 'الجهة المستفيدة:' : 'Client Context:'} <span className="text-slate-200 font-medium">{t(project.clientType)}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          
          {/* Project Visual / Dashboard Preview */}
          {(currentImage || project.imageUrl) && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950/5">
              <div className="p-2 sm:p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                  <Activity size={14} className="text-blue-600" />
                  {isAr ? 'معاينة شاشات واستعلامات المشروع' : 'Project & Query Visual Preview'}
                </span>
                {project.galleryImages && project.galleryImages.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    {project.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md border transition-all ${
                          activeImageIdx === idx 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {isAr ? `شاشة ${idx + 1}` : `Screen ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative group overflow-hidden bg-slate-900/5 p-2">
                <img 
                  src={currentImage} 
                  alt={t(project.title)} 
                  className="w-full h-auto max-h-[500px] object-contain mx-auto rounded-xl transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Key Impact KPI Metrics */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-600" />
              {isAr ? 'الأثر والنتائج المحققة' : 'Verified Business Outcomes'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-blue-700 block tracking-tight">
                    {metric.kpi}
                  </span>
                  <span className="text-xs font-bold text-slate-600 mt-1 block">
                    {t(metric.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Problem & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
              <h4 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-wide">
                {isAr ? '🎯 التحدي والمشكلة التشغيلية' : '🎯 The Business Challenge'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(project.businessProblem)}
              </p>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
              <h4 className="text-sm font-black text-blue-950 mb-2 uppercase tracking-wide">
                {isAr ? '💡 المنهجية والحل التحليلي' : '💡 Analytical & Systems Approach'}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(project.approach)}
              </p>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-blue-400 mb-3">
              {isAr ? '🏗️ المعمارية التقنية ومسار تدفق البيانات' : '🏗️ Technical Architecture & Data Pipeline'}
            </h4>
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed">
              {t(project.architecture)}
            </div>
          </div>

          {/* Code Snippet (DAX / SQL) */}
          {project.sqlOrDaxSnippet && (
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-slate-600" />
                  <span className="text-xs font-bold text-slate-800">
                    {project.sqlOrDaxSnippet.language}: {project.sqlOrDaxSnippet.title}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
                >
                  {copied ? <Check size={14} className="text-blue-600" /> : <Copy size={14} />}
                  <span>{copied ? (isAr ? 'تم النسخ' : 'Copied!') : (isAr ? 'نسخ الكود' : 'Copy Code')}</span>
                </button>
              </div>
              <div className="bg-slate-950 p-4 text-xs font-mono text-blue-300 overflow-x-auto">
                <pre>{project.sqlOrDaxSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Impact Statement */}
          <div className="p-5 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl">
            <h4 className="text-xs font-black uppercase tracking-wide text-slate-500 mb-1">
              {isAr ? 'الأثر الاستراتيجي والمردود النهائي' : 'Executive Value & ROI'}
            </h4>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {t(project.impact)}
            </p>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              {isAr ? 'الأدوات والتقنيات المستخدمة' : 'Technologies & Stack'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            {project.fileAttachmentUrl ? (
              <a
                href={project.fileAttachmentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <FileText size={15} />
                <span>{project.fileAttachmentLabel ? t(project.fileAttachmentLabel) : (isAr ? 'عرض ملف المشروع والمرفقات' : 'View Project File / Document')}</span>
                <ExternalLink size={13} />
              </a>
            ) : (
              <span className="text-xs text-slate-500 font-medium">
                {isAr ? 'الملفات والمخططات التفصيلية متاحة عند الطلب' : 'Detailed project models and files available upon request'}
              </span>
            )}
          </div>
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

export default ProjectModal;
