'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    title: "متابعة الأمراض المزمنة مثل السكر والضغط والكوليسترول",
    slug: "chronic-diseases-followup",
    description: "رعاية صحية متكاملة ومتابعة دقيقة لمستويات السكر، ضغط الدم، والدهون الثلاثية لضمان استقرار المؤشرات الحيوية وحماية الشرايين والقلب من المضاعفات.",
    image: "/Diabetes-blood-pressure-cholesterol.webp"
  },
  {
    title: "تشخيص ومتابعة أمراض المعدة والقولون والارتجاع",
    slug: "stomach-colon-acid-reflux",
    description: "حلول علاجية متقدمة ودقيقة للسيطرة على آلام المعدة، أعراض القولون العصبي، وحرقة الارتجاع المريئي لراحة الجهاز الهضمي وجودة حياة أفضل.",
    image: "/Pain conditions-colondisorders-acidreflux.webp"
  },
  {
    title: "أمراض الكبد والمرارة والجهاز الهضمي",
    slug: "liver-gallbladder-digestive-diseases",
    description: "تشخيص وعلاج اضطرابات الكبد الدهني، التهابات وحصوات المرارة، واضطرابات إفرازات الجهاز الهضمي بأحدث البروتوكولات الطبية الآمنة.",
    image: "/liver-gallbladder-digestive-systemdiseases.webp"
  },
  {
    title: "تقييم حالات القلب والصدر",
    slug: "cardiac-thoracic-assessment",
    description: "تقييم شامل ومتقدم لحالات آلام الصدر، خفقان القلب، وضيق التنفس للاطمئنان المبكر على كفاءة الدورة الدموية والجهاز التنفسي.",
    image: "/Assessment of cardiac and thoracic cases.webp"
  },
  {
    title: "أمراض الدم والمناعة",
    slug: "hematology-immunology",
    description: "تشخيص وعلاج فقر الدم (الأنيميا)، اضطرابات ومكونات الدم، ورفع كفاءة الجهاز المناعي لمقاومة التعب والإرهاق المستمر.",
    image: "/hematology-immunology.webp"
  },
  {
    title: "تقييم الحالات الباطنية وتوجيهها للتخصص المناسب عند الحاجة",
    slug: "internal-medicine-evaluation",
    description: "البوصلة الطبية لفك ألغاز الأعراض المتداخلة وتقديم تقييم باطني شامل مع التوجيه الدقيق والمباشر لأفضل استشاري تخصصي عند الحاجة.",
    image: "/evaluation-internal-medicine-cases.webp"
  }
];

export default function ServicesFullWidthSection() {
  return (
    <section id="services-full" className="py-24 px-6 bg-slate-50 text-right text-slate-900 relative overflow-hidden" dir="rtl">
      
      {/* خلفية جمالية متناسقة */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5bc0de]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0082a9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان السكشن الرئيسي */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20">
            الخدمات الطبية والتخصصات الشاملة
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            استكشف خدماتنا الطبية وتخصصاتنا بالتفصيل
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            تعرف على باقة رعاكتنا الطبية المتكاملة والمصممة خصيصاً لتلبية احتياجاتك الصحية بأعلى معايير الأمان والاحترافية بإشراف الدكتورة هالة نجيب.
          </p>
        </div>

        {/* عرض الخدمات بعرض السكشن بالكامل (صف واحد لكل خدمة بتصميم تبادلي) */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* صورة الخدمة (تتبادل الأماكن يميناً ويساراً حسب الفهرس زوجي/فردي) */}
              <div className={`relative h-72 lg:h-96 w-full overflow-hidden bg-slate-900 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image
                  src={service.image}
                  alt={`صورة توضيحية لخدمة ${service.title} مع الدكتورة هالة نجيب محمد سليم`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0082a9] text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-md">
                  خدمة طبية معتمدة VIP
                </div>
              </div>

              {/* تفاصيل الخدمة والنصوص */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-3">
                  <span className="text-[#0082a9] text-xs font-bold tracking-wider uppercase bg-[#5bc0de]/10 px-3 py-1 rounded-md inline-block">
                    رعاية صحية متقدمة
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-[#0082a9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* أزرار الإجراءات (الانتقال لصفحة الخدمة أو الحجز المباشر عبر واتساب) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    title={`اقرأ المزيد عن تفاصيل خدمة ${service.title}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-[#0082a9] transition-all duration-300"
                  >
                    اقرأ المزيد عن الخدمة ←
                  </Link>
                  
                  <a
                    href="https://wa.me/966537028009"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`احجز استشارتك الآن لخدمة ${service.title} عبر واتساب`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md hover:bg-emerald-700 transition-all duration-300 gap-2"
                  >
                    <span>حجز استشارة لهذه الخدمة</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
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