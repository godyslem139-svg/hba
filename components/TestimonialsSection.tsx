'use client';

const testimonialsData = [
  {
    id: 1,
    name: "محمود إبراهيم",
    role: "متابعة الأمراض المزمنة (الضغط والسكر)",
    comment: "«دكتورة هالة قمة في الإنسانية والعلم! متابعة دقيقة جداً مع السكر والضغط، وفهمت منها تفاصيل كتيرة كانت غايبة عني، وربنا يجعلني دايماً في تحسن بفضل توجيهاتها.»",
    bgClass: "bg-[#007090]",
    accentBox: "bg-[#005570]"
  },
  {
    id: 2,
    name: "منى السيد",
    role: "تشخيص وعلاج أمراض المعدة والقولون",
    comment: "«من أصدق وأكفأ دكاترة الباطنة اللي تعاملت معاهم، صريحة وبتسمع للمريض بكل أتعابهم من غير استعجال وعلاجها جاب نتيجة معايا من أول أسبوع. بجد شكراً لحضرتك يا دكتورة.»",
    bgClass: "bg-[#e59438]",
    accentBox: "bg-[#c47722]"
  },
  {
    id: 3,
    name: "خالد عبد الحميد",
    role: "تقييم حالات القلب والصدر",
    comment: "«رعاية طبية على أعلى مستوى واهتمام بالغ بكل التفاصيل التشخيصية. حسيت بالأمان والاطمئنان التام خلال متابعة حالة القلب والصدر مع دكتورة هالة. ربنا يبارك في علمها.»",
    bgClass: "bg-[#4ab0d0]",
    accentBox: "bg-[#339ab8]"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#eaf4f9] py-20 overflow-hidden text-right font-sans" dir="rtl">
      
      {/* عنوان السكشن بخلفية لبني فاتح قوية وواضحة */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <span className="inline-block text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/30">
          ثقة واعتزاز
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          ماذا يقول عننا من خاضوا التجربة؟
        </h2>
        <p className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto">
          قصص نجاح حقيقية وآراء واقعية تعكس مستوى الدقة والأمان والاحترافية في تقديم الرعاية الطبية.
        </p>
      </div>

      {/* حاوية الأعمدة الثلاثة متجاورة تماماً وبدون أي مسافات فاصلة */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[500px] shadow-2xl">
        
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col justify-between p-10 md:p-14 transition-all duration-500 overflow-hidden ${item.bgClass}`}
          >
            
            {/* الدائرة الهندسية الفخمة المرسومة بخط خفيف في الخلفية */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/25 pointer-events-none" />

            {/* الجزء العلوي: الأيقونة الدائرية والنجوم */}
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                {/* المربع الداخلي مع الأيقونة */}
                <div className={`w-16 h-16 rounded-xl ${item.accentBox} flex items-center justify-center shadow-lg border border-white/20`}>
                  <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* النجوم الذهبية */}
                <div className="flex gap-1 text-amber-200 text-sm" aria-label="5 نجوم تقييم">
                  {"★".repeat(5)}
                </div>
              </div>

              {/* نص الرأي */}
              <p className="text-white text-base md:text-lg leading-relaxed font-light drop-shadow-sm">
                {item.comment}
              </p>
            </div>

            {/* الجزء السفلي: اسم العميل ودوره بشكل نظيف جداً */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/20 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {item.name}
                </h3>
                <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                  {item.role}
                </span>
              </div>

              {/* أيقونة تجميلية دقيقة */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-xs">
                ✦
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}