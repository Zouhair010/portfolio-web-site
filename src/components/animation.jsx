
import {motion, AnimatePresence} from "framer-motion";

function Animation({ selectedImage, setSelectedImage }) {
  return (
    <>
    {/* مكون لعرض الصورة المحددة في وضع ملء الشاشة مع تأثيرات حركية */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                <img src={selectedImage} className="max-h-[90vh] border-2 border-[#d4af37] shadow-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
    </>
  );
}

export default Animation;




