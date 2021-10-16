import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import ShoppingList from '@/components/Shopping/ShoppingList.vue';
import { IItem } from '@/types/IItem';

describe('ShoppingList.vue', () => {
  test('make ShoppingList snapshot', () => {
    const wrapper = shallowMount(ShoppingList);
    expect((wrapper.element)).toMatchSnapshot();
  });
});

describe('', () => {
  let cmp: any;
  let vm: any;

  beforeEach(() => {
    cmp = Vue.extend(ShoppingList);
    // eslint-disable-next-line new-cap
    vm = new cmp({
      data: {
        itemsList: [
          {
            id: 'testId1234',
            name: 'TestName',
          },
          {
            id: 'testId12345',
            name: 'TestName5',
          },
        ],
      },
    }).$mount();
  });

  test('rendered child components', () => {
    expect(vm.itemsList).toEqual(1);
  });
});
