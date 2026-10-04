'use client';

import Image from 'next/image';
import { useState } from 'react';

// الأسئلة الشائعة الخاصة بأمراض الدم والمناعة
const faqs = [
  {
    question: "ما هي أبرز أعراض الإصابة بفقر الدم (أنيميا) واضطرابات الدم؟",
    questionEn: "What are the main symptoms of blood disorders?",
    answer: "تتضمن أبرز الأعراض الشعور المستمر بالإرهاق والتعب العام، الشحوب في الوجه، الدوخة، وضيق التنفس مع أقل مجهود. تتطلب هذه الأعراض فحصاً مخبرياً دقيقاً لتحديد السبب ووصف العلاج المناسب."
  },
  {
    question: "كيف تؤثر أمراض المناعة على الصحة العامة للجسم؟",
    questionEn: "How do immune disorders affect general health?",
    answer: "تؤثر اضطرابات المناعة على قدرة الجسم على مقاومة العدوى أو قد تؤدي إلى تفاعلات غير طبيعية، لذا فإن التقييم المبكر والفحص الشامل يساعدان في السيطرة على الأعراض وتحسين جودة الحياة."
  },
  {
    question: "هل اختبارات الدم الدورية ضرورية للاطمئنان على المناعة والهيموجلوبين؟",
    questionEn: "Are periodic blood tests necessary?",
    answer: "نعم تماماً، الفحوصات المخبرية الدورية مثل صورة الدم الكاملة (CBC) واختبارات المناعة تعتبر خط الدفاع الأول لكشف أي نقص أو خلل مبكر والتعامل معه فوراً."
  },
  {
    question: "كيف تتم متابعة حالات أمراض الدم والمناعة في العيادة؟",
    questionEn: "How are blood and immune cases followed up?",
    answer: "تتم المتابعة عبر تقييم التاريخ المرضي، مراجعة التحاليل المخبرية بدقة متناهية، ووضع خطة علاجية دوائية وغذائية مخصصة لتعزيز مناعة الجسم واستقرار الهيموجلوبين."
  }
];

