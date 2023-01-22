<template>
    <div class="w-full w-full flex items-center italic font-extrabold relative">
        <div class="px-5 w-full text-center space-y-6 vsm:space-y-12 md:space-y-24 2xl:space-y-56">

            <div class="space-y-10 2xl:space-y-16">
              <h1 class="text-xl md:text-3xl 2xl:text-4xl items-center w-full lg:leading-snug text-center">
                  <span class="text-white">Impacting</span>
                  <span class="inline-block rainbow-text-ad bg-red-200">millions</span>
                  <span class="text-white">of people</span>
                  <br>
                  <span class="text-white">around the world</span>
              </h1>

              <p class="text-base md:text-xl 2xl:text-2xl text-gray-100 font-normal not-italic mx-auto">A 360 Integrated Creative, <br class="block md:hidden"> Marketing and Communications <br> Agency Network Based in Dubai, UAE </p>
            </div>

            <div class="play-button" @click="video = !video">
                <div class="w-full flex items-center justify-center space-x-3">
                    <AssetsPlayButtonWhite options="w-8 h-8 cursor-pointer transform hover:scale-125 transition-all duration-400"/>
                    <span class="text-medium text-white italic text-lg">Play Video</span>
                </div>
            </div>
        </div>

    </div>
    <!-- screen height -->
</template>

<script>

import gsap from 'gsap'

export default {
  methods: {
    beforeEnterMinusX (el) {
      el.style.transform = 'translateX(-30px)'
      el.style.opacity = 0
    },
    enterMinusX (el) {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1
      })
    },
    beforeEnterPlusX (el) {
      el.style.transform = 'translateX(30px)'
      el.style.opacity = 0
    },
    enterPlusX (el) {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1
      })
    },
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
  }
}
</script>
