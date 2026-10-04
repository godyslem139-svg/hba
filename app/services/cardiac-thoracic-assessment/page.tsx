import { Metadata } from 'next';
import Image from 'next/image';

// إعدادات الـ SEO والميتا ديسكربشن الخاصة بالصفحة
export const metadata: Metadata = {
  title: 'تقييم حالات القلب والصدر | د. هالة نجيب محمد سليم',
  description: 'احصلي على تقييم شامل ومتقدم لحالات القلب، آلام الصدر، واضطرابات الدورة الدموية بأعلى معايير الدقة والرعاية الطبية مع الدكتورة هالة نجيب.',
  keywords: ['تقييم حالات القلب', 'أمراض الصدر', 'آلام الصدر', 'فحص القلب الشامل', 'الدكتورة هالة نجيب'],
  openGraph: {
    title: 'تقييم حالات القلب والصدر | د. هالة نجيب محمد سليم',
    description: 'تقييم شامل ومتقدم لحالات القلب والصدر والاطمئنان على كفاءة الدورة الدموية بأحدث المعايير الطبية.',
    url: '/services/cardiac-thoracic-assessment',
    siteName: 'عيادة الدكتورة هالة نجيب محمد سليم',
    images: [{ url: '/Assessment of cardiac and thoracic cases.webp', width: 1200, height: 630, alt: 'تقييم حالات القلب والصدر' }],
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function CardiacThoracicAssessmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/cardiac-thoracic-assessment.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/35 backdrop-blur-md shadow-lg">
            رعاية القلب والأوعية الدموية المتقدمة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            تقييم حالات القلب والصدر بدقة واطمئنان
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            اطمئني على صحة قلبك وشرايينك، وتقييم آلام الصدر ومشاكل الجهاز التنفسي بإشراف الدكتورة هالة نجيب محمد سليم.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجزي استشارتك الخاصة الآن عبر واتساب"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all duration-300 gap-2"
            >
              <span>احجزي استشارتك الخاصة الآن</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. السكشن الثاني: نظرة عامة وتعريف الخدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              صحة القلب والشرايين
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              أهمية الفحص والتقييم المبكر لحالات القلب والصدر
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              آلام الصدر، خفقان القلب، وضيق التنفس أعراض تستوجب الفحص الفوري والدقيق. نقدم في عيادتنا تقييماً شاملاً لحالات القلب والصدر، واكتشاف أي اختلالات وظيفية في وقت مبكر لضمان حماية صحتك العامة ومنع أي مضاعفات.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/Assessment of cardiac and thoracic cases.webp" alt="تقييم حالات القلب والصدر" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: الحالات التي يتم تقييمها */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              تشخيص دقيق
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي الأعراض والحالات التي يتم تقييمها في العيادة؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🫀</div>
              <h3 className="text-xl font-bold text-slate-900">آلام الصدر وخفقان القلب</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تقييم أسباب آلام الصدر واضطرابات وعدم انتظام ضربات القلب.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🌬️</div>
              <h3 className="text-xl font-bold text-slate-900">ضيق التنفس وأمراض الصدر</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">فحص حالات ضيق التنفس المزمن ومتابعة أمراض الجهاز التنفسي والتهابات الشعب.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">📈</div>
              <h3 className="text-xl font-bold text-slate-900">متابعة مضاعفات الضغط والدهون</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">الاطمئنان على كفاءة الشرايين وعضلة القلب لدى مرضى الضغط والسكري والكوليسترول.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: خطوات التقييم والفحص */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border inline-block">
              خطوات الفحص الطبي
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              خطوات دقيقة لتقييم كفاءة القلب والشرايين
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-slate-900 text-lg">أخذ التاريخ المرضي الشامل</h3>
              <p className="text-slate-600 text-sm font-light">مناقشة الأعراض، التاريخ العائلي، ونمط حياة المريض بدقة.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-slate-900 text-lg">الفحص السريري والتشخيص</h3>
              <p className="text-slate-600 text-sm font-light">فحص نبضات القلب، قياس ضغط الدم، وتقييم أصوات الصدر والرئتين.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-slate-900 text-lg">الخطة العلاجية والوقائية</h3>
              <p className="text-slate-600 text-sm font-light">توجيه المريض للفحوصات التخصصية أو وصف الأدوية المناسبة للاستقرار.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. السكشن الخامس: لماذا تختار عيادة د. هالة نجيب؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border inline-block">
              التميز والخبرة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا تختار عيادة د. هالة نجيب لتقييم حالات القلب والصدر؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">خبرة متقدمة في أمراض القلب</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">كفاءة عالية في تشخيص وتقييم خطورة آلام الصدر واضطرابات الشرايين.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">رعاية سريعة وآمنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">سرعة في التقييم والتدخل الطبي المبكر لحماية صحة المريض.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">متابعة مستمرة ودقيقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">اهتمام بالغ بمراجعة الفحوصات والاطمئنان التام على استقرار الحالة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: إرشادات صحية للقلب والصدر */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            إرشادات هامة للحفاظ على صحة القلب والشرايين
          </h2>
          <ul className="space-y-4 text-slate-700 bg-slate-50 p-8 rounded-3xl border shadow-sm">
            <li className="flex items-center gap-3">✅ الحفاظ على مستويات ضغط الدم والسكر ضمن النطاق الآمن بانتظام.</li>
            <li className="flex items-center gap-3">✅ تجنب التدخين والتعرض للتدخين السلبي لحماية الرئتين والشرايين.</li>
            <li className="flex items-center gap-3">✅ الإقلال من الدهون المهدرجة والملح والتركيز على الأطعمة الغنية بالألياف.</li>
            <li className="flex items-center gap-3">✅ ممارسة رياضة المشي المنتظم لتنشيط الدورة الدموية وتقوية عضلة القلب.</li>
          </ul>
        </div>
      </section>

      {/* 7. السكشن السابع: الأسئلة الشائعة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول تقييم حالات القلب والصدر
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">متى يجب عليّ استشارة الطبيب فوراً بشأن آلام الصدر؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">إذا كان الألم مصحوباً بضيق في التنفس، تعرق بارد، ألم يمتد للذراع الأيسر أو الفك، فيجب التوجه للفحص الطبي الفوري.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">ما هي أسباب خفقان القلب المفاجئ؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">قد ينتج عن القلق والتوتر، الإكثار من المنبهات، أو وجود اضطراب بسيط في كهرباء القلب يستوجب التقييم.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل أمراض الصدر المزمنة تؤثر على عضلة القلب؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">نعم، بعض أمراض الرئة المزمنة قد تضع جهداً إضافياً على الجانب الأייمن من القلب، مما يحتاج متابعة مشتركة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. السكشن الثامن: الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            اطمئني على صحة قلبك وشرايينك اليوم بكل ثقة وأمان
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم لتقييم صحة القلب والصدر.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجزي استشارتك الخاصة الآن عبر واتساب"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-[#0082a9] font-bold text-base shadow-2xl hover:bg-slate-100 transition-all duration-300"
            >
              احجزي استشارتك الخاصة الآن ←
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}