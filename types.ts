export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface CourseItem {
  title: LocalizedString;
  provider: LocalizedString;
  badge?: string;
}

export interface MetricItem {
  label: LocalizedString;
  value: string;
  subtext: LocalizedString;
}

export interface WorkflowStep {
  step: string;
  title: LocalizedString;
  action: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  industry: LocalizedString;
  clientType: LocalizedString;
  businessProblem: LocalizedString;
  approach: LocalizedString;
  architecture: LocalizedString;
  tools: string[];
  impact: LocalizedString;
  metrics: {
    kpi: string;
    label: LocalizedString;
  }[];
  sqlOrDaxSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  imageUrl: string;
  featured?: boolean;
  fileAttachmentUrl?: string; // Optional: Link to uploaded file / PDF / Sheet / Dashboard
  fileAttachmentLabel?: LocalizedString;
  galleryImages?: string[];
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  deliverables: LocalizedString[];
  idealFor: LocalizedString;
  timeline: LocalizedString;
}

export interface Experience {
  company: LocalizedString;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedString[];
}

export interface Certification {
  title: LocalizedString;
  issuer: string;
  date: string;
  credentialId: string;
  badgeUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: LocalizedString;
  author: LocalizedString;
  role: LocalizedString;
  company: LocalizedString;
}
