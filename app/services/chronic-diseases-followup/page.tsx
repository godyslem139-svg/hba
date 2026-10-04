'use client';

import Link from 'next/link';
import { useState } from 'react';

// الأسئلة الشائعة الخاصة بمتابعة الأمراض المزمنة (السكر، الضغط، الكوليسترول)
const faqs = [
  {
    question: "كم مرة يجب متابعة مستويات السكر في الدم وضغط الدم؟",
    answer: "تختلف وتيرة المتابعة حسب استقرار الحالة، وعادةً ما يُفضل قياس الضغط يومياً أو أسبوعياً، بينما يتم فحص السكر التراكمي (HbA1c) وفحوصات الدم الدورية كل 3 إلى 6 أشهر لضمان السيطرة التامة."
  },
  {
    question: "لماذا تُعتبر متابعة الكوليسترول والدهون الثلاثية ضرورية لمرضى السكر والضغط؟",
    answer: "ارتفاع الكوليسترول بالتزامن مع السكر أو الضغط يضاعف من مخاطر انسداد الشرايين وأمراض القلب. المتابعة المنتظمة تحمي الأوعية الدموية وتمنع المضاعفات المستقبلية."
  },
  {
    question: "هل يمكن السيطرة على الأمراض المزمنة نهائياً بدون أدوية مستمرة؟",
    answer: "الأمراض المزمنة مثل السكر والضغط تتطلب إدارة مستمرة وعناية طبية دقيقة. التزامك بخطة العلاج ونمط الحياة الصحي يضمن استقرار مستوياتك وحمايتك من أي تقلبات."
  },
  {
    question: "كيف تؤثر متابعة الأمراض المزمنة على حماية صحة القلب والصدر؟",
    answer: "السيطرة المحكمة على ضغط الدم ومستويات السكر والكوليسترول تقلل بشكل مباشر الجهد الإضافي المبذول على عضلة القلب والشرايين، مما يحافظ على صحتك العامة ونشاطك."
  }
];

