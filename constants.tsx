import { Project, Service, Experience, Certification, Testimonial, MetricItem, WorkflowStep, CourseItem } from './types';
import adidasDashboardImg from './adidas-dashboard.png';
import salesPerformanceImg from './sales-performance-dashboard.png';
import bpmnWorkflowImg from './bpmn-configuration-management.png';
import powerAutomateImg from './power-automate-license-reminder.png';
import sqlImg1 from './sql-completion-rate.png';
import sqlImg2 from './sql-budget-overdue.png';
import sqlImg3 from './sql-schema-query.png';
import ticketAnalyticsImg1 from './eda_category_priority.png';
import ticketAnalyticsImg2 from './correlation_heatmap.png';
import ticketAnalyticsImg3 from './prediction_accuracy.png';
import saudiAppTopicsImg from './Screenshot 2026-10-31 184519.png';
export const ACADEMIC_COURSES: CourseItem[] = [
  {
    title: { en: 'Google Data Analytics', ar: 'Google Data Analytics' },
    provider: { en: 'Google Professional Track', ar: 'برنامج جوجل الاحترافي' },
    badge: 'Analytics'
  },
  {
    title: { en: 'Microsoft Excel Advanced', ar: 'مايكروسوفت إكسل المتقدم' },
    provider: { en: 'Emdad Almarefa', ar: 'إمداد المعرفة' },
    badge: 'Excel'
  },
  {
    title: { en: 'Data Analyst Development Program', ar: 'Data Analyst Development Program' },
    provider: { en: 'Professional Development Program', ar: 'برنامج التطوير المهني' },
    badge: 'BI & Pipelines'
  },
  {
    title: { 
      en: 'ITIL Framework & Digital Transformation Fundamentals', 
      ar: 'مقدمة في إطار خدمات تقنية المعلومات والتحول الرقمي ITIL' 
    },
    provider: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' },
    badge: 'ITIL & Digital'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: { en: 'Systems Analysis & Requirements Engineering', ar: 'تحليل النظم وهندسة المتطلبات' },
    action: { en: 'Audit Workflows & Formalize Architecture', ar: 'تحليل المتطلبات وهندسة تدفق العمليات' },
    description: { 
      en: 'Conducting comprehensive diagnostic audits across transactional databases, enterprise systems, and operational workflows to formalize technical specifications and measurable business logic.',
      ar: 'تحليل وتشخيص النظم البرمجية وقواعد البيانات التشغيلية، وصياغة وثائق المتطلبات الفنية (SRS/FRS) وهندسة العمليات لضمان بناء حلول متينة.'
    },
    icon: 'Search'
  },
  {
    step: '02',
    title: { en: 'Software & Database Architecture', ar: 'المعمارية البرمجية وقواعد البيانات' },
    action: { en: 'Schema Engineering & Computational Modeling', ar: 'تصميم البنى التحتية ونمذجة البيانات' },
    description: { 
      en: 'Architecting relational and dimensional database schemas, structuring optimized data flows, and implementing robust backend data layers with strict integrity standards.',
      ar: 'تصميم معمارية قواعد البيانات العلائقية والبعدية، وضبط العلاقات والمخططات (ERD/Star-Schema)، وتحسين خطط الاستعلامات لضمان كفاءة الأداء والموثوقية.'
    },
    icon: 'Layers'
  },
  {
    step: '03',
    title: { en: 'Algorithmic Automation & Integration', ar: 'الخوارزميات والأتمتة والتكامل' },
    action: { en: 'Programmatic Logic & Pipeline Engineering', ar: 'برمجة المنطق الحسابي وأتمتة المسارات' },
    description: { 
      en: 'Developing programmatic scripts, automated ETL pipelines, advanced calculation engines, and seamless API integrations to eliminate manual bottlenecks.',
      ar: 'تطوير الشيفرات البرمجية ومسارات المعالجة المؤتمتة (Python/SQL/DAX)، وربط واجهات الأنظمة (APIs) لضمان تدفق سلس وتلقائي للمعلومات.'
    },
    icon: 'Cpu'
  },
  {
    step: '04',
    title: { en: 'Intelligent Systems & Decision Enablement', ar: 'النظم الذكية وحوكمة القرارات' },
    action: { en: 'Executive Intelligence & Digital Transformation', ar: 'التمكين الرقمي ودعم القرار الاستراتيجي' },
    description: { 
      en: 'Delivering intuitive executive interfaces, automated intelligence platforms, and documented standard operating procedures (SOPs) driving digital governance.',
      ar: 'تحويل الأنظمة والبيانات المعقدة إلى واجهات تفاعلية ولوحات ذكاء أعمال حية تدعم صناعة القرار التنفيذي وتدفع عجلة التحول الرقمي المؤسسي.'
    },
    icon: 'TrendingUp'
  }
];

export const HERO_METRICS: MetricItem[] = [
  {
    label: { en: 'Reporting Efficiency', ar: 'كفاءة التقارير' },
    value: '72%',
    subtext: { en: 'Average reduction in manual processing cycle', ar: 'متوسط تقليص دورة المعالجة اليدوية' }
  },
  {
    label: { en: 'Data Integrity & SLA', ar: 'دقة وتكامل البيانات' },
    value: '99.8%',
    subtext: { en: 'Validation accuracy across multi-source pipelines', ar: 'دقة التحقق عبر مسارات البيانات المتعددة' }
  },
  {
    label: { en: 'Executive Impact', ar: 'الأثر المالي والتشغيلي' },
    value: '+15M SAR',
    subtext: { en: 'Identified cost efficiencies & leakage closures', ar: 'وفورات وتحسينات تشغيلية محققة' }
  },
  {
    label: { en: 'Nitaqat & Saudization', ar: 'نطاقات والتوطين' },
    value: 'Platinum',
    subtext: { en: 'Automated compliance tracking benchmarks', ar: 'متابعة آلية دقيقة لمستويات الامتثال' }
  }
];

