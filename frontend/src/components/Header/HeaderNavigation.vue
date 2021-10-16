<template>
  <nav class="app-navigation">
    <div class="app-navigation__item"
         v-for="item in navigationList"
         :key="item.id"
         @click="proceedTo(item.route)"
    >
      {{ item.name }}
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { INavigationMenuItem } from '@/types/INavigationMenuItem';
import navigationMenuItems from '@/constants/headerNavigation';
import RouterUtils from '@/mixins/RouterUtils';

@Component
export default class HeaderNavigation extends mixins(RouterUtils) {
  @Prop({ required: true })
  navigationList: INavigationMenuItem[] = navigationMenuItems;
}
</script>

<style scoped lang="scss">
  .app-navigation {
    display: flex;

    &__item {
      cursor: pointer;
    }

    &__item + .app-navigation__item {
      margin-left: 15px;
    }
  }
</style>
