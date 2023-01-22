<template>
  <div>

      <TopNavbar class="hidden md:block" />
      <MobileMegaMenu class="relative z-50 block md:hidden" />

      <div>
        <Nuxt />
      </div>

      <footer id="FooterSection" class="footer-section bg-theme-gray pt-16 pb-8 3xl:pt-32 pb-10">
        <div class="theme-container">
          <Footer />
        </div>
      </footer>

  </div>
</template>
