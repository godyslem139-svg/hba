import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: "اتصل بنا | عيادة د. هالة سليم",
  description: "تواصل معنا مباشرة عبر الواتساب أو زرنا في العيادة لحجز استشارتك في جراحات التجميل وتنسيق القوام.",
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/966537028009";

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ترويسة الصفحة */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في حجز موعد الاستشارة بكل سهولة ويسر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* الكارد الأساسي: CTA الواتساب */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col justify-between text-center md:text-right">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                <FaWhatsapp className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                تواصل معنا عبر الواتساب فوراً
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                للحجز السريع، الاستفسار عن تفاصيل العمليات، أو إرسال الصور للاستشارة المبدئية، تواصل مع فريق العيادة مباشرة عبر الواتساب.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>

          {/* معلومات الاتصال والعيادة */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              معلومات العيادة
            </h3>

            <div className="space-y-6">
              {/* الهاتف */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">رقم الهاتف</p>
                  <a href="tel:+966537028009" dir="ltr" className="text-base font-semibold text-slate-900 hover:text-emerald-600">
                    +966 53 702 8009
                  </a>
                </div>
              </div>

              {/* العنوان */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">العنوان</p>
                  <p className="text-base font-semibold text-slate-900">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>

              {/* ساعات العمل */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">ساعات العمل</p>
                  <p className="text-base font-semibold text-slate-900">
                    السبت - الخميس: 10:00 صباحاً - 10:00 مساءً
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                عيادة د. هالة سليم لجراحات التجميل وتنسيق القوام
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}