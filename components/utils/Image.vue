<template>
  <div>
    <client-only>
      <v-lazy-image
        v-if="image"
        :class="options"
        :style="`height: ${height}rem`"
        :src="`https://drupal.icon-ad.com${image}`"
        :src-placeholder="`https://drupal.icon-ad.com${mini}`"
        alt="project image"
      />
    </client-only>
  </div>
</template>

<script>
  export default {
    props: ['options', 'height', 'image', 'mini']
  }
</script>
