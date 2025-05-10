import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-red-700 shadow-md sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo Kiri */}
        <div className="flex-1">
          <a className="text-xl font-bold tracking-widest text-primary-content">
            🐂 Toko PDI
          </a>
        </div>

        {/* Menu Tengah */}
        <div className="hidden md:flex gap-6">
            <a className="btn btn-ghost text-lg hover:bg-red-900 hover:text-white transition-colors">
              Home
            </a>
            <a className="btn btn-ghost text-lg hover:bg-red-900 hover:text-white transition-colors">
              Produk
            </a>
            <a className="btn btn-ghost text-lg hover:bg-red-900 hover:text-white transition-colors">
              Tentang Kami
            </a>
        </div>


        {/* Kanan */}
        <div className="flex-none">
          <button className="btn bg-red-300 text-white shadow-lg hover:shadow-xl md:btn-md sm:btn-sm">Keranjang 🛒</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
