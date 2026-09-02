import React, { useState } from 'react';
import { Target, Award, Calendar, ChevronRight, BookOpen, ShieldCheck, CheckCircle2, FileText, ArrowRight, ArrowLeft, Cpu } from 'lucide-react';
import { EXPERIENCE, CERTIFICATIONS, CORE_SKILLS, TOOLS_CATEGORIZED } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import ResumeModal from '../components/ResumeModal';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t, isAr } = useLanguage();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Top Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2">
          {isAr ? 'الملف المهني والرؤية' : 'Identity & Background'}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-tight">
          {isAr ? (
            <>
              صناعة الوضوح <br />
              <span className="text-blue-700">عبر الأرقام والأنظمة.</span>
            </>
          ) : (
            <>
              ENGINEERING CLARITY <br />
              <span className="text-blue-700">THROUGH SYSTEMS.</span>
            </>
          )}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Personal Narrative & Philosophy */}
        <div className="lg:col-span-7 space-y-10">
          
          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              {isAr
                ? 'أنا ريما الفيفي، مختصة في علوم الحاسب، هندسة النظم، وتحليل البيانات. أوظّف التفكير الخوارزمي وهندسة البرمجيات لبناء حلول رقمية مؤتمتة، ومعمارية قواعد بيانات متينة تدعم اتخاذ القرار التنفيذي بدقة وموثوقية.'
                : 'I am Reema Alfaifi, a Computer Science, Systems Engineering, and Data Analysis specialist. I leverage algorithmic logic and software engineering to engineer automated digital solutions and resilient data architectures that empower executive decision-making.'}
            </p>
            <p>
              {isAr
                ? 'أجمع بين تحليل وهندسة متطلبات النظم وتوثيق العمليات والمعماريات التقنية (UML / Visio)، وبناء مسارات تدفق البيانات ومحركات الأتمتة (Python / SQL)، وصولاً إلى تطوير لوحات ذكاء أعمال (BI) تنفيذية واختبارات الجودة الوظيفية.'
                : 'My expertise spans end-to-end system requirements engineering, UML/Visio architecture modeling, automated Python/SQL data pipelines, functional QA testing, and executive BI dashboards.'}
            </p>
          </div>

          {/* Pillars Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-7 bg-slate-950 rounded-3xl text-white shadow-md">
              <Target className="text-blue-400 mb-4" size={28}/>
              <h3 className="text-lg font-bold mb-2">
                {isAr ? 'الرسالة المهنية' : 'The Mission'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isAr
                  ? 'تمكين المؤسسات والشركات الوطنية عبر حلول برمجية وتحليلية متقدمة تنهي الهدر التشغيلي، وتؤتمت مسارات العمل، وتبني منظومات ذكاء أعمال تعزز القدرة التنافسية.'
                  : 'Empowering Saudi organizations through robust software architectures, workflow automation, and intelligent data systems driving competitive advantage.'}
              </p>
            </div>

            <div className="p-7 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <Award className="text-blue-700 mb-4" size={28}/>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {isAr ? 'معيار الموثوقية الهندسية' : 'Engineering Standard'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {isAr
                  ? 'الالتزام بأفضل الممارسات البرمجية والمعمارية؛ من كفاءة الخوارزميات ونظافة الشيفرة، إلى حوكمة قواعد البيانات والامتثال لأعلى معايير الأمان والاعتمادية.'
                  : 'Commitment to engineering excellence: from algorithmic efficiency and clean architecture to data governance, audit compliance, and scalable performance.'}
              </p>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Award size={18} className="text-blue-600" />
              {isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications & Accreditations'}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{t(cert.title)}</h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                    <span className="font-semibold text-blue-700">{cert.issuer}</span>
                    <span className="font-medium text-slate-400">{cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categorized Tools Breakdown */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Cpu size={18} className="text-blue-600" />
              {isAr ? 'مصفوفة الكفاءات التقنية والبرمجية' : 'Technical & Engineering Competency Matrix'}
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  {isAr ? 'البرمجة والخوارزميات والتطوير:' : 'Software Development & Algorithms:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TOOLS_CATEGORIZED.softwareAndDev.map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  {isAr ? 'هندسة قواعد البيانات ومستودعات البيانات:' : 'Database Engineering & Data Warehousing:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TOOLS_CATEGORIZED.dataEngAndSql.map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  {isAr ? 'تحليل النظم وهندسة العمليات وITIL:' : 'Systems Analysis, BPMN & ITIL:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TOOLS_CATEGORIZED.systemsAndModeling.map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  {isAr ? 'ذكاء الأعمال وعرض المؤشرات:' : 'Business Intelligence & Dashboards:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TOOLS_CATEGORIZED.biAndAnalytics.map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Career Timeline */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            
            {/* Timeline Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-8 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calendar size={16} className="text-blue-600" />
                {isAr ? 'المسار المهني والخبرات' : 'Career Progression'}
              </h4>

              <div className="space-y-10">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-7 border-l-2 border-slate-200">
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-slate-50"></div>
                    <span className="text-[11px] font-black text-blue-700 uppercase tracking-wider block mb-1">
                      {t(exp.period)}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {t(exp.role)}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-2">
                      {t(exp.company)}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t(exp.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credentials Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {isAr ? 'جامعة الملك خالد • كلية علوم الحاسب' : 'King Khalid University • College of Computer Science'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isAr ? 'بكالوريوس علوم الحاسب' : 'Bachelor of Science in Computer Science'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr 
                  ? 'تأهيل أكاديمي وتقني متكامل في علوم الحاسب، يعزز القدرة على تحليل المشكلات، تصميم الحلول التقنية، وتوظيف التقنيات الحديثة لتطوير الأنظمة والحلول الرقمية وتحسين العمليات.'
                  : 'A comprehensive academic and technical foundation in Computer Science, fostering advanced problem analysis, technical solution design, and leveraging modern technologies to engineer digital systems and optimize business processes.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="w-full py-4 bg-slate-950 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              >
                <FileText size={16} />
                <span>{isAr ? 'فتح السيرة الذاتية الكاملة (CV)' : 'View & Download Full CV'}</span>
              </button>

              <Link 
                to="/contact"
                className="w-full py-4 bg-white border border-slate-300 text-slate-800 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-400 transition-all text-center"
              >
                <span>{isAr ? 'تواصل معي' : 'Get in Touch'}</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
};

export default About;
