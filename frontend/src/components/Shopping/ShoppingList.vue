<template>
  <div class="app-shopping-list">
    <ShoppingItem
      v-for="item in itemsList"
      :key="item.id"
      :item="item"
      @delete-item="deleteItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShoppingItem from '@/components/Shopping/ShoppingItem.vue';
import { IItem } from '@/types/IItem';

@Component({
  components: {
    ShoppingItem,
  },
})
export default class ShoppingList extends Vue {
  @Prop({ type: Array, required: true })
  itemsList!: IItem[]

  deleteItem(id: string) {
    this.$emit('delete-item', id);
  }
}
</script>

<style scoped lang="scss">
  .app-shopping-list {
    margin-top: 30px;
  }
</style>
