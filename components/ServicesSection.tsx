'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    title: "متابعة الأمراض المزمنة مثل السكر والضغط والكوليسترول",
    image: "/Diabetes-blood-pressure-cholesterol.webp",
    imageTitle: "صورة توضيحية لخدمة متابعة الأمراض المزمنة مع د. هالة نجيب محمد سليم",
    linkTitle: "اقرأ المزيد واعرف تفاصيل متابعة الأمراض المزمنة",
    slug: "/services/chronic-diseases-followup",
    span: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "تشخيص ومتابعة أمراض المعدة والقولون والارتجاع",
    image: "/Pain conditions-colondisorders-acidreflux.webp",
    imageTitle: "صورة توضيحية لخدمة تشخيص ومتابعة أمراض المعدة والقولون والارتجاع مع د. هالة نجيب",
    linkTitle: "اقرأ المزيد واعرف تفاصيل أمراض المعدة والقولون",
    slug: "/services/stomach-colon-acid-reflux",
    span: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "أمراض الكبد والمرارة والجهاز الهضمي",
    image: "/liver-gallbladder-digestive-systemdiseases.webp",
    imageTitle: "صورة توضيحية لخدمة أمراض الكبد والمرارة والجهاز الهضمي مع د. هالة نجيب",
    linkTitle: "اقرأ المزيد واعرف تفاصيل أمراض الكبد والجهاز الهضمي",
    slug: "/services/liver-gallbladder-digestive-diseases",
    span: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "تقييم حالات القلب والصدر",
    image: "/Assessment of cardiac and thoracic cases.webp",
    imageTitle: "صورة توضيحية لخدمة تقييم حالات القلب والصدر مع د. هالة نجيب",
    linkTitle: "اقرأ المزيد واعرف تفاصيل تقييم حالات القلب والصدر",
    slug: "/services/cardiac-thoracic-assessment",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "أمراض الدم والمناعة",
    image: "/hematology-immunology.webp",
    imageTitle: "صورة توضيحية لخدمة أمراض الدم والمناعة مع د. هالة نجيب",
    linkTitle: "اقرأ المزيد واعرف تفاصيل أمراض الدم والمناعة",
    slug: "/services/hematology-immunology",
    span: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "تقييم الحالات الباطنية وتوجيهها للتخصص المناسب عند الحاجة",
    image: "/evaluation-internal-medicine-cases.webp",
    imageTitle: "صورة توضيحية لخدمة تقييم الحالات الباطنية مع د. هالة نجيب",
    linkTitle: "اقرأ المزيد واعرف تفاصيل تقييم الحالات الباطنية",
    slug: "/services/internal-medicine-evaluation",
    span: "col-span-1 md:col-span-1 lg:col-span-2"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 text-right text-slate-900 relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5bc0de]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20">
            الخدمات الطبية والتخصصات
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            أبرز التخصصات والخدمات التي تقدمها الدكتورة
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            باقة متكاملة من خدمات الرعاية الصحية والتشخيص الدقيق لمتابعة الأمراض المزمنة وصحة القلب والجهاز الهضمي بأعلى معايير الأمان.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[20rem]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-[#5bc0de]/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(91,192,222,0.25)] hover:shadow-[0_20px_50px_rgba(91,192,222,0.5)] ${service.span}`}
            >
              <Image
                src={service.image}
                alt={`صورة توضيحية لخدمة ${service.title} مع الدكتورة هالة نجيب محمد سليم`}
                title={service.imageTitle}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-all duration-500" />

              {/* تأثير التوهج الداخلي والخارجي */}
              <div className="absolute inset-0 border-2 border-[#5bc0de]/50 group-hover:border-[#5bc0de] rounded-3xl transition-all duration-500 pointer-events-none shadow-[inset_0_0_25px_rgba(91,192,222,0.5)]" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-right z-20 space-y-3">
                <Link href={service.slug} title={service.linkTitle} className="block">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5bc0de] transition-colors drop-shadow-md">
                    {service.title}
                  </h3>
                </Link>
                
                <div className="pt-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <Link
                    href={service.slug}
                    title={service.linkTitle}
                    className="inline-flex items-center justify-center flex-1 py-2.5 rounded-xl bg-[#0082a9] text-white font-semibold text-xs shadow-lg hover:bg-[#5bc0de] transition-all"
                  >
                    تفاصيل الخدمة
                  </Link>
                  <a
                    href="https://wa.me/966537028009"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`احجز استشارتك الآن لخدمة ${service.title}`}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-lg hover:bg-emerald-700 transition-all"
                  >
                    حجز
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}