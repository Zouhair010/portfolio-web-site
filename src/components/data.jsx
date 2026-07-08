
  import img1 from '/public/1.jpeg'; import img2 from '/public/2.jpeg'; import img3 from '/public/3.jpeg';
  import img4 from '/public/4.jpeg'; import img5 from '/public/5.jpeg'; import img6 from '/public/6.jpeg';
  import img7 from '/public/7.jpeg'; import img8 from '/public/8.jpeg'; import img9 from '/public/9.jpeg';
  import img11 from '/public/11.jpeg'; import img14 from '/public/14.jpeg'; import img15 from '/public/15.jpeg';
  import img0 from '/public/0.jpg'; import img20 from '/public/20.jpg'; 
  import img21 from '/public/21.jpg'; import img22 from '/public/22.jpg'; import img23 from '/public/23.jpg'

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
};

function Data(lg){
  const content = [
    { id: 'bio', imgs: [img0], ...data[lg].sections.bio },
    { id: 'fest', imgs: [img2, img1, img4, img3, img5, img6, img7], ...data[lg].sections.fest },
    { id: 'ach', imgs: [img8, img9, img11], ...data[lg].sections.ach },
    { id: 'part', imgs: [img21, img22, img23], ...data[lg].sections.part },
    { id: 'spain', imgs: [img14, img15], ...data[lg].sections.spain },
    { id: 'art', imgs: [img20], ...data[lg].sections.art }
  ];
  return [data[lg],content];
}

export default Data;