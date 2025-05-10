import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);

  const kategoriUtama = ['Sunan Masukparit', 'Nghutankhamun III', 'Camat Sidongutang', 'Tuanku Imam Bohong'];
  const kategoriTambahan = ['Pangeran Nipunegoro', 'I Gede Utange', 'Wali Songong', 'Chow Ko Wie'];

  return (
    <motion.div
      className="container bg-red-300 mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl text-red-100 md:text-5xl font-bold text-primary">
          🐂 Selamat Datang di Toko PDI
        </h1>
        <p className="mt-4 text-lg text-red-900 opacity-70 max-w-2xl mx-auto">
          Tempat Jualan, dengan Bonus Makar Maksimal
        </p>
        <button className="btn bg-red-700 text-red-100 btn-primary:shadow-black mt-6">
          Lihat Produk Unggulan
        </button>
      </section>

      {/* Kategori */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Kategori Utama */}
          {kategoriUtama.map((kategori) => (
            <motion.div
              key={kategori}
              layout
              className="p-4 bg-red-600 rounded-xl shadow hover:scale-105 transition-transform cursor-pointer text-center"
            >
              <span className="text-xl text-white font-bold">{kategori}</span>
            </motion.div>
          ))}

          {/* Kategori Tambahan */}
          <AnimatePresence>
            {showMore &&
              kategoriTambahan.map((kategori) => (
                <motion.div
                  key={kategori}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-red-500 rounded-xl shadow hover:scale-105 transition-transform cursor-pointer text-center"
                >
                  <span className="text-xl text-white font-semibold">{kategori}</span>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Tombol Toggle */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-white underline hover:text-gray-300 transition duration-200"
          >
            {showMore ? 'Tutup Kategori' : 'Kategori Lain →'}
          </button>
        </div>
      </section>

      {/* Produk */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Produk Terpopuler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure className="h-40 bg-red-400 flex items-center justify-center">
                <span className="text-6xl">🐂</span>
              </figure>
              <div className="card-body bg-red-600">
                <h3 className="card-title text-white">Produk #{i + 1}</h3>
                <p className="text-sm text-white opacity-70">Rakyat yang di Kibulin pemerintah Beli ini</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-red-400 shadow-lg hover:shadow-xl md:btn-md sm:btn-sm">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
