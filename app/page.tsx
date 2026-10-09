import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedSlider from "@/components/FeaturedSlider";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: 'د. هالة نجيب محمد سليم | استشاري أمراض الباطنة والقلب والأوعية الدموية',
  description: 'احجز الآن مع الدكتورة هالة نجيب محمد سليم، استشاري أمراض الباطنة والقلب والأوعية الدموية. رعاية طبية متكاملة لمتابعة الأمراض المزمنة، الجهاز الهضمي، وحالات القلب بأعلى معايير الأمان.',
  keywords: [
    'دكتورة هالة نجيب محمد سليم',
    'دكتورة هالة سليم',
    'استشاري باطنة',
    'طبيبة قلب وأوعية دموية',
    'متابعة السكر والضغط',
    'أمراض الجهاز الهضمي والكبد',
    'عيادة باطنة',
    'أمراض الدم والمناعة'
  ],
  alternates: {
    canonical: 'https://www.halaselim.com',
  },
  openGraph: {
    title: 'د. هالة نجيب محمد سليم | استشاري أمراض الباطنة والقلب',
    description: 'رعاية طبية متكاملة لمتابعة الأمراض المزمنة، الجهاز الهضمي، وحالات القلب بأعلى معايير الأمان.',
    url: 'https://www.halaselim.com',
    siteName: 'عيادة د. هالة سليم',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <AboutSection />
      <FeaturedSlider />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}