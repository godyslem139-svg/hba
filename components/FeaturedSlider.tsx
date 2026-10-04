'use client';

import { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "أحد أبرز استشاريي الباطنة والقلب في المنطقة",
    description: "بصفته واحدة من الكفاءات الطبية المتميزة في مجال أمراض الباطنة والقلب والأوعية الدموية، تتميز د. هالة نجيب محمد سليم برؤية تشخيصية دقيقة وأحدث الأساليب العلاجية المعتمدة. تسعى دائماً لتقديم رعاية صحية متكاملة ومخصصة لكل مريض لضمان أفضل نتائج تعزز جودة حياته."
  },
  {
    id: 2,
    title: "رعاية صحية شاملة ومتابعة دقيقة",
    description: "بفضل خبرتها الواسعة وسجلها الحافل بالرعاية المتميزة، نجحت الدكتورة في مساعدة العديد من المرضى في السيطرة على الأمراض المزمنة، أمراض الجهاز الهضمي، وصحة القلب. سواء كنت تحتاج إلى متابعة دورية أو تقييم طبي دقيق، فالهدف دائماً هو الاطمئنان على صحتك بأمان تام."
  }
];

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[650px] w-full flex items-center justify-center overflow-hidden text-right" dir="rtl">
      
      {/* 1. الصورة الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/k.webp"
          alt="د. هالة نجيب محمد سليم - أمراض الباطنة والقلب والأوعية الدموية"
          title="عيادة د. هالة نجيب محمد سليم لاستشاري أمراض الباطنة والقلب"
          fill
          className="object-cover object-center filter brightness-90"
          priority
        />
        {/* طبقة العتمة الداكنة */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90" />
      </div>

      {/* 2. الإطار والخطوط البيضاء المتقطعة (Grid Blueprint Effect) */}
      <div className="absolute inset-8 md:inset-12 border border-dashed border-white/30 z-10 pointer-events-none flex flex-col justify-between">
        {/* خط طولي متقطع في المنتصف (اختياري لمزيد من الدقة) */}
        <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-white/10 hidden md:block" />
      </div>

      {/* 3. محتوى السكشن */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
          {slides[currentSlide].title}
        </h2>

        <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-light drop-shadow-md">
          {slides[currentSlide].description}
        </p>

        <div>
          <a
            href="https://wa.me/966537028009"
            target="_blank"
            rel="noopener noreferrer"
            title="احجز موعد استشارتك الطبية المباشرة مع الدكتورة هالة نجيب عبر واتساب"
            className="inline-block px-10 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-2xl hover:bg-[#5bc0de] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            احجز استشارتك الآن
          </a>
        </div>

        {/* مؤشرات النقاط */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              title={`الانتقال إلى الشريحة التعريفية رقم ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-[#5bc0de]' : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* أزرار التنقل يمين ويسار */}
      <button
        onClick={prevSlide}
        title="الانتقال إلى الشريحة السابقة"
        aria-label="Previous Slide"
        className="absolute right-12 md:right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0082a9]/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:bg-[#0082a9] transition-all cursor-pointer"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        title="الانتقال إلى الشريحة التالية"
        aria-label="Next Slide"
        className="absolute left-12 md:left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0082a9]/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:bg-[#0082a9] transition-all cursor-pointer"
      >
        →
      </button>

    </section>
  );
}