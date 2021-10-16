<template>
  <div class="app-home">
    <ButtonCustom
      @handle-click="handleClick"
    >
      Add Item
    </ButtonCustom>
    <ModalTemplate
      v-if="isVisibleModal"
      @modal-event="modalClickEvent"
      :label="'Add To shopping list'"
    >
      <InputTemplate
        inputType="text"
        :value="inputValue"
        label="New Item"
        :autofocus="true"
        @change="changeInputValue"
      />
      <div class="app-modal-form-wrap-content-buttons">
        <ButtonCustom
          @handle-click="handleClickSave"
          :disabled="!inputValue"
        >
          Save1
        </ButtonCustom>
      </div>
    </ModalTemplate>
    <ShoppingList
      v-if="itemsList.length"
      :items-list="itemsList"
      @delete-item="deleteItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';
import ModalTemplate from '@/components/Modals/ModalTemplate.vue';
import InputTemplate from '@/components/Elements/Input/InputTemplate.vue';
import ShoppingList from '@/components/Shopping/ShoppingList.vue';
import { IItem } from '@/types/IItem';
import generateId from '@/utils/generateId';

@Component({
  components: {
    ButtonCustom,
    ModalTemplate,
    InputTemplate,
    ShoppingList,
  },
})
export default class Home extends Vue {
  isVisibleModal = false;

  itemsList: IItem[] = [];

  inputValue = '';

  handleClick(): void {
    this.isVisibleModal = true;
  }

  handleClickSave(): void {
    this.isVisibleModal = false;
    this.itemsList.push({
      id: generateId(),
      name: this.inputValue,
    });
    this.inputValue = '';
  }

  deleteItem(id: string) {
    this.itemsList = this.itemsList.filter((item) => item.id !== id);
  }

  changeInputValue(data: string): void {
    this.inputValue = data;
  }

  modalClickEvent(data: boolean): void {
    this.isVisibleModal = data;
  }
}
</script>

<style scoped lang="scss">
  .app-home {
    padding: 50px 10px;
  }
</style>