export const PROJECTS: Project[] = [
  
    {
  id: '1',
  title: {
    en: 'Sales Performance Dashboard (Power BI)',
    ar: 'لوحة تحكم أداء المبيعات (Power BI)'
  },
  category: { en: 'Business Intelligence', ar: 'ذكاء الأعمال' },
  industry: { en: 'Sales & Revenue Analytics', ar: 'تحليلات المبيعات والإيرادات' },
  clientType: { en: 'Sales Team Performance Tracking', ar: 'تتبع أداء فريق المبيعات' },
  businessProblem: {
    en: 'Sales leadership lacked a unified, real-time view of revenue performance against targets across representatives, regions, and product channels, making it difficult to identify underperforming areas quickly.',
    ar: 'افتقرت إدارة المبيعات لرؤية موحدة وفورية لأداء الإيرادات مقابل الأهداف عبر المندوبين والمناطق وقنوات المنتجات، مما صعّب تحديد المجالات ضعيفة الأداء بسرعة.'
  },
  approach: {
    en: 'Engineered an interactive Power BI dashboard tracking total revenue, target achievement %, top sales representatives, regional revenue mapping, and monthly revenue vs. target trends, with a detailed product/channel breakdown matrix.',
    ar: 'تصميم وبناء لوحة تحكم تفاعلية عبر Power BI لتتبع إجمالي الإيرادات ونسبة تحقيق الهدف وأفضل المندوبين وتوزيع الإيرادات الجغرافي واتجاهات الإيرادات الشهرية مقابل الهدف، مع مصفوفة تفصيلية للمنتجات والقنوات.'
  },
  architecture: {
    en: 'Raw Sales Data → Power Query ETL & Cleaning → Data Modeling & Relationships → DAX Measures (Revenue, Target %) → Interactive Visuals (Map, Trend Lines, Matrix)',
    ar: 'بيانات المبيعات الخام ← تنظيف ومعالجة عبر Power Query ← نمذجة البيانات والعلاقات ← مقاييس DAX (الإيرادات، نسبة الهدف) ← عناصر مرئية تفاعلية (خريطة، خطوط اتجاه، مصفوفة)'
  },
  tools: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Data Visualization'],
  impact: {
    en: 'Enabled sales leadership to instantly track 87.46% target achievement, identify top-performing representatives, and analyze revenue distribution across channels for faster, data-driven decisions.',
    ar: 'مكّنت إدارة المبيعات من تتبع نسبة تحقيق الهدف البالغة 87.46% فوريًا، وتحديد أفضل المندوبين أداءً، وتحليل توزيع الإيرادات عبر القنوات لاتخاذ قرارات أسرع مبنية على البيانات.'
  },
  metrics: [
    { kpi: '6.51M', label: { en: 'Total Revenue', ar: 'إجمالي الإيرادات' } },
    { kpi: '87.46%', label: { en: 'Target Achievement', ar: 'نسبة تحقيق الهدف' } },
    { kpi: '7M', label: { en: 'Total Target', ar: 'إجمالي الهدف' } }
  ],
  sqlOrDaxSnippet: {
    language: 'DAX',
    title: 'Total Revenue & Target Achievement %',
    code: `Total_Revenue = SUM('Sales'[Revenue])

Achievement_% = 
DIVIDE([Total_Revenue], [Total_Target], 0)`
  },
  imageUrl: salesPerformanceImg,
  featured: true
},
  {
    id: '2',
    title: {
      en: 'Adidas Sales Performance & Retail Analytics Dashboard',
      ar: 'لوحة تحكم وتحليل مبيعات أديداس التفاعلية (Excel Sales Dashboard)'
    },
    category: { en: 'Excel & Data Analysis', ar: 'تحليلات Excel' },
    industry: { en: 'Retail & Commercial Sales', ar: 'مبيعات التجزئة والتجارة' },
    clientType: { en: 'Sales Analytics & Performance Tracking', ar: 'تحليل أداء المبيعات وسلاسل التوزيع' },
    businessProblem: {
      en: 'Consolidating multi-regional retail sales, sales methods (Online, In-store, Outlet), and product line volumes into an interactive visual dashboard for executive decision-makers.',
      ar: 'تحليل بيانات المبيعات وتوزيعها عبر المناطق الجغرافية، قنوات البيع (عن بُعد، المتاجر، منافذ البيع)، والمتاجر الشريكة لتحديد أعلى المنتجات والمواسم ربحية.'
    },
    approach: {
      en: 'Developed a dynamic Microsoft Excel dashboard utilizing Pivot Tables, geographic map visualization, monthly trend line charts, donut distribution of sales methods, and interactive multi-category product & timeline slicers.',
      ar: 'بناء لوحة تحكم تفاعلية متكاملة عبر Excel تعتمد على الجداول المحورية (Pivot Tables)، الخرائط الجغرافية لتوزيع المبيعات، تحليل الاتجاه الزمني للمبيعات الشهرية، وتضمين شرائح تصفية (Slicers) تفاعلية للمنتجات والسنوات.'
    },
    architecture: {
      en: 'Raw Sales Datasets → Data Cleaning & Formatting → Dynamic Pivot Tables & Calculations → Interactive Charts (Map, Donut, Bar, Line) → Product & Timeline Slicers Integration',
      ar: 'سجلات المبيعات الخام ← تنظيف وهيكلة البيانات ← الجداول المحورية والمعادلات ← الرسوم البيانية التفاعلية (خريطة، دونات، أعمدة، خط زمني) ← ربط فلاتر التصفية والخط الزمني'
    },
    tools: ['Microsoft Excel', 'Pivot Tables & Charts', 'Interactive Slicers', 'Geographic Mapping', 'Data Visualization'],
    impact: {
      en: 'Provided instant visibility into top-performing retailers (West Gear, Foot Locker), dominant sales channels (Online 38%), and product category revenue trends.',
      ar: 'توفير رؤية فورية لأداء كبرى منافذ البيع، ونسب قنوات الشراء (البيع الإلكتروني 38%)، ومقارنة مبيعات الفئات الرجالية والنسائية بمجرد تصفية البيانات.'
    },
    metrics: [
      { kpi: 'Multi-Channel', label: { en: 'Online, In-store & Outlet', ar: 'تتبع قنوات البيع المتعددة' } },
      { kpi: 'Interactive', label: { en: 'Dynamic Slicers & Timeline', ar: 'فلاتر وخط زمني تفاعلي' } },
      { kpi: 'Geo-Mapping', label: { en: 'Regional Sales View', ar: 'تحليل المبيعات الجغرافية' } }
    ],
    imageUrl: adidasDashboardImg,
    featured: true
  },
  {
    id: '3',
    title: {
      en: 'BPMN 2.0 Business Process Workflow Architecture',
      ar: 'مشروع توثيق وهندسة مسارات العمليات (BPMN 2.0 / Visio)'
    },
    category: { en: 'Systems Analysis', ar: 'تحليل النظم والعمليات' },
    industry: { en: 'Process Engineering & Systems', ar: 'هندسة الإجراءات والنظم' },
    clientType: { en: 'Systems & Workflow Documentation', ar: 'توثيق ونمذجة تدفق الإجراءات' },
    businessProblem: {
      en: 'Lack of clear documentation for operational handoffs, task sequences, and system interaction boundaries, leading to bottlenecks and communication gaps.',
      ar: 'تداخل المسؤوليات وغياب التوثيق المعياري الواضح لخطوات سير العمل ونقاط اتخاذ القرار بين الفرق التقنية والإدارية.'
    },
    approach: {
      en: 'Mapped end-to-end process workflows using BPMN 2.0 standards in Microsoft Visio, detailing decision gates, swimlanes, sub-processes, and exception handling.',
      ar: 'رسم وتوثيق مسار العمليات الكامل وفق معيار BPMN 2.0 عبر Microsoft Visio، مع تحديد مسارات المسؤوليات (Swimlanes)، بوابات القرار والشرطيات، ومعالجة الحالات الاستثنائية.'
    },
    architecture: {
      en: 'Process Requirements & Interviews → Swimlane Role Mapping → BPMN 2.0 Standard Diagramming → Process Specification & Verification',
      ar: 'حصر متطلبات سير العمل ← توزيع الأدوار (Swimlanes) ← رسم المخطط بمعيار BPMN 2.0 في Visio ← التحقق والاعتماد ومواءمة النظم'
    },
    tools: ['BPMN 2.0', 'Microsoft Visio', 'Systems Analysis', 'Workflow Mapping', 'UML'],
    impact: {
      en: 'Produced standardized, professional workflow diagrams that serve as a clear blueprint for developers, operations teams, and stakeholders.',
      ar: 'إعداد وثيقة ومخطط معياري احترافي يوضح تسلسل العمليات بدقة ويسهل على المطورين والفرق التشغيلية تنفيذ ومتابعة الإجراءات.'
    },
    metrics: [
      { kpi: 'BPMN 2.0', label: { en: 'Standard Notation', ar: 'معيار نمذجة عالمي' } },
      { kpi: 'MS Visio', label: { en: 'Architectural Tool', ar: 'تصميم ورسم احترافي' } },
      { kpi: 'Clear Path', label: { en: 'Workflow Blueprint', ar: 'مخطط واضح ومعتمد' } }
    ],
    imageUrl: bpmnWorkflowImg,
    featured: true
  },
  {
    id: '4',
    title: {
    en: 'Automated License Expiry Reminder System',
    ar: 'نظام تنبيه آلي لانتهاء صلاحية التراخيص'
  },
  category: { en: 'Process Automation', ar: 'أتمتة العمليات' },
  industry: { en: 'IT Operations & Governance', ar: 'العمليات وحوكمة تقنية المعلومات' },
  clientType: { en: 'Scheduled Workflow Automation', ar: 'أتمتة سير عمل مجدولة' },
  businessProblem: {
    en: 'License renewals were tracked manually, risking missed deadlines, service interruptions, and unplanned costs from expired software licenses going unnoticed.',
    ar: 'كانت متابعة تجديد التراخيص تتم يدويًا، مما يعرّض العمل لخطر تفويت المواعيد النهائية، وتوقف الخدمات، وتكاليف غير مخططة نتيجة انتهاء تراخيص برمجية دون ملاحظة.'
  },
  approach: {
    en: 'Built an automated scheduled flow in Power Automate integrated with Office 365 Outlook, triggering proactive email reminders 90 days before license expiry to ensure timely renewal action.',
    ar: 'تم بناء تدفق عمل آلي مجدول عبر Power Automate مرتبط بـ Office 365 Outlook، يرسل تنبيهات بريدية استباقية قبل 90 يومًا من انتهاء الترخيص لضمان اتخاذ إجراء التجديد في الوقت المناسب.'
  },
  architecture: {
    en: 'Scheduled Trigger (Recurrence) → Data Source Check (License Records) → Condition (90-Day Threshold) → Office 365 Outlook Email Action → Run History Logging',
    ar: 'مشغل مجدول (تكرار زمني) ← فحص مصدر البيانات (سجلات التراخيص) ← شرط (عتبة 90 يومًا) ← إجراء إرسال بريد عبر Office 365 Outlook ← تسجيل سجل التشغيل'
  },
  tools: ['Power Automate', 'Office 365 Outlook', 'Workflow Automation', 'Scheduled Triggers'],
  impact: {
    en: 'Eliminated manual tracking overhead by delivering a fully automated, reliable reminder system with a proven 100% successful run history and consistent 2-second execution time.',
    ar: 'ألغى عبء المتابعة اليدوية من خلال توفير نظام تنبيه آلي موثوق بالكامل، بسجل تشغيل ناجح بنسبة 100% ووقت تنفيذ ثابت لا يتجاوز ثانيتين.'
  },
  metrics: [
    { kpi: '90 Days', label: { en: 'Advance Notice', ar: 'إشعار مسبق' } },
    { kpi: '100%', label: { en: 'Successful Runs', ar: 'نسبة نجاح التشغيل' } },
    { kpi: '00:00:02', label: { en: 'Avg. Run Duration', ar: 'متوسط مدة التشغيل' } }
  ],
  imageUrl: powerAutomateImg,
  featured: true
},
{
  id: '5',
  title: {
    en: 'IT Project & Resource Management Analytics (SQL)',
    ar: 'تحليل إدارة المشاريع والموارد التقنية (SQL)'
  },
  category: { en: 'SQL & Database', ar: 'تحليل وقواعد بيانات SQL' },
  industry: { en: 'IT Project Management', ar: 'إدارة المشاريع التقنية' },
  clientType: { en: 'Cross-Department Resource Tracking', ar: 'تتبع الموارد عبر الأقسام' },
  businessProblem: {
    en: 'IT leadership lacked a queryable view of task completion, budget consumption, and workload distribution across departments, making it hard to identify underperforming teams and at-risk timelines.',
    ar: 'افتقرت إدارة تقنية المعلومات لرؤية قابلة للاستعلام حول إنجاز المهام واستهلاك الميزانية وتوزيع عبء العمل عبر الأقسام، مما صعّب تحديد الفرق ضعيفة الأداء والجداول الزمنية المعرّضة للخطر.'
  },
  approach: {
    en: 'Designed a normalized relational schema (departments, employees, projects, tasks) and wrote analytical SQL queries using JOINs, aggregate functions, and conditional logic to surface completion rates, budget usage, overdue tasks, and workload per employee.',
    ar: 'صُمم مخطط علائقي منظم (أقسام، موظفين، مشاريع، مهام) وكُتبت استعلامات SQL تحليلية باستخدام JOIN ودوال تجميعية ومنطق شرطي لاستخراج نسب الإنجاز واستهلاك الميزانية والمهام المتأخرة وعبء العمل لكل موظف.'
  },
  architecture: {
    en: 'Relational Schema Design → Sample Data Population → JOIN-based Aggregation Queries → Conditional Logic (CASE WHEN) → Business-Question-Driven Reporting',
    ar: 'تصميم المخطط العلائقي ← تعبئة بيانات تجريبية ← استعلامات تجميعية عبر JOIN ← منطق شرطي (CASE WHEN) ← تقارير مبنية على أسئلة العمل'
  },
  tools: ['SQL', 'MySQL', 'Relational Database Design', 'Data Modeling'],
  impact: {
    en: 'Revealed a 50-percentage-point completion gap between the strongest and weakest departments, flagged 2 overdue tasks with named owners, and identified a project running 212 days without completion — enabling targeted management intervention.',
    ar: 'كشف التحليل عن فجوة إنجاز بنسبة 50 نقطة مئوية بين أقوى وأضعف الأقسام أداءً، وحدد مهمتين متأخرتين مع تحديد المسؤول عن كل منهما، وكشف مشروعًا مستمرًا منذ 212 يومًا دون اكتمال — مما مكّن من تدخل إداري مستهدف.'
  },
  metrics: [
    { kpi: '50%', label: { en: 'Lowest Completion Rate', ar: 'أدنى نسبة إنجاز' } },
    { kpi: '2', label: { en: 'Overdue Tasks Flagged', ar: 'مهمة متأخرة محددة' } },
    { kpi: '212 Days', label: { en: 'Longest Running Project', ar: 'أطول مشروع نشط' } }
  ],
  sqlOrDaxSnippet: {
    language: 'SQL',
    title: 'Department Completion Rate',
    code: `SELECT
    d.department_name,
    COUNT(t.task_id) AS total_tasks,
    SUM(CASE WHEN t.status = 'Completed' THEN 1 ELSE 0 END) AS completed_tasks,
    ROUND(
        SUM(CASE WHEN t.status = 'Completed' THEN 1 ELSE 0 END) * 100.0
        / COUNT(t.task_id), 1
    ) AS completion_rate_pct
FROM departments d
JOIN projects p ON p.department_id = d.department_id
JOIN tasks t ON t.project_id = p.project_id
GROUP BY d.department_name
ORDER BY completion_rate_pct DESC;`
  },
  imageUrl: sqlImg3,
  galleryImages: [sqlImg3, sqlImg1, sqlImg2],
  featured: true
},
{
  id: '6',
  title: {
    en: 'IT Support Ticket Analytics & Resolution Prediction (Python)',
    ar: 'تحليل تذاكر الدعم التقني والتنبؤ بوقت الحل (Python)'
  },
  category: { en: 'Python & Machine Learning', ar: 'تحليل البيانات والتنبؤ (Python)' },
  industry: { en: 'IT Support & Service Management', ar: 'الدعم التقني وإدارة الخدمات' },
  clientType: { en: 'Predictive Analytics & SLA Planning', ar: 'التحليل التنبؤي وتخطيط اتفاقيات مستوى الخدمة' },
  businessProblem: {
    en: 'IT support teams lacked a data-driven way to estimate ticket resolution time, set realistic SLAs, or identify which ticket categories consistently consumed the most staff hours.',
    ar: 'افتقرت فرق الدعم التقني لطريقة مبنية على البيانات لتقدير وقت حل التذاكر، وتحديد اتفاقيات مستوى خدمة واقعية، أو معرفة أي فئات التذاكر تستهلك أكبر وقت من الموظفين.'
  },
  approach: {
    en: 'Cleaned a real-world-style dataset (removing duplicates, imputing missing values, capping outliers using the IQR method), performed exploratory analysis and correlation testing, then built a Linear Regression model to predict resolution time from ticket complexity, priority, and submission timing.',
    ar: 'تم تنظيف بيانات واقعية النمط (إزالة التكرار، تعويض القيم المفقودة، معالجة القيم الشاذة بطريقة IQR)، وأُجري تحليل استكشافي واختبار ارتباط، ثم بُني نموذج انحدار خطي للتنبؤ بوقت الحل بناءً على تعقيد التذكرة والأولوية وتوقيت التقديم.'
  },
  architecture: {
    en: 'Raw Ticket Data → Data Cleaning (Pandas) → Exploratory Data Analysis (Matplotlib/Seaborn) → Correlation Analysis → Feature Engineering → Linear Regression Model (Scikit-learn) → Prediction Evaluation',
    ar: 'بيانات التذاكر الخام ← تنظيف البيانات (Pandas) ← تحليل استكشافي (Matplotlib/Seaborn) ← تحليل الارتباط ← هندسة الخصائص ← نموذج انحدار خطي (Scikit-learn) ← تقييم دقة التنبؤ'
  },
  tools: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  impact: {
    en: 'Identified a 91% resolution-time gap between the slowest (Hardware) and fastest (Access Request) ticket categories, confirmed ticket complexity as the strongest driver of delay, and delivered a predictive model accurate to within 3 hours on average — giving IT management a data-backed basis for SLA planning.',
    ar: 'كشف التحليل عن فجوة بنسبة 91% في وقت الحل بين أبطأ فئة (Hardware) وأسرعها (Access Request)، وأكد أن تعقيد التذكرة هو أقوى عامل مؤثر بالتأخير، وقدّم نموذجًا تنبؤيًا بدقة تصل لثلاث ساعات بالمتوسط — مما يمنح إدارة تقنية المعلومات أساسًا مبنيًا على البيانات لتخطيط اتفاقيات مستوى الخدمة.'
  },
  metrics: [
    { kpi: 'R² 0.42', label: { en: 'Model Accuracy', ar: 'دقة النموذج' } },
    { kpi: '±2.99h', label: { en: 'Avg. Prediction Error', ar: 'متوسط خطأ التنبؤ' } },
    { kpi: '91%', label: { en: 'Category Time Gap', ar: 'فجوة الوقت بين الفئات' } }
  ],
  sqlOrDaxSnippet: {
    language: 'Python',
    title: 'Predictive Model — Linear Regression',
    code: `features = ['complexity_score', 'priority_encoded', 'is_weekend_submitted']
X = df[features]
y = df['resolution_hours']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
# R² Score: 0.419 | Mean Absolute Error: 2.99 hours`
  },
  imageUrl: ticketAnalyticsImg1,
  galleryImages: [ticketAnalyticsImg1, ticketAnalyticsImg2, ticketAnalyticsImg3],
  featured: true
},
{
  id: '7',
  title: {
    en: 'Sentiment and Topic Analysis of Saudi App Reviews',
    ar: 'تحليل المشاعر والموضوعات لمراجعات التطبيقات السعودية'
  },
  category: { en: 'Arabic NLP', ar: 'معالجة اللغة العربية (NLP)' },
  industry: { en: '', ar: '' },
  clientType: { en: 'Google Play User Reviews Analysis', ar: 'تحليل مراجعات مستخدمي Google Play' },
  businessProblem: {
    en: 'Analyzed 9,000 Google Play reviews of Absher, Tawakkalna and Nafath: compared two sentiment models and turned 8 complaint topics into prioritized requirements.',
    ar: 'تحليل 9,000 مراجعة على Google Play لتطبيقات أبشر وتوكلنا ونفاذ: مقارنة نموذجين لتحليل المشاعر وتحويل 8 موضوعات شكاوى إلى متطلبات تحسين مرتبة بالأولوية.'
  },
  cardDescription: {
    en: 'Analyzed 9,000 Google Play reviews of Absher, Tawakkalna and Nafath: compared two sentiment models and turned 8 complaint topics into prioritized requirements.',
    ar: 'تحليل 9,000 مراجعة على Google Play لتطبيقات أبشر وتوكلنا ونفاذ: مقارنة نموذجين لتحليل المشاعر وتحويل 8 موضوعات شكاوى إلى متطلبات تحسين مرتبة بالأولوية.'
  },
  cardPill: {
    en: '9,000 Reviews · 8 Topics',
    ar: '9,000 مراجعة · 8 موضوعات'
  },
  cardTags: ['Python', 'scikit-learn', 'Hugging Face', 'NLP'],
  approach: {
    en: 'Normalized Arabic text across 8,561 cleaned reviews, evaluated TF-IDF + Logistic Regression against pre-trained CAMeLBERT on Macro-F1, applied NMF topic modeling on 603 negative reviews, and formalized MoSCoW user stories.',
    ar: 'تطبيع النصوص العربية عبر 8,561 مراجعة منظفة، وتقييم نموذج TF-IDF + Logistic Regression مقابل نموذج CAMeLBERT المدرب مسبقاً بمقياس Macro-F1، واستخراج الموضوعات عبر NMF، وصياغة المتطلبات بمنهجية MoSCoW.'
  },
  architecture: {
    en: 'Google Play Reviews (9,000) → Arabic Normalization (8,561) → Sentiment Evaluation (TF-IDF + LogReg vs. CAMeLBERT) → NMF Topic Extraction (8 Topics) → MoSCoW Requirements',
    ar: 'مراجعات Google Play (9,000) ← تطبيع النص العربي (8,561) ← مقارنة نماذج المشاعر (TF-IDF مقابل CAMeLBERT) ← استخراج 8 موضوعات بـ NMF ← متطلبات MoSCoW'
  },
  tools: ['Python', 'scikit-learn', 'Hugging Face', 'NLP'],
  impact: {
    en: 'Translated 8 complaint topics across 9,000 reviews into prioritized Must/Should/Could engineering requirements focused on core app reliability.',
    ar: 'تحويل 8 موضوعات شكاوى مستخلصة من 9,000 مراجعة إلى متطلبات تحسين مصنفة بالأولوية (Must / Should / Could) تركز على موثوقية التشغيل.'
  },
  metrics: [
    { kpi: '9,000', label: { en: 'Reviews · 8 Topics', ar: 'مراجعة · 8 موضوعات' } }
  ],
  imageUrl: saudiAppTopicsImg,
  pageRoute: '/projects/saudi-app-reviews',
  featured: true
},
];

