<template>
  <div>
    <div class="relative w-full z-20 flex items-center justify-center bg-black md:bg-transparent">
      <div class="w-full h-auto bg-white box-shadow overflow-hidden">

        <client-only>
          <vimeo-player
            v-cloak
            @ready="onReady"
            ref="player"
            :options="options"
            :video-id="`742591992`"
          ></vimeo-player>
        </client-only>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isVideoLoading: true,
        options: {
          muted: true,
          autoplay:true,
          responsive:true,
          controls:false,
          portrait:false,
          byline:false,
          color:"000000",
          title:false
        },
      }
    },

    methods: {
      onReady () {
        this.isVideoLoading = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
