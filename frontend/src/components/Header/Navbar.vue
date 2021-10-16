<template>
  <div class="app-header">
    <div class="app-header__logo"
         @click="proceedTo('/')"
    >
      LOGO
    </div>
    <header-navigation
      :navigation-list="navigationList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import navigationMenuItems from '@/constants/headerNavigation';
import { INavigationMenuItem } from '@/types/INavigationMenuItem';
import HeaderNavigation from '@/components/Header/HeaderNavigation.vue';
import RouterUtils from '@/mixins/RouterUtils';

@Component({
  components: {
    HeaderNavigation,
  },
})
export default class Navbar extends mixins(RouterUtils) {
  navigationList: INavigationMenuItem[] = navigationMenuItems;
}
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background: $color-title;
    color: $color-white;

    &__logo {
      cursor: pointer;
    }
  }
</style>
