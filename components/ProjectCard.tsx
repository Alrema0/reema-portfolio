import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { t } = useLanguage();

  const cardInner = (
    <>
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.imageUrl} 
          alt={t(project.title)} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 opacity-95"></div>
      </div>
      
      {/* Top Badges */}
      <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
        <span className="px-3.5 py-1 bg-blue-600/90 text-white text-[11px] font-bold rounded-full tracking-wide backdrop-blur-md shadow-sm">
          {t(project.category)}
        </span>
        {t(project.industry) && (
          <span className="text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700/50 backdrop-blur-sm">
            {t(project.industry)}
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end text-white">
        
        {/* KPI Preview Badge */}
        {project.cardPill ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-bold mb-3 self-start">
            <TrendingUp size={13} className="text-blue-400" />
            <span>{t(project.cardPill)}</span>
          </div>
        ) : (
          project.metrics && project.metrics.length > 0 && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-bold mb-3 self-start">
              <TrendingUp size={13} className="text-blue-400" />
              <span>{project.metrics[0].kpi} — {t(project.metrics[0].label)}</span>
            </div>
          )
        )}

        <h3 className="text-xl sm:text-2xl font-black leading-snug mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {t(project.title)}
        </h3>
        
        <p className={`text-slate-300 text-xs sm:text-sm ${project.cardDescription ? 'line-clamp-4' : 'line-clamp-2'} mb-5 leading-relaxed font-normal`}>
          {t(project.cardDescription ?? project.businessProblem)}
        </p>

        {/* Footer with Tools & Button */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <div className={`flex flex-wrap gap-1.5 ${project.cardTags ? 'max-w-[78%]' : 'max-w-[70%]'}`}>
            {(project.cardTags ?? project.tools.slice(0, 3)).map((tool) => (
              <span 
                key={tool} 
                className="text-[10px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs"
              >
                {tool}
              </span>
            ))}
          </div>
          
          <span 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-950 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-lg shrink-0"
            aria-label="View Case Study"
          >
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </>
  );

  if (project.pageRoute) {
    return (
      <Link
        to={project.pageRoute}
        className="group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden bento-card h-[460px] flex flex-col justify-between cursor-pointer hover:border-blue-500/50 shadow-sm"
      >
        {cardInner}
      </Link>
    );
  }

  return (
    <div 
      onClick={() => onSelectProject && onSelectProject(project)}
      className="group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden bento-card h-[460px] flex flex-col justify-between cursor-pointer hover:border-blue-500/50 shadow-sm"
    >
      {cardInner}
    </div>
  );
};

export default ProjectCard;