export default function ChronicDiseasesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع فيديو chronic-diseases-followup.mp4 */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/chronic-diseases-followup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            رعاية صحية متكاملة ومتابعة دقيقة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            متابعة الأمراض المزمنة (السكر، الضغط، الكوليسترول) بأعلى معايير الدقة
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            احمِ صحتك وصحة قلبك مع متابعة دورية دقيقة ومنتظمة لمستويات السكر وضغط الدم والدهون بإشراف الدكتورة هالة نجيب محمد سليم.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجز استشارتك الخاصة لمتابعة الأمراض المزمنة عبر واتساب"
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

      {/* 2. قسم نظرة عامة وأهمية متابعة الأمراض المزمنة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-[#005f7d] to-[#0082a9] p-8 flex flex-col justify-between border-4 border-slate-100 text-white">
            <div className="space-y-2">
              <span className="text-[#5bc0de] text-xs font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                بروتوكولات طبية آمنة ومدروسة
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                إدارة احترافية للسكر، الضغط، والكوليسترول
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">🩺</span>
                <h4 className="font-bold text-sm text-white">استقرار المؤشرات</h4>
                <p className="text-[11px] text-slate-200">السيطرة على المعدلات ضمن النطاق الصحي.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">🛡️</span>
                <h4 className="font-bold text-sm text-white">الوقاية المبكرة</h4>
                <p className="text-[11px] text-slate-200">حماية الشرايين والأعضاء الحيوية من المضاعفات.</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5bc0de]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا المتابعة المنتظمة؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              الخطوة الأساسية لحياة صحية مستقرة وخالية من المضاعفات
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              الأمراض المزمنة مثل السكر، ارتفاع ضغط الدم، واضطرابات الكوليسترول تتطلب متابعة مستمرة ودقيقة لتجنب أي تأثيرات سلبية على القلب والأوعية الدموية. في عيادتنا، نقدم رعاية متكاملة تضمن تعديل الجرعات، قراءة الفحوصات بوعي، والوصول لأفضل استقرار صحي ممكن.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">تنظيم الجرعات الدوائية</h3>
                <p className="text-xs text-slate-600 font-light">مراجعة مستمرة للأدوية بما يتناسب مع حالتك الصحية الحالية.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">تقييم وظائف الأعضاء</h3>
                <p className="text-xs text-slate-600 font-light">فحوصات دورية شاملة للاطمئنان على الكلى، القلب، والشرايين.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. الركائز والمحاور الأساسية لإدارة الأمراض المزمنة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              محاور الرعاية الصحية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما تشمله خطة متابعة الأمراض المزمنة لدينا؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نغطي كافة الجوانب الصحية لضمان السيطرة التامة على المؤشرات الحيوية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🩸
              </div>
              <h3 className="text-xl font-bold text-slate-900">متابعة السكر التراكمي (HbA1c)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                ضبط مستويات السكر في الدم بدقة ومنع التذبذبات الحادة التي تؤثر على الأعصاب والأوعية الدموية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🫀
              </div>
              <h3 className="text-xl font-bold text-slate-900">التحكم الدقيق في ضغط الدم</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                مراقبة ضغط الدم بانتظام واختيار العلاجات الأنسب لخفض الجهد عن عضلة القلب والشرايين الحيوية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                📊
              </div>
              <h3 className="text-xl font-bold text-slate-900">فحص الدهون والكوليسترول</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إدارة مستويات الكوليسترول الضار والدهون الثلاثية لحماية الشرايين من التصلب والانسداد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. خطوات تنفيذ المتابعة في العيادة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/10 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              خطوات العمل والدقة الطبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              كيف تتم رحلتك العلاجية معنا خطوة بخطوة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نضمن لك رعاية منتظمة ومتابعة مستمرة تضع صحتك في أيدي أمينة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">التقييم الشامل والتشخيص</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                مراجعة التاريخ المرضي، تحليل الفحوصات السابقة، وتقييم الحالة الراهنة بدقة متناهية.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">تصميم خطة العلاج والتغذية</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                ضبط الأدوية المناسبة وتوجيهك لنمط حياة ونظام غذائي يدعم استقرار المؤشرات الحيوية.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">المتابعة الدورية المستمرة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                جلسات متابعة منتظمة لمراجعة القراءات وتعديل البرامج العلاجية حسب الاستجابة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. لماذا دكتورة هالة نجيب هي الخيار الأمثل؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الخبرة والمهارة المطلقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا تختار عيادة د. هالة نجيب لمتابعة أمراضك المزمنة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              الخبرة الواسعة في أمراض الباطنة والقلب تضمن لك تشخيصاً منضبطاً ورعاية صحية آمنة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-slate-900">خبرة متقدمة في الباطنة والقلب</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                فهم عميق لتأثير الأمراض المزمنة على مختلف أعضاء الجسم لضمان حمايتها بفعالية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-slate-900">رعاية إنسانية واهتمام بالغ</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                استماع دقيق لكل شكاوى المريض وتوفير بيئة مريحة وداعمة للاطمئنان التام.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold text-slate-900">خطط متابعة علمية ومنضبطة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                وضع جداول دقيقة للفحوصات وقراءات الضغط والسكر لضمان عدم حدوث أي مفاجآت صحية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. مميزات إضافية ومعايير الأمان المتقدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              معايير الأمان والرعاية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              اطمئنان دائم وحماية مستمرة لصحتك وأمانك
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نعمل جاهدين على تمكينك من التعايش الصحي الآمن مع الأمراض المزمنة من خلال التوعية السليمة، المتابعة الدورية، والتدخل الطبي المبكر عند أي تغير طفيف في المؤشرات الحيوية.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-slate-900">وقاية الشرايين</h4>
              <p className="text-xs text-slate-600 font-light">حماية الأوعية الدموية من المضاعفات.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">📋</span>
              <h4 className="font-bold text-slate-900">سجل صحي دقيق</h4>
              <p className="text-xs text-slate-600 font-light">متابعة تفصيلية لتطور القراءات.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⚖️</span>
              <h4 className="font-bold text-slate-900">استقرار المؤشرات</h4>
              <p className="text-xs text-slate-600 font-light">بقاء السكر والضغط ضمن المدى الآمن.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⭐</span>
              <h4 className="font-bold text-slate-900">جودة الحياة</h4>
              <p className="text-xs text-slate-600 font-light">الاستمتاع بحياة نشطة ومستقرة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات نمط الحياة وصحة الأمراض المزمنة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نصائح للحياة الصحية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات هامة للسيطرة على الأمراض المزمنة يومياً
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              الالتزام بهذه الإرشادات يرفع من كفاءة العلاج ويحافظ على استقرار صحتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">الالتزام بمواعيد الأدوية</h4>
                <p className="text-xs text-slate-600 font-light">تناول أدوية الضغط والسكر والكوليسترول في مواعيدها بدقة دون تفويت.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">القياس المنزلي المنتظم</h4>
                <p className="text-xs text-slate-600 font-light">تسجيل قراءات الضغط والسكر بانتظام في سجل خاص لعرضه أثناء المتابعة.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">التغذية الصحية المتوازنة</h4>
                <p className="text-xs text-slate-600 font-light">تقليل الإطارات السكرية والدهون المشبعة والتركيز على الخضروات والألياف.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">ممارسة النشاط البدني</h4>
                <p className="text-xs text-slate-600 font-light">المواظبة على المشي الخفيف يومياً لتحسين حساسية الأنسولين وتنشيط الدورة الدموية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. الأسئلة الشائعة (FAQ) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول متابعة الأمراض المزمنة
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto">
              كل ما تحتاجه معرفته حول ضبط السكر، الضغط، والكوليسترول لضمان صحة مستقرة.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#0082a9] bg-slate-50/50 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-right font-bold text-slate-900 text-base md:text-lg focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-transform duration-300 bg-[#0082a9]/10 text-[#0082a9] ${isOpen ? 'rotate-180 bg-[#0082a9] text-white' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed font-light border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. قسم مقارنة سريعة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الفرق الواضح
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الفرق بين الإهمال والمتابعة الطبية الاحترافية معنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <span>❌</span> إهمال المتابعة الدورية
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>عدم الانتباه لارتفاعات السكر أو الضغط التدريجية وتراكم المضاعفات.</li>
                <li>تناول الأدوية عشوائياً دون مراجعة الفحوصات والتحاليل الدورية.</li>
                <li>مواجهة مفاجآت صحية خطيرة بسبب غياب التشخيص المبكر للدهون والشرايين.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#0082a9] shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#0082a9] text-white text-[10px] font-bold px-3 py-1 rounded-br-xl uppercase">
                معيار VIP
              </div>
              <h3 className="text-lg font-bold text-[#0082a9] flex items-center gap-2 pt-2">
                <span>✔</span> متابعة عيادة د. هالة نجيب
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 font-light">
                <li>إشراف طبي دقيق ومستمر يضمن استقرار السكر، الضغط، والكوليسترول.</li>
                <li>بروتوكولات علاجية مخصصة ومحدثة وفقاً لأحدث المعايير الطبية العالمية.</li>
                <li>وقاية مبكرة وحماية كاملة لصحة القلب والشرايين والأعضاء الحيوية.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            جاهز للاطمئنان على صحتك والسيطرة الكاملة على أمراضك المزمنة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجز استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم واضمن رعاية طبية متكاملة ومستقرة.
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