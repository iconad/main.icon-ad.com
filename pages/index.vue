<template>
  <div class="py-10 bg-black vsm:py-32 h-full vsm:h-screen flex items-center w-full">

    <div class="w-full">
      <div class="theme-container relative">

        <div v-if="video" @click="video = !video" class="absolute z-50 top-0 right-[45%] md:-right-10">
          <AssetsClose options="w-8 md:w-12 h-8 md:h-12 cursor-pointer text-gray-400 md:text-gray-200 hover:text-theme-red" />
        </div>

        <div class="w-full space-y-12 md:space-y-16 bg-gradient-to-b from-theme-gray-1 via-theme-gray-1 to-black pt-20 2xl:pt-32 rounded-2xl relative overflow-hidden">


          <div v-if="video" class="absolute left-0 bottom-0 md:bottom-[inherit] top-0 md:top-2 w-full z-20 flex items-center justify-center bg-black md:bg-transparent rounded-2xl overflow-hidden">
            <div class="w-full h-auto bg-white box-shadow overflow-hidden rounded-2xl overflow-hidden">
              <client-only>
                <vimeo-player
                  v-cloak
                  @ready="onReady"
                  ref="player"
                  :options="options"
                  :video-id="`766097376`"
                ></vimeo-player>
              </client-only>
            </div>
          </div>



          <section id="coverSection">
            <AdvertisingFrontCover />
          </section>
          <!-- cover section -->



          <div class="flex items-center justify-center w-full">
            <div class="space-y-5 md:space-y-10 text-center w-full">

              <p class="text-lg md:text-2xl font-light text-gray-100">What are you looking for?</p>

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-4 w-full">

                <div class="rounded-2xl h-24 md:h-32 2xl:h-40 w-full bg-transparent cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
                  <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex items-center justify-center">
                    <AssetsLogoAdWhite options="w-20 lg:w-40 mx-auto hidden" />
                    <a href="https://advertising.icon-ad.com/" class="inner bg-theme-gray-1 w-full h-full rounded-2xl text-white text-base md:text-lg font-semibold tracking-wide flex items-center justify-center">
                      <span> ADVERTISING </span>
                    </a>
                  </div>
                </div>
                <!-- box -->

                <div class="rounded-2xl h-24 md:h-32 2xl:h-40 w-full bg-transparent cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
                  <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex items-center justify-center">
                    <a href="https://digital.icon-ad.com/" class="inner bg-theme-gray-1 w-full h-full rounded-2xl text-white text-base md:text-lg font-semibold tracking-wide flex items-center justify-center">
                      <span> DIGITAL </span>
                    </a>
                  </div>
                </div>
                <!-- box -->

                <div class="rounded-2xl h-24 md:h-32 2xl:h-40 w-full bg-transparent cursor-wait transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
                  <a href="https://branding.icon-ad.com/" class="inner bg-theme-gray-1 w-full h-full rounded-2xl text-white text-base md:text-lg font-semibold tracking-wide flex items-center justify-center">
                    <span> BrandingStudio </span>
                  </a>
                </div>
                <!-- box -->

                <div class="rounded-2xl h-24 md:h-32 2xl:h-40 w-full bg-transparent cursor-wait transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
                  <a href="https://plus.icon-ad.com/" class="inner bg-theme-gray-1 w-full h-full rounded-2xl text-white text-base md:text-lg font-semibold tracking-wide flex items-center justify-center">
                    <span>

                      PLUS
                    </span>
                  </a>
                </div>
                <!-- box -->

              </div>

            </div>
          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>

import setupSplits from '~/utils/setupSplits'
import Atos from '~/utils/Atos'

export default {
  layout: 'default',
  data() {
    return {
      projectsLimit: 4,
      isVideoLoading: true,
      options: {
        muted: false,
        autoplay:true,
        responsive:true,
        controls:true,
        portrait:false,
        byline:false,
        color:"000000",
        title:false
      },
    }
  },

  mounted() {

    const elements = this.gsap.utils.toArray('.atos');
    Atos(this.gsap, elements)


    let q = this.gsap.utils.selector(this.$el);

    const pathsvg = q(".pathsvg")
    const creativityUnlock = q("#creativityUnlock")
    const splitTextOnScroll = q("#ourClientTitle")

    setupSplits(this.gsap, this.splitText, splitTextOnScroll)

    this.gsap.from(pathsvg, {
      scrollTrigger: {
        trigger: creativityUnlock,
        start:'top 80%',
        end:'bottom 20%',
        scrub: 0.5,
      },
      drawSVG: "0%"
    });


  },

  methods: {

    onReady () {
      this.isVideoLoading = false
    }

    // setupSplits(element)

  },

  computed: {
    video: {
      get: function () {
        return this.$store.state.isCoverVideo
      },
      set: function (value) {
        this.$store.commit('setIsCoverVideo', value)
      }
    }
  },


  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const expertises = await $axios.$get(`/home-expertises`)
    const clients = await $axios.$get(`/clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        projects,
        expertises,
        clients
      }
    }

}

</script>



<style scoped>
svg {
  stroke-dasharray: 300;
  /* stroke-dashoffset: 300; */
  transition: all .8s ease-in-out;
}
</style>
