import React, { useState } from 'react';
import { BarChart3, TrendingUp, Filter, RefreshCw, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RegionalData {
  region: { en: string; ar: string };
  revenue: number; // in Million SAR
  saudization: number; // in %
  targetSaudization: number;
  slaDays: number;
  reportsGenerated: number;
}

const SAMPLE_REGIONS: RegionalData[] = [
  {
    region: { en: 'Riyadh HQ & Central', ar: 'الرياض والمنطقة الوسطى' },
    revenue: 42.8,
    saudization: 76,
    targetSaudization: 65,
    slaDays: 2.1,
    reportsGenerated: 1420
  },
  {
    region: { en: 'Western Province (Jeddah)', ar: 'المنطقة الغربية (جدة ومكة)' },
    revenue: 28.4,
    saudization: 71,
    targetSaudization: 65,
    slaDays: 2.8,
    reportsGenerated: 980
  },
  {
    region: { en: 'Eastern Province (Dammam/Khobar)', ar: 'المنطقة الشرقية (الدمام والخبر)' },
    revenue: 35.6,
    saudization: 82,
    targetSaudization: 70,
    slaDays: 1.9,
    reportsGenerated: 1150
  },
  {
    region: { en: 'Southern & Northern Branches', ar: 'الفروع الشمالية والجنوبية' },
    revenue: 14.2,
    saudization: 68,
    targetSaudization: 60,
    slaDays: 3.4,
    reportsGenerated: 460
  }
];

const InteractiveDataSandbox: React.FC = () => {
  const { t, isAr } = useLanguage();
  const [selectedMetric, setSelectedMetric] = useState<'revenue' | 'saudization' | 'sla'>('revenue');
  const [activeQuarter, setActiveQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');
  const [activeRegionIndex, setActiveRegionIndex] = useState<number | 'all'>('all');

  const getMetricTitle = () => {
    switch (selectedMetric) {
      case 'revenue':
        return isAr ? 'الإيرادات المحققة (مليون ريال)' : 'Revenue Generated (Million SAR)';
      case 'saudization':
        return isAr ? 'نسبة التوطين المحققة (%) مقابل المستهدف' : 'Saudization Ratio (%) vs Target';
      case 'sla':
        return isAr ? 'متوسط زمن معالجة وإغلاق التقارير (أيام)' : 'Average Report SLA Cycle (Days)';
    }
  };

  const calculateTotal = () => {
    if (activeRegionIndex !== 'all') {
      const r = SAMPLE_REGIONS[activeRegionIndex];
      return selectedMetric === 'revenue' 
        ? `${r.revenue}M SAR` 
        : selectedMetric === 'saudization' 
        ? `${r.saudization}%` 
        : `${r.slaDays} ${isAr ? 'أيام' : 'Days'}`;
    }

    if (selectedMetric === 'revenue') {
      const sum = SAMPLE_REGIONS.reduce((acc, curr) => acc + curr.revenue, 0);
      return `${sum.toFixed(1)}M SAR`;
    } else if (selectedMetric === 'saudization') {
      const avg = Math.round(SAMPLE_REGIONS.reduce((acc, curr) => acc + curr.saudization, 0) / SAMPLE_REGIONS.length);
      return `${avg}% ${isAr ? '(بلاتيني)' : '(Platinum)'}`;
    } else {
      const avgSla = (SAMPLE_REGIONS.reduce((acc, curr) => acc + curr.slaDays, 0) / SAMPLE_REGIONS.length).toFixed(1);
      return `${avgSla} ${isAr ? 'أيام' : 'Days'}`;
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden shadow-2xl">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-wider text-blue-400">
                {isAr ? 'نموذج محاكاة البيانات التفاعلي' : 'Interactive Analytics Simulator'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {isAr ? 'لوحة القيادة التنفيذية للشركات السعودية' : 'Executive Enterprise KPI Engine'}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {isAr 
                ? 'جرب التفاعل مع محرك المؤشرات لاكتشاف طريقة نمذجة وحساب البيانات المباشرة للمناطق والامتثال.' 
                : 'Experience how multi-source Saudi operational data is structured into actionable executive metrics.'}
            </p>
          </div>

          {/* Metric Selector Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedMetric('revenue')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMetric === 'revenue' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'الإيرادات' : 'Revenue'}
            </button>
            <button
              onClick={() => setSelectedMetric('saudization')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMetric === 'saudization' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'التوطين (نطاقات)' : 'Saudization'}
            </button>
            <button
              onClick={() => setSelectedMetric('sla')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMetric === 'sla' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'زمن المعالجة SLA' : 'Processing SLA'}
            </button>
          </div>
        </div>

        {/* Dynamic Top Stat Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              {getMetricTitle()}
            </span>
            <span className="text-3xl font-black text-blue-400 tracking-tight block">
              {calculateTotal()}
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              {isAr ? 'تحديث فوري متزامن مع SQL Data Lake' : 'Live sync via SQL Data Lake'}
            </span>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              {isAr ? 'حالة التوافق ونطاقات' : 'Nitaqat & Compliance'}
            </span>
            <div className="flex items-center gap-2">
              <ShieldCheck size={24} className="text-blue-400" />
              <span className="text-2xl font-black text-white">
                {isAr ? 'النطاق البلاتيني' : 'Platinum Tier'}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              {isAr ? 'تجاوز المستهدف الوطني بنسبة +11%' : '+11% above ministerial quota'}
            </span>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              {isAr ? 'إجمالي السجلات المدققة' : 'Audited Records Pipeline'}
            </span>
            <span className="text-3xl font-black text-white tracking-tight block">
              4,010 <span className="text-xs font-bold text-slate-400">{isAr ? 'عملية' : 'tx/day'}</span>
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              {isAr ? 'دقة تدقيق 99.8% دون تدخل يدوي' : '99.8% audit accuracy without manual intervention'}
            </span>
          </div>
        </div>

        {/* Regional Breakdown Interactive Chart Bars */}
        <div className="bg-slate-950/90 rounded-2xl p-6 border border-slate-800 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Layers size={16} className="text-blue-500" />
              {isAr ? 'التوزيع الإقليمي لمؤشرات الأداء' : 'Regional Performance Breakdown'}
            </h4>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setActiveRegionIndex('all')}
                className={`px-3 py-1 rounded-lg font-bold ${
                  activeRegionIndex === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'جميع المناطق' : 'All Regions'}
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {SAMPLE_REGIONS.map((item, idx) => {
              const isSelected = activeRegionIndex === idx || activeRegionIndex === 'all';
              let displayVal = '';
              let percentage = 0;

              if (selectedMetric === 'revenue') {
                displayVal = `${item.revenue}M SAR`;
                percentage = (item.revenue / 45) * 100;
              } else if (selectedMetric === 'saudization') {
                displayVal = `${item.saudization}% (Target: ${item.targetSaudization}%)`;
                percentage = item.saudization;
              } else {
                displayVal = `${item.slaDays} ${isAr ? 'أيام' : 'days'}`;
                percentage = Math.max(15, 100 - (item.slaDays / 4) * 100);
              }

              return (
                <div 
                  key={idx} 
                  className={`cursor-pointer transition-all p-2.5 rounded-xl ${
                    activeRegionIndex === idx ? 'bg-slate-900 border border-blue-500/50' : 'hover:bg-slate-900/50'
                  }`}
                  onClick={() => setActiveRegionIndex(activeRegionIndex === idx ? 'all' : idx)}
                >
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-bold text-slate-200">{t(item.region)}</span>
                    <span className="font-mono font-bold text-blue-400">{displayVal}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 rounded-full transition-all duration-700"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-2">
          <span>{isAr ? '💡 هذا النموذج التفاعلي مبني باستخدام منطق DAX وStar-Schema الحقيقي' : '💡 Interactive model powered by real DAX logic and Star-Schema patterns'}</span>
          <span className="text-blue-400 font-semibold mt-2 sm:mt-0">{isAr ? 'بيانات معتمدة ومطابقة للمعايير' : 'Standardized Enterprise Model'}</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDataSandbox;
