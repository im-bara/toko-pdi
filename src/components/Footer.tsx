import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-red-700 text-white px-6 py-10 mt-12 border-t border-primary"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Hubungi Kami - Kiri */}
        <div className="text-left">
          <h3 className="font-bold uppercase text-gray-300 mb-2">Hubungi Kami</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-300">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-300">WhatsApp</a></li>
            <li><a href="#" className="hover:text-yellow-300">Email</a></li>
          </ul>
        </div>

        {/* Toko PDI - Tengah */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-wide flex items-center justify-center gap-2">
            ⚜️ Toko PDI
          </h2>
          <p className="text-sm text-gray-200 mt-2 max-w-sm mx-auto opacity-80">
            Berdiri sejak zaman gorong gorong. Dinasti Raja Jawa.
          </p>

          {/* Credit */}
          <div className="mt-6 text-xs text-gray-300">
            <p>MADE WITH 🧱 BY</p>
            <p>Bara Knight &copy; {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Navigasi - Kanan */}
        <div className="text-right">
          <h3 className="font-bold uppercase text-gray-300 mb-2">Navigasi</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Produk</a></li>
            <li><a href="#" className="hover:text-yellow-300">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-yellow-300">Kontak</a></li>
          </ul>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
