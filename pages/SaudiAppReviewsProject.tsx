import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import topicsChartImg from '../Screenshot 2026-10-31 184519.png';
import tfidfConfusionImg from '../Screenshot 2026-10-31 184303.png';
import camelbertConfusionImg from '../Screenshot 2026-10-31 184456.png';

const SaudiAppReviewsProject: React.FC = () => {
  const { isAr } = useLanguage();

  const methodSteps = isAr
    ? [
        { label: 'الجمع:', text: 'أحدث 3,000 مراجعة لكل تطبيق، مع إزالة البيانات الشخصية للمستخدمين.' },
        { label: 'التنظيف:', text: 'تطبيع النص العربي مع الإبقاء على المراجعات القصيرة؛ تبقّت 8,561 مراجعة.' },
        { label: 'مجموعة الاختبار:', text: '300 مراجعة بالتساوي لكل تقييم بالنجوم، مصنفة حسب المعنى.' },
        { label: 'النموذج الأساسي (Baseline):', text: 'TF-IDF + Logistic Regression.' },
        { label: 'النموذج العربي:', text: 'نموذج CAMeLBERT المدرّب مسبقاً، دون تدريب إضافي.' },
        { label: 'الموضوعات:', text: 'تطبيق خوارزمية NMF على 603 مراجعات سلبية.' },
        { label: 'المتطلبات:', text: 'قصص مستخدم (User Stories) مصنفة بأولويات MoSCoW.' },
      ]
    : [
        { label: 'Collect:', text: 'latest 3,000 reviews per app, personal user data removed.' },
        { label: 'Clean:', text: 'Arabic text normalization; short reviews kept. 8,561 reviews remained.' },
        { label: 'Test set:', text: '300 reviews, equal per star, labeled by meaning.' },
        { label: 'Baseline:', text: 'TF-IDF + Logistic Regression.' },
        { label: 'Arabic model:', text: 'pre-trained CAMeLBERT, no extra training.' },
        { label: 'Topics:', text: 'NMF on 603 negative reviews.' },
        { label: 'Requirements:', text: 'user stories with MoSCoW priorities.' },
      ];

  const macroF1Rows = isAr
    ? [
        { model: 'تقييم النجوم وحده (Star rating alone)', score: '0.868' },
        { model: 'TF-IDF + Logistic Regression', score: '0.932' },
        { model: 'CAMeLBERT (مدرّب مسبقاً)', score: '0.942' },
      ]
    : [
        { model: 'Star rating alone', score: '0.868' },
        { model: 'TF-IDF + Logistic Regression', score: '0.932' },
        { model: 'CAMeLBERT (pre-trained)', score: '0.942' },
      ];

  const requirementsRows = isAr
    ? [
        {
          priority: 'Must',
          requirement: 'ضمان فتح التطبيق، وعمله عبر بيانات الجوال، واستقراره بعد التحديثات (47% من الشكاوى)',
        },
        {
          priority: 'Should',
          requirement: 'تسجيل دخول أوضح، وبدائل للتحقق بالوجه، واستعادة كلمة المرور في نفس الشاشة (29%)',
        },
        {
          priority: 'Could',
          requirement: 'معالجة التجمد والبطء (10%)',
        },
      ]
    : [
        {
          priority: 'Must',
          requirement: 'Keep the app opening, working on mobile data, and stable after updates (47% of complaints)',
        },
        {
          priority: 'Should',
          requirement: 'Clearer login, alternatives to face verification, password recovery on the same screen (29%)',
        },
        {
          priority: 'Could',
          requirement: 'Fix freezing and slowness (10%)',
        },
      ];

  const limitationsList = isAr
    ? [
        'تسميات مجموعة الاختبار أُسندت بواسطة نموذج لغوي. راجعتُ بشكل مستقل عينة عشوائية مكونة من 30 مراجعة دون الاطلاع على تسميات النموذج: اتفقنا في 25 منها (83%)، وفي 24 من أصل 26 مراجعة واضحة الإيجابية أو السلبية (92%). تركزت الاختلافات في الحالات الحدية (محايد مقابل سلبي أو إيجابي). وبحجم عينة يقتصر على 30 مراجعة تظل نسبة التوافق تقريبية، ولم تُراجع المجموعة الكاملة بشرياً.',
        'نوافذ جمع المراجعات تختلف حسب التطبيق (86–280 يوماً): لا يمكن استخلاص مقارنات عابرة للتطبيقات أو اتجاهات زمنية.',
        'مجموعة الاختبار (260) صغيرة ومتوازنة حسب النجوم، بخلاف البيانات الفعلية (نحو 89% إيجابية).',
        '13.8% من الشكاوى لا تندرج تحت موضوع محدد؛ وأسماء الموضوعات تفسيرية.',
        'المراجعات تصف الأعراض لا الأسباب الجذرية.',
      ]
    : [
        "Test labels were assigned by a language model. I independently reviewed a random sample of 30 of them without seeing the model's labels: we agreed on 25 (83%), and on 24 of the 26 clear positive/negative reviews (92%). Disagreements were borderline cases (neutral vs. negative or positive). With only 30 reviews the agreement rate is approximate, and the full set was not human-reviewed.",
        'Collection windows differ per app (86-280 days): no cross-app or trend conclusions.',
        'The test set (260) is small and balanced by stars, unlike real data (about 89% positive).',
        '13.8% of complaints fit no topic; topic names are interpretive.',
        'Reviews describe symptoms, not causes.',
      ];

  const learnedList = isAr
    ? [
        'تقييمات النجوم إشارة غير مكتملة لقياس المشاعر الفعلية.',
        'مع البيانات غير المتوازنة تكون الدقة الإجمالية (Accuracy) مضللة، لذلك استخدمت Macro-F1.',
        'الفارق البسيط بين نموذجين لا يعني تفوق أحدهما؛ لذا قسته بفاصل ثقة (Confidence Interval).',
        'اختلاف الفترات الزمنية لجمع البيانات قد يشوّه المقارنات، وهو ما لاحظته متأخراً ووثّقته بوضوح.',
      ]
    : [
        'Star ratings are an incomplete signal of sentiment.',
        'With imbalanced data, accuracy misleads, so I used Macro-F1.',
        'A small gap between two models is not superiority; I measured it with a confidence interval.',
        'Uneven collection windows can distort comparisons, which I noticed late and documented.',
      ];

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Top Back Navigation */}
      <div className="mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs"
        >
          {isAr ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
          <span>{isAr ? 'العودة إلى المشاريع' : 'Back to Projects'}</span>
        </Link>
      </div>

      {/* Project Header Banner */}
      <header className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-full tracking-wide">
              {isAr ? 'معالجة اللغة العربية (NLP)' : 'Arabic NLP'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950/90 border border-blue-500/30 rounded-full text-blue-300 text-xs font-bold">
              <TrendingUp size={13} className="text-blue-400" />
              <span>{isAr ? '9,000 مراجعة · 8 موضوعات' : '9,000 Reviews · 8 Topics'}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight mb-5">
            {isAr
              ? 'تحليل المشاعر والموضوعات لمراجعات التطبيقات السعودية'
              : 'Sentiment and Topic Analysis of Saudi App Reviews'}
          </h1>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {['Python', 'scikit-learn', 'Hugging Face', 'NLP'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-bold rounded-xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Ordered Case Study Sections */}
      <div className="space-y-6">
        {/* 1. Overview */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              01
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'نظرة عامة (Overview)' : 'Overview'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isAr
              ? 'حلّلت 9,000 مراجعة من متجر Google Play لتطبيقات أبشر وتوكلنا ونفاذ لفهم أبرز ما يواجه المستخدمين من صعوبات. قارنت بين نموذجين لتحليل المشاعر، واستخرجت 8 موضوعات للشكاوى، وحوّلتها إلى 8 متطلبات تحسين مرتبة حسب الأولوية. تبيّن أن معظم الشكاوى تتعلق بالموثوقية التشغيلية (فتح التطبيق، بيانات الجوال، التحديثات)، وليس بنقص الخدمات.'
              : 'I analyzed 9,000 Google Play reviews of Absher, Tawakkalna and Nafath to understand what frustrates users. I compared two sentiment models, extracted 8 complaint topics, and turned them into 8 prioritized improvement requirements. Most complaints are about reliability (opening, mobile data, updates), not missing services.'}
          </p>
        </section>

        {/* 2. The Problem */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              02
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'المشكلة (The Problem)' : 'The Problem'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isAr
              ? 'المراجعات عبارة عن نصوص عربية غير مهيكلة تتضمن لهجات محلية وأخطاء إملائية ورموزاً تعبيرية، كما أن تقييم النجوم لا يتطابق دائماً مع ما يكتبه المستخدمون فعلياً. هدفتُ إلى الإجابة عن سؤالين: ما الذي يزعج المستخدمين، وكيف يمكن تحويل ذلك إلى متطلبات قابلة للتنفيذ؟'
              : 'Reviews are unstructured Arabic text with dialects, spelling errors and emojis, and star ratings do not always match what users write. I wanted to answer two questions: what bothers users, and how can that become actionable requirements?'}
          </p>
        </section>

        {/* 3. Method */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              03
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'المنهجية (Method)' : 'Method'}
            </h2>
          </div>
          <ol className="list-decimal ps-5 space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed marker:font-bold marker:text-blue-700">
            {methodSteps.map((step, idx) => (
              <li key={idx} className="ps-1">
                <span className="font-bold text-slate-900">{step.label}</span> {step.text}
              </li>
            ))}
          </ol>
        </section>

        {/* 4. Results */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              04
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'النتائج (Results)' : 'Results'}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isAr
              ? 'النجوم لا تعني المشاعر دائماً: اختلف التصنيف المبني على المعنى مع تقييم النجوم في 29 مراجعة من أصل 300 مراجعة (نحو 10%).'
              : 'Stars are not sentiment: the meaning-based label disagreed with the stars in 29 of 300 reviews (about 10%).'}
          </p>

          {/* Image 184519: Complaint topics by app */}
          <figure>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 p-2 sm:p-3">
              <img
                src={topicsChartImg}
                alt="Complaint topics by app"
                className="w-full h-auto rounded-xl object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              {isAr
                ? 'موضوعات الشكاوى حسب التطبيق. تم تجميع 603 مراجعات سلبية (1-2 نجمة) في 8 موضوعات باستخدام NMF. مفتاح الموضوعات: 0 التطبيق لا يفتح، 1 يفشل على بيانات الجوال، 2 يتجمد / يعلّق، 3 مشاكل تسجيل الدخول، 4 استعادة كلمة المرور، 5 التحقق بالوجه، 6 مشاكل التحديثات، 7 بطء / أخطاء الخادم. تختلف فترات الجمع لكل تطبيق (86-280 يوماً)، لذا قارن الموضوعات لا التطبيقات.'
                : "Complaint topics by app. 603 negative reviews (1-2 stars) grouped into 8 topics with NMF. Topic key: 0 App won't open, 1 Fails on mobile data, 2 Freezes / hangs, 3 Login problems, 4 Password reset, 5 Face verification, 6 Update issues, 7 Slow / server errors. Collection windows differ per app (86-280 days), so compare topics, not apps."}
            </figcaption>
          </figure>

          {/* Macro-F1 Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-600 text-start">
                    {isAr ? 'النموذج / الطريقة' : 'Model'}
                  </th>
                  <th className="py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-600 text-end">
                    {isAr ? 'Macro-F1 على 260 مراجعة' : 'Macro-F1 on 260 reviews'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {macroF1Rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-800">{row.model}</td>
                    <td className="py-3 px-4 font-mono font-bold text-blue-700 text-end">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isAr
              ? 'الفرق بين النموذجين (+0.009) غير دال إحصائياً بشكل موثوق (فاصل ثقة 95% من -0.034 إلى +0.049)، مما يعني أن أداءهما متقارب.'
              : 'The difference between the two models (+0.009) is not statistically reliable (95% interval -0.034 to +0.049), so they perform similarly.'}
          </p>

          {/* Side-by-side Confusion Matrices (184303 and 184456) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="flex flex-col">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 p-2 sm:p-3">
                <img
                  src={tfidfConfusionImg}
                  alt="Baseline TF-IDF + Logistic Regression confusion matrix"
                  className="w-full h-auto rounded-xl object-contain mx-auto"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                {isAr
                  ? 'النموذج الأساسي (TF-IDF + Logistic Regression): صُنّفت 12 مراجعة سلبية كإيجابية، و4 مراجعات إيجابية كسلبية.'
                  : 'Baseline (TF-IDF + Logistic Regression): 12 negative reviews read as positive, 4 positive read as negative.'}
              </figcaption>
            </figure>

            <figure className="flex flex-col">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 p-2 sm:p-3">
                <img
                  src={camelbertConfusionImg}
                  alt="Pre-trained Arabic model CAMeLBERT confusion matrix"
                  className="w-full h-auto rounded-xl object-contain mx-auto"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                {isAr
                  ? 'النموذج العربي المدرّب مسبقاً (CAMeLBERT): لم يصنّف أي مراجعة إيجابية كسلبية، لكنه صنّف 14 مراجعة سلبية كإيجابية، معظمها شكاوى وصفية تخلو من كلمات انفعالية.'
                  : 'Pre-trained Arabic model (CAMeLBERT): never reads a positive review as negative, but reads 14 negative reviews as positive, mostly descriptive complaints without emotional language.'}
              </figcaption>
            </figure>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isAr
              ? 'توزيع موضوعات الشكاوى: التحديثات 22%، التطبيق لا يفتح 14%، التحقق بالوجه 11%، بيانات الجوال 11%، تسجيل الدخول 10%، استعادة كلمة المرور 7%، التجمد 6%، البطء أو أخطاء الخادم 5%.'
              : "Complaint topics: updates 22%, app won't open 14%, face verification 11%, mobile data 11%, login 10%, password reset 7%, freezing 6%, slow or server errors 5%."}
          </p>
        </section>

        {/* 5. Requirements */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              05
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'المتطلبات (Requirements)' : 'Requirements'}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-600 text-start w-28">
                    {isAr ? 'الأولوية' : 'Priority'}
                  </th>
                  <th className="py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-600 text-start">
                    {isAr ? 'المتطلب' : 'Requirement'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {requirementsRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 align-top">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-lg text-xs font-black ${
                          row.priority === 'Must'
                            ? 'bg-blue-600 text-white'
                            : row.priority === 'Should'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
            {isAr
              ? 'ملاحظة: يتضمن كل متطلب قصة مستخدم (User Story)، ومعايير قبول (Acceptance Criteria)، ومؤشر أداء رئيسي (KPI).'
              : 'Note: each has a user story, acceptance criteria and a KPI.'}
          </p>
        </section>

        {/* 6. Limitations */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              06
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'القيود والمحددات (Limitations)' : 'Limitations'}
            </h2>
          </div>
          <ul className="list-disc ps-5 space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed marker:text-blue-600">
            {limitationsList.map((item, idx) => (
              <li key={idx} className="ps-1">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 7. What I learned */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-black text-xs flex items-center justify-center font-mono shrink-0">
              07
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              {isAr ? 'ما تعلمته (What I learned)' : 'What I learned'}
            </h2>
          </div>
          <ul className="list-disc ps-5 space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed marker:text-blue-600">
            {learnedList.map((item, idx) => (
              <li key={idx} className="ps-1">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom Back Link */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-xs"
        >
          {isAr ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
          <span>{isAr ? 'العودة إلى كافة المشاريع' : 'Back to All Projects'}</span>
        </Link>
      </div>
    </div>
  );
};

export default SaudiAppReviewsProject;
