<template>
  <div class="app">
    <Navbar />
    <router-view/>
<!--    wertey-->
<!--    <SvgIcon-->
<!--      name="Close"-->
<!--    ></SvgIcon>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import SvgIcon from 'vue-svgicon';
import Navbar from '@/components/Header/Navbar.vue';

@Component({
  components: {
    Navbar,
    // SvgIcon,
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
