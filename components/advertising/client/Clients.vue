<template>
  <div class="theme-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div v-for="client in clients" :key="client.id" class="h-32 text-white flex items-center justify-center atos">
      <UtilsProjectImage options="w-full sm:w-5/6 object-cover mx-auto" :mini="client.image_mini" :image="client.white_logo" :title="client.title" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['clients']
  }
</script>
