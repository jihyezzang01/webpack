<template>
  <v-list-tile class="my-1" :key="item.id">
    <v-list-tile-content>
      <v-list-tile-title>\{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-layout row>
        <label-spinner :min="1" :max="9" :count="item.count" @update="updateCount"/>
        <v-btn flat class="ml-2" color="blue-grey" @click="remove(item.id)">
          Delete
        </v-btn>
    </v-layout>
    </v-list-tile-action>
</v-list-tile>

</template>

<script>
import LabelSpinner from './LabelSpinner';

export default {
  name: 'CartItem',
  components: {
    'label-spinner': LabelSpinner,
  },
  props: {
    item: {
      type: Object,
      default: () => ({ title: '', id: -1, count: 0 }),
    },
  },
  methods: {
    updateCount(count) {
      this.$store.commit('UPDATE_COUNT', { id: this.item.id, count });
    },
    remove() {
      this.$store.commit('REMOVE_ITEM', this.item.id);
    },
  },
};
</script>
