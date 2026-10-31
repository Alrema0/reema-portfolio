import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Download,
  Printer,
  Cpu,
  Globe,
  Loader2,
  CheckCircle2,
  FileText,
  Layers,
  Briefcase,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { domToCanvas, waitUntilLoad } from 'modern-screenshot';
import { useLanguage } from '../context/LanguageContext';
import PortfolioPdfDocument from './PortfolioPdfDocument';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language, toggleLanguage, isAr } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressText, setProgressText] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const previewScrollRef = useRef<HTMLDivElement | null>(null);
  const pdfCaptureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsGenerating(false);
      setProgressText('');
      setDownloadSuccess(false);
      setErrorMessage('');
      document.body.classList.remove('printing-resume');
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isGenerating) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('printing-resume');
    };
  }, [isOpen, isGenerating, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (sectionId: string) => {
    const container = previewScrollRef.current;
    if (!container) return;
    const target = container.querySelector(`#${sectionId}`) as HTMLElement | null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const ensureImagesReady = async (rootEl: HTMLElement) => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready.catch(() => undefined);
    }
    await waitUntilLoad(rootEl, { timeout: 15000 }).catch(() => undefined);

    const images = Array.from(rootEl.querySelectorAll('img'));
    await Promise.all(
      images.map(async (img) => {
        if (!img.complete) {
          await new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        }
        if (typeof img.decode === 'function') {
          await img.decode().catch(() => undefined);
        }
      })
    );
  };

  const handleDownloadPdf = async () => {
    if (isGenerating) return;
    const captureRoot = pdfCaptureRef.current;
    if (!captureRoot) return;

    setIsGenerating(true);
    setDownloadSuccess(false);
    setErrorMessage('');

    try {
      setProgressText(isAr ? 'جاري تجهيز الخطوط والصور...' : 'Preparing fonts & images...');
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );
      await ensureImagesReady(captureRoot);

      const pageElements = Array.from(
        captureRoot.querySelectorAll<HTMLElement>('[data-pdf-page]')
      );

      if (pageElements.length === 0) {
        throw new Error('No pages found for PDF export');
      }

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pageWidthMm = 210;
      const pageHeightMm = 297;

      for (let i = 0; i < pageElements.length; i++) {
        const pageEl = pageElements[i];
        setProgressText(
          isAr
            ? `جاري إنشاء ملف PDF (${i + 1} / ${pageElements.length})...`
            : `Generating PDF (${i + 1} / ${pageElements.length})...`
        );

        const canvas = await domToCanvas(pageEl, {
          scale: 2,
          backgroundColor: '#ffffff',
          timeout: 20000,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.94);
        const ratio = Math.min(pageWidthMm / canvas.width, pageHeightMm / canvas.height);
        const renderW = canvas.width * ratio;
        const renderH = canvas.height * ratio;
        const offsetX = (pageWidthMm - renderW) / 2;
        const offsetY = 0;

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(imgData, 'JPEG', offsetX, offsetY, renderW, renderH, undefined, 'FAST');
      }

      const fileName = isAr
        ? 'Reema_Alfaifi_Portfolio_CV_AR.pdf'
        : 'Reema_Alfaifi_Portfolio_CV_EN.pdf';

      pdf.save(fileName);
      setDownloadSuccess(true);
      setProgressText('');
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('PDF generation failed:', err);
      setErrorMessage(
        isAr
          ? 'تعذّر إنشاء ملف PDF تلقائياً، يمكنك المحاولة مجدداً أو استخدام خيار الطباعة.'
          : 'Could not generate PDF automatically. Please retry or use Print.'
      );
      setProgressText('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    document.body.classList.add('printing-resume');
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.body.classList.remove('printing-resume');
      }, 500);
    }, 100);
  };

  return createPortal(
    <>
      {/* Interactive Modal Viewer */}
      <div
        className="resume-modal-backdrop fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 animate-fadeIn"
        onClick={() => !isGenerating && onClose()}
      >
        <div
          dir={isAr ? 'rtl' : 'ltr'}
          className="relative bg-slate-100 w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-300 overflow-hidden h-[94vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Action Bar */}
          <div className="bg-slate-950 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white shrink-0">
                <Cpu size={18} />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-black tracking-wide text-white">
                  {isAr
                    ? 'السيرة الذاتية وملف الأعمال الشامل (PDF)'
                    : 'Full CV & Portfolio Dossier (PDF)'}
                </h2>
                <p className="text-[11px] text-slate-400">
                  {isAr
                    ? '7 صفحات مرتبة تشمل الخبرات، الخدمات، وجميع المشاريع الـ 7 مع الصور والشرح'
                    : '7 structured pages covering CV, services, and all 7 projects with visuals'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Language Switcher inside Modal */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
                title={isAr ? 'Switch PDF to English' : 'تحويل الملف إلى العربية'}
              >
                <Globe size={14} className="text-blue-400" />
                <span>{isAr ? 'English PDF' : 'نسخة عربية'}</span>
              </button>

              {/* Print Option */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
              >
                <Printer size={14} />
                <span>{isAr ? 'طباعة' : 'Print'}</span>
              </button>

              {/* Primary Direct PDF Download Button */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleDownloadPdf}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black transition-all shadow-md shadow-blue-600/20 disabled:opacity-75 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>{progressText || (isAr ? 'جاري التحميل...' : 'Generating...')}</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <CheckCircle2 size={15} />
                    <span>{isAr ? 'تم تحميل PDF بنجاح' : 'PDF Downloaded'}</span>
                  </>
                ) : (
                  <>
                    <Download size={15} />
                    <span>{isAr ? 'تحميل ملف PDF' : 'Download PDF'}</span>
                  </>
                )}
              </button>

              {/* Close Modal */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors disabled:opacity-50"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Section Jump Bar */}
          <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 shrink-0 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">
                {isAr ? 'انتقال سريع:' : 'Quick Jump:'}
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('pdf-section-cv')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs transition-colors shrink-0"
              >
                <Briefcase size={13} />
                <span>{isAr ? 'النبذة والخبرات والتعليم' : 'Profile & Experience'}</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('pdf-section-services')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs transition-colors shrink-0"
              >
                <Layers size={13} />
                <span>{isAr ? 'المنهجية والمهارات والخدمات' : 'Skills & Services'}</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('pdf-section-projects')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs transition-colors shrink-0"
              >
                <FileText size={13} />
                <span>{isAr ? 'المشاريع مع الصور والشرح (7)' : 'Projects & Visuals (7)'}</span>
              </button>
            </div>

            {errorMessage && (
              <span className="text-xs font-semibold text-red-600">{errorMessage}</span>
            )}
          </div>

          {/* Scrollable Structured Pages Preview */}
          <div
            ref={previewScrollRef}
            className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-100"
          >
            <PortfolioPdfDocument language={language} mode="preview" />
          </div>

          {/* Bottom Sticky Bar */}
          <div className="bg-white px-4 sm:px-6 py-3 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              {isAr
                ? 'يتم حفظ الملف بصيغة A4 عالية الدقة مع كامل الصور والرسوم البيانية والشروحات.'
                : 'Exports as a high-resolution multi-page A4 PDF with all charts, screenshots, and explanations.'}
            </span>

            <div className="flex items-center gap-2.5 ms-auto">
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleDownloadPdf}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-sm disabled:opacity-75 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>{progressText || (isAr ? 'جاري التحميل...' : 'Generating...')}</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>
                      {isAr
                        ? 'تحميل السيرة وملف المشاريع (PDF)'
                        : 'Download Full Portfolio & CV (PDF)'}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={isGenerating}
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Fixed-Width A4 Container for Crisp PDF Rasterization & Print */}
      <div
        ref={pdfCaptureRef}
        aria-hidden="true"
        className="resume-print-container fixed top-0 left-[-14000px] w-[794px] bg-white pointer-events-none select-none"
      >
        <PortfolioPdfDocument language={language} mode="pdf" />
      </div>
    </>,
    document.body
  );
};

export default ResumeModal;
