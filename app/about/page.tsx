'use client';

import Image from 'next/image';
import Link from 'next/link';

const aboutData = [
  {
    title: "الأساس الأكاديمي والشهادات التخصصية الرفيعة",
    subtitle: "المسيرة العلمية والاعتمادات الأكاديمية",
    description: "تأسست مسيرة الدكتورة هالة نجيب محمد سليم العلمية على أسس رصينة ومعايير طبية عالمية لا تقبل المساومة. تخرجت من جامعة الأزهر بالقاهرة عام 2000، ونالت درجة الماجستير عام 2004 عن دراسة متقدمة في التهاب الأعصاب بالسكر، ثم حصلت على درجة الدكتوراه عام 2011 عن الفشل الكلوي. أصبحت استشارياً في مصر منذ عام 2012 وأستاذة بجامعة القاهرة، مما يضع بين أيديكم حصيلة علمية أكاديمية نادرة تجمع بين العمق النظري والخبرة الإكلينيكية الواسعة.",
    image: "/bbb.webp",
    quote: "«العلم هو البوصلة الحقيقية لأي نجاح طبي مستدام، والالتزام بالتطوير المستمر هو واجبنا الأول تجاه كل مريض.»"
  },
  {
    title: "خبرة ميدانية عريقة في أقسام العناية المركزة والمستشفيات الكبرى",
    subtitle: "الاحترافية الميدانية والممارسة اليومية",
    description: "يمتد رصيد الخبرة الميدانية للدكتورة هالة لأكثر من 26 عاماً في تخصص أمراض الباطنة. عملت لـ 7 سنوات متواصلة في العناية المركزة بمستشفى الجيزة الدولي جنباً إلى جنب مع نخبة من أعضاء هيئة التدريس في كبرى جامعات مصر وعلى رأسهم البروفيسور شريف مختار (جامعة القاهرة). هذا التواجد الميداني المكثف صقل قدرتها على إدارة أدق الحالات وأكثرها حرصاً وحرجاً بكفاءة وثبات تامين.",
    image: "/ddd.webp",
    quote: "«غرفة العناية المركزة والمستشفيات الكبرى هي ميدان الحقيقة، وفيهما يظهر الفرق الحقيقي بين التطبيق النظري والاحترافية العملية المطلقة.»"
  },
  {
    title: "مسيرة قيادية ومشوار إنجازات مضيء في المملكة العربية السعودية",
    subtitle: "الريادة الطبية والإدارية الخليجية",
    description: "قادت الدكتورة هالة مسيرة نجاح استثنائية طوال 14 عاماً في المملكة العربية السعودية. تولت رئاسة قسم الباطنة والعناية بمستشفى غدران والسراة، وشغلت مناصب الإدارة الطبية والتنفيذية بمجمع الشفا والحياة. بفضل الله، ساهمت بخبرتها في إنقاذ العديد من الحالات الحرجة، وحفرت اسمها بحروف من نور لتصبح اسماً لامعاً ومعروفاً في منطقة الباحة، وتتصدر محركات البحث كأفضل طبيب باطنة في القطاع الخاص هناك.",
    image: "/eee.webp",
    quote: "«النجاح الحقيقي يقاس بمدى القدرة على بث الأمان والشفاء في نفوس المرضى حتى في أصعب الظروف الحرجة.»"
  },
  {
    title: "التميز الحالي ورعاية النخبة في مركز روعة الماسة بالباحة",
    subtitle: "الممارسة الاستشارية المتقدمة",
    description: "تواصل الدكتورة هالة نجيب تقديم رسالتها الإنسانية والطبية السامية من خلال تواجدها الاستشاري المتميز في مركز «روعة الماسة» بالباحة على طريق الملك فهد. تقدم خدمات تشخيصية وعلاجية متكاملة لمتابعة الأمراض المزمنة، اضطرابات الجهاز الهضمي، وصحة القلب، محاطة بثقة جارفة من مريضاتها ومرضاها الذين وجدوا فيها الملاذ الطبي الأمين والدقيق.",
    image: "/f.webp",
    quote: "«ابتسامة مريض اطمأن على صحته واستعاد عافيته هي المكافأة الأكبر التي لا تقدر بمال.»"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع تشغيل فيديو about.mp4 */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/about.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            من نحن - قصة علم وعطاء بلا حدود - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            الدكتورة هالة نجيب محمد سليم.. ريادة استثنائية في الباطنة والقلب
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            مسيرة مهنية وأكاديمية تمتد لأكثر من 26 عاماً من الخبرة العلمية، الإدارة الطبية الناجحة، والحرص المطلق على تقديم رعاية صحية تفوق كل التوقعات.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="احجزي استشارتك الخاصة الآن عبر واتساب"
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

      {/* المحتوى التفصيلي الكامل مع الصور المطلوبة (bbb, ddd, eee, f) */}
      <div className="max-w-6xl mx-auto space-y-32 py-24 px-6">
        {aboutData.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-2xl p-8 md:p-14 overflow-hidden transition-all duration-500 hover:border-[#0082a9]/40 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* قسم الصورة الواضحة */}
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden bg-slate-900 border-4 border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={`صورة تفصيلية توضح ${item.title} للدكتورة هالة نجيب`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#0082a9] text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md">
                    محطة {index + 1} من المسيرة
                  </div>
                </div>
              </div>

              {/* قسم النصوص المكثفة والشاملة */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0082a9] tracking-wider uppercase bg-[#5bc0de]/15 px-3.5 py-1 rounded-md inline-block">
                    {item.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-loose font-light text-justify">
                  {item.description}
                </p>

                {/* اقتباس معبر */}
                <blockquote className="border-r-4 border-[#0082a9] pr-4 py-1 text-slate-700 italic font-medium text-sm md:text-base bg-slate-50/80 rounded-l-xl">
                  {item.quote}
                </blockquote>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* سكشن الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            هل ترغبين في استشارة طبية موثوقة وعالية المستوى؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن مع الدكتورة هالة نجيب محمد سليم واحصلي على رعاية طبية تليق بصحتك.
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