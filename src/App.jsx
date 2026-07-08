// استيراد المكتبات اللازمة من رياكت و framer-motion
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Data from './data';

// تعريف المكون الرئيسي للتطبيق
export default function App() {
  // let lang = 'ar'
  const [lang, setLang] = useState('ar'); // 1. استخدام useState هنا
  // حالة لتخزين الصورة المحددة لعرضها في وضع ملء الشاشة
  const [selectedImage, setSelectedImage] = useState(null);
  // عرض واجهة المستخدم للمكون
  return (
    // الحاوية الرئيسية للتطبيق مع تحديد اتجاه النص بناءً على اللغة
    <div className="bg-[#1a1917] text-gray-200 min-h-screen font-serif" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {/* شريط الترويسة العلوي الثابت */}
      <header className="sticky top-0 z-50 bg-[#1a1917]/95 border-b border-[#d4af37]/30 p-6 flex justify-between items-center shadow-lg">
        <a href="#" className="text-3xl font-bold text-[#d4af37] tracking-wider uppercase border border-[#d4af37]/50 px-4 py-2 rounded-sm hover:bg-[#d4af37]/10 transition-colors">{Data(lang)[0].title}</a>
        <div className="flex items-center gap-8">
          {/* قائمة التنقل بين الأقسام */}
          <nav className="hidden md:flex items-center gap-6">
            {Data(lang)[1].map(sec => (
              <a key={sec.id} href={`#${sec.id}`} className="text-sm text-[#d4af37]/70 hover:text-white transition-colors font-semibold tracking-wider">
                {sec.title.split(' ').slice(1).join(' ')}
              </a>
            ))}
          </nav>
          {/* قائمة منسدلة لاختيار اللغة */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)} // 2. تحديث الحالة هنا
            className="bg-[#2a2926] border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-sm px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          >
            {['ar', 'en', 'fr', 'es'].map((l) => (
              <option key={l} value={l} className="bg-[#1a1917] text-[#d4af37]">{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </header>

      {/* المحتوى الرئيسي للصفحة */}
      <main className="max-w-4xl mx-auto mt-12 p-8 space-y-12">
        {Data(lang)[1].map(sec => (
          // عرض كل قسم من أقسام المحتوى
          <section key={sec.id} id={sec.id} className="border-b border-[#d4af37]/20 pb-12 scroll-mt-28">
            <h2 className="text-3xl text-[#d4af37] mb-6 border-l-4 border-[#d4af37] pl-4 uppercase tracking-widest">{sec.title}</h2>
            <p className="text-[#dcdcdc] text-lg leading-relaxed font-light mb-8">{sec.text}</p>
            {/* معرض الصور الخاص بالقسم */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {sec.imgs.map((img, i) => (
                <div key={i} className="overflow-hidden border border-[#d4af37]/20 p-1 hover:border-[#d4af37] transition-all">
                  <motion.img src={img} onClick={() => setSelectedImage(img)} whileHover={{ scale: 1.03 }} className="h-48 w-full object-cover cursor-pointer grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* تذييل الصفحة */}
      <footer className="py-12 text-center border-t border-[#d4af37]/20">
        {/* روابط وسائل التواصل الاجتماعي */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.facebook.com/mustafa.elkouch.2025/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="https://wa.me/212648470491" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
          <a href="https://www.instagram.com/mustapha_elkaouch/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        </div>
        <p className="text-[#d4af37]/50 font-serif">© 2026 Mustapha Elkouch.</p>
      </footer>

      {/* مكون لعرض الصورة المحددة في وضع ملء الشاشة مع تأثيرات حركية */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
            <img src={selectedImage} className="max-h-[90vh] border-2 border-[#d4af37] shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}