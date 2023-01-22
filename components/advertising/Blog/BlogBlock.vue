<template>
  <div>
    <div class="">
      <nuxt-link :aria-label="blog.title" :to="`ideas${blog.slug}`">

        <UtilsImage options="w-full h-64 object-cover" :mini="blog.image_mini" :image="blog.image" />

      </nuxt-link>

    </div>
    <div class="text-sm text-gray-700 p-3 pt-5 pb-1">
          <!-- {{blog.date}} -->
    </div>
    <div class="text-xl p-3 pt-0 hover:text-black">
      <nuxt-link :aria-label="blog.title" :to="`ideas${blog.slug}`" v-html="blog.title"></nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  props: ["blog"],
  };
</script>
