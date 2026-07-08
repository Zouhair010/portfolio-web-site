import Data from "./data";
{/* شريط الترويسة العلوي الثابت */}
function Header({lang, setLang}) {
    return(
    <>
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
            onChange = {(e) => setLang(e.target.value)} // 2. تحديث الحالة هنا
            className="bg-[#2a2926] border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-sm px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          >
            {['ar', 'en', 'fr', 'es'].map((l) => (
              <option key={l} value={l} className="bg-[#1a1917] text-[#d4af37]">{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </header>
    </>
    );
}
export default Header;