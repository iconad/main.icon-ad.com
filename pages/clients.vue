<template>
  <div>
      <section class="about-black-cover bg-black text-white pb-20">
        <div class="theme-container text-center">
            <div class="pb-20 pt-48">
              <h1 class="my-4 text-4xl lg:text-6xl font-bold">
                <span class="block rainbow-text-ad md:h-16">OUR PARTNERS</span>
              </h1>
              <p class="text-base lg:text-lg">Our presence in the market for 15 years has enabled us to work with global brands catering to their business objectives. Our strategic approach into building and growing these alliances has enabled us to be their partners for all their creative and marketing services.</p>
            </div>
        </div>
        <!-- header -->
      </section>
      <!-- about black cover -->


      <div class="py-32 theme-container">

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="client in clients" :key="client.id">
            <div class="w-full border rounded-xl">
              <UtilsProjectImage options="w-full h-48 object-contain mx-auto" :mini="client.image_mini" :image="client.logo_black" :title="client.title" />
            </div>
          </div>
        </div>

      </div>

    <!-- <section id="ContactSection" class="contact-section bg-black text-white py-32">
       <div class="theme-container">
         <FormsContactUs
          :data="{
            title: 'have an',
            title2: 'impact',
            subtitle: 'Join the most powerful',
            subtitle2: 'brands in the world.'
         }"
          />
       </div>
    </section> -->
    <!-- contact section end -->


  </div>
</template>


<script>

export default {
  layout: 'home',
  async asyncData({ $axios, store }) {

    const clients = await $axios.$get(`/all-clients`)

      return {
        clients
      }
    }

}

</script>
