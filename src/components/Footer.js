export function Footer() {
  return `
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
  `
}
