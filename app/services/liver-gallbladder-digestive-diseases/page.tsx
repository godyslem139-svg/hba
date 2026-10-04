import { Metadata } from 'next';
import Image from 'next/image';

// إعدادات الـ SEO والميتا ديسكربشن الخاصة بالصفحة
export const metadata: Metadata = {
  title: 'أمراض الكبد والمرارة والجهاز الهضمي | د. هالة نجيب محمد سليم',
  description: 'احصلي على رعاية متقدمة وتشخيص دقيق لأمراض الكبد، حصوات واهتهابات المرارة، واضطرابات الجهاز الهضمي بأعلى معايير الرعاية الطبية مع الدكتورة هالة نجيب.',
  keywords: ['أمراض الكبد', 'أمراض المرارة', 'الجهاز الهضمي', 'تشخيص الكبد والمرارة', 'الدكتورة هالة نجيب'],
  openGraph: {
    title: 'أمراض الكبد والمرارة والجهاز الهضمي | د. هالة نجيب محمد سليم',
    description: 'تشخيص وعلاج أمراض الكبد والمرارة والجهاز الهضمي بأحدث البروتوكولات الطبية الآمنة.',
    url: '/services/liver-gallbladder-digestive-diseases',
    siteName: 'عيادة الدكتورة هالة نجيب محمد سليم',
    images: [{ url: '/liver-gallbladder-digestive-diseases.webp', width: 1200, height: 630, alt: 'أمراض الكبد والمرارة والجهاز الهضمي' }],
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function LiverGallbladderPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. السكشن الأول: الهيرو مع صورة liver-gallbladder-digestive-diseases.webp */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src="/liver-gallbladder-digestive-diseases.webp"
          alt="أمراض الكبد والمرارة والجهاز الهضمي مع د. هالة نجيب"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/35 backdrop-blur-md shadow-lg">
            رعاية الكبد والجهاز الهضمي المتقدمة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            أمراض الكبد والمرارة والجهاز الهضمي
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            تشخيص دقيق وعلاج متقدم لاضطرابات الكبد، التهابات وحصوات المرارة، ومشاكل الجهاز الهضمي بإشراف الدكتورة هالة نجيب محمد سليم.
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
              صحة الكبد والجهاز الهضمي
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              أهمية المتابعة الدقيقة لصحة الكبد والمرارة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              يُعتبر الكبد العضو الحيوي المسؤول عن تنقية الجسم وإدارة التمثيل الغذائي، بينما تلعب المرارة دوراً أساسياً في الهضم. نقدم في عيادتنا تشخيصاً مبكراً ورعاية شاملة لمشاكل الكبد، الدهون، والتهابات الحصوات لضمان استقرار وظائف الجسم بأعلى معايير الأمان.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/liver-gallbladder-digestive-diseases.webp" alt="أمراض الكبد والمرارة" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: الحالات التي يتم علاجها */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              تخصصات دقيقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي الحالات والأمراض التي يتم متابعتها وعلاجها؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🩺</div>
              <h3 className="text-xl font-bold text-slate-900">الكبد الدهني وتليفات الكبد</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تقييم ومتابعة حالات الكبد الدهني واختلالات وظائف الكبد وضع خطط علاجية لإدارتها.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">⚡</div>
              <h3 className="text-xl font-bold text-slate-900">حصوات والتهابات المرارة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تشخيص آلام البطن العلوية المرتبطة بالمرارة والتهابات القنوات المرارية بدقة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🌿</div>
              <h3 className="text-xl font-bold text-slate-900">اضطرابات الجهاز الهضمي العلوي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">معالجة اضطرابات الهضم والامتصاص المرتبطة بإفرازات الكبد والمرارة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: خطوات التشخيص والمتابعة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border inline-block">
              خطوات الإجراء والتشخيص
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              خطوات دقيقة لتقييم صحة الكبد والجهاز الهضمي
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-slate-900 text-lg">التحاليل والفحوصات المخبرية</h3>
              <p className="text-slate-600 text-sm font-light">إجراء اختبارات وظائف الكبد الشاملة وتحليلات الدم المرتبطة.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-slate-900 text-lg">التقييم الإكلينيكي والتشخيص</h3>
              <p className="text-slate-600 text-sm font-light">دراسة الفحوصات والأعراض لتحديد المشكلة بدقة في الكبد أو المرارة.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-slate-900 text-lg">الخطة العلاجية والمتابعة</h3>
              <p className="text-slate-600 text-sm font-light">وضع البرنامج الدوائي والغذائي المناسب لضمان تحسن الوظائف الحيوية.</p>
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
              لماذا تختار عيادة د. هالة نجيب لمتابعة أمراض الكبد والجهاز الهضمي؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">خبرة متقدمة في الباطنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">دراسة دقيقة لحالة الكبد ووظائفه الحيوية بدقة منضبطة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">رعاية صحية آمنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">بروتوكولات علاجية حديثة تضمن استقرار الحالة ومنع المضاعفات.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">متابعة مستمرة ودقيقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">اهتمام بالغ بكل تفاصيل الفحوصات والتحاليل الدورية للمريض.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: إرشادات لصحة الكبد والمرارة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            إرشادات هامة للحفاظ على صحة الكبد والمرارة
          </h2>
          <ul className="space-y-4 text-slate-700 bg-slate-50 p-8 rounded-3xl border shadow-sm">
            <li className="flex items-center gap-3">✅ تقليل الدهون المشبعة والأطعمة المقلية لحماية الكبد والمرارة من الإجهاد.</li>
            <li className="flex items-center gap-3">✅ الحرص على شرب كميات وفيرة من الماء لتعزيز وظائف التخلص من السموم.</li>
            <li className="flex items-center gap-3">✅ تجنب تناول الأدوية ومسكنات الألم عشوائياً دون استشارة طبية.</li>
            <li className="flex items-center gap-3">✅ الالتزام بالفحوصات الدورية لوظائف الكبد في حال وجود أمراض مزمنة.</li>
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
              الأسئلة الشائعة حول أمراض الكبد والمرارة والجهاز الهضمي
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">ما هي أعراض الإصابة بالكبد الدهني؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">غالباً لا يسبب أعراضاً واضحة في البداية، ولكن قد يصاحبه شعور خفيف بالإرهاق أو عدم الراحة في الجانب الأيمن العلوي من البطن.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">كيف تؤثر حصوات المرارة على الجهاز الهضمي؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">قد تسبب آلاماً حادة بعد تناول وجبات دسمة وغنية بالدهون، بالإضافة إلى عسر الهضم والانتفاخات.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل يمكن علاج الكبد الدهني كلياً؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">نعم، بالالتزام بخطة إنقاص الوزن، تعديل النظام الغذائي، ومتابعة العلاج الطبي بانتظام.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. السكشن الثامن: الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            اطمئني على صحة كبدك وجهازك الهضمي اليوم بكل ثقة وأمان
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم لضمان الرعاية الصحية المتكاملة.
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