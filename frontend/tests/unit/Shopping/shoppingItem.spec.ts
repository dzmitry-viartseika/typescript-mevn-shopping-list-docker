import { shallowMount } from '@vue/test-utils';
import ShoppingItem from '@/components/Shopping/ShoppingItem.vue';

describe('ShoppingItem.vue', () => {
  test('make ShoppingItem snapshot', () => {
    const wrapper = shallowMount(ShoppingItem, {
      propsData: {
        item: {
          id: 'testId123',
          name: 'Item name',
        },
      },
    });
    expect((wrapper.element)).toMatchSnapshot();
  });
});
