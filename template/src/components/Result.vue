<template>
  <v-container class="mt-5">
    <img src="../assets/logo.png">
    <v-card
      flat
      class="my-5"
    >
      <v-card-title primary-title>
        <h3>{{text}}</h3>
      </v-card-title>
    </v-card>
    <v-btn
      outline
      color="blue-grey dark-3"
      to="/"
    >
      BACK
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    text() {
      return this.$store.state.text;
    },
  },
};
</script>
