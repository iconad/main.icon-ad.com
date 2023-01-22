<template>
    <div>
      <div class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-10 py-5">
        <div class="theme-container">
            <div class="flex items-center justify-center md:justify-between">

              <div class="text-xs tracking-widest space-x-1 hidden lg:flex items-start">
                    <nuxt-link to="/">
                      <AssetsLogoCreative options="w-[10rem]"/>
                    </nuxt-link>
                </div>
                <!-- join us link -->

                <ul class="flex items-center text-sm 2xl:text-base uppercase tracking-wider -ml-3 space-x-5 2xl:space-x-8">
                    <li v-for="(item, i) in nav" :key="i">
                         <nuxt-link :to="item.link" :class="item.active ? 'text-white' : ''" class="py-1 block hover:border-gray-500 border-b border-transparent focus:outline-none focus:border-gray-500">{{item.name}}</nuxt-link>
                    </li>
                </ul>
                <!-- navbar list -->

            </div>
        </div>
        <!-- top navbar -->
    </div>
    <div class="bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red h-2">hello</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nav:[
        {
          name: 'about',
          link: '/about',
          active: true
        },
        {
          name: 'advertising',
          link: 'https://advertising.icon-ad.com',
          active: true
        },
        {
          name: 'digital',
          link: 'https://digital.icon-ad.com',
          active: false
        },
        {
          name: 'branding',
          link: '/coming-soon',
          active: false
        },
        {
          name: 'plus',
          link: '/coming-soon',
          active: false
        },
        {
          name: 'clients',
          link: '/coming-soon',
          active: false
        },
        {
          name: 'ideas',
          link: '/coming-soon',
          active: false
        },
      ]
    }
  },

  mounted() {

    let q = this.gsap.utils.selector(this.$el);

    const topNavbar = q(".top-navbar")


    // this.gsap.to(topNavbar, {
    //   scrollTrigger: {
    //     start: "top top",
    //     end: 99999,
    //     onUpdate: (self) => {
    //       self.direction === -1 ? showAnim.play() : showAnim.reverse()
    //     }
    //   },
    //   yPercent: -100,
    //   paused: true,
    //   duration: 0.2
    // })

    const showAnim = this.gsap.from(topNavbar, {
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);

      this.scrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });

  },


  computed: {
    current () {
      return this.$store.state.current
    },
  }
}
</script>



