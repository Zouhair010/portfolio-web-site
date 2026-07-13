import { motion } from "framer-motion";
import Data from "./data";

// مكون Main يعرض المحتوى الرئيسي للصفحة بناءً على اللغة المختارة
function Main({lang, setSelectedImage}) {
    return (
        <>
        {/* المحتوى الرئيسي للصفحة */}
        <main className="max-w-4xl mx-auto mt-12 p-8 space-y-12">
        {/* استدعاء البيانات بناءً على اللغة وتكرار الأقسام */}
        {Data(lang)[1].map(sec => (
          // عرض كل قسم من أقسام المحتوى
          <section key={sec.id} id={sec.id} className="border-b border-[#d4af37]/20 pb-12 scroll-mt-28">
            {/* عنوان القسم */}
            <h2 className="text-3xl text-[#d4af37] mb-6 border-l-4 border-[#d4af37] pl-4 uppercase tracking-widest">{sec.title}</h2>
            {/* نص وصف القسم */}
            <p className="text-[#dcdcdc] text-lg leading-relaxed font-light mb-8">{sec.text}</p>
            {/* معرض الصور الخاص بالقسم */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {/* تكرار وعرض كل صورة في القسم */}
              {sec.imgs.map((img, i) => (
                <div key={i} className="overflow-hidden border border-[#d4af37]/20 p-1 hover:border-[#d4af37] transition-all">
                  {/* الصورة مع تأثيرات الحركة من Framer Motion */}
                  <motion.img src={img} onClick={() => setSelectedImage(img)} whileHover={{ scale: 1.03 }} className="h-48 w-full object-cover cursor-pointer grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </section>
        ))}
        </main>
        </>
    );
}
export default Main;