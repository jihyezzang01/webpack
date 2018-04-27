<template>
  <v-container class="mt-5">
    <img src="../assets/logo.png">
    <v-form
      class="my-5"
      v-model="valid"
      ref="form"
      lazy-validation
    >
      <v-text-field
        label="Text"
        v-model="text"
        :rules="rules"
        width="10000"
      />
    </v-form>
    <v-btn
      @click="submit"
      :disabled="!valid"
      outline
      color="blue-grey dark-3"
      to="/result"
    >
      SUBMIT
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    valid: false,
    text: '',
    rules: [
      v => !!v || 'Please, input text !!',
    ],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit('UPDATE_TEXT', {
          text: this.text,
        });
      }
    },
  },
};
</script>
