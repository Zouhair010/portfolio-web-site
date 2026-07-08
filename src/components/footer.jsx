import Data from "./data";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;