export const SERVICES: Service[] = [
  {
    id: 'bi-dashboards',
    title: {
      en: 'Power BI Dashboards & Business Intelligence',
      ar: 'تصميم وبناء لوحات تحكم Power BI وذكاء الأعمال'
    },
    description: {
      en: 'Translating raw operational data into interactive, executive-grade Power BI dashboards with structured data modeling and dynamic DAX measures.',
      ar: 'تحويل البيانات التشغيلية الأولية إلى لوحات تحكم تفاعلية متكاملة عبر Power BI مع ضبط نماذج البيانات وصياغة معادلات DAX الدقيقة.'
    },
    icon: 'LayoutDashboard',
    deliverables: [
      { en: 'Interactive Power BI Dashboard Engineering', ar: 'تصميم وبناء لوحات المؤشرات التفاعلية' },
      { en: 'Data Modeling & Star Schema Architecture', ar: 'ضبط العلاقات بين الجداول ونمذجة البيانات المعيارية' },
      { en: 'Custom DAX Calculations & Key Measures', ar: 'صياغة معادلات ومقاييس DAX الحسابية المتقدمة' },
      { en: 'Scheduled Data Refresh & Visual Formatting', ar: 'تنسيق الواجهات البصرية وجدولة تحديث البيانات' }
    ],
    idealFor: {
      en: 'Organizations and teams needing clear, live visibility into their performance metrics without manual spreadsheet friction.',
      ar: 'الجهات والفرق التي تحتاج إلى متابعة مباشرة لمؤشرات أدائها بدقة وسهولة دون عناء التقارير اليدوية.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  },
  {
    id: 'sql-analytics',
    title: {
      en: 'SQL Querying & Relational Database Analytics',
      ar: 'استعلامات وتحليل قواعد بيانات SQL وإدارة الموارد'
    },
    description: {
      en: 'Designing normalized relational schemas and writing high-performance SQL queries (JOINs, CASE WHEN, aggregates) to track KPIs and resources.',
      ar: 'تصميم وهيكلة المخططات العلائقية وكتابة استعلامات SQL متقدمة لحساب معدلات الإنجاز، كشف المهام المتأخرة، وتتبع استهلاك الميزانيات بدقة.'
    },
    icon: 'Database',
    deliverables: [
      { en: 'Relational Schema Design & Table Normalization', ar: 'تصميم المخطط العلائقي وضبط تكامل الجداول (Schema Design)' },
      { en: 'Advanced Multi-Table JOINs & Conditional Logic', ar: 'كتابة استعلامات الربط والشرطيات المعقدة (JOINs & CASE WHEN)' },
      { en: 'KPI Aggregations & Resource Utilization Queries', ar: 'استخراج مؤشرات الأداء وحساب معدلات إنجاز الفرق' },
      { en: 'Overdue & Risk Flagging Automated Reporting', ar: 'استعلامات استخراج التنبيهات والمهام المتأخرة وتجاوز الميزانيات' }
    ],
    idealFor: {
      en: 'IT leadership and department heads needing fast, structured answers from relational databases to guide decisions.',
      ar: 'القيادات التقنية والإدارية التي تحتاج إلى إجابات دقيقة واستعلامات هيكلية من قواعد البيانات لدعم التدخل الإداري.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  },
  {
    id: 'python-analytics',
    title: {
      en: 'Python Predictive Analytics & Machine Learning',
      ar: 'التحليل الاستكشافي والتنبؤ البياني بلغة Python'
    },
    description: {
      en: 'Applying data cleaning, exploratory data analysis (EDA), correlation testing, and regression models with Python to forecast operational outcomes.',
      ar: 'معالجة وتنظيف مجموعات البيانات، وتحليل الارتباط والاستكشاف البياني (EDA)، وبناء نماذج انحدار وتنبؤ لتخطيط اتفاقيات الخدمة (SLAs).'
    },
    icon: 'BarChart3',
    deliverables: [
      { en: 'Data Cleaning, Imputation & Outlier Handling (Pandas/IQR)', ar: 'تنظيف البيانات، تعويض القيم المفقودة، ومعالجة القيم الشاذة (IQR)' },
      { en: 'Exploratory Data Analysis & Visualizations (Seaborn)', ar: 'تحليل استكشافي شامل ومصفوفات الارتباط (Correlation Heatmaps)' },
      { en: 'Predictive Modeling & Feature Engineering (Scikit-learn)', ar: 'بناء نماذج الانحدار والتنبؤ وهندسة الخصائص الإحصائية' },
      { en: 'Model Accuracy Evaluation & SLA Insights', ar: 'تقييم دقة النموذج (R² / MAE) وتقديم توصيات تشغيلية مدعومة بالبيانات' }
    ],
    idealFor: {
      en: 'Service desks and operations managers looking to forecast resolution times and optimize workload distribution scientifically.',
      ar: 'فرق الدعم الفني والعمليات الساعية لتقدير أوقات الإنجاز بدقة وبناء اتفاقيات مستوى خدمة واقعية ومبنية على البيانات.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  },
  {
    id: 'process-automation',
    title: {
      en: 'Process Automation & Workflow Engineering',
      ar: 'أتمتة العمليات وسير العمل الرقمي (Power Automate)'
    },
    description: {
      en: 'Building automated workflows with Power Automate and cloud connectors to eliminate repetitive manual tasks, automate alerts, and streamline data sync.',
      ar: 'بناء تدفقات عمل مؤتمتة عبر Power Automate لربط الأنظمة، وأتمتة التنبيهات المجدولة، وإلغاء المهام اليدوية المتكررة لضمان سرعة الإنجاز ودقة المتابعة.'
    },
    icon: 'Workflow',
    deliverables: [
      { en: 'Automated Scheduled Triggers & Proactive Notification Systems', ar: 'بناء مشغلات زمنية مجدولة وأنظمة إشعارات وتنبيهات استباقية' },
      { en: 'Office 365, Teams & Email Workflow Integration', ar: 'تكامل مسارات العمل مع تطبيقات Office 365 والبريد الإلكتروني' },
      { en: 'Multi-Step Business Logic & Conditional Branching', ar: 'تصميم شروط العمل المنطقية والتفريع الذكي للقرارات' },
      { en: 'Run History Monitoring & Failure Fallback Handling', ar: 'مراقبة سجلات التشغيل وضمان الاستجابة السريعة ومعالجة الأخطاء' }
    ],
    idealFor: {
      en: 'Organizations aiming to cut manual administrative overhead, prevent missed deadlines, and connect recurring processes seamlessly.',
      ar: 'المنظمات وفرق العمل الساعية لإلغاء المتابعات اليدوية، وتفادي فوات المواعيد وتوقف التراخيص، وربط العمليات المتكررة تلقائياً.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  },
  {
    id: 'excel-automation',
    title: {
      en: 'Excel Data Analysis & Automation',
      ar: 'تحليل ومعالجة البيانات وأتمتة تقارير Excel'
    },
    description: {
      en: 'Structuring complex datasets, automating data transformation via Power Query, building dynamic pivot models, and applying advanced formulas.',
      ar: 'تنظيم الجداول المعقدة، وأتمتة تنظيف ودمج البيانات باستخدام Power Query، وبناء نماذج Pivot Tables والدوال المتقدمة.'
    },
    icon: 'FileSpreadsheet',
    deliverables: [
      { en: 'Power Query ETL & Automated Data Cleaning', ar: 'أتمتة تنظيف وتجميع مصادر البيانات عبر Power Query' },
      { en: 'Advanced Lookup & Logical Formulas (XLOOKUP / INDEX-MATCH)', ar: 'تطبيق دوال البحث والربط المنطقي والمعادلات المتقدمة' },
      { en: 'Dynamic Pivot Tables & Summary Reports', ar: 'بناء الجداول المحورية ولوحات الملخصات التلقائية' },
      { en: 'Structured Templates & Error-Checking Validation', ar: 'تصميم قوالب عمل منظمة مع قواعد التحقق من صحة المدخلات' }
    ],
    idealFor: {
      en: 'Departments handling recurring spreadsheets, seeking error-free calculation and swift reporting.',
      ar: 'الإدارات التي تعتمد على ملفات إكسل دورية وترغب في أتمتة المعالجة الحسابية وتسريع إصدار التقارير.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  },
  {
    id: 'systems-analysis',
    title: {
      en: 'Systems Analysis & BPMN Process Mapping',
      ar: 'تحليل النظم وتوثيق مسارات العمليات (BPMN / Visio)'
    },
    description: {
      en: 'Mapping technical workflows, gathering system requirements, and documenting standardized BPMN 2.0 diagrams using Microsoft Visio.',
      ar: 'حصر المتطلبات التقنية، ورسم وتوثيق مسارات العمليات بدقة وفق معايير BPMN 2.0 العالمية باستخدام Microsoft Visio.'
    },
    icon: 'Settings',
    deliverables: [
      { en: 'End-to-End BPMN 2.0 Process Workflow Diagrams', ar: 'رسم وتوثيق مسارات العمليات بمعيار BPMN 2.0 في Visio' },
      { en: 'Role & Responsibility Allocation (Swimlanes)', ar: 'تحديد مسارات الأدوار والمسؤوليات (Swimlanes)' },
      { en: 'Technical Requirements & Specification Alignment', ar: 'توثيق متطلبات النظام وحالات الاستخدام وسير الإجراءات' },
      { en: 'Process Optimization & Handoff Clarification', ar: 'توضيح نقاط اتخاذ القرار ومعالجة تعثر الإجراءات' }
    ],
    idealFor: {
      en: 'Teams implementing new systems, redesigning workflows, or needing clear operational documentation.',
      ar: 'المنشآت وفرق العمل التي تنفذ نظماً جديدة أو تسعى لتوثيق وتوحيد خطوات العمل بدقة.'
    },
    timeline: { en: 'Project-based', ar: 'حسب نطاق العمل' }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: {
      en: 'GNS — National Water Company (NWC) Project',
      ar: 'شركة GNS — مشروع شركة المياه الوطنية (NWC)'
    },
    role: {
      en: 'Data Analyst',
      ar: 'محللة بيانات (Data Analyst)'
    },
    period: { en: '2026 – Present', ar: '2026 – حتى الآن' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    description: {
      en: 'Analyzing operational datasets, tracking service KPIs, and building interactive reporting dashboards to support data-driven decision-making within the National Water Company (NWC) project.',
      ar: 'تحليل البيانات التشغيلية ومتابعة مؤشرات الأداء الرئيسية (KPIs) وبناء لوحات التقارير التفاعلية لدعم اتخاذ القرار المبني على البيانات ضمن مشروع شركة المياه الوطنية (NWC).'
    },
    achievements: [
      {
        en: 'Analyze project and operational data streams for the NWC engagement, ensuring high data accuracy, consistency, and structured reporting.',
        ar: 'تحليل ومراجعة البيانات التشغيلية والخدمية ضمن مشروع NWC وضمان دقة وتكامل البيانات في التقارير الدورية.'
      },
      {
        en: 'Develop interactive dashboards and KPI trackers (Power BI / Excel / SQL) to monitor performance benchmarks and SLA compliance.',
        ar: 'تطوير لوحات تحكم ومؤشرات قياس أداء تفاعلية (Power BI / Excel / SQL) لمتابعة مستويات الإنجاز والالتزام باتفاقيات الخدمة.'
      },
      {
        en: 'Collaborate with technical and project stakeholders to translate operational requirements into clear analytical insights and automated reports.',
        ar: 'التنسيق مع فرق المشروع وأصحاب المصلحة لتحويل المتطلبات التشغيلية إلى رؤى تحليلية واضحة وتقارير مؤتمتة.'
      }
    ]
  },
  {
    company: {
      en: 'Advance Medical',
      ar: 'شركة التقدم الطبي (Advance Medical)'
    },
    role: {
      en: 'Data Analyst',
      ar: 'محللة بيانات (Data Analyst)'
    },
    period: { en: '12/2024 – 2026', ar: '12/2024 – 2026' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    description: {
      en: 'Led cross-functional data coordination and executive reporting architecture across operations, HR, finance, and senior management.',
      ar: 'قيادة التنسيق البياني المشترك بين الإدارة والموارد البشرية والمالية والعمليات لدعم اتخاذ القرار التنفيذي ورفع كفاءة العمليات.'
    },
    achievements: [
      {
        en: 'Led cross-functional data coordination between management, HR, finance, and operations to support executive decision-making and improve workflow efficiency.',
        ar: 'قيادة التنسيق البياني المشترك بين الإدارة العليا والموارد البشرية والمالية والعمليات لدعم القرار التنفيذي ورفع كفاءة تدفق الأعمال.'
      },
      {
        en: 'Designed executive-level dashboards and performance trackers that translated complex data into clear, actionable insights for senior leadership.',
        ar: 'تصميم لوحات تحكم ومؤشرات أداء تنفيذية تترجم البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ للإدارة العليا.'
      },
      {
        en: 'Established data governance and documentation standards to streamline reporting processes, reduce manual effort, and support organizational scalability.',
        ar: 'تأسيس معايير حوكمة البيانات والتوثيق لتبسيط إجراءات التقارير، تقليص الجهد اليدوي، ودعم التوسع المؤسسي.'
      }
    ]
  },
  {
    company: {
      en: 'Freelance Visio Designer & System Modeling',
      ar: 'مصممة نظم وعمليات مستقلة (Freelance Visio Designer)'
    },
    role: {
      en: 'Freelance Visio Designer & Process Modeler',
      ar: 'مصممة وموثقة مسارات النظم والعمليات'
    },
    period: { en: 'Freelance', ar: 'مشاريع حرة / تعاقدية' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    description: {
      en: 'Designed professional process diagrams, technical workflows, and architectural documentation for digital transformation initiatives.',
      ar: 'تصميم وتحسين مخططات العمليات الاحترافية، تدفقات النظم والمعماريات التقنية باستخدام Microsoft Visio للقطاعين العام والخاص.'
    },
    achievements: [
      {
        en: 'Designed and optimized professional process diagrams, workflows, and technical architectures using Microsoft Visio.',
        ar: 'تصميم وتحسين مخططات العمليات الاحترافية وتدفقات الأعمال والمعماريات التقنية باستخدام Microsoft Visio.'
      },
      {
        en: 'Supported system analysis and documentation for digital transformation projects across public and private clients.',
        ar: 'دعم تحليل النظم والتوثيق لمشاريع التحول الرقمي لدى عملاء من القطاعين الحكومي والخاص.'
      }
    ]
  },
  {
    company: {
      en: 'SaudConsult (Saudi Consulting Services)',
      ar: 'سعود كونسلت (SaudConsult - الاستشارات الهندسية)'
    },
    role: {
      en: 'System Analyst',
      ar: 'محللة نظم (System Analyst)'
    },
    period: { en: '11/2022 – 11/2024', ar: '11/2022 – 11/2024' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    description: {
      en: 'Conducted end-to-end system requirements analysis, UML modeling, and quality assurance testing for large-scale enterprise solutions.',
      ar: 'تحليل وتوثيق متطلبات الأعمال والنظم، إعداد النماذج الهندسية والمخططات، وتنفيذ اختبارات الجودة الوظيفية للبرمجيات.'
    },
    achievements: [
      {
        en: 'Conducted business and system requirements analysis using JIRA and Confluence.',
        ar: 'تحليل متطلبات الأعمال والنظم وصياغتها وإدارتها عبر منصات JIRA وConfluence.'
      },
      {
        en: 'Developed comprehensive system documentation using Microsoft Visio and UML modeling.',
        ar: 'إعداد وثائق متكاملة للنظم والمخططات المعمارية باستخدام Microsoft Visio ونمذجة UML.'
      },
      {
        en: 'Performed software quality assurance and functional testing using Selenium and Postman.',
        ar: 'تنفيذ اختبارات ضمان جودة البرمجيات (QA) والاختبارات الوظيفية عبر Selenium وPostman.'
      }
    ]
  },
  {
    company: {
      en: 'Ministry of Interior (MOI)',
      ar: 'وزارة الداخلية (Ministry of Interior)'
    },
    role: {
      en: 'Information Technology (Co-op Training)',
      ar: 'تقنية المعلومات - تدريب تعاوني (Co-op Training)'
    },
    period: { en: '06/2022 – 08/2022', ar: '06/2022 – 08/2022' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    description: {
      en: 'Assisted in internal web applications development, managed permissions through Active Directory, and provided technical support.',
      ar: 'المساهمة في تطوير وصيانة صفحات الويب الداخلية، إدارة صلاحيات المستخدمين عبر Active Directory، وتقديم الدعم الفني لحلول تقنية المعلومات.'
    },
    achievements: [
      {
        en: 'Assisted in developing and maintaining internal web pages.',
        ar: 'المساهمة في تطوير وصيانة صفحات وبوابات الويب الداخلية.'
      },
      {
        en: 'Managed user permissions and access control through Active Directory.',
        ar: 'إدارة صلاحيات الوصول وحسابات المستخدمين عبر Active Directory.'
      },
      {
        en: 'Provided technical support and troubleshooting for IT systems within the organization.',
        ar: 'تقديم الدعم الفني وحل المشكلات التقنية لأنظمة تقنية المعلومات داخل المنظومة.'
      }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: 'Google Data Analytics Professional Certificate', ar: 'شهادة تحليل البيانات الاحترافية من Google' },
    issuer: 'Google',
    date: 'Certified',
    credentialId: 'Google Professional Track'
  },
  {
    title: { en: 'Microsoft Excel Advanced Certification', ar: 'شهادة مايكروسوفت إكسل المتقدم' },
    issuer: 'Emdad Almarefa',
    date: 'Certified',
    credentialId: 'Emdad Almarefa'
  },
  {
    title: { en: 'Data Analyst Development Program', ar: 'برنامج تطوير محلل البيانات (Data Analyst Development Program)' },
    issuer: 'Professional Development Track',
    date: 'Certified',
    credentialId: 'Professional Track'
  },
  {
    title: { en: 'ITIL Framework & Digital Transformation', ar: 'مقدمة في إطار خدمات تقنية المعلومات والتحول الرقمي ITIL' },
    issuer: 'Tuwaiq Academy',
    date: 'Certified',
    credentialId: 'Tuwaiq Academy'
  }
];

export const TOOLS_CATEGORIZED = {
  softwareAndDev: ['Python', 'SQL', 'Postman', 'Selenium (QA Testing)', 'Web Development', 'Algorithms & Data Structures'],
  systemsAndModeling: ['Microsoft Visio', 'Systems Analysis', 'UML Modeling', 'JIRA & Confluence', 'Active Directory', 'BPMN 2.0'],
  dataEngAndSql: ['SQL Server', 'PostgreSQL', 'Database Architecture', 'ETL Data Pipelines', 'Data Governance'],
  biAndAnalytics: ['Microsoft Excel (Advanced)', 'Google Data Analytics', 'Executive Dashboards', 'Analytical Reporting', 'Performance Trackers'],
  enterpriseApps: ['Active Directory', 'JIRA', 'Confluence', 'Microsoft Office', 'Enterprise IT Support']
};

export const CORE_SKILLS = [
  { en: 'System & Requirements Analysis', ar: 'تحليل النظم وهندسة المتطلبات (JIRA/Confluence)' },
  { en: 'Process & Visio Architecture (UML)', ar: 'تصميم العمليات والمخططات المعمارية (Visio / UML)' },
  { en: 'Executive Dashboards & Reporting', ar: 'تصميم لوحات المؤشرات والتقارير التنفيذية' },
  { en: 'Cross-Functional Data Coordination', ar: 'التنسيق البياني المشترك بين الإدارات' },
  { en: 'Python & Data Management', ar: 'برمجة بايثون وإدارة قواعد البيانات' },
  { en: 'QA & Functional Testing (Selenium/Postman)', ar: 'ضمان الجودة والاختبارات الوظيفية (Postman / Selenium)' },
  { en: 'Data Governance & Documentation', ar: 'حوكمة البيانات وتوثيق الإجراءات القياسية' },
  { en: 'Active Directory & IT Infrastructure', ar: 'إدارة الصلاحيات والبنية التحتية (Active Directory)' }
];
