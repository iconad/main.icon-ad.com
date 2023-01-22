<template>
  <div class="text-center">
      <div class="title space-y-8 lg:space-y-12">
        <h3 class="text-5xl md:text-7xl lg:text-9xl uppercase font-black italic rainbow-text-ad atos">
          <span class="block"> {{data.title}} </span>
          <span class="block"> {{data.title2}} </span>
        </h3>
        <p class="text-lg md:text-xl lg:text-4xl font-semibold">
          <span class="block atos"> {{ data.subtitle }} </span>
          <span class="block atos"> {{ data.subtitle2 }} </span>
        </p>

        <div class="w-full lg:w-1/2 mx-auto">
          <FormsForm />
        </div>

      </div>

  </div>
</template>


<script>


  export default {

    props: ['data'],

  }
</script>
