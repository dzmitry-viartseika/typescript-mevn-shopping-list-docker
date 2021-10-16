import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class RouterUtils extends Vue {
  proceedTo(route: string): void {
    const { path } = this.$route;
    if (path === route) return;
    this.$router.push(route);
  }
}
