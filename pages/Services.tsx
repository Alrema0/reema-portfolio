import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileSpreadsheet, 
  Settings, 
  BarChart3, 
  Database, 
  ClipboardCheck, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Clock, 
  Calculator, 
  Sparkles,
  ShieldCheck,
  Layers,
  Workflow,
  Zap
} from 'lucide-react';
import { SERVICES } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  LayoutDashboard,
  FileSpreadsheet,
  Settings,
  BarChart3,
  Database,
  ClipboardCheck,
  Workflow,
  Zap
};

const Services: React.FC = () => {
  const { t, isAr } = useLanguage();

  // Interactive Scope Estimator State
  const [selectedServiceType, setSelectedServiceType] = useState<'bi' | 'sql' | 'python' | 'automation' | 'excel' | 'systems'>('bi');
  const [dataSourcesCount, setDataSourcesCount] = useState<number>(1);
  const [needsCustomModel, setNeedsCustomModel] = useState<boolean>(false);

  const calculateEstimate = () => {
    let minDays = 1;
    let maxDays = 2;

    if (dataSourcesCount === 2) {
      minDays = 2;
      maxDays = 3;
    } else if (dataSourcesCount >= 3 && dataSourcesCount <= 4) {
      minDays = 2;
      maxDays = 4;
    } else if (dataSourcesCount > 4) {
      minDays = 3;
      maxDays = 5;
    }

    if (needsCustomModel) {
      maxDays += 1;
    }

    const durationText = minDays === maxDays ? `${minDays}` : `${minDays} - ${maxDays}`;
    
    let durationNote = '';
    if (maxDays <= 2) {
      durationNote = isAr ? 'تسليم سريع وفوري (24 - 48 ساعة)' : 'Fast Turnaround (24 - 48 Hours)';
    } else if (maxDays <= 3) {
      durationNote = isAr ? 'تسليم قياسي سريع (2 - 3 أيام عمل)' : 'Rapid Delivery (2 - 3 Business Days)';
    } else {
      durationNote = isAr ? 'تسليم رشيق متكامل (أقل من أسبوع عمل)' : 'Agile Sprint (< 1 Business Week)';
    }

    return {
      durationDays: durationText,
      durationWeeksEquivalent: durationNote,
      complexity: dataSourcesCount >= 4 ? (isAr ? 'متعدد المصادر ومتقدم' : 'Multi-Source Advanced') : (isAr ? 'رشيق وسريع التنفيذ' : 'Agile & Rapid'),
      milestones: selectedServiceType === 'bi' 
        ? [
            isAr ? 'ربط وتنظيف مصدر البيانات' : 'Data Connection & Cleaning',
            isAr ? 'تصميم المقاييس والواجهة التفاعلية' : 'DAX Measures & Interactive Visuals',
            isAr ? 'المراجعة السريعة والتسليم النهائي' : 'Rapid Review & Handover'
          ]
        : selectedServiceType === 'sql'
        ? [
            isAr ? 'تصميم المخطط العلائقي وضبط الجداول' : 'Relational Schema & Key Normalization',
            isAr ? 'كتابة استعلامات التجميع والشرطيات (JOINs)' : 'Aggregation & Analytical Queries (JOINs)',
            isAr ? 'اختبار دقة النتائج وتسليم الاستعلامات' : 'Query Validation & Handover'
          ]
        : selectedServiceType === 'python'
        ? [
            isAr ? 'تنظيف البيانات ومعالجة القيم الشاذة (IQR)' : 'Data Cleaning & Outlier Capping (IQR)',
            isAr ? 'تحليل الارتباط وبناء نموذج التنبؤ' : 'Correlation Heatmaps & Linear Regression',
            isAr ? 'تقييم دقة التنبؤ وتقرير اتفاقيات الخدمة' : 'Model Evaluation (R²/MAE) & SLA Report'
          ]
        : selectedServiceType === 'automation'
        ? [
            isAr ? 'تحديد شروط المشغل والبريد' : 'Trigger & Email Logic Definition',
            isAr ? 'بناء تدفق Power Automate والربط' : 'Power Automate Flow & Connectors',
            isAr ? 'اختبار التشغيل الآلي والتسليم' : 'Automated Run Testing & Handover'
          ]
        : selectedServiceType === 'excel'
        ? [
            isAr ? 'تنظيف وهيكلة البيانات عبر Power Query' : 'Power Query Cleaning & Formatting',
            isAr ? 'بناء المعادلات وجداول Pivot المحورية' : 'Dynamic Formulas & Pivot Architecture',
            isAr ? 'تصميم لوحة المؤشرات والفلاتر التفاعلية' : 'Interactive Slicers & Visual Dashboard'
          ]
        : [
            isAr ? 'حصر خطوات وإجراءات العمل As-Is' : 'As-Is Workflow Audit',
            isAr ? 'رسم وتوثيق مخطط BPMN 2.0 المعتمد' : 'BPMN 2.0 Architectural Blueprint',
            isAr ? 'تسليم مخطط ومصفوفة الإجراءات' : 'Process Map & Matrix Handover'
          ]
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2">
          {isAr ? 'الخدمات والحلول التقنية' : 'Technical & Data Solutions'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          {isAr ? 'حلول عملية لرفع كفاءة النظم والبيانات' : 'Practical Data & Systems Engineering Solutions'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isAr
            ? 'حلول تقنية تركز على معالجة البيانات، أتمتة التقارير، بناء لوحات التحكم، وتوثيق مسارات النظم بكفاءة ودقة.'
            : 'Focused technical solutions for data processing, reporting automation, dashboard engineering, and structured system documentation.'}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => {
          const IconComponent = iconMap[service.icon] || LayoutDashboard;
          return (
            <div 
              key={service.id} 
              className="p-8 bg-white rounded-3xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Icon & Timeline Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                    <IconComponent size={26} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Clock size={12} className="text-blue-600" />
                    <span>{t(service.timeline)}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                  {t(service.title)}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {t(service.description)}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                    {isAr ? 'المخرجات الأساسية:' : 'Core Deliverables:'}
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{t(item)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-100 pt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors"
                >
                  <span>{isAr ? 'طلب مناقشة هذا المشروع' : 'Inquire for this service'}</span>
                  {isAr ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Scope & Timeline Estimator */}
      <section className="mt-20 bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Calculator size={20} className="text-blue-400" />
            <span className="text-xs font-black uppercase tracking-wider text-blue-400">
              {isAr ? 'حاسبة تقدير النطاق والجدول الزمني' : 'Interactive Scope & Timeline Estimator'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-3">
            {isAr ? 'احسب الإطار الزمني التقريبي لمشروعك' : 'Estimate Your Project Scope & Milestones'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mb-8">
            {isAr
              ? 'حدد نوع الاحتياج وعدد مصادر البيانات للحصول على تقدير فوري لمراحل التنفيذ والمدة الزمنية.'
              : 'Select your service requirements to view estimated delivery cadence and implementation phases.'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Type Select */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  {isAr ? 'نوع الحل المطلوب:' : 'Service Focus:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {[
                    { id: 'bi', label: isAr ? 'لوحات Power BI' : 'Power BI Hub' },
                    { id: 'sql', label: isAr ? 'قواعد بيانات SQL' : 'SQL Database' },
                    { id: 'python', label: isAr ? 'تنبؤ وتحليل Python' : 'Python Analytics' },
                    { id: 'automation', label: isAr ? 'أتمتة العمليات' : 'Power Automate' },
                    { id: 'excel', label: isAr ? 'تحليلات Excel' : 'Excel BI' },
                    { id: 'systems', label: isAr ? 'تحليل نظم BPMN' : 'Systems BPMN' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedServiceType(tab.id as any)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                        selectedServiceType === tab.id
                          ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Sources Slider / Count */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>{isAr ? 'عدد مصادر البيانات (SQL, Excel, APIs, SharePoint):' : 'Number of Data Sources:'}</span>
                  <span className="text-blue-400 font-mono text-sm">{dataSourcesCount} {isAr ? 'مصادر' : 'Sources'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={dataSourcesCount}
                  onChange={(e) => setDataSourcesCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 ({isAr ? 'مصدر واحد' : 'Single Source'})</span>
                  <span>3 ({isAr ? 'متعدد' : 'Multi-source'})</span>
                  <span>6+ ({isAr ? 'مستودع متكامل' : 'Enterprise Scale'})</span>
                </div>
              </div>

              {/* Custom Model Toggle */}
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-xs">
                  <span className="font-bold text-white block">
                    {isAr ? 'يتطلب نمذجة بيانات متقدمة (Star Schema / DAX / شروط مخصصة)' : 'Requires Advanced Star Schema / Custom Logic'}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {isAr ? 'يشمل تصميم الجداول المحورية وحساب المقاييس المركبة' : 'Includes custom dimensions & calculated metrics'}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={needsCustomModel}
                  onChange={(e) => setNeedsCustomModel(e.target.checked)}
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                />
              </div>

            </div>

            {/* Estimated Output Box */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {isAr ? 'التقدير الأولي للجدول الزمني' : 'Estimated Delivery Cadence'}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Zap size={10} />
                    {isAr ? 'تسليم رشيق وسريع' : 'Agile Sprint'}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-blue-400">~ {estimate.durationDays}</span>
                  <span className="text-base text-slate-200 font-bold">{isAr ? 'أيام عمل' : 'Business Days'}</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-medium mb-4">
                  {estimate.durationWeeksEquivalent}
                </p>

                <div className="space-y-3 text-xs border-t border-slate-800 pt-4 mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span>{isAr ? 'مستوى النطاق والتعقيد:' : 'Scope & Scale:'}</span>
                    <span className="font-bold text-white">{estimate.complexity}</span>
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 block pt-2">
                    {isAr ? 'المراحل الرئيسية المتوقعة:' : 'Key Milestones:'}
                  </span>
                  {estimate.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-bold text-center hover:bg-blue-500 transition-colors shadow-md"
              >
                {isAr ? 'تواصل لمناقشة هذا المشروع' : 'Discuss This Project'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
