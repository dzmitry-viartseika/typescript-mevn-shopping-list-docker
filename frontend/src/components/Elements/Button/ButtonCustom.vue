<template>
  <button
    class="app__button"
    data-test-id="button"
    :class="{'app__button_disabled': disabled}"
    :disabled="disabled"
    :type="buttonType"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonCustom extends Vue {
  @Prop({ type: Boolean, required: false })
  disabled!: boolean;

  @Prop({ type: String, default: 'button', required: false })
  buttonType!: string;

  handleClick(): void {
    this.$emit('handle-click');
  }
}
</script>

<style scoped lang="scss">

</style>
