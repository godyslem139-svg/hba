import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'تقييم الحالات الباطنية وتوجيهها للتخصص المناسب | د. هالة نجيب محمد سليم',
  description: 'احصلي على تقييم شامل ومتقدم لكافة الحالات الباطنية، وتشخيص الأعراض المعقدة وتوجيهك للتخصص الدقيق عند الحاجة بأعلى معايير الرعاية مع الدكتورة هالة نجيب.',
  keywords: ['تقييم الحالات الباطنية', 'أمراض الباطنة العامة', 'التشخيص الطبي المتقدم', 'استشاري باطنة', 'الدكتورة هالة نجيب'],
  alternates: {
    canonical: '/services/internal-medicine-evaluation',
  },
  openGraph: {
    title: 'تقييم الحالات الباطنية وتوجيهها للتخصص المناسب | د. هالة نجيب محمد سليم',
    description: 'تقييم شامل لكافة الحالات الباطنية وتشخيص دقيق للأعراض مع التوجيه السليم للرعاية المتخصصة.',
    url: '/services/internal-medicine-evaluation',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function InternalMedicineEvaluationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع فيديو internal-medicine-evaluation.mp4 */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/internal-medicine-evaluation.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            التقييم الشامل والتشخيص المتقدم - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            تقييم الحالات الباطنية وتوجيهها للتخصص المناسب عند الحاجة
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استشاري أمراض الباطنة والقلب الدكتورة هالة نجيب تقدم لك تقييماً طبياً دقيقاً للأعراض المتداخلة وتوجيهك خطوة بخطوة للرعاية الأنسب.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجزي استشارتك الخاصة لتقييم الحالات الباطنية عبر واتساب"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>احجزي استشارتك الخاصة الآن</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/evaluation-internal-medicine-cases.webp"
              alt="تقييم الحالات الباطنية والتوجيه الطبي"
              title="تقييم الحالات الباطنية"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا التقييم الباطني الشامل؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              البوصلة الطبية الصحيحة لتشخيص الأعراض المعقدة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              كثير من الأعراض المتفرقة (كالإرهاق، آلام البطن، اضطرابات الضغط، أو التغيرات المفاجئة) قد تتبع تخصصات متعددة. يأتي دور استشاري الباطنة لفك هذه الألغاز التشخيصية، تقييم الحالة بصورة كلية، وتوجيهك للتخصص الدقيق فوراً لضمان عدم إهدار الوقت.
            </p>
          </div>
        </div>
      </section>

      {/* 3. سكشن الفيديو التوضيحي في منتصف الصفحة باستخدام internall-medicine-evaluation.mp4 */}
      <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#5bc0de] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#5bc0de]/30 inline-block">
              فيديو توضيحي تخصصي
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              كيف نحدد المشكلة الباطنية بدقة ونوجهك للطريق السليم؟
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              تعرفي من خلال الفيديو التوضيحي على أهمية الفحص الإكلينيكي الشامل في عيادة الدكتورة هالة نجيب وكيفية ربط الأعراض ببعضها للوصول للتشخيص السليم.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#5bc0de]/40 bg-slate-950">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/internall-medicine-evaluation.mp4" type="video/mp4" />
              متصفحك لا يدعم عرض الفيديو.
            </video>
          </div>
        </div>
      </section>

      {/* 4. مميزات التقنية والفوائد */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              فوائد متقدمة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ماذا يقدم لك التقييم الباطني الشامل؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">رؤية طبية شاملة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">ربط كافة الأعراض الجسدية ببعضها لمعرفة الجذر الأساسي للمشكلة الصحية.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">توفير الوقت والجهد</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">التوجيه المباشر للطبيب التخصصي المناسب لحالتك دون تجارب عشوائية.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">اطمئنان وراحة بال</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تشخيص دقيق يضع حدا للـقلق الناتج عن عدم معرفة أسباب الأعراض المستمرة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. معايير الأمان والرعاية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              خبرة استشارية واسعة في قراءة وتحليل الفحوصات
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              تعتمد الدكتورة هالة نجيب على الاستماع المتأني لشكوى المريض، فحص التاريخ المرضي العائلي والشخصي، ومراجعة كافة التحاليل السابقة لبناء صورة متكاملة عن الحالة الصحية.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/evaluation-internal-medicine-cases.webp"
              alt="العناية بالباطنة والتشخيص المتقدم"
              title="التشخيص المتقدم للحالات الباطنية"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. خطوات الجلسة (السكشن السادس) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">خطوات جلسة التقييم الباطني</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-[#0082a9]">1. الاستماع والتوثيق</h3>
              <p className="text-sm text-slate-600 font-light">تسجيل كافة الأعراض، التغيرات الجسمية، والأدوية الحالية.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-[#0082a9]">2. الفحص الإكلينيكي الشامل</h3>
              <p className="text-sm text-slate-600 font-light">فحص العلامات الحيوية، قياس الضغط، وتقييم الأجهزة الحيوية.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-[#0082a9]">3. التشخيص والتوجيه</h3>
              <p className="text-sm text-slate-600 font-light">تحديد خطة العلاج الباطني أو تحويل الحالة للتخصص الدقيق عند اللزوم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. مميزات عيادة د. هالة نجيب (السكشن السابع) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">لماذا تختارين عيادتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-3 text-[#0082a9]">خبرة استشارية متخصصة</h3>
              <p className="text-slate-600 text-sm font-light">رعاية طبية راقية ومتابعة دقيقة من الدكتورة هالة نجيب في كافة الحالات الباطنية.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-3 text-[#0082a9]">شبكة إحالة وتوجيه معتمدة</h3>
              <p className="text-slate-600 text-sm font-light">توجيه دقيق لأفضل الاستشاريين والتخصصات الفرعية عند احتياج الحالة لتدخل تخصصي دقيق.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. إرشادات ما بعد الجلسة (السكشن الثامن) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">تعليمات المتابعة بعد الاستشارة</h2>
          <ul className="space-y-4 text-slate-700 bg-white p-8 rounded-3xl border shadow-sm">
            <li className="flex items-center gap-3">✅ الالتزام بإجراء الفحوصات والتحاليل المطلوبة بدقة قبل جلسة المتابعة.</li>
            <li className="flex items-center gap-3">✅ تدوين أي أعراض جديدة أو تغيرات ملاحظة لعرضها على الطبيبة.</li>
            <li className="flex items-center gap-3">✅ الانتظام على خطة الأدوية الأولية الموصوفة لتحقيق الاستقرار المبدئي.</li>
          </ul>
        </div>
      </section>

      {/* 9. الأسئلة الشائعة (السكشن التاسع) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">الأسئلة الشائعة حول تقييم الحالات الباطنية</h2>
          <div className="space-y-4">
            <div className="border bg-slate-50/50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">متى أحتاج إلى زيارة استشاري أمراض باطنية؟</h3>
              <p className="text-sm text-slate-600 font-light">عند الشعور بأعراض عامة ومستمرة (إرهاق، ألم مبهم، اضطرابات هضمية، أو تذبذب الضغط والسكر) دون معرفة السبب المحدد.</p>
            </div>
            <div className="border bg-slate-50/50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">هل يتم تحويلي لتخصص آخر دائماً؟</h3>
              <p className="text-sm text-slate-600 font-light">ليس دائماً؛ فالكثير من الحالات الباطنية يتم علاجها بالكامل ومتابعتها داخل العيادة، ويتم التحويل فقط إذا تطلبت الحالة تخصصاً دقيقاً للغاية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي (السكشن العاشر) */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            لديك أعراض غير مفسرة وترغبين في تقييم طبي دقيق وآمن؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم لضمان التشخيص السليم والتوجيه الصحيح.
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