<template>
  <div>
    <section id="ContactSection" class="contact-section bg-black text-white py-32">
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
    </section>
    <!-- contact section end -->
  </div>
</template>

<script>
  export default {
    layout: 'home',
  }
</script>

<style lang="scss" scoped>

</style>
