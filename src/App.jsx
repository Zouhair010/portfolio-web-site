// استيراد المكتبات اللازمة من رياكت و framer-motion
import React, { useState } from 'react';
import Data from './components/data';
import Header from './components/header';
import Main from './components/body';
import Footer from './components/footer';
import Animation from './components/animation';

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
      <Header lang={lang} setLang={setLang}/>
      {/* المحتوى الرئيسي للصفحة */}
      <Main lang={lang} setSelectedImage={setSelectedImage}/>
      {/* تذييل الصفحة */}
      <Footer/>
      {/* مكون لعرض الصورة المحددة في وضع ملء الشاشة مع تأثيرات حركية */}
      <Animation selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> 
    </div>
  );
}