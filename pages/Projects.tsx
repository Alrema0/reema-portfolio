import React, { useState } from 'react';
import { Filter, Search, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t, isAr } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique category keys or strings
  const categories = ['All', 'Business Intelligence', 'SQL & Database', 'Python & Machine Learning', 'Arabic NLP', 'Process Automation', 'Excel & Data Analysis', 'Systems Analysis'];

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return isAr ? 'الكل (7)' : 'All (7)';
    if (cat === 'Business Intelligence') return isAr ? 'Power BI وذكاء الأعمال' : 'Power BI & BI';
    if (cat === 'SQL & Database') return isAr ? 'تحليل وقواعد بيانات SQL' : 'SQL & Databases';
    if (cat === 'Python & Machine Learning') return isAr ? 'تحليل وتنبؤ Python' : 'Python & Machine Learning';
    if (cat === 'Arabic NLP') return isAr ? 'معالجة اللغة العربية (NLP)' : 'Arabic NLP';
    if (cat === 'Process Automation') return isAr ? 'أتمتة العمليات' : 'Process Automation';
    if (cat === 'Excel & Data Analysis') return isAr ? 'تحليلات Excel' : 'Excel Analytics';
    if (cat === 'Systems Analysis') return isAr ? 'تحليل النظم وBPMN' : 'Systems & BPMN';
    return cat;
  };

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category.en === activeCategory;
    const matchesSearch = 
      t(project.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(project.businessProblem).toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2">
          {isAr ? 'معرض الأعمال ودراسات الحالة' : 'Portfolio of Case Studies'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          {isAr ? 'مشاريع ذكاء الأعمال وهندسة النظم' : 'Data Analytics & Systems Projects'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isAr
            ? 'نماذج تفصيلية لتحديات الأعمال المعقدة وحلولها التقنية المنفذة، مع توثيق الأثر المالي والتشغيلي المحقق.'
            : 'Detailed case studies covering multi-source reporting automation, Star-Schema data modeling, and process optimization.'}
        </p>
      </div>

      {/* Controls Bar (Category Filter + Search) */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs mb-10 space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-2">
              <Filter size={15} />
              <span>{isAr ? 'التصنيف:' : 'Filter:'}</span>
            </div>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث بالأداة أو العنوان (مثل: SQL, DAX)...' : 'Search by tool or keyword...'}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onSelectProject={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
          <Layers size={40} className="text-slate-300 mx-auto mb-4" />
          <h3 className="text-base font-bold text-slate-700 mb-1">
            {isAr ? 'لم يتم العثور على مشاريع مطابقة للبحث' : 'No matching case studies found'}
          </h3>
          <p className="text-xs text-slate-400">
            {isAr ? 'جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.' : 'Try changing your search filter or category.'}
          </p>
        </div>
      )}

      {/* Methodology & Data Security Callout */}
      <div className="mt-20 p-8 sm:p-10 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={22} className="text-blue-400" />
            <h3 className="text-lg font-bold text-white">
              {isAr ? 'ملاحظة حول سرية وحوكمة البيانات' : 'Governance & Confidentiality Protocol'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {isAr
              ? 'جميع دراسات الحالة المعروضة تم تعديل أرقامها الحساسة واستبدال البيانات التعريفية لحماية خصوصية العملاء وفق ضوابط الهيئة الوطنية للأمن السيبراني (NCA) ومكتب إدارة البيانات الوطنية (NDMO).'
              : 'All project data displayed has been sanitized and anonymized in strict accordance with Saudi NDMO data privacy standards and enterprise NDA protocols.'}
          </p>
        </div>

        <a 
          href="#/contact" 
          className="px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors shrink-0"
        >
          {isAr ? 'طلب مناقشة فنية' : 'Request Technical Discussion'}
        </a>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;
