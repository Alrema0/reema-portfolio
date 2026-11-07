import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Database,
  TrendingUp,
  Clock,
  GraduationCap,
} from 'lucide-react';
import {
  EXPERIENCE,
  CERTIFICATIONS,
  WORKFLOW_STEPS,
  SERVICES,
  PROJECTS,
  TOOLS_CATEGORIZED,
} from '../constants';
import { LocalizedText } from '../types';

import salesPerformanceImg from '../sales-performance-dashboard.png';
import adidasDashboardImg from '../adidas-dashboard.png';
import bpmnWorkflowImg from '../bpmn-configuration-management.png';
import powerAutomateImg from '../power-automate-license-reminder.png';
import sqlImg1 from '../sql-completion-rate.png';
import sqlImg2 from '../sql-budget-overdue.png';
import sqlImg3 from '../sql-schema-query.png';
import ticketAnalyticsImg1 from '../eda_category_priority.png';
import ticketAnalyticsImg2 from '../correlation_heatmap.png';
import ticketAnalyticsImg3 from '../prediction_accuracy.png';
import topicsChartImg from '../topics_by_app.png';
import tfidfConfusionImg from '../Screenshot 2026-10-31 184303.png';
import camelbertConfusionImg from '../Screenshot 2026-10-31 184456.png';

interface PortfolioPdfDocumentProps {
  language: 'en' | 'ar';
  mode: 'preview' | 'pdf';
}

const TOTAL_PAGES = 7;

