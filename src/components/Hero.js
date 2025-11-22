export function Hero() {
  return `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-pink-50 to-white">
      
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-72 h-72 bg-kos-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <!-- Content Container -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left Column - Text Content -->
          <div class="text-center lg:text-left space-y-6 lg:space-y-8">
            
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <span class="text-2xl">⭐</span>
              <span class="text-sm font-semibold text-kos-gray-700">Smart Living Companion</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span class="bg-gradient-to-r from-kos-primary via-pink-500 to-red-500 bg-clip-text text-transparent">
                KOS A1
              </span>
              <br/>
              <span class="text-gray-900">
                untuk Anak Kos
              </span>
            </h1>

            <!-- Subtitle -->
            <p class="text-xl sm:text-2xl text-kos-gray-700 font-medium">
              Atur semua kebutuhan kos dalam satu aplikasi. 
              <span class="text-kos-primary font-bold">Praktis, cepat, dan anti ribet!</span>
            </p>

            <!-- Description -->
            <p class="text-base sm:text-lg text-kos-gray-600 leading-relaxed">
              Bayangkan semua tagihan bulananmu—<span class="font-semibold text-kos-gray-800">listrik, internet, laundry, catering, hingga cleaning service</span>—tersedia dalam satu aplikasi. Dengan KOS A1, hidup sebagai anak kos jadi lebih teratur, hemat waktu, dan bebas drama lupa bayar.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <!-- Primary CTA -->
              <a 
                href="#cta" 
                class="cta-button group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-kos-primary to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                <span>📱</span>
                <span>Download Gratis</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              <!-- Secondary CTA -->
              <a 
                href="#features" 
                class="inline-flex items-center justify-center gap-2 bg-white text-kos-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-kos-gray-200 hover:border-kos-primary hover:text-kos-primary shadow-lg hover:shadow-xl transform transition-all duration-300"
              >
                <span>Lihat Fitur</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>

            <!-- Social Proof / Stats -->
            <div class="flex flex-wrap gap-6 justify-center lg:justify-start pt-6">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-kos-primary-400 to-kos-primary-600 border-2 border-white"></div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white"></div>
                </div>
                <span class="text-sm text-kos-gray-600 font-medium">10K+ pengguna aktif</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-kos-gray-600 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <!-- Right Column - Phone Mockup with Real Image -->
          <div class="relative lg:block">
            <div class="relative">
              <!-- Phone Mockup dengan Gambar Real -->
              <div class="relative mx-auto w-full max-w-md">
                <div class="relative bg-gradient-to-br from-kos-primary to-pink-600 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div class="bg-black rounded-[2.5rem] overflow-hidden">
                    <!-- Real Screenshot dari Assets -->
                    <img 
                      src="/src/assets/images/landing_pageA12.PNG" 
                      alt="KOS A1 App Screenshot" 
                      class="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="hidden lg:block absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <p class="text-sm font-bold text-kos-gray-800">✅ Auto Reminder</p>
                <p class="text-xs text-kos-gray-500">Jatuh tempo dalam 3 hari</p>
              </div>
              <div class="hidden lg:block absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-2000">
                <p class="text-sm font-bold text-kos-gray-800">💰 Hemat 20%</p>
                <p class="text-xs text-kos-gray-500">Paket bundling aktif</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" class="flex flex-col items-center gap-2 text-kos-gray-600 hover:text-kos-primary transition-colors duration-300">
          <span class="text-sm font-medium">Scroll untuk lebih lanjut</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </section>
  `
}
