<template>
  <div>
    <div class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-10">
      <div class="theme-container">
          <div class="flex items-center justify-between py-4 lg:py-0">

            <div class="text-xs tracking-widest space-x-1 flex items-start">
                  <nuxt-link to="/">
                    <AssetsLogoWhite options="w-[6rem] h-12"/>
                  </nuxt-link>
              </div>
              <!-- join us link -->

              <div class="cursor-pointer block lg:hidden" @click="isMenu = !isMenu">
                  <AssetsMenu options="w-8 h-8 text-white" />
              </div>


              <div v-if="isMenu" class="flex flex-col items-center justify-center fixed lg:static inset-0 bg-black lg:bg-transparent h-screen lg:h-auto z-10 pt-16 sm:pt-32 lg:pt-0">

                <div class="block lg:hidden absolute right-5 se:right-10 top-5 se:top-10 z-20 cursor-pointer"  @click="isMenu = !isMenu">
                  <AssetsClose options="w-6 se:w-10 h-6 se:h-10 text-white hover:text-theme-red" />
                </div>


                <div class="h-full">
                  <ul class="flex flex-col lg:flex-row items-end lg:items-center justify-end font-semibold lg:font-normal text-2xl lg:text-sm 2xl:text-base uppercase tracking-wider -ml-3">
                  <li v-for="(item, i) in nav" :key="i">

                    <nuxt-link v-if="!item.external" :to="item.link" :class="item.active ? 'text-white' : ''" class="block lg:hover:bg-white lg:hover:text-black border-b border-transparent focus:outline-none focus:bg-white focus:text-black p-4">{{item.name}}</nuxt-link>

                    <a v-else :href="item.link" :class="item.active ? 'text-white' : ''" class="block lg:hover:bg-white lg:hover:text-black border-b border-transparent focus:outline-none focus:bg-white focus:text-black p-4">{{item.name}}</a>

                  </li>
                </ul>
                <!-- navbar list -->
                </div>

                <div class="flex flex-col sm:flex-row lg:hidden items-center sm:items-start justify-between text-white self-end w-full">
                  <div class="p-5 sm:p-10">
                    <h3 class="text-lg font-semibold mb-1">Contact Us</h3>
                    <ul class="text-sm">
                      <li> Let's talk about your goals! </li>
                      <li> <a href="mailto:info@icon-ad.com"> info@icon-ad.com </a> </li>
                      <li> <a href="tel:+97142636550"> +971 4 263 6550 </a> </li>
                    </ul>
                  </div>
                  <div class="p-5 pt-0 sm:p-10">
                    <h3 class="text-lg font-semibold mb-1">Follow Us</h3>
                    <p class="text-sm"> We post amazing <br> content on our platforms </p>

                    <ul class="space-x-1 mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-100 flex items-center justify-center md:justify-start">
                      <li>
                        <a
                          class="hover:bg-white transition-all cursor-pointer inline-block p-2 hover:text-black rounded"
                          href="https://www.facebook.com/IconCreativeNetwork"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AssetsFacebook options="w-5 h-5" />
                        </a>
                      </li>
                      <li>
                        <a
                          class="hover:bg-white transition-all cursor-pointer inline-block p-2 hover:text-black rounded"
                          href="https://www.linkedin.com/company/icon-advertising-&-design-fz-llc/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AssetsLinkedIn options="w-5 h-5" />
                        </a>
                      </li>
                      <li>
                        <a
                          class="hover:bg-white transition-all cursor-pointer inline-block p-2 hover:text-black rounded"
                          href="https://vimeo.com/user20802083"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AssetsVimeo options="w-5 h-5" />
                        </a>
                      </li>
                      <li>
                        <a
                          class="hover:bg-white transition-all cursor-pointer inline-block p-2 hover:text-black rounded"
                          href="https://www.behance.net/icon-ad"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AssetsBehance options="w-5 h-5" />
                        </a>
                      </li>
                      <li>
                      <a
                        class="hover:bg-white transition-all cursor-pointer inline-block p-2 hover:text-black rounded"
                        href="https://www.pinterest.com/iconadvertising"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AssetsPinterest options="w-5 h-5" />
                      </a>
                    </li>
                    </ul>
                  </div>
                </div>

              </div>

          </div>
      </div>
      <!-- top navbar -->
      <div class="absolute top-[100%] w-full left-0 bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red h-1"></div>

  </div>
  </div>
</template>

<script>

import Queries from '~/utils/Queries'

export default {
data() {
  return {
    nav:[
      {
        name: 'about',
        link: '/about',
        active: true,
        external: false
      },
      {
        name: 'advertising',
        link: 'https://advertising.icon-ad.com',
        active: true,
        external: true
      },
      {
        name: 'digital',
        link: 'https://digital.icon-ad.com',
        active: false,
        external: true
      },
      {
        name: 'branding',
        link: 'https://branding.icon-ad.com',
        active: false,
        external: true
      },
      {
        name: 'plus',
        link: 'https://plus.icon-ad.com',
        active: false,
        external: true
      },
      {
        name: 'clients',
        link: '/clients',
        active: false,
        external: false
      },
      {
        name: 'ideas',
        link: '/ideas',
        active: false,
        external: false
      },
    ]
  }
},

mounted() {

  let q = this.gsap.utils.selector(this.$el);

  const topNavbar = q(".top-navbar")

  const queries = new Queries
  queries.mobile() ? this.isMenu = false : this.isMenu = true

  // const showAnim = this.gsap.from(topNavbar, {
  //     yPercent: -110,
  //     paused: true,
  //     duration: 0.2
  //   }).progress(1);

  //   this.scrollTrigger.create({
  //     start: "top top",
  //     end: 99999,
  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //     }
  //   });

},


computed: {
  isMenu: {

    get() {
      return this.$store.state.isMenu
    },

    set(newValue) {
      this.$store.commit('setIsMenu', newValue)
    }

  },
  current () {
    return this.$store.state.current
  },
}
}
</script>

