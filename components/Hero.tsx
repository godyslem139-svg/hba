'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-slate-900" dir="rtl">
      {/* خلفية الفيديو المحلي من مجلد public */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* تدرج لوني فخم من ألوان الهوية */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#0082a9]/50 to-transparent z-10" />

      {/* محتوى الهيرو */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white my-auto">
        <span className="inline-block py-1.5 px-5 mb-6 rounded-full bg-[#5bc0de]/20 backdrop-blur-md border border-[#5bc0de]/40 text-sm font-medium tracking-wide uppercase shadow-lg">
          رعاية صحية متكاملة وخبرة متقدمة
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          د. هالة نجيب محمد سليم <br />
          <span className="text-[#5bc0de] drop-shadow-md">استشاري أمراض الباطنة والقلب والأوعية الدموية</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-8 font-light leading-relaxed">
          نقدم رعاية طبية شاملة ومتميزة لمتابعة الأمراض المزمنة، الجهاز الهضمي، وصحة القلب بأحدث الطرق التشخيصية والعلاجية.
        </p>

        {/* عرض التخصصات والخدمات بشكل أنيق داخل قسم الهيرو */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 text-right text-sm">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>متابعة الأمراض المزمنة (سكر، ضغط، كوليسترول)</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>تشخيص أمراض المعدة والقولون والارتجاع</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>أمراض الكبد والمرارة والجهاز الهضمي</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>تقييم حالات القلب والصدر</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>أمراض الدم والمناعة</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-[#5bc0de] font-bold">✓</span>
            <span>تقييم الحالات الباطنية والتوجيه للتخصص المناسب</span>
          </div>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* زر الانتقال المباشر للواتساب بالحجز */}
          <a
            href="https://wa.me/966537028009"
            target="_blank"
            rel="noopener noreferrer"
            title="احجز موعد استشارتك الطبية الآن عبر واتساب"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer flex items-center justify-center gap-2.5"
          >
            <span>احجز استشارتك الآن</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </a>
          
          <Link
            href="#services"
            title="استعرض تفاصيل الخدمات الطبية المتاحة"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300 text-center"
          >
            استكشف الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}