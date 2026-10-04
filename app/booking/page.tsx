'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'rhinoplasty',
    preferredDate: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // جاهز لربطه مستقبلاً بخدمة إرسال الإيميلات (مثل EmailJS أو Resend أو API خاص بك)
    // مثال:
    // await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });

    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>حجز استشارة تجميلية خاصة | د. أحمد عبد الرحمن</title>
        <meta 
          name="description" 
          content="احجز موعد استشارتك الخاصة الآن مع الدكتور أحمد عبد الرحمن استشاري جراحات التجميل والترميم. ابدأ خطوتك الأولى نحو المظهر المثالي بأعلى معايير الأمان." 
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-medical-dark/20 to-slate-900 py-16 px-6 text-right" dir="rtl">
        {/* زر العودة للرئيسية */}
        <div className="max-w-3xl mx-auto mb-8">
          <Link 
            href="/" 
            title="العودة إلى الصفحة الرئيسية لموقع دكتور أحمد عبد الرحمن"
            className="inline-flex items-center gap-2 text-white/80 hover:text-medical-light transition-colors text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            ← العودة للرئيسية
          </Link>
        </div>

        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 overflow-hidden relative">
          {/* عنصر جمالي في الخلفية */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-medical-light/20 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-10">
            <span className="text-medical-dark font-semibold text-xs tracking-widest uppercase bg-medical-light/20 px-4 py-1.5 rounded-full">
              VIP Consultation
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
              احجز استشارتك الخاصة
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto">
              خطوتك الأولى نحو المظهر المثالي. املأ البيانات وسيتواصل معك المنسق الشخصي لدكتور أحمد عبد الرحمن.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 bg-medical-light/20 text-medical-dark rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-inner">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-slate-900">تم استلام طلبك بنجاح</h2>
              <p className="text-slate-600 max-w-sm mx-auto">
                شكراً لك. تم إرسال تفاصيل الموعد وسيتم التواصل معك عبر الهاتف أو الواتساب خلال ساعتين.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  title="العودة إلى الصفحة الرئيسية"
                  className="inline-block px-8 py-3 rounded-xl bg-[#0082a9] text-white font-semibold hover:bg-[#5bc0de] transition-all shadow-lg"
                >
                  العودة للصفحة الرئيسية
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">الاسم بالكامل</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="مثال: أحمد محمد"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">رقم الهاتف (واتساب)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+20 10xxxxxxxx"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">نوع الإجراء التجميلي</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm cursor-pointer"
                  >
                    <option value="rhinoplasty">تجميل الأنف الجراحي (Rhinoplasty)</option>
                    <option value="body-contouring">نحت القوام وشد البطن (Liposuction)</option>
                    <option value="facial">إعادة نضارة وتجديد شباب الوجه</option>
                    <option value="breast">جراحات الثدي التجميلية</option>
                    <option value="non-surgical">إجراءات غير جراحية (فيلر وبوتوكس)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-slate-700 mb-2">التاريخ المفضل للاستشارة</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">ملاحظات إضافية (اختياري)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="أخبرنا باهتماماتك أو توقعاتك للعملية..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-dark/60 bg-slate-50/50 text-slate-800 transition-all text-sm resize-none"
                />
              </div>

              {/* زر الإرسال الواضح والفخم */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                تأكيد إرسال طلب الحجز
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}