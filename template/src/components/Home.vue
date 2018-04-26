<template>
  <v-container>
    <v-toolbar flat color="blue-grey dark-4">
      <v-spacer/>
      <v-toolbar-title class="white--text">Home</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <div v-for="item in items" :key="item.id">
          <item :item="item" width="200"/>
        </div>
      </v-layout>
    </v-container>
    <v-btn outline color="blue-grey dark-3" to="/cart" >
      \{{ cartCounts }}
    </v-btn>
  </v-container>
</template>

<script>
import Item from './Item';

export default {
  name: 'Home',
  components: {
    item: Item,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    cartCounts() {
      return `Cart (${this.$store.getters.cartProducts})`;
    },
  },
};
</script>
