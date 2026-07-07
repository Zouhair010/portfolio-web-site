// استيراد المكتبات اللازمة من رياكت و framer-motion
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// استيراد الصور المستخدمة في المعرض
import img2 from '/public/1.jpeg'; import img1 from '/public/2.jpeg'; import img4 from '/public/3.jpeg';
import img3 from '/public/4.jpeg'; import img5 from '/public/5.jpeg'; import img6 from '/public/6.jpeg';
import img7 from '/public/7.jpeg'; import img8 from '/public/8.jpeg'; import img9 from '/public/9.jpeg';
import img11 from '/public/11.jpeg'; import img14 from '/public/14.jpeg'; import img15 from '/public/15.jpeg';
import img0 from '/public/0.jpg'; import img20 from '/public/20.jpg'; 
import img21 from '/public/21.jpg'; import img22 from '/public/22.jpg'; import img23 from '/public/23.jpg';

// تعريف المكون الرئيسي للتطبيق
export default function App() {
  // حالة لتخزين اللغة الحالية، القيمة الافتراضية هي 'ar' (العربية)
  const [lang, setLang] = useState('ar');
  // حالة لتخزين الصورة المحددة لعرضها في وضع ملء الشاشة
  const [selectedImage, setSelectedImage] = useState(null);

  // كائن يحتوي على النصوص متعددة اللغات للموقع
  const data = {
  ar: { 
    title: "مصطفى الكوش", 
    sections: {
      bio: { title: "👤 من هو مصطفى الكوش؟", text: "فنان متكامل يمزج بين الفن التشكيلي، الرؤية السينمائية، والروح الشاعرية. باحث في 'سينما الذاكرة' ومبدع يترجم انفعالاته في قوالب أدبية وبصرية." },
      fest: { title: "🎬 المهرجان الدولي للسينما والتراث بميدلت", text: "أبرز مشاريع الكوش؛ جعل من ميدلت قبلة سينمائية عالمية، رابطاً الأجيال الشابة بجذورها عبر رؤية فنية شاعرية." },
      ach: { title: "🏆 مسيرة حافلة بالنجاحات", text: "سلسلة من المحطات الفنية المتميزة التي حظيت باعتراف وتقدير واسع، تعكس احترافيته الممزوجة بلمسته الأدبية." },
      part: { title: "🌍 حضور دولي متميز", text: "تجاوزت أعماله الحدود الوطنية، حاملاً مشعل التراث المغربي بلسان فنان وشاعر في أهم المحافل العالمية." },
      spain: { title: "🇪🇸 جسر ثقافي مغربي إسباني", text: "يدير الصالون الدولي للفن المعاصر، معززاً بذلك الحوار الثقافي بين الضفتين عبر الإبداع البصري." },
      art: { title: "🎨 الفن التشكيلي والإنتاج", text: "شغف ينطلق من ريشة الفنان ليتحول إلى فيلماً أو قصيدة، في تمازج فريد بين الرسم، الشعر والسينما." }
    }
  },
  en: { 
    title: "Mustapha Elkouch", 
    sections: { 
      bio: { title: "👤 Who is Mustapha Elkouch?", text: "A versatile artist blending visual arts, cinema, and poetic expression. A researcher in 'Memory Cinema' translating emotions into visual narratives." }, 
      fest: { title: "🎬 Midelt International Cinema and Heritage Festival", text: "A landmark project transforming Midelt into a global cinematic hub, reconnecting youth with their heritage through a poetic lens." }, 
      ach: { title: "🏆 Artistic Achievements", text: "A career defined by professional excellence and poetic depth, earning broad international recognition." }, 
      part: { title: "🌍 Global Presence", text: "His work transcends borders, representing Moroccan heritage worldwide with the voice of an artist and poet." }, 
      spain: { title: "🇪🇸 Cultural Bridge (Morocco-Spain)", text: "Directing the International Salon of Contemporary Art to bridge cultural dialogue across the Mediterranean." }, 
      art: { title: "🎨 Visual Arts and Production", text: "A creative journey from canvas to film or poetry, uniquely weaving drawing, literature, and cinema." } 
    } 
  },
  fr: { 
    title: "Mustapha Elkouch", 
    sections: { 
      bio: { title: "👤 Qui est Mustapha Elkouch ?", text: "Artiste accompli alliant arts visuels, cinéma et expression poétique. Chercheur en 'Cinéma de la Mémoire', il traduit ses émotions en récits visuels." }, 
      fest: { title: "🎬 Festival International du Cinéma et du Patrimoine de Midelt", text: "Projet phare transformant Midelt en un carrefour cinématographique mondial, reliant la jeunesse à son héritage." }, 
      ach: { title: "🏆 Parcours et Distinctions", text: "Une trajectoire marquée par l'excellence professionnelle et une sensibilité poétique, saluée sur la scène internationale." }, 
      part: { title: "🌍 Rayonnement International", text: "Son travail transcende les frontières, portant l'héritage marocain à travers le regard singulier d'un artiste et poète." }, 
      spain: { title: "🇪🇸 Pont Culturel Maroc-Espagne", text: "Dirige le Salon International de l'Art Contemporain pour favoriser le dialogue culturel entre les deux rives." }, 
      art: { title: "🎨 Arts Visuels et Production", text: "Une passion allant de la toile au film ou au poème, fusionnant dessin, littérature et cinéma." } 
    } 
  },
  es: { 
    title: "Mustapha Elkouch", 
    sections: { 
      bio: { title: "👤 ¿Quién es Mustapha Elkouch?", text: "Artista polifacético que fusiona artes visuales, cine y sensibilidad poética. Investigador en el 'Cine de la Memoria'." }, 
      fest: { title: "🎬 Festival Internacional de Cine y Patrimonio de Midelt", text: "Proyecto insignia que convierte a Midelt en un referente cinematográfico global, conectando a los jóvenes con su patrimonio." }, 
      ach: { title: "🏆 Trayectoria y Éxitos", text: "Una carrera que combina excelencia profesional y alma poética, logrando un merecido reconocimiento internacional." }, 
      part: { title: "🌍 Presencia Internacional", text: "Su obra trasciende fronteras, representando la herencia marroquí a través de la mirada de un artista y poeta." }, 
      spain: { title: "🇪🇸 Puente Cultural Marruecos-España", text: "Dirige el Salón Internacional de Arte Contemporáneo para fortalecer el diálogo cultural entre ambas orillas." }, 
      art: { title: "🎨 Artes Visuales y Producción", text: "Una pasión que fluye del lienzo al cine o al poema, uniendo dibujo, literatura y cine." } 
    } 
  }
}[lang];

  // مصفوفة تحتوي على بيانات الأقسام المختلفة للموقع، بما في ذلك الصور والنصوص
  const content = [
    { id: 'bio', imgs: [img0], ...data.sections.bio },
    { id: 'fest', imgs: [img2, img1, img4, img3, img5, img6, img7], ...data.sections.fest },
    { id: 'ach', imgs: [img8, img9, img11], ...data.sections.ach },
    { id: 'part', imgs: [img21, img22, img23], ...data.sections.part },
    { id: 'spain', imgs: [img14, img15], ...data.sections.spain },
    { id: 'art', imgs: [img20], ...data.sections.art }
  ];

  // عرض واجهة المستخدم للمكون
  return (
    // الحاوية الرئيسية للتطبيق مع تحديد اتجاه النص بناءً على اللغة
    <div className="bg-[#1a1917] text-gray-200 min-h-screen font-serif" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {/* شريط الترويسة العلوي الثابت */}
      <header className="sticky top-0 z-50 bg-[#1a1917]/95 border-b border-[#d4af37]/30 p-6 flex justify-between items-center shadow-lg">
        <a href="#" className="text-3xl font-bold text-[#d4af37] tracking-wider uppercase border border-[#d4af37]/50 px-4 py-2 rounded-sm hover:bg-[#d4af37]/10 transition-colors">{data.title}</a>
        <div className="flex items-center gap-8">
          {/* قائمة التنقل بين الأقسام */}
          <nav className="hidden md:flex items-center gap-6">
            {content.map(sec => (
              <a key={sec.id} href={`#${sec.id}`} className="text-sm text-[#d4af37]/70 hover:text-white transition-colors font-semibold tracking-wider">
                {sec.title.split(' ').slice(1).join(' ')}
              </a>
            ))}
          </nav>
          {/* قائمة منسدلة لاختيار اللغة */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
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
        {content.map(sec => (
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