import type { Metadata } from 'next';
import Image from 'next/image';

// تعريف الميتا داتا الخاصة بالصفحة
export const metadata: Metadata = {
  title: 'تشخيص ومتابعة أمراض المعدة والقولون والارتجاع | د. هالة نجيب محمد سليم',
  description: 'احصلي على تشخيص دقيق وعلاج متقدم لاضطرابات المعدة، القولون العصبي، والارتجاع المريئي بأعلى معايير الرعاية الطبية مع الدكتورة هالة نجيب استشاري أمراض الباطنة.',
  keywords: ['أمراض المعدة', 'القولون العصبي', 'الارتجاع المريئي', 'تشخيص الجهاز الهضمي', 'الدكتورة هالة نجيب'],
  alternates: {
    canonical: '/services/stomach-colon-acid-reflux',
  },
  openGraph: {
    title: 'تشخيص ومتابعة أمراض المعدة والقولون والارتجاع | د. هالة نجيب محمد سليم',
    description: 'احصلي على تشخيص دقيق وعلاج متقدم لاضطرابات المعدة والقولون والارتجاع المريئي بأعلى معايير الرعاية.',
    url: '/services/stomach-colon-acid-reflux',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function StomachColonAcidRefluxPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع صورة stomach-colon-acid-reflux.webp */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src="/stomach-colon-acid-reflux.webp"
          alt="تشخيص ومتابعة أمراض المعدة والقولون والارتجاع مع د. هالة نجيب"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            رعاية الجهاز الهضمي المتقدمة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            تشخيص ومتابعة أمراض المعدة والقولون والارتجاع
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            تخلصي من آلام المعدة المزعجة، أعراض القولون، وحرقة الارتجاع المريئي مع خطط علاجية دقيقة ومخصصة بإشراف الدكتورة هالة نجيب محمد سليم.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجز استشارتك الخاصة لعلاج أمراض المعدة والقولون عبر واتساب"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>احجز استشارتك الخاصة الآن</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة وتريف الخدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا التشخيص الدقيق للجهاز الهضمي؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              الحل الجذري لاضطرابات المعدة والقولون والارتجاع المريئي
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تُعد مشاكل الجهاز الهضمي والقولون العصبي والارتجاع من أكثر الحالات شيوعاً التي تؤثر على جودة الحياة اليومية للمريض. نعتمد في عيادتنا على تشخيص الأسباب الجذرية وتقديم بروتوكولات علاجية متقدمة تريح الجهاز الهضمي وتستعيد انتظام وظائفه بكل أمان.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image
              src="/stomach-colon-acid-reflux.webp"
              alt="صورة توضيحية لخدمة تشخيص ومتابعة أمراض المعدة والقولون والارتجاع"
              title="تشخيص ومتابعة أمراض المعدة والقولون والارتجاع"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. مميزات الإجراء */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              مميزات الرعاية المتكاملة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ماذا تضمن لك خطة علاج الجهاز الهضمي والقولون؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">تخفيف الآلام والانتفاخات</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">السيطرة الفورية على التقلصات، الغازات، والشعور المستمر بالحموضة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">تشخيص السبب الحقيقي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تحديد المسبب بدقة (التهابات، ارتجاع، أو تهيج قولوني) لضمان علاج نهائي.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">استقرار جودة الحياة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">الاستمتاع بتناول الطعام وهضم مريح دون إزعاج أو أعراض مفاجئة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. خطوات العمل والدقة الطبية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              خطوات دقيقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              كيف تتم متابعة حالات المعدة والقولون في العيادة؟
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نضمن لك تشخيصاً منضبطاً وبرنامجاً علاجياً متكاملاً يتناسب مع طبيعة وحالة جهازك الهضمي.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">1. الفحص الإكلينيكي والتقييم الشامل</h3>
              <p className="text-sm text-slate-600 font-light">مراجعة دقيقة للأعراض والتاريخ الغذائي والمرضي للمريض.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">2. تصميم الخطة العلاجية والدوائية</h3>
              <p className="text-sm text-slate-600 font-light">وصف الأدوية المنظمة للحموضة والمخففة لتقلصات القولون بأمان.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">3. الإرشادات الغذائية والمتابعة</h3>
              <p className="text-sm text-slate-600 font-light">توجيهات مخصصة لتجنب الأغذية المهيجة وضمان استقرار الحالة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. الحالات والمشاكل التي يتم علاجها */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              أبرز الحالات المرضية التي يتم تشخيصها وعلاجها
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نقدم حلولاً طبية متخصصة لمختلف أمراض الجهاز الهضمي العلوية والسفلية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">الارتجاع المريئي والحرقة</h3>
              <p className="text-slate-600 text-sm font-light">علاج ارتداد حمض المعدة للمريء والتخلص من الشعور بالحرقان المستمر.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">القولون العصبي (IBS)</h3>
              <p className="text-slate-600 text-sm font-light">السيطرة على الانتفاخات، التقلصات، وتأرجح الإخراج الناتج عن القولون.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">التهابات المعدة وعسر الهضم</h3>
              <p className="text-slate-600 text-sm font-light">علاج قرح المعدة، الجرثومة الحلزونية (بكتيريا المعدة)، وعسر الهضم المزمن.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. لماذا دكتورة هالة نجيب هي الخيار الأفضل؟ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border inline-block">
              التميز المطلق
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا تختار عيادة د. هالة نجيب لمتابعة أمراض المعدة والقولون؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">خبرة واسعة في الباطنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">فهم متعمق لتشخيص أعراض الجهاز الهضمي بدقة تامة ومنع تكرارها.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">بروتوكولات علاجية حديثة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">استخدام أحدث الأدوية والعلاجات المعتمدة لضمان أسرع شفاء.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">رعاية واهتمام بالغ</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">متابعة دقيقة لحالة المريض وتعديل الإرشادات حتى الاستقرار التام.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات هامة لمرضى المعدة والقولون */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            نصائح وإرشادات هامة لصحة المعدة والقولون
          </h2>
          <ul className="space-y-4 text-slate-700 bg-white p-8 rounded-3xl border shadow-sm">
            <li className="flex items-center gap-3">✅ تناول الوجبات على دفعات صغيرة ومتكررة لتجنب إرهاق المعدة.</li>
            <li className="flex items-center gap-3">✅ الابتعاد عن الأطعمة الحارة، الدسمة، والوجبات السريعة المهيجة للارتجاع والقولون.</li>
            <li className="flex items-center gap-3">✅ تجنب النوم مباشرة بعد الأكل بمدة لا تقل عن 3 ساعات لمنع الارتجاع المريئي.</li>
            <li className="flex items-center gap-3">✅ شرب كميات كافية من الماء والابتعاد عن التوتر والقلق العصبي.</li>
          </ul>
        </div>
      </section>

      {/* 8. الأسئلة الشائعة (FAQ) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول أمراض المعدة والقولون والارتجاع
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">ما هو الفرق بين أعراض القولون العصبي وأمراض المعدة؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">أعراض المعدة تتركز في الجزء العلوي (حموضة، ألم فم المعدة)، بينما يتركز القولون العصبي في آلام البطن السفلية، الانتفاخات، وتغير حركة الإخراج.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">كيف يمكنني التخلص النهائي من الارتجاع المريئي؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">بالالتزام بالخطة العلاجية لتقليل حموضة المعدة، وتجنب العادات الخاطئة مثل النوم بعد الأكل والأطعمة الحارة.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">هل للتوتر النفسي علاقة بتهيج القولون؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">نعم تماماً، القلق والتوتر العصبي يعتبران من أبرز محفزات تهيج القولون العصبي وظهور أعراضه المزعجة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            مستعد للتخلص من آلام المعدة والقولون والتمتع بصحة هضمية ممتازة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجز موعد استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم وابدأ رحلة التعافي والراحة.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجز استشارتك الخاصة الآن عبر واتساب"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-[#0082a9] font-bold text-base shadow-2xl hover:bg-slate-100 transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن ←
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}