export default function HematologyImmunologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          <source src="/hematology-immunology.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            رعاية أمراض الدم والمناعة المتطورة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            أمراض الدم والمناعة وتشخيصها بدقة متناهية
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            اطمئني على صحة الدم، تقييم حالات الأنيميا واضطرابات المناعة بخطط علاجية دقيقة ومخصصة بإشراف الدكتورة هالة نجيب محمد سليم.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجزي استشارتك الخاصة لخدمة أمراض الدم والمناعة عبر واتساب"
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

      {/* 2. قسم نظرة عامة وتعارض الخدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا فحص الدم والمناعة؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              التشخيص الدقيق لاضطرابات الدم ودعم الجهاز المناعي
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              يُعتبر الدم الجهاز الحيوي الناقل لطاقة الحياة، بينما تُمثل المناعة خط الدفاع الأول عن الجسم. نقدم في عيادتنا تقييماً شاملاً لفحوصات الدم، حالات الأنيميا، واضطرابات المناعة لوضع حلول علاجية تضمن استقرار صحتك ونشاطك.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">علاج الأنيميا والفقر</h3>
                <p className="text-xs text-slate-600 font-light">تشخيص أسباب نقص الهيموجلوبين وتعويض العناصر الأساسية.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">دعم كفاءة المناعة</h3>
                <p className="text-xs text-slate-600 font-light">متابعة وتقييم كفاءة الجهاز المناعي ومقاومة الأمراض.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image
              src="/hematology-immunology.webp"
              alt="صورة توضيحية لخدمة أمراض الدم والمناعة مع الدكتورة هالة نجيب"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#5bc0de] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#5bc0de]/30 inline-block">
              فيديو توضيحي تخصصي
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              فهم أعمق لوظائف الدم وكيفية تعزيز مناعة الجسم
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              شاهد الفيديو التوضيحي للتعرف على أهمية الفحوصات المخبرية الدورية، وكيف تتعامل الدكتورة هالة نجيب مع حالات الأنيميا واضطرابات المناعة بخطط علاجية علمية متكاملة.
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
              <source src="/hematology-immunologyy.mp4" type="video/mp4" />
              متصفحك لا يدعم عرض الفيديو.
            </video>
          </div>
        </div>
      </section>

      {/* 4. الحالات المستهدفة بالفحص */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              رعاية صحية شاملة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي أبرز حالات الدم والمناعة التي يتم تقييمها؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نقدم استشارات وافية وفحوصات دقيقة لمختلف مشاكل الدم والمناعة لضمان الاطمئنان التام.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🩸
              </div>
              <h3 className="text-xl font-bold text-slate-900">فقر الدم (الأنيميا بأنواعها)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تشخيص أنيميا نقص الحديد، نقص الفيتامينات، وأنواع الأنيميا المختلفة ووضع برامج علاجها.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-slate-900">اضطرابات الجهاز المناعي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تقييم الحالات المرتبطة بضعف المناعة المتكرر أو ردود الفعل المناعية غير الطبيعية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🔬
              </div>
              <h3 className="text-xl font-bold text-slate-900">قراءة صور الدم والتحاليل</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تحليل وتفسير صور الدم الكاملة (CBC) واختبارات الصفائح ومكونات الدم بدقة عالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. خطوات تنفيذ الإجراء في العيادة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/10 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              خطوات العمل والدقة الطبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              كيف تتم رحلتك العلاجية لتقييم الدم والمناعة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نضمن لك رعاية دقيقة ومتابعة مستمرة تضع صحتك في أميز الأيدي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">الاستشارة الشاملة والفحص</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                دراسة الأعراض الظاهرة والتاريخ الصحي وطلب الفحوصات المخبرية اللازمة.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">تحليل النتائج ووضع الخطة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تفسير التحاليل بدقة ووصف العلاجات الدوائية أو المكملات المناسبة لاستعادة التوازن.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">المتابعة الدورية للاستقرار</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إعادة الفحوصات بعد فترة العلاج للتأكد من وصول الهيموجلوبين والمناعة للمعدل المثالي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ليه دكتورة هالة نجيب هي الأفضل؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              التميز والخبرة المطلقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا تختار عيادة د. هالة نجيب لمتابعة أمراض الدم والمناعة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              الخبرة الواسعة في الباطنة تضمن لك تشخيصاً منضبطاً ورعاية صحية آمنة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-slate-900">خبرة متقدمة في الباطنة والدم</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                فهم عميق لتحليل صور الدم واختبارات المناعة للوصول للسبب الحقيقي وراء الأعراض.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-slate-900">رعاية إنسانية واهتمام بالغ</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                استماع دقيق لشكوى المريض وتوفير بيئة دافئة ومطمئنة طوال رحلة العلاج.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold text-slate-900">خطط علاجية دقيقة ومحدثة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                استخدام أحدث البروتوكولات الطبية لتعزيز المناعة ورفع كفاءة كريات الدم والهيموجلوبين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. مميزات إضافية ومعايير الأمان المتقدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              معايير الأمان والرعاية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              اطمئنان دائم وحماية مستمرة لصحتك ومناعتك
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نعمل جاهدين على منحك تشخيصاً دقيقاً يحمي صحتك العامة، مع توجيهك لأفضل أساليب التغذية والعناية لرفع كفاءة المناعة ومحاربة الإرهاق المستمر بكفاءة تامة.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-slate-900">دعم المناعة</h4>
              <p className="text-xs text-slate-600 font-light">تقوية خطوط الدفاع الطبيعية للجسم.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">📋</span>
              <h4 className="font-bold text-slate-900">تحاليل دقيقة</h4>
              <p className="text-xs text-slate-600 font-light">قراءة وتفسير دقيق لكافة مكونات الدم.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">💪</span>
              <h4 className="font-bold text-slate-900">القضاء على الإرهاق</h4>
              <p className="text-xs text-slate-600 font-light">علاج أسباب التعب المستمر والأنيميا.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⭐</span>
              <h4 className="font-bold text-slate-900">جودة الحياة</h4>
              <p className="text-xs text-slate-600 font-light">استعادة النشاط والحيوية اليومية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. إرشادات نمط الحياة وصحة الدم والمناعة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نصائح للحياة الصحية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات هامة لتقوية المناعة والوقاية من الأنيميا
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              التزامك بهذه الإرشادات يعزز من فاعلية العلاج ويحافظ على حيويتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">التغذية الغنية بالحديد</h4>
                <p className="text-xs text-slate-600 font-light">التركيز على تناول الأطعمة الغنية بالحديد (الخضروات الورقية، اللحوم الحمراء، والبقوليات).</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">فيتامين C لامتصاص أفضل</h4>
                <p className="text-xs text-slate-600 font-light">تناول الأطعمة أو العصارس الغنية بفيتامين C لتعزيز امتصاص الحديد في الجسم.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">النوم الكافي والراحة</h4>
                <p className="text-xs text-slate-600 font-light">الحصول على قسط كافٍ من النوم لتعزيز كفاءة الجهاز المناعي وتجديد الخلايا.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">إجراء التحاليل الدورية</h4>
                <p className="text-xs text-slate-600 font-light">مراجعة الطبيب وإجراء صور الدم الشاملة دورياً للاطمئنان على مستويات الهيموجلوبين.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. الأسئلة الشائعة (FAQ) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول أمراض الدم والمناعة
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto">
              كل ما تحتاجه معرفته حول فقر الدم، تحاليل الدم، وطرق تقوية المناعة.
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

      {/* 10. قسم مقارنة سريعة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الفرق الواضح
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الفرق بين إهمال أعراض الإرهاق والمتابعة الطبية الاحترافية معنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <span>❌</span> إهمال فحص الدم والمناعة
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>التعايش مع الإرهاق المستمر والدوخة واعتبارها أمراً عابراً.</li>
                <li>تناول مكملات الحديد عشوائياً دون معرفة سبب الأنيميا الحقيقي.</li>
                <li>تراجع كفاءة المناعة وزيادة التعرض للعدوى المتكررة.</li>
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
                <li>تشخيص دقيق ومتقدم لمعرفة المسبب الرئيسي للأنيميا أو إجهاد المناعة.</li>
                <li>بروتوكولات علاجية دوائية وغذائية مخصصة لرفع كفاءة الدم والمناعة.</li>
                <li>متابعة دورية مستمرة للاطمئنان على استقرار كافة المؤشرات الحيوية.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            مستعدة لاستعادة طاقتك وحيويتك وتقوية مناعتك اليوم بكل ثقة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم وابدئي رحلة الاطمئنان والعلاج.
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