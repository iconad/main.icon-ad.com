<template>
  <div>
  <section class="about-black-cover bg-black text-white pb-20">
    <div class="cover-map theme-container text-center">
      <div class="pb-20 pt-48">
        <h1 class="my-4 text-6xl font-bold">
          <span class="block rainbow-text-ad md:h-16">IDEAS LAB</span>
        </h1>
        <p class="text-lg">We share inspiration and creative insights for businesses and individuals. From marketing strategies to design inspiration, our team of experts has you covered with a variety of topics to help spark your imagination.</p>
      </div>
    </div>
    <!-- cover map -->

  </section>
<!-- about black cover -->


  <div class="section section-blogs py-32">
    <div class="max-w-6xl xxl:max-w-screen-xl mx-auto px-5 lg:px-0 w-full">
      <div class="section-header w-full">

        <div id="blogsPage" class="section-title leading-none mt-1 mb-12">
          <h1
            class="text-lg text-theme-black lg:text-2xl font-bold uppercase"
          >Latest Posts</h1>
        </div>

      </div>
      <!-- section-header -->

      <div class="inner w-full">
        <div class="clients-wrapper w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 w-full">
            <div
              class="border rounded-xl overflow-hidden w-full"
              v-for="(blog, i) in blogs"
              :key="i"
            >
              <AdvertisingBlogBlock :blog="blog" />
            </div>
            <!-- client -->
          </div>
          <!-- grid -->


        </div>
        <!-- clients-wrapper -->
      </div>
    </div>
  </div>
  </div>
</template>


<script>

export default {
  layout: 'home',
  data() {
    return {
      blogs: [],
      page: 0,
    }
  },


  methods: {

    getBlogsWithPagination () {
      this.$axios.$get(`/blogs`).then(resp => {
          this.blogs = resp;
        })
        .catch(err => {
          console.log(err);
        });
    },

    infiniteScroll($state) {

      setTimeout(() => {

        this.page++;

        this.$axios.$get(`/blogs?_format=json&page=${this.page}`).then(resp => {
          if (resp.length > 1) { // check if any left
            resp.forEach(item => this.blogs.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });

      }, 500);

    }

  },

  async asyncData({ $axios, store }) {

    const blogs = await $axios.$get(`/blogs?_format=json&page=0`)

      return {
        blogs
      }
    }

}

</script>
