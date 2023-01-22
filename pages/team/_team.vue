
<template>
  <div class="flex items-center justify-center h-auto sm:h-screen text-gray-100">
    <div class="w-full sm:w-96 sm:rounded-2xl bg-black p-5 space-y-5">

      <div>
        <UtilsImage v-if="iconer.image" options="rounded-2xl h-auto object-cover w-full" :mini="iconer.image_mini" :image="iconer.image" />
      </div>
      <!-- pic -->

      <div class="name">
        <h1 class="text-4xl font-bold" v-html="iconer.name"> </h1>
        <h2 v-if="iconer.designation" class="text-lg font-medium opacity-95" v-html="iconer.designation"> </h2>
      </div>
      <!-- name -->

      <div class="w-full space-y-3">

        <a v-if="iconer.contact" :href="`tel:${iconer.contact}`" class="flex items-center justify-between bg-theme-gray-dark px-5 py-4 rounded-lg opacity-90 border border-transparent hover:bg-[#3a3939] transition-all">
          <span>
            <span>Call</span>
            <span v-html="iconer.name"></span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a v-if="iconer.email" :href="`tel:${mailto.email}`" class="flex items-center justify-between bg-theme-gray-dark px-5 py-4 rounded-lg opacity-90 border border-transparent hover:bg-[#3a3939] transition-all">
          <span>
            <span>Email</span>
            <span v-html="iconer.name"></span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a href="https://goo.gl/maps/y2xAobk8wvmfc8rt6" class="flex items-center justify-between bg-theme-gray-dark px-5 py-4 rounded-lg opacity-90 border border-transparent hover:bg-[#3a3939] transition-all">
          <span>ICON HQ</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a href="https://icon-ad.com" class="flex items-center justify-between bg-theme-gray-dark px-5 py-4 rounded-lg opacity-90 border border-transparent hover:bg-[#3a3939] transition-all">
          <span>ICON Website</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>

      </div>
      <!-- call for actions -->

      <ul class="space-x-1 py-5 text-sm sm:text-sm 3xl:text-sm font-medium text-gray-100 flex items-center justify-center">
        <li>
          <a
            class="rounded-full transition-all cursor-pointer inline-block p-2 hover:text-white"
            href="https://www.facebook.com/IconCreativeNetwork"
            target="_blank"
            rel="noreferrer"
          >
            <AssetsFacebook options="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            class="rounded-full transition-all cursor-pointer inline-block p-2 hover:text-white"
            href="https://www.linkedin.com/company/icon-advertising-&-design-fz-llc/"
            target="_blank"
            rel="noreferrer"
          >
            <AssetsLinkedIn options="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            class="rounded-full transition-all cursor-pointer inline-block p-2 hover:text-white"
            href="https://vimeo.com/user20802083"
            target="_blank"
            rel="noreferrer"
          >
            <AssetsVimeo options="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            class="rounded-full transition-all cursor-pointer inline-block p-2 hover:text-white"
            href="https://www.behance.net/icon-ad"
            target="_blank"
            rel="noreferrer"
          >
            <AssetsBehance options="w-6 h-6" />
          </a>
        </li>
        <li>
        <a
          class="rounded-full transition-all cursor-pointer inline-block p-2 hover:text-white"
          href="https://www.pinterest.com/iconadvertising"
          target="_blank"
          rel="noreferrer"
        >
          <AssetsPinterest options="w-6 h-6" />
        </a>
        </li>
      </ul>

      <!-- social links -->

    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.body.classList.add('team-body')
    },
    computed: {
        storageUrl() {
          return 'https://drupal.icon-ad.com/';
        },
      },

      async asyncData({ $axios, params }) {

        const iconer = await $axios.$get(`/iconers/${params.team}`)

        return {
          iconer: iconer[0],
        }

      }
  }
</script>