const PortfolioPdfDocument: React.FC<PortfolioPdfDocumentProps> = ({ language, mode }) => {
  const isAr = language === 'ar';
  const isPdf = mode === 'pdf';

  const tr = (textObj: LocalizedText | string | undefined): string => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    return textObj[language] || textObj.en || '';
  };

  const pageClass = isPdf
    ? 'w-[794px] min-h-[1123px] bg-white text-slate-900 px-9 py-8 flex flex-col justify-between box-border'
    : 'w-full max-w-[820px] mx-auto bg-white text-slate-900 rounded-2xl border border-slate-200/90 shadow-md px-5 py-6 sm:px-9 sm:py-8 flex flex-col justify-between';

  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];
  const p5 = PROJECTS[4];
  const p6 = PROJECTS[5];

  const renderRunningHeader = (sectionNum: string, sectionTitle: string) => (
    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-5">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono font-bold text-blue-700">{sectionNum}</span>
        <span className="text-slate-300">·</span>
        <span className="text-xs font-extrabold text-slate-900 tracking-tight">{sectionTitle}</span>
      </div>
      <div className="text-[11px] font-semibold text-slate-500">
        {isAr ? 'ريما الفيفي — محللة بيانات ونظم' : 'Reema Alfaifi — Data & Systems Analyst'}
      </div>
    </div>
  );

  const renderPageFooter = (pageNum: number) => (
    <div className="border-t border-slate-200 pt-2.5 mt-5 flex items-center justify-between text-[10px] text-slate-500">
      <span>
        {isAr
          ? 'ملف السيرة الذاتية ومعرض الأعمال الشامل • Reema0alf@gmail.com'
          : 'Comprehensive CV & Technical Portfolio • Reema0alf@gmail.com'}
      </span>
      <span className="font-mono font-bold text-slate-700 tabular-nums">
        {isAr ? `صفحة ${pageNum} من ${TOTAL_PAGES}` : `Page ${pageNum} of ${TOTAL_PAGES}`}
      </span>
    </div>
  );

  const renderTwoColumnProject = (
    projectIndex: string,
    project: typeof p1,
    imgSrc: string,
    imgAlt: string
  ) => (
    <div className="border border-slate-200 rounded-2xl p-4 bg-white space-y-3">
      {/* Project Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div className="space-y-0.5 max-w-[68%]">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-blue-700">
            <span className="font-mono">{projectIndex}</span>
            <span>·</span>
            <span>{tr(project.category)}</span>
            {tr(project.industry) && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-medium">{tr(project.industry)}</span>
              </>
            )}
          </div>
          <h3 className="text-sm sm:text-[15px] font-black text-slate-950 leading-snug">
            {tr(project.title)}
          </h3>
        </div>

        {/* Metrics Summary */}
        <div className="flex items-center gap-2">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-center"
            >
              <div className="text-[11px] font-black text-blue-700 font-mono tabular-nums leading-tight">
                {m.kpi}
              </div>
              <div className="text-[9px] text-slate-500 font-medium leading-tight">
                {tr(m.label)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Image + Structured Explanation */}
      <div className={isPdf ? 'grid grid-cols-12 gap-4 items-start' : 'grid grid-cols-1 md:grid-cols-12 gap-4 items-start'}>
        <div className={isPdf ? 'col-span-7 space-y-2' : 'md:col-span-7 space-y-2'}>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-1.5 overflow-hidden">
            <img
              src={imgSrc}
              alt={imgAlt}
              loading="eager"
              decoding="sync"
              className="w-full h-[210px] object-contain rounded-lg mx-auto bg-white"
            />
          </div>
          <div className="text-[10px] text-slate-500 leading-snug bg-slate-50/80 rounded-lg px-2.5 py-1.5 border border-slate-100">
            <span className="font-bold text-slate-700">
              {isAr ? 'معمارية الحل: ' : 'Architecture: '}
            </span>
            {tr(project.architecture)}
          </div>
        </div>

        <div className={isPdf ? 'col-span-5 space-y-2.5 text-[11px] leading-relaxed' : 'md:col-span-5 space-y-2.5 text-xs leading-relaxed'}>
          <div>
            <span className="font-extrabold text-slate-900 block mb-0.5">
              {isAr ? 'المشكلة والتحدي:' : 'The Problem:'}
            </span>
            <p className="text-slate-600">{tr(project.businessProblem)}</p>
          </div>

          <div>
            <span className="font-extrabold text-slate-900 block mb-0.5">
              {isAr ? 'المنهجية والتنفيذ:' : 'Approach & Solution:'}
            </span>
            <p className="text-slate-600">{tr(project.approach)}</p>
          </div>

          <div>
            <span className="font-extrabold text-blue-700 block mb-0.5">
              {isAr ? 'الأثر والنتائج:' : 'Impact & Results:'}
            </span>
            <p className="text-slate-700 font-medium">{tr(project.impact)}</p>
          </div>

          <div className="pt-1 border-t border-slate-100 text-[10px] text-slate-500">
            <span className="font-bold text-slate-700">{isAr ? 'الأدوات: ' : 'Tools: '}</span>
            {project.tools.join(' · ')}
          </div>
        </div>
      </div>
    </div>
  );

  const methodStepsP7 = isAr
    ? [
        '1. الجمع: أحدث 3,000 مراجعة لكل تطبيق مع إزالة البيانات الشخصية.',
        '2. التنظيف: تطبيع النص العربي والإبقاء على المراجعات القصيرة (8,561 متبقية).',
        '3. الاختبار: 300 مراجعة متوازنة حسب النجوم ومصنفة حسب المعنى.',
        '4. النموذج الأساسي: TF-IDF + Logistic Regression.',
        '5. النموذج العربي: CAMeLBERT المدرّب مسبقاً دون تدريب إضافي.',
        '6. الموضوعات: تطبيق خوارزمية NMF على 603 مراجعات سلبية.',
        '7. المتطلبات: صياغة قصص مستخدم (User Stories) بأولويات MoSCoW.',
      ]
    : [
        '1. Collect: latest 3,000 reviews per app, personal user data removed.',
        '2. Clean: Arabic text normalization; short reviews kept (8,561 remained).',
        '3. Test set: 300 reviews, equal per star, labeled by meaning.',
        '4. Baseline: TF-IDF + Logistic Regression.',
        '5. Arabic model: pre-trained CAMeLBERT, no extra training.',
        '6. Topics: NMF on 603 negative reviews.',
        '7. Requirements: user stories with MoSCoW priorities.',
      ];

  const limitationsP7 = isAr
    ? [
        'تسميات مجموعة الاختبار أُسندت بواسطة نموذج لغوي. راجعتُ بشكل مستقل عينة عشوائية مكونة من 30 مراجعة دون الاطلاع على تسميات النموذج: اتفقنا في 25 منها (83%)، وفي 24 من أصل 26 مراجعة واضحة الإيجابية أو السلبية (92%). تركزت الاختلافات في الحالات الحدية. وبحجم 30 مراجعة تظل النسبة تقريبية ولم تُراجع المجموعة الكاملة بشرياً.',
        'نوافذ جمع المراجعات تختلف حسب التطبيق (86–280 يوماً): لا مقارنات عابرة للتطبيقات.',
        'مجموعة الاختبار (260) صغيرة ومتوازنة بالنجوم بخلاف البيانات الفعلية (~89% إيجابية).',
        '13.8% من الشكاوى لا تندرج تحت موضوع محدد؛ والمراجعات تصف الأعراض لا الأسباب.',
      ]
    : [
        "Test labels were assigned by a language model. I independently reviewed a random sample of 30 of them without seeing the model's labels: we agreed on 25 (83%), and on 24 of the 26 clear positive/negative reviews (92%). Disagreements were borderline cases (neutral vs. negative or positive). With only 30 reviews the agreement rate is approximate, and the full set was not human-reviewed.",
        'Collection windows differ per app (86-280 days): no cross-app or trend conclusions.',
        'The test set (260) is small and balanced by stars, unlike real data (~89% positive).',
        '13.8% of complaints fit no topic; topic names are interpretive, and reviews describe symptoms, not causes.',
      ];

  const learnedP7 = isAr
    ? [
        'تقييمات النجوم إشارة غير مكتملة لقياس المشاعر الفعلية.',
        'مع البيانات غير المتوازنة تكون الدقة (Accuracy) مضللة، لذا استخدمت Macro-F1.',
        'الفارق البسيط بين نموذجين لا يعني التفوق؛ لذا قسته بفاصل ثقة إحصائي.',
        'اختلاف فترات جمع البيانات قد يشوّه المقارنات، فوثّقته بوضوح.',
      ]
    : [
        'Star ratings are an incomplete signal of sentiment.',
        'With imbalanced data, accuracy misleads, so I used Macro-F1.',
        'A small gap between two models is not superiority; I measured it with a confidence interval.',
        'Uneven collection windows can distort comparisons, which I noticed late and documented.',
      ];

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className={isPdf ? 'space-y-0 bg-white' : 'space-y-6'}
      style={{
        fontFamily: isAr
          ? '"IBM Plex Sans Arabic", "Plus Jakarta Sans", sans-serif'
          : '"Plus Jakarta Sans", "IBM Plex Sans Arabic", sans-serif',
      }}
    >
      {/* =====================================================================
          PAGE 1: EXECUTIVE SUMMARY, PROFESSIONAL EXPERIENCE & EDUCATION
      ===================================================================== */}
      <section data-pdf-page="1" id={isPdf ? undefined : 'pdf-section-cv'} className={pageClass}>
        <div className="space-y-3.5">
          {/* Executive Hero Header */}
          <div className="bg-slate-950 text-white rounded-2xl p-4 sm:p-5 border border-slate-800">
            <div className={isPdf ? 'grid grid-cols-12 gap-4 items-center' : 'grid grid-cols-1 sm:grid-cols-12 gap-4 items-center'}>
              <div className={isPdf ? 'col-span-8 space-y-1.5' : 'sm:col-span-8 space-y-1.5'}>
                <div className="flex items-center gap-2 text-[10.5px] font-bold text-blue-400">
                  <Cpu size={13} />
                  <span>
                    {isAr
                      ? 'السيرة الذاتية وملف الأعمال التقني الشامل'
                      : 'Executive Curriculum Vitae & Technical Portfolio'}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {isAr ? 'ريما الفيفي' : 'Reema Alfaifi'}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-blue-300">
                  {isAr
                    ? 'مختصة في علوم الحاسب وتحليل البيانات وتوثيق النظم (Data & Systems Analyst)'
                    : 'Computer Science, Data & Systems Analyst'}
                </p>
                <p className="text-[10.5px] text-slate-300 leading-relaxed pt-0.5">
                  {isAr
                    ? 'أوظّف علوم الحاسب والتفكير التحليلي في تحويل البيانات المعقدة إلى لوحات تحكم تنفيذية (Power BI / Excel)، وبناء استعلامات ونماذج تحليلية وتنبؤية (SQL / Python / NLP)، وأتمتة مسارات العمل (Power Automate)، وتوثيق معماريات النظم والعمليات (BPMN 2.0 / Visio / UML).'
                    : 'Computer Science, Data & Systems Analyst experienced in transforming complex operational data into executive BI dashboards (Power BI / Excel), analytical SQL & Python/NLP pipelines, automated workflows (Power Automate), and standardized system architectures (BPMN 2.0 / Visio / UML).'}
                </p>
              </div>

              <div className={isPdf ? 'col-span-4 bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-1.5 text-[10.5px] text-slate-200' : 'sm:col-span-4 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs text-slate-200'}>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-blue-400 shrink-0" />
                  <span>{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-blue-400 shrink-0" />
                  <span>Reema0alf@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-blue-400 shrink-0" />
                  <span dir="ltr">+966 551641847</span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-800 text-[10px] text-blue-300 font-semibold">
                  <CheckCircle2 size={12} className="text-blue-400 shrink-0" />
                  <span>
                    {isAr
                      ? 'محللة بيانات — شركة GNS (مشروع NWC)'
                      : 'Data Analyst — GNS (NWC Project)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Engineering Standard (from About page) */}
          <div className={isPdf ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-extrabold text-slate-900 mb-0.5">
                {isAr ? 'الرسالة المهنية' : 'The Mission'}
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                {isAr
                  ? 'تمكين المؤسسات والشركات الوطنية عبر حلول برمجية وتحليلية متقدمة تنهي الهدر التشغيلي، وتؤتمت مسارات العمل، وتبني منظومات ذكاء أعمال تعزز القدرة التنافسية.'
                  : 'Empowering Saudi organizations through robust software architectures, workflow automation, and intelligent data systems driving competitive advantage.'}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-extrabold text-slate-900 mb-0.5">
                {isAr ? 'معيار الموثوقية الهندسية' : 'Engineering Standard'}
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                {isAr
                  ? 'الالتزام بأفضل الممارسات البرمجية والمعمارية؛ من كفاءة الخوارزميات ونظافة الشيفرة، إلى حوكمة قواعد البيانات والامتثال لأعلى معايير الأمان والاعتمادية.'
                  : 'Commitment to engineering excellence: from algorithmic efficiency and clean architecture to data governance, audit compliance, and scalable performance.'}
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 pb-1 mb-2">
              <Briefcase size={14} className="text-blue-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                {isAr ? 'الخبرات المهنية والمسار الوظيفي' : 'Professional Experience'}
              </h2>
            </div>

            <div className="space-y-2">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="px-3 py-2 rounded-xl border border-slate-200/80 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                    <div>
                      <span className="text-[11.5px] font-black text-slate-950">{tr(exp.role)}</span>
                      <span className="text-slate-300 mx-1.5">·</span>
                      <span className="text-[11px] font-bold text-blue-700">{tr(exp.company)}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-600 tabular-nums">
                      {tr(exp.period)} | {tr(exp.location)}
                    </span>
                  </div>
                  <ul className="space-y-0.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-[10px] text-slate-600 leading-snug flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{tr(ach)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Foundation */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 pb-1 mb-2">
              <GraduationCap size={14} className="text-blue-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                {isAr ? 'المؤهل الأكاديمي' : 'Academic Education'}
              </h2>
            </div>

            <div className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[11.5px] font-black text-slate-950">
                    {isAr ? 'بكالوريوس علوم الحاسب' : 'Bachelor of Science in Computer Science'}
                  </h3>
                  <span className="text-slate-300">·</span>
                  <span className="text-[11px] font-bold text-blue-700">
                    {isAr ? 'جامعة الملك خالد — كلية علوم الحاسب' : 'King Khalid University (KKU) — College of Computer Science'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-600 leading-snug">
                  {isAr
                    ? 'تأهيل أكاديمي وتقني متكامل في علوم الحاسب، هندسة البرمجيات، الخوارزميات وهياكل البيانات، معمارية قواعد البيانات SQL، وتحليل النظم.'
                    : 'Comprehensive foundation in Computer Science, Software Engineering, Algorithms & Data Structures, Relational Databases (SQL), and Systems Analysis.'}
                </p>
              </div>
              <div className="text-[10.5px] font-mono font-bold text-slate-700 shrink-0 tabular-nums">
                09/2017 – 01/2022
              </div>
            </div>
          </div>
        </div>

        {renderPageFooter(1)}
      </section>

      {/* =====================================================================
          PAGE 2: CERTIFICATIONS, METHODOLOGY, SKILLS MATRIX & SERVICES
      ===================================================================== */}
      <section data-pdf-page="2" id={isPdf ? undefined : 'pdf-section-services'} className={pageClass}>
        <div className="space-y-4">
          {renderRunningHeader(
            '02',
            isAr
              ? 'الشهادات المهنية، منهجية العمل، المهارات التقنية، والخدمات'
              : 'Certifications, Methodology, Technical Matrix & Services'
          )}

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={14} className="text-blue-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                {isAr ? 'الشهادات والدورات التطويرية التخصصية' : 'Professional Certifications & Development Tracks'}
              </h2>
            </div>
            <div className={isPdf ? 'grid grid-cols-2 gap-2.5' : 'grid grid-cols-1 sm:grid-cols-2 gap-2.5'}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 leading-snug">{tr(cert.title)}</div>
                    <div className="text-[10px] text-blue-700 font-semibold">{cert.issuer}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium shrink-0">{cert.credentialId}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Workflow Methodology (from Home page) */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers size={14} className="text-blue-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                {isAr
                  ? 'منهجية تحويل الأفكار والبيانات إلى نتائج وقرارات'
                  : 'Methodology: Translating Data & Ideas into Measurable Results'}
              </h2>
            </div>
            <div className={isPdf ? 'grid grid-cols-4 gap-2.5' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5'}>
              {WORKFLOW_STEPS.map((ws, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-white space-y-1">
                  <div className="text-[11px] font-mono font-black text-blue-700">{ws.step}</div>
                  <div className="text-[11px] font-extrabold text-slate-950 leading-snug">{tr(ws.title)}</div>
                  <div className="text-[10px] font-semibold text-blue-700 leading-tight">{tr(ws.action)}</div>
                  <p className="text-[10px] text-slate-500 leading-snug pt-1 border-t border-slate-100">
                    {tr(ws.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competency Matrix (from About page) */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Database size={14} className="text-blue-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                {isAr ? 'مصفوفة الكفاءات التقنية والبرمجية' : 'Technical & Engineering Competency Matrix'}
              </h2>
            </div>
            <div className={isPdf ? 'grid grid-cols-2 gap-2.5 text-[10px]' : 'grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]'}>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {isAr ? 'البرمجة والتعلم الآلي وNLP:' : 'Software, Machine Learning & NLP:'}
                </span>
                <span className="text-slate-600">
                  {[...TOOLS_CATEGORIZED.softwareAndDev, 'scikit-learn', 'Hugging Face', 'Pandas'].join(' · ')}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {isAr ? 'قواعد البيانات وهندسة البيانات:' : 'Database Engineering & SQL:'}
                </span>
                <span className="text-slate-600">
                  {['MySQL', ...TOOLS_CATEGORIZED.dataEngAndSql].join(' · ')}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {isAr ? 'تحليل النظم وأتمتة العمليات:' : 'Systems Analysis, BPMN & Automation:'}
                </span>
                <span className="text-slate-600">
                  {[...TOOLS_CATEGORIZED.systemsAndModeling, 'Power Automate'].join(' · ')}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {isAr ? 'ذكاء الأعمال ولوحات التحكم:' : 'Business Intelligence & Dashboards:'}
                </span>
                <span className="text-slate-600">
                  {['Power BI', 'DAX', 'Power Query', ...TOOLS_CATEGORIZED.biAndAnalytics].join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* All 6 Services (from Services page) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-blue-700" />
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  {isAr ? 'الخدمات والحلول التقنية المقدمة (6 مسارات)' : 'Technical & Data Engineering Services (6 Solutions)'}
                </h2>
              </div>
              <span className="text-[10px] text-slate-500 flex items-center gap-1">
                <Clock size={11} className="text-blue-600" />
                <span>{isAr ? 'تسليم رشيق (1 – 5 أيام عمل)' : 'Agile Turnaround (1 – 5 Business Days)'}</span>
              </span>
            </div>

            <div className={isPdf ? 'grid grid-cols-2 gap-2.5' : 'grid grid-cols-1 sm:grid-cols-2 gap-2.5'}>
              {SERVICES.map((srv, idx) => (
                <div key={srv.id} className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-blue-700">0{idx + 1}.</span>
                    <h3 className="text-[11px] font-extrabold text-slate-950 leading-snug">{tr(srv.title)}</h3>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-snug">{tr(srv.description)}</p>
                  <div className="text-[9.5px] text-slate-500 pt-1 border-t border-slate-100 leading-snug">
                    {srv.deliverables.slice(0, 3).map((d) => tr(d)).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {renderPageFooter(2)}
      </section>

      {/* =====================================================================
          PAGE 3: PROJECTS 01 & 02 (POWER BI & EXCEL DASHBOARDS)
      ===================================================================== */}
      <section data-pdf-page="3" id={isPdf ? undefined : 'pdf-section-projects'} className={pageClass}>
        <div className="space-y-4">
          {renderRunningHeader(
            '03',
            isAr
              ? 'معرض المشاريع ودراسات الحالة (1/5) — لوحات Power BI وتحليلات Excel'
              : 'Portfolio Case Studies (1/5) — Power BI & Excel Retail Analytics'
          )}

          {renderTwoColumnProject('01', p1, salesPerformanceImg, 'Sales Performance Power BI Dashboard')}
          {renderTwoColumnProject('02', p2, adidasDashboardImg, 'Adidas Sales Excel Dashboard')}
        </div>

        {renderPageFooter(3)}
      </section>

      {/* =====================================================================
          PAGE 4: PROJECTS 03 & 04 (BPMN 2.0 WORKFLOW & POWER AUTOMATE)
      ===================================================================== */}
      <section data-pdf-page="4" className={pageClass}>
        <div className="space-y-4">
          {renderRunningHeader(
            '04',
            isAr
              ? 'معرض المشاريع ودراسات الحالة (2/5) — هندسة العمليات (BPMN) والأتمتة'
              : 'Portfolio Case Studies (2/5) — BPMN 2.0 Architecture & Process Automation'
          )}

          {renderTwoColumnProject('03', p3, bpmnWorkflowImg, 'BPMN 2.0 Business Process Workflow')}
          {renderTwoColumnProject('04', p4, powerAutomateImg, 'Automated License Expiry Reminder System')}
        </div>

        {renderPageFooter(4)}
      </section>

      {/* =====================================================================
          PAGE 5: PROJECTS 05 (SQL) & 06 (PYTHON ML) WITH MULTI-IMAGE GALLERIES
      ===================================================================== */}
      <section data-pdf-page="5" className={pageClass}>
        <div className="space-y-4">
          {renderRunningHeader(
            '05',
            isAr
              ? 'معرض المشاريع ودراسات الحالة (3/5) — قواعد بيانات SQL والتنبؤ بـ Python'
              : 'Portfolio Case Studies (3/5) — SQL Database Analytics & Python ML'
          )}

          {/* Project 05: SQL */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-white space-y-2.5">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-2">
              <div>
                <div className="text-[10px] font-bold text-blue-700">
                  05 · {tr(p5.category)} · {p5.tools.join(' · ')}
                </div>
                <h3 className="text-sm font-black text-slate-950">{tr(p5.title)}</h3>
              </div>
              <div className="flex items-center gap-2">
                {p5.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-center">
                    <div className="text-[10px] font-black text-blue-700 font-mono tabular-nums">{m.kpi}</div>
                    <div className="text-[8.5px] text-slate-500">{tr(m.label)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Screenshots Row */}
            <div className={isPdf ? 'grid grid-cols-3 gap-2.5' : 'grid grid-cols-1 sm:grid-cols-3 gap-2.5'}>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={sqlImg3}
                    alt="SQL Schema and Analytical Query"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'المخطط العلائقي واستعلام SQL' : 'Relational Schema & SQL Query'}
                </figcaption>
              </figure>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={sqlImg1}
                    alt="Department Completion Rate"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'مقارنة نسب إنجاز المهام بالأقسام' : 'Department Completion Rates'}
                </figcaption>
              </figure>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={sqlImg2}
                    alt="Budget Consumption & Overdue Tasks"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'استهلاك الميزانية والمهام المتأخرة' : 'Budget Usage & Overdue Tasks'}
                </figcaption>
              </figure>
            </div>

            <div className={isPdf ? 'grid grid-cols-3 gap-3 text-[10.5px] leading-snug pt-1' : 'grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-snug pt-1'}>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">{isAr ? 'المشكلة:' : 'Problem:'}</span>
                <p className="text-slate-600">{tr(p5.businessProblem)}</p>
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">{isAr ? 'المنهجية:' : 'Approach:'}</span>
                <p className="text-slate-600">{tr(p5.approach)}</p>
              </div>
              <div>
                <span className="font-bold text-blue-700 block mb-0.5">{isAr ? 'النتائج والأثر:' : 'Impact:'}</span>
                <p className="text-slate-700 font-medium">{tr(p5.impact)}</p>
              </div>
            </div>
          </div>

          {/* Project 06: Python ML */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-white space-y-2.5">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-2">
              <div>
                <div className="text-[10px] font-bold text-blue-700">
                  06 · {tr(p6.category)} · {p6.tools.join(' · ')}
                </div>
                <h3 className="text-sm font-black text-slate-950">{tr(p6.title)}</h3>
              </div>
              <div className="flex items-center gap-2">
                {p6.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-center">
                    <div className="text-[10px] font-black text-blue-700 font-mono tabular-nums">{m.kpi}</div>
                    <div className="text-[8.5px] text-slate-500">{tr(m.label)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Screenshots Row */}
            <div className={isPdf ? 'grid grid-cols-3 gap-2.5' : 'grid grid-cols-1 sm:grid-cols-3 gap-2.5'}>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={ticketAnalyticsImg1}
                    alt="EDA by Category and Priority"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'تحليل الفئات والأولويات (EDA)' : 'Category & Priority EDA'}
                </figcaption>
              </figure>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={ticketAnalyticsImg2}
                    alt="Feature Correlation Heatmap"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'مصفوفة الارتباط الإحصائي' : 'Correlation Heatmap'}
                </figcaption>
              </figure>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <img
                    src={ticketAnalyticsImg3}
                    alt="Linear Regression Prediction Accuracy"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[132px] object-contain rounded-lg bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 text-center">
                  {isAr ? 'دقة تنبؤ نموذج الانحدار الخطي' : 'Regression Prediction Accuracy'}
                </figcaption>
              </figure>
            </div>

            <div className={isPdf ? 'grid grid-cols-3 gap-3 text-[10.5px] leading-snug pt-1' : 'grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-snug pt-1'}>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">{isAr ? 'المشكلة:' : 'Problem:'}</span>
                <p className="text-slate-600">{tr(p6.businessProblem)}</p>
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">{isAr ? 'المنهجية:' : 'Approach:'}</span>
                <p className="text-slate-600">{tr(p6.approach)}</p>
              </div>
              <div>
                <span className="font-bold text-blue-700 block mb-0.5">{isAr ? 'النتائج والأثر:' : 'Impact:'}</span>
                <p className="text-slate-700 font-medium">{tr(p6.impact)}</p>
              </div>
            </div>
          </div>
        </div>

        {renderPageFooter(5)}
      </section>

      {/* =====================================================================
          PAGE 6: PROJECT 07 — SAUDI APP REVIEWS ARABIC NLP (PART 1/2)
      ===================================================================== */}
      <section data-pdf-page="6" className={pageClass}>
        <div className="space-y-3.5">
          {renderRunningHeader(
            '06',
            isAr
              ? 'معرض المشاريع ودراسات الحالة (4/5) — معالجة اللغة العربية (NLP) لتطبيقات أبشر وتوكلنا ونفاذ'
              : 'Portfolio Case Studies (4/5) — Arabic NLP: Saudi App Reviews Analysis (Part 1)'
          )}

          {/* Project 07 Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-blue-300 mb-1">
                <span>07</span>
                <span>·</span>
                <span>{isAr ? 'معالجة اللغة العربية (NLP)' : 'Arabic NLP'}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <TrendingUp size={11} />
                  {isAr ? '9,000 مراجعة · 8 موضوعات' : '9,000 Reviews · 8 Topics'}
                </span>
              </div>
              <h3 className="text-base font-black text-white">
                {isAr
                  ? 'تحليل المشاعر والموضوعات لمراجعات التطبيقات السعودية'
                  : 'Sentiment and Topic Analysis of Saudi App Reviews'}
              </h3>
            </div>
            <div className="text-[10px] text-slate-300 font-semibold">
              Python · scikit-learn · Hugging Face · NLP
            </div>
          </div>

          {/* 1. Overview & 2. The Problem */}
          <div className={isPdf ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="text-xs font-black text-slate-950">
                {isAr ? '01. نظرة عامة (Overview)' : '01. Overview'}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isAr
                  ? 'حلّلت 9,000 مراجعة من متجر Google Play لتطبيقات أبشر وتوكلنا ونفاذ لفهم أبرز ما يواجه المستخدمين من صعوبات. قارنت بين نموذجين لتحليل المشاعر، واستخرجت 8 موضوعات للشكاوى، وحوّلتها إلى 8 متطلبات تحسين مرتبة حسب الأولوية. معظم الشكاوى تتعلق بالموثوقية التشغيلية لا بنقص الخدمات.'
                  : 'I analyzed 9,000 Google Play reviews of Absher, Tawakkalna and Nafath to understand what frustrates users. I compared two sentiment models, extracted 8 complaint topics, and turned them into 8 prioritized improvement requirements. Most complaints are about reliability (opening, mobile data, updates), not missing services.'}
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="text-xs font-black text-slate-950">
                {isAr ? '02. المشكلة (The Problem)' : '02. The Problem'}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isAr
                  ? 'المراجعات نصوص عربية غير مهيكلة تتضمن لهجات محلية وأخطاء إملائية ورموزاً تعبيرية، كما أن تقييم النجوم لا يتطابق دائماً مع ما يكتبه المستخدمون فعلياً. هدفتُ للإجابة عن سؤالين: ما الذي يزعج المستخدمين، وكيف يتحول إلى متطلبات قابلة للتنفيذ؟'
                  : 'Reviews are unstructured Arabic text with dialects, spelling errors and emojis, and star ratings do not always match what users write. I wanted to answer two questions: what bothers users, and how can that become actionable requirements?'}
              </p>
            </div>
          </div>

          {/* 3. Method */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
            <div className="text-xs font-black text-slate-950">
              {isAr ? '03. المنهجية (Method)' : '03. Method'}
            </div>
            <div className={isPdf ? 'grid grid-cols-2 gap-x-4 gap-y-1 text-[10.5px] text-slate-700' : 'grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-700'}>
              {methodStepsP7.map((step, idx) => (
                <div key={idx} className="leading-snug">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Results (Part A): Topics Chart + Macro-F1 Table */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-black text-slate-950">
                {isAr ? '04. النتائج (Results)' : '04. Results'}
              </div>
              <span className="text-[10.5px] text-slate-600">
                {isAr
                  ? 'اختلف التصنيف المبني على المعنى مع النجوم في 29 من 300 مراجعة (~10%).'
                  : 'Stars vs. meaning disagreed in 29 of 300 reviews (~10%).'}
              </span>
            </div>

            <figure className="space-y-1.5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                <img
                  src={topicsChartImg}
                  alt="Complaint topics by app"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-[225px] object-contain rounded-lg mx-auto bg-white"
                />
              </div>
              <figcaption className="text-[9.5px] text-slate-500 leading-snug">
                {isAr
                  ? 'موضوعات الشكاوى حسب التطبيق (603 مراجعات سلبية في 8 موضوعات عبر NMF): 0 التطبيق لا يفتح، 1 بيانات الجوال، 2 التجمد، 3 تسجيل الدخول، 4 كلمة المرور، 5 التحقق بالوجه، 6 التحديثات، 7 البطء/الخادم. تختلف فترات الجمع (86-280 يوماً) لذا قارن الموضوعات لا التطبيقات.'
                  : "Complaint topics by app. 603 negative reviews (1-2 stars) grouped into 8 topics with NMF. Topic key: 0 App won't open, 1 Fails on mobile data, 2 Freezes / hangs, 3 Login problems, 4 Password reset, 5 Face verification, 6 Update issues, 7 Slow / server errors. Collection windows differ per app (86-280 days), so compare topics, not apps."}
              </figcaption>
            </figure>

            {/* Macro-F1 Compact Table */}
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-[10.5px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-1.5 px-3 text-start font-bold text-slate-700">
                      {isAr ? 'مقارنة Macro-F1 على 260 مراجعة' : 'Macro-F1 on 260 reviews'}
                    </th>
                    <th className="py-1.5 px-3 text-center font-bold text-slate-600">
                      {isAr ? 'النجوم وحدها' : 'Star rating alone'}
                    </th>
                    <th className="py-1.5 px-3 text-center font-bold text-slate-600">
                      TF-IDF + LogReg
                    </th>
                    <th className="py-1.5 px-3 text-center font-bold text-slate-600">
                      CAMeLBERT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1.5 px-3 text-slate-600">
                      {isAr
                        ? 'الفرق (+0.009) ضمن فاصل ثقة 95% (-0.034 إلى +0.049)؛ أداء متقارب.'
                        : 'Difference (+0.009) has 95% CI (-0.034 to +0.049); models perform similarly.'}
                    </td>
                    <td className="py-1.5 px-3 text-center font-mono font-bold text-slate-700 tabular-nums">0.868</td>
                    <td className="py-1.5 px-3 text-center font-mono font-bold text-blue-700 tabular-nums">0.932</td>
                    <td className="py-1.5 px-3 text-center font-mono font-bold text-blue-700 tabular-nums">0.942</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {renderPageFooter(6)}
      </section>

      {/* =====================================================================
          PAGE 7: PROJECT 07 (PART 2/2) + CONTACT & GOVERNANCE CHANNELS
      ===================================================================== */}
      <section data-pdf-page="7" className={pageClass}>
        <div className="space-y-3.5">
          {renderRunningHeader(
            '07',
            isAr
              ? 'معرض المشاريع (5/5) — مصفوفات الارتباك، المتطلبات، وقنوات التواصل'
              : 'Portfolio Case Studies (5/5) — Model Evaluation, Requirements & Direct Contact'
          )}

          {/* Confusion Matrices Side-by-Side */}
          <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-2.5">
            <div className={isPdf ? 'grid grid-cols-2 gap-3.5' : 'grid grid-cols-1 sm:grid-cols-2 gap-3.5'}>
              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                  <img
                    src={tfidfConfusionImg}
                    alt="Baseline TF-IDF + Logistic Regression confusion matrix"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[180px] object-contain rounded-lg mx-auto bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 leading-snug">
                  {isAr
                    ? 'النموذج الأساسي (TF-IDF + Logistic Regression): صُنّفت 12 مراجعة سلبية كإيجابية، و4 إيجابية كسلبية.'
                    : 'Baseline (TF-IDF + Logistic Regression): 12 negative reviews read as positive, 4 positive read as negative.'}
                </figcaption>
              </figure>

              <figure className="space-y-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                  <img
                    src={camelbertConfusionImg}
                    alt="CAMeLBERT confusion matrix"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[180px] object-contain rounded-lg mx-auto bg-white"
                  />
                </div>
                <figcaption className="text-[9.5px] text-slate-500 leading-snug">
                  {isAr
                    ? 'النموذج العربي (CAMeLBERT): لم يصنّف أي مراجعة إيجابية كسلبية، لكنه صنّف 14 سلبية كإيجابية (شكاوى وصفية).'
                    : 'Pre-trained Arabic model (CAMeLBERT): never reads a positive review as negative, but reads 14 negative reviews as positive, mostly descriptive complaints without emotional language.'}
                </figcaption>
              </figure>
            </div>

            <div className="text-[10.5px] text-slate-700 pt-1 border-t border-slate-100">
              <span className="font-bold text-slate-900">
                {isAr ? 'نسب موضوعات الشكاوى: ' : 'Complaint topics distribution: '}
              </span>
              {isAr
                ? 'التحديثات 22% · التطبيق لا يفتح 14% · التحقق بالوجه 11% · بيانات الجوال 11% · تسجيل الدخول 10% · كلمة المرور 7% · التجمد 6% · البطء/الخادم 5%.'
                : "updates 22% · app won't open 14% · face verification 11% · mobile data 11% · login 10% · password reset 7% · freezing 6% · slow/server errors 5%."}
            </div>
          </div>

          {/* 5. Requirements (MoSCoW) */}
          <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-950">
                {isAr ? '05. المتطلبات الهندسية (MoSCoW Requirements)' : '05. Requirements (MoSCoW Priorities)'}
              </span>
              <span className="text-[10px] text-slate-500">
                {isAr
                  ? 'يتضمن كل متطلب User Story ومعايير قبول وKPI'
                  : 'Each includes a user story, acceptance criteria & KPI'}
              </span>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-[10.5px] border-collapse">
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-1.5 px-3 font-black text-blue-700 w-20">Must</td>
                    <td className="py-1.5 px-3 text-slate-700">
                      {isAr
                        ? 'ضمان فتح التطبيق، وعمله عبر بيانات الجوال، واستقراره بعد التحديثات (47% من الشكاوى)'
                        : 'Keep the app opening, working on mobile data, and stable after updates (47% of complaints)'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-bold text-slate-800 w-20">Should</td>
                    <td className="py-1.5 px-3 text-slate-700">
                      {isAr
                        ? 'تسجيل دخول أوضح، وبدائل للتحقق بالوجه، واستعادة كلمة المرور في نفس الشاشة (29%)'
                        : 'Clearer login, alternatives to face verification, password recovery on the same screen (29%)'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold text-slate-600 w-20">Could</td>
                    <td className="py-1.5 px-3 text-slate-700">
                      {isAr ? 'معالجة التجمد والبطء (10%)' : 'Fix freezing and slowness (10%)'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Limitations & 7. What I learned */}
          <div className={isPdf ? 'grid grid-cols-12 gap-3' : 'grid grid-cols-1 sm:grid-cols-12 gap-3'}>
            <div className={isPdf ? 'col-span-7 p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1.5' : 'sm:col-span-7 p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1.5'}>
              <div className="text-xs font-black text-slate-950">
                {isAr ? '06. القيود والمحددات (Limitations)' : '06. Limitations'}
              </div>
              <ul className="space-y-1 text-[10px] text-slate-600 leading-snug">
                {limitationsP7.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={isPdf ? 'col-span-5 p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1.5' : 'sm:col-span-5 p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1.5'}>
              <div className="text-xs font-black text-slate-950">
                {isAr ? '07. ما تعلمته (What I learned)' : '07. What I learned'}
              </div>
              <ul className="space-y-1 text-[10px] text-slate-600 leading-snug">
                {learnedP7.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Contact & Data Governance Footer Banner (from Contact & Footer) */}
          <div className="bg-slate-950 text-white rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="text-xs font-black text-white flex items-center gap-2">
                <BookOpen size={14} className="text-blue-400" />
                <span>{isAr ? 'التواصل المباشر والتعاون التقني' : 'Direct Contact & Collaboration Channels'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-300">
                <span>Reema0alf@gmail.com</span>
                <span>·</span>
                <span dir="ltr">+966 551641847</span>
                <span>·</span>
                <span>{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-slate-300 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 max-w-xs">
              <ShieldCheck size={16} className="text-blue-400 shrink-0" />
              <span>
                {isAr
                  ? 'التزام كامل بضوابط حماية البيانات وسرية المعلومات المؤسسية (NDMO / NCA).'
                  : 'Full compliance with NDMO data privacy & enterprise confidentiality standards.'}
              </span>
            </div>
          </div>
        </div>

        {renderPageFooter(7)}
      </section>
    </div>
  );
};

export default PortfolioPdfDocument;
