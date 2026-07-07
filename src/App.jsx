import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Palette, Film, Award, MapPin, Info, X } from 'lucide-react';

// استيراد الصور
import img2 from '/public/1.jpeg'; import img1 from '/public/2.jpeg'; import img4 from '/public/3.jpeg';
import img3 from '/public/4.jpeg'; import img5 from '/public/5.jpeg'; import img6 from '/public/6.jpeg';
import img7 from '/public/7.jpeg'; import img8 from '/public/8.jpeg'; import img9 from '/public/9.jpeg';
import img11 from '/public/11.jpeg'; import img14 from '/public/4.jpeg'; import img15 from '/public/15.jpeg';
import img0 from '/public/0.jpg'; import img20 from '/public/20.jpg'; 
import img21 from '/public/21.jpg'; import img22 from '/public/22.jpg'; import img23 from '/public/23.jpg';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [selectedImage, setSelectedImage] = useState(null);

  const data = {
    ar: { 
      title: "مصطفى الكوش", 
      sections: {
        bio: { title: "👤 من هو مصطفى الكوش؟", text: "يُعد مصطفى الكوش قامة فنية متكاملة، يمزج بين الرؤية التشكيلية، الخبرة السينمائية، والروح الشاعرية. باحث في 'سينما الذاكرة' وشاعر يترجم انفعالاته في قوالب أدبية وبصرية." },
        fest: { title: "🎬 المهرجان الدولي للسينما والتراث بميدلت", text: "جوهرة التاج في مشاريع الكوش؛ تحويل ميدلت إلى قبلة سينمائية عالمية. يربط الأجيال الشابة بتراثها من خلال رؤية فنية شاعرية." },
        ach: { title: "🏆 الجوائز والنجاحات الفنية", text: "سلسلة نجاحات متتالية تُوجت باعترافات فنية مرموقة تعكس جودة أعماله واحترافيته الممزوجة بروح الشعر." },
        part: { title: "🌍 المشاركات الدولية", text: "تجاوز تأثير أعماله الحدود الوطنية، ناقلاً التراث المغربي بلسان فنان وشاعر في أهم المحافل الدولية." },
        spain: { title: "🇪🇸 الجسر الثقافي بين المغرب وإسبانيا", text: "يدير الصالون الدولي للفن المعاصر لتعزيز الحوار الثقافي بين الضفتين عبر الإبداع الشعري والبصري." },
        art: { title: "🎨 الفن التشكيلي والإنتاج", text: "شغف يبدأ من اللوحة ليصبح فيلماً أو قصيدة، مع تداخل فريد بين الرسم والشعر والسينما." }
      }
    },
    en: { title: "Mustapha Elkouch", sections: { bio: { title: "👤 Who is Mustapha Elkouch?", text: "A multi-talented artist, Mustapha Elkouch blends plastic arts, cinema, and poetic spirit. A researcher in 'Memory Cinema' and a poet translating emotions into visual art." }, fest: { title: "🎬 Midelt International Cinema and Heritage Festival", text: "The crown jewel of Elkouch's projects; turning Midelt into a global cinematic hub, connecting youth with their heritage through poetic vision." }, ach: { title: "🏆 Awards and Artistic Successes", text: "A series of successes reflecting professional excellence blended with a poetic soul, gaining international recognition." }, part: { title: "🌍 International Participations", text: "His work transcends borders, representing Moroccan heritage globally through the eyes of an artist and poet." }, spain: { title: "🇪🇸 Cultural Bridge (Morocco-Spain)", text: "Directing the International Salon of Contemporary Art to foster cultural dialogue between the two shores." }, art: { title: "🎨 Plastic Arts and Production", text: "Passion that starts from the canvas to become a film or a poem, with a unique blend of drawing, poetry, and cinema." } } },
    fr: { title: "Mustapha Elkouch", sections: { bio: { title: "👤 Qui est Mustapha Elkouch ?", text: "Artiste accompli, il mêle arts plastiques, cinéma et esprit poétique. Chercheur en 'Cinéma de la Mémoire'." }, fest: { title: "🎬 Festival International du Cinéma de Midelt", text: "Joyau de ses projets, transformant Midelt en un carrefour cinématographique mondial, reliant la jeunesse à son héritage." }, ach: { title: "🏆 Prix et Succès", text: "Une série de succès reflétant l'excellence professionnelle alliée à une âme poétique." }, part: { title: "🌍 Participations Internationales", text: "Son travail transcende les frontières, représentant l'héritage marocain à travers le regard d'un artiste et poète." }, spain: { title: "🇪🇸 Pont Culturel Maroc-Espagne", text: "Dirige le Salon International de l'Art Contemporain pour favoriser le dialogue culturel entre les deux rives." }, art: { title: "🎨 Arts Plastiques et Production", text: "La passion qui part de la toile pour devenir film ou poème, unissant dessin, poésie et cinéma." } } },
    es: { title: "Mustapha Elkouch", sections: { bio: { title: "👤 ¿Quién es Mustapha Elkouch?", text: "Artista, poeta e investigador en cine de memoria, fusionando artes plásticas y cine con sensibilidad poética." }, fest: { title: "🎬 Festival Internacional de Cine de Midelt", text: "La joya de sus proyectos; convirtiendo a Midelt en un centro cinematográfico global, conectando a la juventud con su patrimonio." }, ach: { title: "🏆 Premios y Éxitos", text: "Una serie de éxitos que reflejan excelencia profesional mezclada con un alma poética." }, part: { title: "🌍 Participaciones Internacionales", text: "Su trabajo trasciende fronteras, representando el patrimonio marroquí a través de los ojos de un artista y poeta." }, spain: { title: "🇪🇸 Puente Cultural Marruecos-España", text: "Dirige el Salón Internacional de Arte Contemporáneo para fomentar el diálogo cultural entre ambas orillas." }, art: { title: "🎨 Arte Plástico y Producción", text: "Pasión que parte del lienzo para convertirse en película o poema, uniendo dibujo, poesía y cine." } } }
  }[lang];

  const content = [
    { id: 'bio', imgs: [img0], ...data.sections.bio },
    { id: 'fest', imgs: [img2, img1, img4, img3, img5, img6, img7], ...data.sections.fest },
    { id: 'ach', imgs: [img8, img9, img11], ...data.sections.ach },
    { id: 'part', imgs: [img21, img22, img23], ...data.sections.part },
    { id: 'spain', imgs: [img14, img15], ...data.sections.spain },
    { id: 'art', imgs: [img20], ...data.sections.art }
  ];

  return (
    <div className="bg-[#1a1917] text-gray-200 min-h-screen font-serif" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <header className="sticky top-0 z-50 bg-[#1a1917]/95 border-b border-[#d4af37]/30 p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold text-[#d4af37] tracking-wider uppercase">{data.title}</h1>
        <div className="flex gap-1 bg-[#2a2926] p-1 rounded-sm border border-[#d4af37]/20">
          {['ar', 'en', 'fr', 'es'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 text-xs font-semibold transition-all ${lang === l ? 'bg-[#d4af37] text-[#1a1917]' : 'text-[#d4af37]/70 hover:text-white'}`}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8 space-y-12">
        {content.map(sec => (
          <section key={sec.id} id={sec.id} className="border-b border-[#d4af37]/20 pb-12">
            <h2 className="text-3xl text-[#d4af37] mb-6 border-l-4 border-[#d4af37] pl-4 uppercase tracking-widest">{sec.title}</h2>
            <p className="text-[#dcdcdc] text-lg leading-relaxed font-light mb-8">{sec.text}</p>
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

      <footer className="py-12 text-center border-t border-[#d4af37]/20">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.facebook.com/mustafa.elkouch.2025/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="https://www.instagram.com/mustapha_elkaouch/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        </div>
        <p className="text-[#d4af37]/50 font-serif">© 2026 Mustapha Elkouch.</p>
      </footer>

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