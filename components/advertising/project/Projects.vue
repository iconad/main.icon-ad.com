<template>
  <div class="startformhere">
    <client-only>
      <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '50px', 1120: '20px', 880: '50px'}" >
        <div v-for="(project, i) in projects" :key="i" class="w-full">

          <AdvertisingProject :project="project" class="project"
            :class="[
              i == 1 ? 'lg:mt-32' : '' ,
            ]"
          />

        </div>
      </masonry>
    </client-only>
  </div>
</template>


<script>

export default {
  props:['from', 'to'],

  mounted() {
    // this.$nextTick(() => this.animate());
  },

  methods: {

    animate () {


      let q = this.gsap.utils.selector(this.$el);

      const projectEven = q(".project-even")
      const projectOdd = q(".project-odd")
      const startFromHere = q(".startformhere")


      const scrollTrigger = {
          trigger: startFromHere,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
          pin: true
        };

        this.gsap.timeline({ scrollTrigger }).to(projectEven, { y: 300});
        this.gsap.timeline({ scrollTrigger }).from(projectOdd, { y: -300});


      this.gsap.to(projectEven,
        {
          y: 200,
          scrollTrigger: projectEven
        }
      );

      this.gsap.to(projectOdd,
        {
          y: -200
        }
      );


    }

  },

  computed: {

    projects () {
      return [ ...this.$store.state.project.projects ].splice(this.from, this.to)
    }
  }
}


</script>


<style scoped>
  .masonry-columns {
    columns: 2;
  }
</style>
