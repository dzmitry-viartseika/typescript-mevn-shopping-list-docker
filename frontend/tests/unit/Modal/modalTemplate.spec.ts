import { shallowMount, mount } from '@vue/test-utils';
// import sinon from 'sinon';
import ModalTemplate from '@/components/Modals/ModalTemplate.vue';

describe('ModalTemplate.vue', () => {
  test('make ModalTemplate snapshot', () => {
    const wrapper = shallowMount(ModalTemplate);
    expect((wrapper.element)).toMatchSnapshot();
  });

  test('check props label for component', () => {
    const wrapper = mount(ModalTemplate, {
      propsData: {
        label: 'baz',
      },
    });
    expect(wrapper.props().label).toBe('baz');
  });

  // test('trigger close Modal form', async () => {
  //   const clickHandler = sinon.stub();
  //   const wrapper = mount(ModalTemplate, {
  //     propsData: { clickHandler },
  //   });
  //
  //   await wrapper.trigger('click');
  // });
});
