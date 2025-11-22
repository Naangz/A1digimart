(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="/A1digimart/assets/landing_pageA12-BeZ7E_wx.png";function c(){return`
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          
          <!-- Logo & Brand -->
          <div class="flex items-center">
            <a href="#hero" class="flex items-center space-x-2 group">
              <div class="bg-gradient-to-r from-kos-primary to-kos-blue p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-xl">⭐</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xl md:text-2xl font-bold bg-gradient-to-r from-kos-primary to-kos-blue bg-clip-text text-transparent">
                  KOS A1
                </span>
                <span class="text-xs text-kos-gray-500 hidden sm:block">Smart Living Companion</span>
              </div>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center space-x-8">
            <a href="#features" class="text-kos-gray-700 hover:text-kos-primary font-medium transition-colors duration-200">
              Fitur
            </a>
            <a href="#benefits" class="text-kos-gray-700 hover:text-kos-primary font-medium transition-colors duration-200">
              Keunggulan
            </a>
            <a href="#target" class="text-kos-gray-700 hover:text-kos-primary font-medium transition-colors duration-200">
              Untuk Siapa?
            </a>
            
            <!-- CTA Button Desktop -->
            <a href="#cta" class="cta-button bg-gradient-to-r from-kos-primary to-kos-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
              Download Sekarang
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            id="mobile-menu-btn" 
            class="lg:hidden relative w-10 h-10 text-kos-gray-700 hover:text-kos-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <span class="sr-only">Open main menu</span>
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span class="block w-6 h-0.5 bg-current transform transition-all duration-300"></span>
              <span class="block w-6 h-0.5 bg-current mt-1.5 transform transition-all duration-300"></span>
              <span class="block w-6 h-0.5 bg-current mt-1.5 transform transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-kos-gray-100 shadow-lg">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <a href="#features" class="block px-4 py-3 text-kos-gray-700 hover:bg-kos-primary-50 hover:text-kos-primary rounded-lg font-medium transition-colors duration-200">
            Fitur Unggulan
          </a>
          <a href="#benefits" class="block px-4 py-3 text-kos-gray-700 hover:bg-kos-primary-50 hover:text-kos-primary rounded-lg font-medium transition-colors duration-200">
            Keunggulan KOS A1
          </a>
          <a href="#target" class="block px-4 py-3 text-kos-gray-700 hover:bg-kos-primary-50 hover:text-kos-primary rounded-lg font-medium transition-colors duration-200">
            Untuk Siapa?
          </a>
          
          <!-- CTA Button Mobile -->
          <div class="pt-4">
            <a href="#cta" class="cta-button block text-center bg-gradient-to-r from-kos-primary to-kos-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform transition-all duration-300">
              📱 Download Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Spacer untuk navbar fixed -->
    <div class="h-16 md:h-20"></div>
  `}function g(){return`
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
                    <!-- Real Screenshot dari Assets - GANTI PATH -->
                    <img 
                      id="hero-app-image"
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
  `}function u(){return`
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
  `}function x(){return`
    <section id="benefits" class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            🔥 Kenapa Harus 
            <span class="bg-gradient-to-r from-kos-primary to-pink-600 bg-clip-text text-transparent">KOS A1</span>?
          </h2>
          <p class="text-lg text-kos-gray-600">
            5 alasan kuat yang membuat KOS A1 jadi solusi terbaik untuk anak kos
          </p>
        </div>

        <!-- Benefits List -->
        <div class="space-y-8">
          
          <!-- Benefit 1 -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="grid lg:grid-cols-12 items-center">
              <div class="lg:col-span-8 p-8 lg:p-12">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-kos-primary to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      ✅ Semua Pembayaran Kos dalam Satu Aplikasi
                    </h3>
                    <p class="text-kos-gray-700 text-lg leading-relaxed">
                      Tidak perlu lagi membuka banyak aplikasi atau keluar kos untuk bayar laundry atau listrik. Semuanya bisa dilakukan di KOS A1. <span class="font-semibold text-kos-primary">Hemat waktu, hemat tenaga!</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 bg-gradient-to-br from-red-100 to-red-200 p-8 h-full flex items-center justify-center">
                <div class="text-6xl">📱</div>
              </div>
            </div>
          </div>

          <!-- Benefit 2 -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="grid lg:grid-cols-12 items-center">
              <div class="lg:col-span-4 bg-gradient-to-br from-kos-primary-100 to-kos-primary-200 p-8 h-full flex items-center justify-center lg:order-first order-last">
                <div class="text-6xl">🔔</div>
              </div>
              <div class="lg:col-span-8 p-8 lg:p-12">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-kos-primary-500 to-kos-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      ✅ Reminder Otomatis
                    </h3>
                    <p class="text-kos-gray-700 text-lg leading-relaxed">
                      Tidak ada lagi cerita "lupa bayar listrik". Aplikasi akan memberikan pengingat otomatis sebelum jatuh tempo. <span class="font-semibold text-kos-primary">Bebas drama lupa bayar!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefit 3 -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="grid lg:grid-cols-12 items-center">
              <div class="lg:col-span-8 p-8 lg:p-12">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      ✅ Paket Bundling Hemat
                    </h3>
                    <p class="text-kos-gray-700 text-lg leading-relaxed">
                      Gabungkan pembayaran kos + listrik + internet + laundry dalam satu paket. <span class="font-semibold text-pink-600">Lebih hemat, lebih simple.</span> Atur pengeluaran bulanan jadi lebih efisien.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 bg-gradient-to-br from-pink-100 to-pink-200 p-8 h-full flex items-center justify-center">
                <div class="text-6xl">💰</div>
              </div>
            </div>
          </div>

          <!-- Benefit 4 -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="grid lg:grid-cols-12 items-center">
              <div class="lg:col-span-4 bg-gradient-to-br from-gray-100 to-gray-200 p-8 h-full flex items-center justify-center lg:order-first order-last">
                <div class="text-6xl">📊</div>
              </div>
              <div class="lg:col-span-8 p-8 lg:p-12">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      ✅ Histori Pembayaran yang Rapi
                    </h3>
                    <p class="text-kos-gray-700 text-lg leading-relaxed">
                      Semua transaksi tercatat dengan jelas. <span class="font-semibold text-gray-600">Cocok untuk kamu yang ingin mengatur keuangan bulanan.</span> Tracking pengeluaran jadi lebih mudah dan transparan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefit 5 -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="grid lg:grid-cols-12 items-center">
              <div class="lg:col-span-8 p-8 lg:p-12">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    5
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      ✅ Terhubung dengan Penyedia Jasa Lokal
                    </h3>
                    <p class="text-kos-gray-700 text-lg leading-relaxed">
                      KOS A1 bekerja sama dengan laundry, catering, dan cleaning service di sekitar kosmu. <span class="font-semibold text-rose-600">Lebih dekat, lebih cepat.</span> Semua jasa terpercaya ada dalam genggaman.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 bg-gradient-to-br from-rose-100 to-rose-200 p-8 h-full flex items-center justify-center">
                <div class="text-6xl">🤝</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Statement -->
        <div class="mt-16 text-center bg-gradient-to-r from-kos-primary to-pink-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <p class="text-2xl lg:text-3xl font-bold text-white mb-4">
            Dengan KOS A1, hidup di kos jadi lebih teratur, hemat waktu, dan bebas drama!
          </p>
          <p class="text-lg text-red-100 mb-6">
            Lebih dari 10.000 anak kos sudah merasakan manfaatnya
          </p>
          <a 
            href="#cta" 
            class="inline-flex items-center gap-2 bg-white text-kos-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span>Gabung Sekarang</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `}function p(){return`
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
  `}function m(){return`
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
  `}function b(){return`
    <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <span class="text-white font-bold text-xl">⭐</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  KOS A1
                </span>
                <span class="text-xs text-gray-400">Smart Living Companion</span>
              </div>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">
              Aplikasi #1 untuk mengatur semua kebutuhan kos dalam satu platform. Praktis, cepat, dan anti ribet!
            </p>
            <!-- Social Media -->
            <div class="flex gap-3 pt-2">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" aria-label="TikTok">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Product Links -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Produk</h3>
            <ul class="space-y-2">
              <li>
                <a href="#features" class="text-sm hover:text-blue-400 transition-colors duration-200">Fitur Unggulan</a>
              </li>
              <li>
                <a href="#benefits" class="text-sm hover:text-blue-400 transition-colors duration-200">Keunggulan</a>
              </li>
              <li>
                <a href="#cta" class="text-sm hover:text-blue-400 transition-colors duration-200">Download Aplikasi</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Promo & Diskon</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Mitra Layanan</a>
              </li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Perusahaan</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Tentang Kami</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Karir</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Press Kit</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Hubungi Kami</a>
              </li>
            </ul>
          </div>

          <!-- Support & Legal -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Bantuan & Legal</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Pusat Bantuan</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">FAQ</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:text-blue-400 transition-colors duration-200">Jadi Mitra</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="border-t border-gray-800 pt-8 pb-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-white font-bold text-lg mb-2">📧 Dapatkan Update Terbaru</h3>
              <p class="text-sm text-gray-400">Subscribe untuk mendapat promo dan fitur terbaru KOS A1</p>
            </div>
            <div>
              <form class="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Masukkan email kamu"
                  class="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <button 
                  type="submit"
                  class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-400">
            © 2025 <span class="text-white font-semibold">KOS A1</span>. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  `}function v(){const r=document.querySelector("#app");r.innerHTML="",r.innerHTML=`
    ${c()}
    ${g()}
    ${u()}
    ${x()}
    ${p()}
    ${m()}
    ${b()}
  `;const a=document.querySelector("#hero-app-image");a&&(a.src=d)}function h(){const r=document.querySelector("#mobile-menu-btn"),a=document.querySelector("#mobile-menu");r&&a&&r.addEventListener("click",()=>{a.classList.toggle("hidden")}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const n=t.getAttribute("href"),l=document.querySelector(n);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),a&&a.classList.add("hidden"))})});const s=document.querySelector("#navbar");s&&window.addEventListener("scroll",()=>{window.scrollY>50?s.classList.add("shadow-lg","bg-white"):s.classList.remove("shadow-lg")}),document.querySelectorAll(".cta-button").forEach(t=>{t.addEventListener("click",()=>{console.log("CTA Button clicked:",t.textContent)})})}document.addEventListener("DOMContentLoaded",()=>{v(),h()});
