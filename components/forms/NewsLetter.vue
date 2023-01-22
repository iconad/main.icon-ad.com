<template>
  <div class="space-y-5">
    <div class="absolute bottom-0 right-0 w-[70%] h-64">
      <AssetsIconPlus options="w-full h-full" />
    </div>

    <template v-if="isSubmitted">
      <div class="text-4xl 3xl:text-6xl text-white font-bold uppercase">
        <span class="atos block">Thanks for signing up.</span>
      </div>

      <div class="text-2xl text-white">
        <span class="atos block-span capitalize">We'll keep you posted on the latest </span>
        <span class="atos block-span">digital news and special offers.</span>
      </div>
    </template>
    <template v-else>
      <div class="text-4xl 3xl:text-6xl text-white font-bold uppercase">
        <span class="atos block">Join our</span>
        <span class="atos block">Newsletters</span>
      </div>

      <div class="text-2xl text-white">
        <span class="atos block-span">Enjoy exclusive industry insights </span>
        <span class="atos block-span">and so many more!</span>
      </div>

      <div class="atos w-full md:w-1/2 relative z-1">
        <form class="newletter-form text-black" @submit.prevent="submitForm">
          <div class="flex items-center" v-if="!isLoading">
            <input required type="text" v-model="email" class="text-gray-900 p-4 w-full focus:outline-none bg-white focus:bg-gray-100">
            <input type="submit" placeholder="your@email.com" class="p-4 bg-gray-900 font-semibold text-white cursor-pointer hover:bg-theme-red focus:outline-none active:outline-none focus:bg-theme-red" value="JOIN">
          </div>
          <div v-else>
            <span class="loader">L &nbsp; ading</span>
          </div>
          <!-- loader -->
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.email">{{ errors.email }}</span>

        </form>
      </div>
    </template>

  </div>
</template>

<script>
  export default {


    data() {
      return {
        isLoading: false,
        data: {},
        email: "",
        errors: {},
        isSubmitted: false,
        errors: null
      }
    },

    methods: {
      async submitForm() {
        let config = {
          headers: {
            Accept: "json",
            "Content-Type": "application/json"
          }
        };

        this.isLoading = true;

        this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
              webform_id: "newsletter",
              email: this.email,
            },
            config
          )
          .then(response => {
            this.isLoading = false;
            if (response.sid) {
              this.email = null
              this.isSubmitted = true
            }
          })
          .catch(error => {
            this.errors = error.response.data.error
            this.isLoading = false
          });
      }
    },

  }
</script>
