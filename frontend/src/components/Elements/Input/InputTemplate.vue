<template>
  <div class="app-field">
    <div class="app-field__label"
           v-if="label">
      {{ label }}
    </div>
    <input
      :type="inputType"
      class="app-field__input"
      :value="value"
      @input="input"
      autofocus
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputTemplate extends Vue {
  @Prop({ type: String, required: false })
  inputType!: string;

  @Prop({ type: String, required: false })
  value!: string;

  @Prop({ type: String, required: false })
  label!: string

  @Prop({ type: Boolean, required: false })
  autofocus!: boolean;

  input(event: any): void {
    this.$emit('change', event.target.value);
  }
}
</script>

<style scoped lang="scss">

</style>
