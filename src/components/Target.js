export function Target() {
  return `
    <section id="target" class="py-20 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Problem Statement Section -->
        <div class="mb-20">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              🧑‍🎓 Dibuat Khusus untuk 
              <span class="bg-gradient-to-r from-kos-primary to-pink-600 bg-clip-text text-transparent">Anak Kos</span>
            </h2>
            <p class="text-lg text-kos-gray-600">
              Mahasiswa perantau sering menghadapi masalah yang sama
            </p>
          </div>

          <!-- Problems Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
              <div class="text-4xl mb-3">😰</div>
              <p class="text-red-800 font-semibold">Lupa bayar kos atau listrik</p>
            </div>
            <div class="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
              <div class="text-4xl mb-3">🧺</div>
              <p class="text-orange-800 font-semibold">Laundry menumpuk</p>
            </div>
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
              <div class="text-4xl mb-3">🤔</div>
              <p class="text-yellow-800 font-semibold">Susah cari jasa terpercaya</p>
            </div>
            <div class="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
              <div class="text-4xl mb-3">😫</div>
              <p class="text-pink-800 font-semibold">Ribet urus pembayaran bulanan</p>
            </div>
          </div>

          <!-- Solution Statement -->
          <div class="bg-gradient-to-r from-kos-primary to-pink-600 rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
              KOS A1 hadir sebagai solusi lengkap! ✨
            </h3>
            <p class="text-lg text-red-100 max-w-3xl mx-auto">
              Sehingga kamu hanya perlu fokus pada kuliah dan aktivitasmu. 
              <span class="font-bold text-white">Urusan kos? Biar KOS A1 yang urus.</span>
            </p>
          </div>
        </div>

        <!-- Target Audience Section -->
        <div>
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              💡 Cocok untuk 
              <span class="bg-gradient-to-r from-kos-primary to-pink-600 bg-clip-text text-transparent">Siapa?</span>
            </h2>
            <p class="text-lg text-kos-gray-600">
              KOS A1 dirancang untuk berbagai kalangan yang terlibat dalam ekosistem kos-kosan
            </p>
          </div>

          <!-- Target Personas Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Target 1: Mahasiswa -->
            <div class="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-kos-primary to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  🎓
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Mahasiswa Perantau
                </h3>
                <p class="text-kos-gray-700">
                  Solusi praktis untuk mengatur semua kebutuhan kos tanpa ribet
                </p>
              </div>
            </div>

            <!-- Target 2: Pemilik Kos -->
            <div class="group bg-gradient-to-br from-kos-primary-50 to-kos-primary-100 rounded-2xl p-8 border-2 border-kos-primary-200 hover:border-kos-primary-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-kos-primary-500 to-kos-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  🏠
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Pemilik Kos
                </h3>
                <p class="text-kos-gray-700">
                  Tingkatkan nilai properti dengan layanan digital modern
                </p>
              </div>
            </div>

            <!-- Target 3: Laundry & Jasa Lokal -->
            <div class="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  🧺
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Laundry & Jasa Lokal
                </h3>
                <p class="text-kos-gray-700">
                  Jangkau lebih banyak pelanggan mahasiswa dengan mudah
                </p>
              </div>
            </div>

            <!-- Target 4: Layanan Internet -->
            <div class="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  📶
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Layanan Internet Kos
                </h3>
                <p class="text-kos-gray-700">
                  Platform pembayaran yang terintegrasi dan efisien
                </p>
              </div>
            </div>

            <!-- Target 5: Catering -->
            <div class="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  🍱
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Catering Mahasiswa
                </h3>
                <p class="text-kos-gray-700">
                  Kelola pesanan dan pembayaran catering lebih sistematis
                </p>
              </div>
            </div>

            <!-- Target 6: Cleaning Service -->
            <div class="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                  🧹
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Cleaning Service
                </h3>
                <p class="text-kos-gray-700">
                  Dapatkan order rutin dari penghuni kos secara otomatis
                </p>
              </div>
            </div>

          </div>

          <!-- For Business Owners Section -->
          <div class="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 border-2 border-kos-gray-200">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  🤝 Untuk Pemilik Kos & Mitra Bisnis
                </h3>
                <p class="text-kos-gray-700 text-lg mb-6 leading-relaxed">
                  KOS A1 membantu pemilik kos untuk menyediakan layanan modern berbasis aplikasi, 
                  menarik lebih banyak penyewa, dan mengelola pembayaran secara efisien.
                </p>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start gap-3">
                    <span class="text-green-600 font-bold text-xl">✓</span>
                    <span class="text-kos-gray-700">Tingkatkan daya saing properti kos Anda</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-green-600 font-bold text-xl">✓</span>
                    <span class="text-kos-gray-700">Sistem pembayaran digital yang aman</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-green-600 font-bold text-xl">✓</span>
                    <span class="text-kos-gray-700">Dashboard manajemen yang mudah digunakan</span>
                  </li>
                </ul>
                <a 
                  href="#cta" 
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-kos-primary to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                >
                  <span>Daftar Sebagai Mitra</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
              <div class="flex justify-center">
                <div class="text-8xl lg:text-9xl">🏢</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
