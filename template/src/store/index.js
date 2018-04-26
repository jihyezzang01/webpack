import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: 'Item A',
      },
      {
        id: 2,
        title: 'Item B',
      },
      {
        id: 3,
        title: 'Item C',
      },
      {
        id: 4,
        title: 'Item D',
      },
      {
        id: 5,
        title: 'Item E',
      },
      {
        id: 6,
        title: 'Item F',
      },
    ],
    cart: {
      items: [],
    },
  },
  mutations: {
    ADD_ITEM(state, id) {
      const item = state.items.find(i => i.id === id);
      if (!item) {
        // failed to find item
        return;
      }

      // check -> item is exist or not
      const cartItem = state.cart.items.find(i => i.id === id);
      if (!cartItem) {
        state.cart.items.push({
          ...item,
          count: 1,
        });
      } else if (cartItem.count < 9) {
        cartItem.count += 1;
      }
    },
    UPDATE_COUNT(state, { id, count }) {
      const item = state.cart.items.find(el => el.id === id);
      if (!item) {
        return;
      }
      item.count = count;
    },
    REMOVE_ITEM(state, id) {
      let index = -1;
      for (let i = 0; i < state.cart.items.length; i += 1) {
        if (state.cart.items[i].id === id) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        state.cart.items.splice(index, 1);
      }
    },
  },
  getters: {
    cartProducts: state => state.cart.items.length,
  },
});
