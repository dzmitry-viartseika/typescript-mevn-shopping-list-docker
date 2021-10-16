<template>
  <div class="app-shopping-item">
    <span @click="deleteItem(item.id)">X</span>
    {{ item.name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IItem } from '@/types/IItem';

@Component
export default class ShoppingItem extends Vue {
  @Prop({ type: Object, required: true })
  item!: IItem;

  deleteItem(id: string): void {
    console.log('id', id);
    this.$emit('delete-item', id);
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-shopping-item {
    padding: 5px;
    border: 1px solid $color-title;
    border-radius: $borderRadius;
    color: $color-black;

    & + .app-shopping-item {
      margin-top: 15px;
    }
  }
</style>
