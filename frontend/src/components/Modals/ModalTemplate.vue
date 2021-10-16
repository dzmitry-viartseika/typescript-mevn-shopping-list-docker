<template>
  <div class="app-modal-form">
    <div class="app-modal-form-wrap">
      <div class="app-modal-form-wrap-header">
        <div class="app-modal-form-wrap-header__title"
             v-if="label"
        >
          {{ label }}
        </div>
        <div
          class="app-modal-form-wrap-header__close"
          @click="handleClick"
        >
          x
        </div>
      </div>
      <div class="app-modal-form-wrap-content">
        <slot></slot>
      </div>
    </div>
    <div
      class="app-modal-form__overlay"
      @click="handleClick"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalTemplate extends Vue {
  @Prop({ type: String, required: false })
  label!: string;

  handleClick(): void {
    this.$emit('modal-event', false);
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-modal-form-wrap {
    width: 400px;
  }
</style>
