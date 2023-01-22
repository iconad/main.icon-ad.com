<template>
  <div @click="goTo" class="cursor-pointer">
    <UtilsProjectImage options="select-none h-64 lg:h-[20rem] w-full object-cover rounded-xl overflow-hidden" :mini="project.image_mini" :image="project.large_thumb" />
  </div>
</template>

<script>
  export default {
    props: ['project'],
    methods: {
      goTo() {
        this.$router.push({path: `/projects${this.project.slug}`});
      }
    },
  }
</script>
