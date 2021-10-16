<template>
  <div class="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Header/Navbar.vue';

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/style";

@font-face {
  font-family: 'Ubuntu';
  font-display: swap;
  src: url('./assets/fonts/ubuntu/ubuntu.woff') format('woff');
  font-style: normal;
}
@font-face {
  font-family: 'Ubuntu-medium';
  src: url('./assets/fonts/ubuntu/ubuntumedium.woff') format('woff');
  font-style: normal;
}
@font-face {
  font-family: 'Ubuntu-bold';
  src: url('./assets/fonts/ubuntu/ubuntubold.woff') format('woff');
  font-style: normal;
}
</style>
