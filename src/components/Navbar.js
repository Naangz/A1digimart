export function Navbar() {
  return `
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
  `
}
