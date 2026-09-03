import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Phone, CheckCircle2, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { isAr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: 'Power BI Executive Dashboard',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct pre-filled email to Reema0alf@gmail.com
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.serviceInterest} - ${formData.name}`);
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\n` +
      `البريد الإلكتروني: ${formData.email}\n` +
      `الجهة / الشركة: ${formData.organization || 'غير محدد'}\n` +
      `مجال الاهتمام: ${formData.serviceInterest}\n\n` +
      `تفاصيل الرسالة:\n${formData.message}\n`
    );
    
    window.location.href = `mailto:Reema0alf@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2">
          {isAr ? 'قنوات التواصل' : 'Get In Touch'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
          {isAr ? 'يسعدني التواصل والتعاون' : "Let's Connect & Collaborate"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isAr
            ? 'سواء كان لديك استفسار، فرصة عمل، مشروع تقني، أو رغبة في تحسين لوحات التحكم وأتمتة التقارير، يسعدني التواصل معك.'
            : 'Whether you have a career opportunity, technical project, or inquiry about dashboards and reporting, feel free to reach out.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Contact Info & Enterprise Support */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
              {isAr ? 'قنوات التواصل المباشرة' : 'Direct Channels'}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-700 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {isAr ? 'البريد الإلكتروني المهني' : 'Professional Email'}
                  </h4>
                  <a href="mailto:Reema0alf@gmail.com" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
                    Reema0alf@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {isAr ? 'الرد النموذجي خلال يوم عمل واحد' : 'Average response within 1 business day'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-700 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {isAr ? 'الموقع' : 'Location'}
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    {isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-700 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {isAr ? 'رقم الهاتف' : 'Phone Number'}
                  </h4>
                  <a href="tel:+966551641847" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors" dir="ltr">
                    +966 551641847
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-700 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {isAr ? 'أوقات العمل والتواصل' : 'Working Hours'}
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    {isAr ? 'الأحد - الخميس (8:00 ص - 5:00 م توقيت الرياض)' : 'Sunday - Thursday (8:00 AM - 5:00 PM AST)'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Governance Notice */}
          <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-blue-400">
              <ShieldCheck size={20} />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                {isAr ? 'السرية وحماية البيانات' : 'Confidentiality & Data Protection'}
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isAr
                ? 'الالتزام بأعلى معايير السرية والأمان في التعامل مع كافة البيانات التقنية والمهنية وفق الأنظمة المعمول بها.'
                : 'Commitment to the highest standards of data confidentiality, privacy, and regulatory compliance.'}
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-10">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isAr ? 'تم استلام رسالتك بنجاح' : 'Message Received Successfully'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلك. سأقوم بمراجعة رسالتك والرد عليك في أقرب وقت ممكن.'
                    : 'Thank you for reaching out. I will review your message and reply as soon as possible.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {isAr ? 'نموذج التواصل والاستفسار' : 'Inquiry & Message Form'}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {isAr ? 'يرجى تزويدي بتفاصيل رسالتك أو متطلبات العمل والمشروع.' : 'Please provide details regarding your inquiry or technical project.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isAr ? 'الاسم الكامل' : 'Full Name'} *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder={isAr ? 'الاسم' : 'Name'}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isAr ? 'اسم الجهة / الشركة' : 'Organization / Company'}
                    </label>
                    <input 
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder={isAr ? 'اسم الجهة (اختياري)' : 'Company Name (Optional)'}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {isAr ? 'مجال الموضوع' : 'Topic / Interest'}
                    </label>
                    <select 
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    >
                      <option>{isAr ? 'لوحات تحكم ومؤشرات أداء Power BI' : 'Power BI Dashboards & KPIs'}</option>
                      <option>{isAr ? 'أتمتة ومعالجة التقارير والبيانات' : 'Reporting & Data Automation'}</option>
                      <option>{isAr ? 'تحليل وتوثيق مسارات النظم (Visio / BPMN)' : 'Systems Analysis & Visio / BPMN Mapping'}</option>
                      <option>{isAr ? 'إدارة ونمذجة قواعد البيانات (SQL)' : 'SQL Database Modeling & Queries'}</option>
                      <option>{isAr ? 'فرصة عمل / انضمام لفريق عمل' : 'Career / Job Opportunity'}</option>
                      <option>{isAr ? 'استفسار عام' : 'General Inquiry'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {isAr ? 'تفاصيل الرسالة' : 'Message Details'} *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder={isAr ? 'اكتب تفاصيل استفسارك أو متطلبات العمل هنا...' : 'Write your inquiry or project details here...'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-slate-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
                >
                  <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
