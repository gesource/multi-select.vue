<template>
  <div class="hello">
    <select v-model="area">
      <option
        v-for="option in areas"
        v-bind:value="option.value"
        v-bind:key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <select v-model="pref">
      <option
        v-for="option in prefs"
        v-bind:value="option.value"
        v-bind:key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <br />
    <span>area: {{ area }}</span>
    <br />
    <span>pref: {{ pref }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    areas() {
      return this.$store.state.areas;
    },
    prefs() {
      return this.$store.getters.prefs;
    },
    area: {
      get() {
        return this.$store.state.area;
      },
      set(value) {
        this.$store.dispatch('updateArea', value);
      },
    },
    pref: {
      get() {
        return this.$store.state.pref;
      },
      set(value) {
        this.$store.dispatch('updatePref', value);
      },
    },
  },
};
</script>
