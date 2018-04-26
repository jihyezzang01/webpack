<template>
  <v-layout row align-center>
    <v-btn outline small  class="mx-2" color="blue-grey" @click="minus">
      <v-icon small>remove</v-icon>
    </v-btn>
    <span>\{{ count }}</span>
    <v-btn outline small  class="mx-2" color="blue-grey" @click="plus">
      <v-icon small>add</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    minus() {
      if (this.count > this.min) {
        this.$emit('update', this.count - 1);
      }
    },
    plus() {
      if (this.count < this.max) {
        this.$emit('update', this.count + 1);
      }
    },
  },
};
</script>

<style scoped>
.btn{
  min-width: 1em;
  width: 2em;
}
</style>
