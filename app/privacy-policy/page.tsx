import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | عيادة د. هالة نجيب محمد سليم',
  description: 'تعرف على سياسة الخصوصية وحماية البيانات الطبية والشخصية لمرضانا في عيادة الدكتورة هالة نجيب استشاري أمراض الباطنة والقلب.',
  keywords: ['سياسة الخصوصية', 'حماية البيانات الطبية', 'سرية المريض', 'عيادة دكتورة هالة نجيب'],
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'سياسة الخصوصية | عيادة د. هالة نجيب محمد سليم',
    description: 'نلتزم بأعلى معايير السرية وحماية البيانات الشخصية والطبية لجميع زوار ومرضى العيادة.',
    url: '/privacy-policy',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. رأس الصفحة (Hero Section) */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-[#005f7d] to-[#0082a9] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
            التزامنا بالسرية والأمان - VIP
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            سياسة الخصوصية وحماية البيانات
          </h1>
          <p className="text-slate-200 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            نحن في عيادة الدكتورة هالة نجيب محمد سليم نضع سرية معلوماتك الطبية والشخصية في قمة أولوياتنا ونلتزم بحمايتها بأقصى درجات المعايير المهنية والأمان الرقمي.
          </p>
        </div>
      </section>

      {/* 2. المحتوى الرئيسي لسياسة الخصوصية */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 md:p-14 space-y-10">
          
          {/* البند الأول */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>01.</span> مقدمة ونطاق السياسة
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              توضيحاً لالتزامنا القانوني والأخلاقي بحماية خصوصيتك، توضح وثيقة سياسة الخصوصية هذه كيفية جمع، استخدام، وحماية البيانات الشخصية والطبية التي تقدمها لنا من خلال موقعنا الإلكتروني أو خلال زيارتك للعيادة. باستخدامك لخدماتنا، فإنك توافق على ممارسات جمع واستخدام البيانات الموضحة في هذه السياسة.
            </p>
          </div>

          {/* البند الثاني */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>02.</span> المعلومات التي نقوم بجمعها
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              قد نقوم بجمع نوعين رئيسيين من المعلومات لضمان تقديم أفضل خدمة طبية ممكنة:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 text-base font-light pr-4">
              <li><strong className="text-slate-900">المعلومات الشخصية:</strong> مثل الاسم الكامل، رقم الهاتف، البريد الإلكتروني، وتفاصيل حجز المواعيد.</li>
              <li><strong className="text-slate-900">المعلومات الطبية والصحية:</strong> التاريخ المرضي، الفحوصات السابقة، الأعراض، والتشخيصات المسجلة خلال الاستشارات الطبية بإشراف الدكتورة هالة نجيب.</li>
            </ul>
          </div>

          {/* البند الثالث */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>03.</span> سرية المعلومات الطبية (أخلاقيات المهنة)
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              تخضع كافة السجلات والبيانات الطبية لمرضانا لسرية تامة ومطلقة، تماشياً مع أخلاقيات مهنة الطب والقوانين المنظمة للرعاية الصحية. لا يتم مشاركة أي تفاصيل تخص الحالة الصحية لأي مريض مع أي طرف ثالث تحت أي ظرف من الظروف إلا بناءً على موافقة صريحّة ومكتوبة من المريض نفسه أو في الحالات التي تستوجبها الضرورة العلاجية الرسمية.
            </p>
          </div>

          {/* البند الرابع */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>04.</span> كيف نستخدم معلوماتك؟
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نستعمل البيانات التي نجمعها للأغراض التالية حصراً:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 text-base font-light pr-4">
              <li>جدولة، تأكيد، ومتابعة المواعيد والاستشارات الطبية.</li>
              <li>تنسيق خطط المتابعة الدورية للأمراض المزمنة وصحة القلب والجهاز الهضمي.</li>
              <li>التواصل السريع مع المريض عبر الهاتف أو الواتساب عند الحاجة لتعديل المواعيد أو إرسال الإرشادات.</li>
              <li>تحسين جودة الخدمة الطبية المقدمة في العيادة وتطوير أداء الموقع الإلكتروني.</li>
            </ul>
          </div>

          {/* البند الخامس */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>05.</span> أمان وحماية البيانات الرقمية
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نتخذ كافة التدابير التقنية والتنظيمية الصارمة لحماية بياناتك الرقمية المخزنة ضد أي وصول غير autorizado، أو تعديل، أو إفشاء، أو فقدان. نستخدم بروتوكولات تشفير متقدمة وأنظمة حماية إلكترونية لضمان أمان تصفحك واستخدامك لمنصتنا.
            </p>
          </div>

          {/* البند السادس */}
          <div className="space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>06.</span> حقوقك بشأن بياناتك الشخصية
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              يحق لكل مريض طلب الاطلاع على بياناته الشخصية المسجلة لدينا، طلب تصحيح أي أخطاء فيها، أو الاستفسار عن كيفية معالجتها. نحن نؤمن بشراكة الثقة المتبادلة بين الطبيب ومريضته/مريضه.
            </p>
          </div>

          {/* البند السابع */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0082a9] flex items-center gap-2">
              <span>07.</span> التحديثات على سياسة الخصوصية
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              تحتفظ عيادة الدكتورة هالة نجيب بالحق في تعديل أو تحديث بنود سياسة الخصوصية هذه متى ما دعت الحاجة لذلك. سيتم نشر أحدث نسخة من السياسة مباشرة على هذه الصفحة مع تاريخ التحديث.
            </p>
          </div>

          {/* معلومات التواصل والدعم */}
          <div className="pt-8 mt-8 border-t border-slate-200 bg-slate-50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">هل لديك أي استفسار بخصوص الخصوصية؟</h3>
              <p className="text-xs text-slate-600 font-light">فريق العيادة مستعد للإجابة على كافة أسئلتك بكل وضوح وشفافية.</p>
            </div>
            <a
              href="https://wa.me/966537028009"
              target="_blank"
              rel="noopener noreferrer"
              title="تواصل معنا عبر واتساب للاستفسار"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-all gap-2 whitespace-nowrap"
            >
              <span>تواصل معنا عبر واتساب</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* 3. سكشن العودة للرئيسية */}
      <section className="pb-20 text-center">
        <Link
          href="/"
          title="العودة إلى الصفحة الرئيسية"
          className="inline-flex items-center gap-2 text-[#0082a9] font-bold text-sm hover:underline"
        >
          <span>←</span> العودة إلى الصفحة الرئيسية
        </Link>
      </section>

    </div>
  );
}