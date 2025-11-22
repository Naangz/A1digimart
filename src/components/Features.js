export function Features() {
  return `
    <section id="features" class="py-20 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            🎯 Fitur Unggulan 
            <span class="bg-gradient-to-r from-kos-primary to-pink-600 bg-clip-text text-transparent">KOS A1</span>
          </h2>
          <p class="text-lg text-kos-gray-600">
            Semua yang kamu butuhkan untuk hidup kos yang lebih praktis dan terorganisir
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature 1: Dashboard Cerdas -->
          <div class="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-red-200">
            <div class="bg-gradient-to-br from-kos-primary to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">📊</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Dashboard Cerdas
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Cek tagihan, layanan aktif, dan pengeluaran bulanan hanya dalam sekali lihat. Semua informasi penting ada di ujung jari.
            </p>
          </div>

          <!-- Feature 2: Token Listrik & Internet -->
          <div class="group bg-gradient-to-br from-kos-primary-50 to-kos-primary-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-kos-primary-200">
            <div class="bg-gradient-to-br from-kos-primary-500 to-kos-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">⚡</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Pembelian Token Listrik & Internet
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Tidak perlu keluar kamar. Pembayaran cepat, langsung masuk hitungan. Hemat waktu dan tenaga.
            </p>
          </div>

          <!-- Feature 3: Layanan Laundry, Catering, Cleaning -->
          <div class="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-pink-200">
            <div class="bg-gradient-to-br from-pink-500 to-pink-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">🧺</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Layanan Laundry, Catering, dan Cleaning
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Tinggal pilih layanan → bayar → selesai. Semua jasa terpercaya ada dalam satu aplikasi.
            </p>
          </div>

          <!-- Feature 4: E-Receipt & History -->
          <div class="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-200">
            <div class="bg-gradient-to-br from-gray-500 to-gray-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">📝</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              E-Receipt & History
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Semua bukti pembayaran tersimpan aman. Cocok untuk kamu yang ingin mengatur keuangan bulanan dengan rapi.
            </p>
          </div>

          <!-- Feature 5: Promo & Cashback -->
          <div class="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-yellow-200">
            <div class="bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">💰</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Promo & Cashback Menarik
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Nikmati banyak promo untuk pengguna baru, referral, dan bundling layanan. Semakin hemat, semakin untung.
            </p>
          </div>

          <!-- Feature 6: Auto Reminder -->
          <div class="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-rose-200">
            <div class="bg-gradient-to-br from-rose-500 to-rose-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-lg">
              <span class="text-3xl">🔔</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Reminder Otomatis
            </h3>
            <p class="text-kos-gray-700 leading-relaxed">
              Tidak ada lagi cerita "lupa bayar listrik". Aplikasi akan memberikan pengingat otomatis sebelum jatuh tempo.
            </p>
          </div>

        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <p class="text-kos-gray-600 mb-6 text-lg">
            Semua fitur ini dirancang khusus untuk membuat hidup anak kos lebih mudah
          </p>
          <a 
            href="#cta" 
            class="inline-flex items-center gap-2 bg-gradient-to-r from-kos-primary to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span>Coba Gratis Sekarang</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `
}
