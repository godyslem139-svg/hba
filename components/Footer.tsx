'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white font-sans relative overflow-hidden border-t-4 border-[#5bc0de]" dir="rtl">
      
      {/* خلفية جمالية مضيئة ومتناسقة مع ألوان الهيدر */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0082a9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5bc0de]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
          
          {/* العمود الأول: اللوجو ونبذة تعريفية عن العيادة */}
          <div className="flex flex-col gap-5">
            <Link 
              href="/" 
              title="الصفحة الرئيسية - عيادة الدكتورة هالة نجيب محمد سليم" 
              className="flex items-center gap-4 group"
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#5bc0de]/40 shadow-xl bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.webp"
                  alt="شعار عيادة الدكتورة هالة نجيب محمد سليم"
                  title="شعار عيادة الدكتورة هالة نجيب"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-wide text-white">
                  د. هالة نجيب محمد سليم
                </span>
                <span className="text-xs font-light text-[#5bc0de]">
                  استشاري أمراض الباطنة والقلب والأوعية الدموية
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              نقدم رعاية طبية شاملة ومتميزة لمتابعة الأمراض المزمنة، الجهاز الهضمي، وصحة القلب بأحدث الطرق التشخيصية والعلاجية لضمان صحتك وسلامتك.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة للأقسام */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5bc0de] font-bold text-base tracking-wide border-b border-slate-800 pb-2 inline-block">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <Link 
                  href="/" 
                  title="الذهاب إلى الصفحة الرئيسية" 
                  className="hover:text-[#5bc0de] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5bc0de]">■</span> الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  title="استعرض خدماتنا الطبية والتخصصات" 
                  className="hover:text-[#5bc0de] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5bc0de]">■</span> خدماتنا الطبية
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  title="تعرف أكثر على مسيرة وخبرة الدكتورة هالة نجيب" 
                  className="hover:text-[#5bc0de] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5bc0de]">■</span> من نحن
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  title="سياسة الخصوصية وحماية البيانات" 
                  className="hover:text-[#5bc0de] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5bc0de]">■</span> سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  title="تواصل معنا واعرف طرق الاتصال" 
                  className="hover:text-[#5bc0de] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5bc0de]">■</span> اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التواصل الاجتماعي ورقم الهاتف */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5bc0de] font-bold text-base tracking-wide border-b border-slate-800 pb-2 inline-block">
              تواصل معنا
            </h3>
            
            {/* رقم الهاتف */}
            <a 
              href="tel:+966537028009" 
              title="الاتصال المباشر بعيادة الدكتورة هالة نجيب عبر الهاتف"
              className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors font-bold text-sm bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800 shadow-sm"
            >
              <span className="text-[#5bc0de]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28.5-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-18.9-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 333.6 178.4 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </span>
              <span>+966 53 702 8009</span>
            </a>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3 pt-2">
              {/* واتساب */}
              <a 
                href="https://wa.me/966537028009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow-sm border border-slate-800 group"
                title="تواصل معنا فوراً عبر تطبيق واتساب"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>

              {/* إنستجرام */}
              <a 
                href="https://www.instagram.com/hala.selim76/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 text-white flex items-center justify-center transition-all shadow-sm border border-slate-800 group"
                title="تابع صفحة العيادة الرسمية على إنستجرام"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </div>

          </div>

        </div>

        {/* خط الفاصل وحقوق النشر والتصميم */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} عيادة الدكتورة هالة نجيب محمد سليم. جميع الحقوق محفوظة.</p>
          <p>
            تصميم وتطوير بواسطة{' '}
            <a 
              href="https://www.uniquee-ws.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5bc0de] hover:underline font-semibold"
              title="شركة Unique للخدمات الرقمية وتطوير الويب"
            >
              Unique
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}