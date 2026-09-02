import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Database, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  FileSpreadsheet, 
  Activity, 
  FileText,
  Building2,
  TrendingUp,
  Cpu,
  ArrowLeft,
  Search,
  GraduationCap,
  BookOpen,
  Award,
  ExternalLink
} from 'lucide-react';
import { PROJECTS, WORKFLOW_STEPS, TOOLS_CATEGORIZED, CORE_SKILLS, ACADEMIC_COURSES } from '../constants';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ResumeModal from '../components/ResumeModal';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

const Home: React.FC = () => {
  const { t, isAr } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const featuredProjects = PROJECTS;

  return (
    <div className="pt-24 sm:pt-28 pb-16 gradient-mesh">
      
      {/* Editorial Corporate Hero */}
      <section className="min-h-[82vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-6xl mx-auto">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-100/90 border border-slate-200/80 rounded-full mb-8 shadow-xs">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isAr ? 'متاحة للفرص المهنية والمشاريع التقنية في الرياض' : 'Available for Technical Roles & Projects • Riyadh'}
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-slate-950 max-w-5xl">
          {isAr ? (
            <>
              تحليل البيانات والنظم <br />
              <span className="text-blue-700">لبناء قرارات دقيقة وحلول ذكية.</span>
            </>
          ) : (
            <>
              DATA & SYSTEMS ANALYTICS <br />
              <span className="text-blue-700">FOR SMARTER DECISIONS.</span>
            </>
          )}
        </h1>
        
        {/* Executive Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mb-10 font-normal leading-relaxed">
          {isAr 
            ? 'مختصة في علوم الحاسب، تحليل البيانات، وهندسة العمليات. أعمل على تحويل البيانات المعقدة إلى لوحات تحكم تفاعلية (Power BI / Excel) وتوثيق مسارات النظم (BPMN / Visio) لرفع كفاءة الأداء.'
            : 'Computer Science, Data & Systems Analyst. Transforming complex data into actionable dashboards (Power BI / Excel) and mapping system workflows (BPMN / Visio) to drive efficiency.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            to="/projects" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10"
          >
            <span>{isAr ? 'استعراض المشاريع' : 'Explore Projects'}</span>
            {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </Link>
          
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 text-slate-800 rounded-2xl font-bold text-sm hover:border-slate-950 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <FileText size={18} className="text-blue-600" />
            <span>{isAr ? 'عرض وتحميل السيرة الذاتية' : 'View Full Resume'}</span>
          </button>
        </div>

        {/* Methodology: How ideas translate into verified results */}
        <div className="mt-16 w-full max-w-5xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-slate-300"></span>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
              {isAr ? 'منهجية تحويل الأفكار والبيانات إلى نتائج وقرارات' : 'HOW IDEAS TRANSLATE INTO MEASURABLE RESULTS'}
            </span>
            <span className="h-px w-8 bg-slate-300"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
            {WORKFLOW_STEPS.map((stepItem, idx) => {
              const StepIcon = 
                stepItem.icon === 'Search' ? Search :
                stepItem.icon === 'Layers' ? Layers :
                stepItem.icon === 'Cpu' ? Cpu : TrendingUp;

              return (
                <div 
                  key={idx} 
                  className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-500/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono">
                        {stepItem.step}
                      </span>
                      <StepIcon size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-base font-black text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {t(stepItem.title)}
                    </h3>
                    
                    <span className="text-[11px] font-bold text-blue-700 block mb-2 leading-tight">
                      {t(stepItem.action)}
                    </span>
                  </div>

                  <p className="text-[12px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                    {t(stepItem.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Showcase: Education & Specialized Professional Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Academic Degree Top Section */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-slate-800/80">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold mb-5">
                <GraduationCap size={16} />
                <span>{isAr ? 'المؤهل الأكاديمي' : 'Academic Foundation'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                {isAr ? 'بكالوريوس علوم الحاسب' : 'Bachelor of Science in Computer Science'}
              </h2>

              <p className="text-base sm:text-lg font-bold text-blue-400 mb-4">
                {isAr ? 'جامعة الملك خالد • كلية علوم الحاسب' : 'King Khalid University • College of Computer Science'}
              </p>

              <div className="p-4 sm:p-5 bg-slate-900/80 rounded-2xl border border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {isAr 
                  ? 'تأهيل أكاديمي وتقني متكامل في علوم الحاسب، يعزز القدرة على تحليل المشكلات، تصميم الحلول التقنية، وتوظيف التقنيات الحديثة لتطوير الأنظمة والحلول الرقمية وتحسين العمليات.' 
                  : 'A comprehensive academic and technical foundation in Computer Science, fostering advanced problem analysis, technical solution design, and leveraging modern technologies to engineer digital systems and optimize business processes.'}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-900/40 border border-blue-700/50 text-blue-200 rounded-xl text-xs font-bold">
                  <BookOpen size={14} className="text-blue-400" />
                  <span>{isAr ? 'علوم الحاسب وهندسة البرمجيات' : 'Computer Science & Software'}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium">
                  <Cpu size={14} className="text-slate-400" />
                  <span>{isAr ? 'الخوارزميات وهياكل البيانات' : 'Algorithms & Data Structures'}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium">
                  <Database size={14} className="text-slate-400" />
                  <span>{isAr ? 'معمارية وتكامل قواعد البيانات' : 'Database Architecture & SQL'}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium">
                  <Layers size={14} className="text-slate-400" />
                  <span>{isAr ? 'تحليل النظم وأتمتة العمليات' : 'Systems Analysis & Automation'}</span>
                </div>
              </div>
            </div>

            {/* Academic Credential Summary Card */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="w-full max-w-xs bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {isAr ? 'مجال التخصص' : 'Discipline'}
                    </span>
                    <span className="text-xs font-black text-white">
                      {isAr ? 'علوم الحاسب (Computer Science)' : 'Computer Science (CS)'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">{isAr ? 'المقر والأصل:' : 'Institution:'}</span>
                    <span className="font-semibold text-slate-200">{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">{isAr ? 'التركيز الفني:' : 'Core Focus:'}</span>
                    <span className="font-semibold text-blue-400">{isAr ? 'برمجيات، قواعد بيانات، نظم' : 'Software, DB & Systems'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">{isAr ? 'التطبيق العملي:' : 'Application:'}</span>
                    <span className="font-semibold text-emerald-400">{isAr ? 'حلول ذكية وأتمتة وBI' : 'Automation & BI'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Courses & Development Tracks Section */}
          <div className="relative z-10 pt-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Award size={18} className="text-blue-400" />
                <h3 className="text-sm sm:text-base font-black text-slate-200 uppercase tracking-wider">
                  {isAr ? 'الدورات والبرامج التطويرية التخصصية' : 'Professional Certifications & Development Tracks'}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                {isAr ? 'تطوير' : 'Development'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACADEMIC_COURSES.map((course, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all rounded-2xl p-5 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono font-black flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      {course.badge && (
                        <span className="text-[10px] font-bold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded-md border border-blue-700/40">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-blue-300 transition-colors mb-1.5 leading-snug">
                      {t(course.title)}
                    </h4>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                    <span className="truncate">{t(course.provider)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2">
              {isAr ? 'دراسات الحالة المميزة' : 'Selected Case Studies'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
              {isAr ? 'نماذج المشاريع والأعمال الفنية' : 'Featured Technical Projects'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal mt-3 leading-relaxed">
              {isAr
                ? 'استعراض 6 نماذج عملية في بناء لوحات Power BI، استعلامات قواعد بيانات SQL، التحليل التنبؤي بلغة Python، أتمتة تدفقات Power Automate، تحليلات Excel، وهندسة مسارات BPMN.'
                : 'Explore 6 real-world case studies spanning Power BI dashboards, relational SQL analytics, Python predictive modeling, Power Automate workflows, Excel BI, and BPMN process engineering.'}
            </p>
          </div>

          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-blue-700 transition-colors bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto"
          >
            <span>{isAr ? 'استعراض كافة المشاريع' : 'View All Projects'}</span>
            {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* Final Collaboration Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/30">
            <Activity size={32} />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 max-w-2xl">
            {isAr ? 'جاهز للتعاون في بناء حلول البيانات والنظم؟' : 'Ready to Collaborate on Data & Systems Projects?'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed">
            {isAr
              ? 'يسعدني التواصل لمناقشة فرص العمل، وتطوير لوحات التحكم، وأتمتة مسارات التقارير، وتوثيق معماريات النظم.'
              : 'Feel free to reach out to discuss career opportunities, dashboard development, reporting automation, or system documentation.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
            >
              {isAr ? 'تواصل معي' : 'Get in Touch'}
            </Link>
            
            <Link 
              to="/projects" 
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all"
            >
              {isAr ? 'استعراض المشاريع والأعمال' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
};

export default Home;
