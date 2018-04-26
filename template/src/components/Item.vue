<template>
  <v-card flat class="ma-2" :width="width" :height="height">
    <v-container  grid-list-xs>
      <v-card-title  primary-title>
        <h3>\{{ item.title }}</h3>
      </v-card-title>
      <v-card-actions >
        <v-btn outline block color="blue-grey" @click="addItem(item.id)">
          ADD TO CART
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: () => ({ title: '', id: -1 }),
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  methods: {
    addItem(id) {
      this.$store.commit('ADD_ITEM', id);
    },
  },
};
</script>
