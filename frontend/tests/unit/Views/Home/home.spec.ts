import { shallowMount, mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import ShoppingList from '@/components/Shopping/ShoppingList.vue';
import ModalTemplate from '@/components/Modals/ModalTemplate.vue';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';

// const itemsList: IItem[] = [
//   {
//     id: 'testid1234',
//     name: 'test_name',
//   },
// ];

describe('Home.vue', () => {
  test('make Home snapshot', () => {
    const wrapper = shallowMount(Home);
    expect((wrapper.element)).toMatchSnapshot();
  });

  const build = () => {
    const wrapper = shallowMount(Home, {
      data: () => ({
        itemsList: [],
        isVisibleModal: true,
      }),
    });

    return {
      wrapper,
      shoppingList: () => wrapper.findComponent(ShoppingList),
      // shoppingItem: () => wrapper.findComponent(ShoppingItem),
    };
  };

  // test('passes a binded itemsList prop to shoppingList component', () => {
  //   const { wrapper, shoppingList } = build();
  //   wrapper.setData({
  //     itemsList: [
  //       {
  //         id: 'testid1234',
  //         name: 'test_name',
  //       },
  //     ],
  //   });
  //   const shoppingList1 = wrapper.findComponent(shoppingList);
  //   expect(shoppingList1.exists()).toBe(true);
  // });

  test('check visibility Modal component', () => {
    const theModalTemplate = mount(ModalTemplate);
    expect(theModalTemplate.isVisible()).toBe(true);
  });

  test('check rendering CustomButton component', () => {
    const wrapper = shallowMount(Home);
    const theCustomButton = wrapper.findComponent(ButtonCustom);
    expect(theCustomButton.exists()).toBe(true);
  });
});
