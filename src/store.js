import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: [
      { text: '関東', value: 'kanto' },
      { text: '近畿', value: 'kinki' }],
    area: 'kinki',
    prefs: {
      kanto: [
        { text: '東京都', value: 'tokyo' },
        { text: '神奈川県', value: 'kanagawa' },
      ],
      kinki: [
        { text: '大阪府', value: 'osaka' },
        { text: '京都府', value: 'kyoto' },
      ],
    },
    pref: 'kyoto',
  },
  mutations: {
    updateArea(state, area) {
      state.area = area;
    },
    updatePref(state, value) {
      state.pref = value;
    },
  },
  getters: {
    prefs: state => state.prefs[state.area],
  },
  actions: {
    updateArea(context, area) {
      if (context.state.area !== area) {
        context.commit('updateArea', area);
        context.commit('updatePref', context.state.prefs[area][0].value);
      }
    },
    updatePref(context, pref) {
      context.commit('updatePref', pref);
    },
  },
});
