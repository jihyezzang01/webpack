<template>
  <v-container>
    <v-toolbar flat color="blue-grey dark-4">
      <v-spacer/>
      <v-toolbar-title class="white--text">Cart</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-container>
      <v-list subheader>
        <v-subheader>Product</v-subheader>
        <v-divider />
        <div v-for="item in items" :key="item.id">
          <list-item :item="item" />
        </div>
      </v-list>
    </v-container>
    <v-btn outline color="blue-grey dark-3" to="/" >
      Home
    </v-btn>
  </v-container>
</template>

<script>
import CartItem from './CartItem';

export default {
  name: 'Cart',
  components: {
    'list-item': CartItem,
  },
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
  },
};
</script>
