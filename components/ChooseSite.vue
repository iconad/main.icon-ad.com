<template>
  <div v-if="isOverlay" class="flex items-center justify-center bg-black w-full h-screen inset-0 fixed z-50 px-10 lg:px-0">
    <div class="space-y-16 text-center">
      <div> <AssetsLogoWhite options="w-32 md:w-48 mx-auto" /> </div>
      <p class="text-2xl font-light text-gray-100">What are you looking for?</p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-4 items-center justify-evenly">

        <div @click="chooseSite('ad')" class="w-full rounded-2xl h-32 lg:h-56 w-full lg:w-64 bg-transparent cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
          <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex items-center justify-center">
            <AssetsLogoAdWhite options="w-20 lg:w-40 mx-auto" />
          </div>
        </div>
        <!-- box -->

        <div @click="chooseSite('digital')" class="w-full rounded-2xl h-32 lg:h-56 w-full lg:w-64 bg-transparent cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
          <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex items-center justify-center">
            <AssetsLogoDigitalWhite options="w-20 lg:w-40 mx-auto" />
          </div>
        </div>
        <!-- box -->

        <div class="w-full rounded-2xl h-32 lg:h-56 w-full lg:w-64 bg-transparent cursor-wait transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
          <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex flex-col items-center justify-center space-y-5">

              <img src="~/assets/images/logo-plus-soon.svg" alt="plus logo" class="w-20 lg:w-40">
              <button class="bg-[#333333] bg-opacity-75 px-3 lg:px-5 py-1 lg:py-2 rounded-xl text-white opacity-75 cursor-wait font-medium text-xs md:text-sm"> Coming Soon </button>

          </div>
        </div>
        <!-- box -->

        <div class="w-full rounded-2xl h-32 lg:h-56 w-full lg:w-64 bg-transparent cursor-wait transition-all duration-300 hover:bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red p-[2px] flex items-center justify-center">
          <div class="inner bg-theme-gray-1 w-full h-full rounded-2xl flex flex-col items-center justify-center space-y-7 lg:space-y-10">
            <img src="~/assets/images/logo-brand-soon.svg" alt="plus logo" class="w-20 lg:w-40">
            <button class="bg-[#333333] bg-opacity-75 px-3 lg:px-5 py-1 lg:py-2 rounded-xl text-white opacity-75 cursor-wait font-medium text-xs md:text-sm"> Coming Soon </button>
          </div>
        </div>
        <!-- box -->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOverlay: false,
        styleObj: {},
        cursor: {
          x: null,
          y: null
        },
        hover: false
      }
    },
    computed: {
      choice () {
        return this.$store.state.choice;
      },
    },

    mounted() {
      this.checkChoice ()
    },
    methods: {

      chooseSite (choice) {

        this.$store.commit("chooseSite", true);
        localStorage.setItem('chooseSite', true);

        if(choice === 'digital') {

          this.$store.commit("choice", 'digital');
          localStorage.setItem('choice', 'digital');

          if (process.client) {
            window.location.href = 'https://digital.icon-ad.com';
          }

        }else{

          this.$store.commit("choice", 'ad');
          localStorage.setItem('choice', 'ad');
          this.isOverlay = false

        }

      },

      checkChoice () {

          const choice = localStorage.getItem('chooseSite');

          if(!choice || choice == 'false') {
            this.isOverlay = true
          }else{
            this.isOverlay = false
          }

      },

    },
  }
</script>
