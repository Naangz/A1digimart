export function CTA() {
  return `
    <section id="cta" class="py-20 lg:py-32 bg-gradient-to-br from-kos-primary via-pink-600 to-red-600 relative overflow-hidden">
      
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main CTA Content -->
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            🚀 Download & Mulai Hidup Lebih Praktis
          </h2>
          <p class="text-xl sm:text-2xl text-red-100 mb-4 font-medium">
            Hidup di kos nggak harus ribet. Dengan KOS A1, semua kebutuhanmu ada di ujung jari.
          </p>
          <p class="text-lg text-white font-bold mb-8">
            👉 Mulai sekarang. Rasakan hidup yang lebih cerdas, lebih simple, dan lebih hemat.
          </p>
          
          <!-- Download Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <!-- Google Play Button -->
            <a 
              href="#" 
              class="cta-button group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:scale-105 transform transition-all duration-300"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs text-kos-gray-600 uppercase">Download di</div>
                <div class="text-base font-black">Google Play</div>
              </div>
            </a>

            <!-- App Store Button -->
            <a 
              href="#" 
              class="cta-button group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:scale-105 transform transition-all duration-300"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs text-kos-gray-600 uppercase">Download di</div>
                <div class="text-base font-black">App Store</div>
              </div>
            </a>
          </div>

          <!-- QR Code Alternative -->
          <div class="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl px-6 py-4 mb-8">
            <div class="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-4xl">
              📱
            </div>
            <div class="text-left">
              <p class="text-white font-semibold mb-1">Scan QR untuk download</p>
              <p class="text-red-200 text-sm">Atau cari "KOS A1" di store</p>
            </div>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-6 justify-center items-center text-white/90">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">10K+ Pengguna Aktif</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Gratis & Aman</span>
            </div>
          </div>
        </div>

        <!-- Features Recap -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div class="text-4xl mb-3">⚡</div>
            <p class="text-white font-semibold">Bayar Listrik & Internet</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div class="text-4xl mb-3">🧺</div>
            <p class="text-white font-semibold">Laundry & Cleaning</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div class="text-4xl mb-3">🔔</div>
            <p class="text-white font-semibold">Reminder Otomatis</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div class="text-4xl mb-3">💰</div>
            <p class="text-white font-semibold">Promo & Cashback</p>
          </div>
        </div>

        <!-- Final Push -->
        <div class="text-center">
          <p class="text-2xl text-white font-bold mb-4">
            ⭐ Smart Living Companion untuk Anak Kos.
          </p>
          <p class="text-red-100 text-lg">
            Gabung dengan ribuan mahasiswa yang sudah merasakan kemudahan hidup ber-kos dengan KOS A1
          </p>
        </div>

      </div>
    </section>
  `
}
