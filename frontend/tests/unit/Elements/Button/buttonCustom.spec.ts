import { shallowMount } from '@vue/test-utils';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';

describe('ButtonCustom.vue', () => {
  let wrapper: any;
  const createComponent = (props: any) => {
    wrapper = shallowMount(ButtonCustom, {
      propsData: {
        ...props,
      },
    });
  };

  beforeEach(() => {
    wrapper = shallowMount(ButtonCustom);
  });

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });
  it('Check added disabled class on the button', () => {
    const item = {
      disabled: true,
    };
    createComponent({ item });
    wrapper = shallowMount(ButtonCustom, {
      propsData: item,
    });
    expect(wrapper.findComponent(ButtonCustom).props().disabled).toBe(true);
    // expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.find('[data-test-id=button]').classes()).toContain('app__button_disabled');
  });
 // todo :class="{'app__button_disabled': disabled}"
 // todo :disabled="disabled"
 // todo :type="buttonType"
 // todo @click="handleClick">
 // todo <slot></slot>
});
