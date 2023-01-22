<template>
  <div>
    <section class="pt-32 w-full theme-container">

      <div class="header">
        <h1 class="text-4xl font-bold">{{ blog.title }}</h1>
        <div class="flex items-center space-x-4 text-sm text-gray-800 mt-3">
          <span>by <span>Icon Advertising LLC</span></span>
        </div>
      </div>

      <div class="project-detail mt-8 md:mt-8">

          <div class="my-10 rounded-2xl overflow-hidden">
            <UtilsImage options="w-full rounded-2xl" :mini="blog.image_mini" :image="blog.image" />
          </div>

        <div class="content-container" v-html="blog.body"></div>

        <a aria-label="Icon Adverting Medium Profile Link" href="https://icon-ad.medium.com" target="_blank" class="mt-10 inline-block border-b pb-px transition-all border-transparent hover:border-gray-500 font-medium mb-20 text-lg">Follow Icon Adverting on Medium</a>

      </div>


    </section>


  </div>
</template>



<script>


export default {
  layout: 'home',
  head() {
    return {
       title: this.blog ? `${this.blog.title} | Icon Advertising LLC` : "Icon Advertising LLC.",
       meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blog.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.seo.description ? this.seo.description : ""
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.blog.image_mini
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.blog.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blog.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo.description ? this.seo.description : ""
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blog.image_mini
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.blog.image_mini
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.blog.title
        },
        { property: "og:site_name", content: "Icon Advertising LLC" },
        {
          hid: "description",
          name: "description",
          content: this.seo.description ? this.seo.description : "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seo.keywords ? this.seo.keywords : "",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.blog.slug,
        },
        {
          hid: "og:title",
          property: "og:title",
          content:  this.blog.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.seo.description ? this.seo.description : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.blog.image_mini,
        },
        {
          hid: "og:image:type",
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1200",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "667",
        },
      ],

      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.blog ? this.slug : "",
        },
      ]
    };
  },
  computed: {
    seo () {
      return JSON.parse(this.blog.seo)[0];
    }
  },

  async asyncData({ $axios, params }) {

    const blog = await $axios.$get(`/blogs/${params.idea}`)

    return {
      blog: blog[0],
    }
  }


};
</script>
