<template>
  <div>
       <form @submit.prevent="submitResume" class="form">

        <div class="form-element">
          <input type="text" v-model="form.name" required class="form-input" placeholder="Full Name">
        </div>
        <!-- form element -->

        <div class="form-element">
          <client-only>
            <vue-tel-input
              class="form-element"
              required
              :valid-characters-only="true"
              @input="onInput"
              v-bind="bindProps"
              v-model="form.phone"
            ></vue-tel-input>
          </client-only>
        </div>
        <!-- form element -->

       <div class="form-element">
          <input type="email" v-model="form.email" required class="form-input" placeholder="Email">
        </div>
        <!-- form element -->

        <div class="form-element">

          <div>

            <input type="file" required id="selectResume" @change="addResume" class="hidden" placeholder="Upload Your Resume">

            <div class="form-input space-x-3">
                <label for="selectResume" class="bg-theme-gray-1 cursor-pointer hover:bg-theme-gray-dark px-5 py-3 rounded">
                  {{ dropFiles.name ? 'Change CV' :  'Upload CV' }} </label>
                <span id="custom-file-label" :class="dropFiles.name && dropFiles.name.length > 27 ? 'mt-5' :  ''"> {{ dropFiles.name ? this.dropFiles.name :  'No file chosen' }} </span>
            </div>
          </div>

        </div>
        <!-- form element -->

        <div class="form-element">
          <textarea type="text" class="form-input" v-model="form.message" placeholder="Message" rows="5"></textarea>
        </div>

        <div v-if="!isLoading" class="form-element flex justify-center w-full">
          <input type="submit" class="mx-auto form-button rainbow cursor-pointer hover:bg-opacity-100" value="Submit">
        </div>
        <div v-else>
          <span class="loader">L &nbsp; ading</span>
        </div>
        <!-- form element -->

      </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        dropFiles: {},
        formToken: "",
        bindProps: {
          mode: "international",
          defaultCountry: "AE",
          placeholder: "Phone number",
          required: true,
          autocomplete: "on",
          styleClasses:"form-input"
        },
        phone: {
          number: "",
          valid: false,
          country: undefined
        },

        form: {
          name: "",
          email: "",
          subject: "Join our team application",
          message: "",
          phone: ""
        },


        errors: {},
        isSubmitted: false
      }
    },
    methods: {

      selectResume () {
        this.$refs['selectResume'].click();
      },

      addResume (e) {
        this.dropFiles = e.target.files[0];
      },

      onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
      },


      async submitResume() {

        const formData = new FormData();
        formData.append("image", this.dropFiles, this.dropFiles.name);

        this.isLoading = true;

        this.$axios
        .$post(
          "https://drupal.icon-ad.com/webform_rest/join_the_team/upload/resume?_format=json",
          this.dropFiles,
          {
            headers: {
            Accept: "json",
              "Content-Type": "application/octet-stream",
              "Content-Disposition":
                'file; filename="' + this.dropFiles.name + '"'
            }
          }
        )
        .then(response => {
          this.submitForm(response)
        });


      },

    submitForm (response) {

      let config = {
          headers: {
            Accept: "json",
            "Content-Type": "application/json"
          }
        };

        this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
              webform_id: "join_the_team",
              name: this.form.name,
              email: this.form.email,
              phone: this.form.phone,
              subject: this.form.subject,
              message: this.form.message,
              resume: response.fid[0].value
            },
            config
          )
          .then(response => {
            this.isLoading = false;
            if (response.sid) {
              this.form = []
              this.$router.push({
                path: "/thank-you"
              });
            }
          })
          .catch(error => {
            this.errors = error.response.data.error
            this.isLoading = false
          });
      },

    },

  }
</script>


<style scoped>
.vue-tel-input {
  border: none!important;
}
.vti__input {
  background: transparent!important;
}
</style>
