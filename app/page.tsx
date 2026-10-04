import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedSlider from "@/components/FeaturedSlider";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: 'د. أحمد عبدالرحمن | استشاري جراحة التجميل وتنسيق القوام والليزر',
  description: 'احجز الآن مع الدكتور أحمد عبدالرحمن، استشاري جراحات التجميل وتنسيق القوام، نحت الجسم، شفط الدهون، وخدمات الليزر المتقدمة بأعلى معايير الأمان والفخامة.',
  keywords: [
    'دكتور أحمد عبدالرحمن',
    'جراحة تجميل',
    'تنسيق القوام',
    'نحت الجسم',
    'شفط الدهون',
    'عيادات التجميل مصر',
    'ليزر تجميلي'
  ],
  alternates: {
    canonical: 'https://ahmed-abdul-rahman.vercel.app',
  },
  openGraph: {
    title: 'د. أحمد عبدالرحمن | استشاري جراحة التجميل وتنسيق القوام والليزر',
    description: 'استشاري جراحات التجميل وتنسيق القوام، نحت الجسم، شفط الدهون، وخدمات الليزر المتقدمة.',
    url: 'https://ahmed-abdul-rahman.vercel.app',
    siteName: 'د. أحمد عبدالرحمن',
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