<template>
    <div class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-10">
      <div class="theme-container main-navbar relative z-10">
          <div class="flex items-center justify-between h-16">

              <div class="main-logo text-xxxs tracking-widest space-x-1 flex items-start font-medium">
                  <nuxt-link to="/">
                    <AssetsLogoWhite options="w-[6rem] h-12"/>
                  </nuxt-link>
              </div>
              <!-- Logo -->

              <div class="cursor-pointer block md:hidden" @click="isMenu = !isMenu">
                <AssetsMenu options="w-8 h-8" />
              </div>

              <div v-if="isMenu" class="absolute left-0 top-0 bg-theme-gray-1 w-full h-screen p-5 z-20 border-b-2 border-gray-500 md:static md:bg-transparent md:w-auto md:h-auto md:p-0 md:border-0 flex items-center justify-center md:block text-right md:text-left md:text-base">

                <div class="block md:hidden absolute right-5 top-5 cursor-pointer text-gray-300 hover:text-theme-red"  @click="isMenu = !isMenu">
                  <AssetsClose options="w-8 h-8" />
                </div>

                <ul v-if="isMenu" class="md:flex items-end uppercase tracking-wider space-x-0 md:space-x-10 space-y-5 md:space-y-0 text-gray-100 md:text-black">
                    <li class="text-2xl md:text-base" @click="menuStatus(menu)" v-for="(menu, i) in nav" :key="i">

                        <div class="flex items-center justify-end space-x-3 cursor-pointer relative">
                          <a v-if="menu.external" :href="`${menu.link}`" class="font-bold">{{menu.name}}</a>
                          <nuxt-link v-else-if="!menu.nested" :to="`${menu.link}`" class="font-bold">{{menu.name}}</nuxt-link>
                          <span v-else class="font-bold">{{menu.name}}</span>
                          <template v-if="menu.nested">
                              <div class="absolute -right-10 top-1">
                                <AssetsUpArrowWhite options="w-8" v-if="menu.active" />
                                <AssetsDownArrowWhite options="w-8" v-else />
                              </div>
                          </template>
                        </div>

                        <ul v-if="menu.nested && menu.active" class="mt-2 space-y-2">
                            <li class="text-base" v-for="(neseted, n) in menu.nested" :key="n">

                              <a v-if="neseted.external" :href="`${neseted.link}`" class="font-light">{{neseted.name}}</a>
                              <nuxt-link v-else :to="`${neseted.link}`" class="font-light">{{neseted.name}}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- navbar menu -->

              </div>
              <!-- menu responsive wrapper -->
          </div>
      </div>
      <!-- main navbar -->
      <UtilsRainbowBar id="UtilsRainbowBar" colors="from-theme-sky via-theme-purple to-theme-pink w-full" />
  </div>
</template>

<script>
import Queries from '~/utils/Queries'

export default {

data() {
  return {
    nav: [
      {
        name: 'about',
        link: '/about',
        external: false,
        nested: false
      },
      {
        name: 'Advertising',
        link: false,
        active: false,
        nested: [
          {
            name: 'home',
            link: '/',
          },
          {
            name: 'work',
            link: '/projects',
          },
          {
            name: 'expertise',
            link: '/expertise',
          }
        ]
      },
      {
        name: 'digital',
        link: false,
        active: false,
        nested: [
          {
            name: 'home',
            external: true,
            link: 'https://digital.icon-ad.com',
          },
          {
            name: 'work',
            external: true,
            link: 'https://digital.icon-ad.com/projects',
          },
          {
            name: 'expertise',
            external: true,
            link: 'https://digital.icon-ad.com/expertise',
          }
        ]
      },
      {
        name: 'branding',
        link: false,
        active: false,
        nested: [
          {
            name: 'home',
            external: true,
            link: 'https://branding.icon-ad.com',
          },
          {
            name: 'work',
            external: true,
            link: 'https://branding.icon-ad.com/projects',
          },
          {
            name: 'expertise',
            external: true,
            link: 'https://branding.icon-ad.com/expertise',
          }
        ]
      },
      {
        name: 'plus',
        link: false,
        active: false,
        nested: [
          {
            name: 'join the waiting list',
            external: true,
            link: 'https://plus.icon-ad.com',
          }
        ]
      },
      {
        name: 'clients',
        link: '/clients',
        external: false,
        nested: false
      },
      {
        name: 'ideas',
        external: false,
        link: '/ideas',
        nested: false
      },
    ]
  }
},

mounted() {

    const queries = new Queries
    queries.mobile() ? this.isMenu = false : this.isMenu = true

},

methods: {
  menuStatus (menu) {

    this.nav.map(e => {
      if(e != menu) {
        e.active = false
      }
    })

    return menu.active = !menu.active

  }
},

computed: {
  isMenu: {
    get() {
      return this.$store.state.isMenu
    },

    set(newValue) {
      this.$store.commit('setIsMenu', newValue)
    }

  }
}
}
</script>
