import { shallowMount } from '@vue/test-utils';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';

describe('ButtonCustom.vue', () => {
  /** Определяем входные параметры */
  const slots = { default: 'ButtonText' };
  const defaultBtnType = 'button';
  const propData = { type: 'submit' };
  const listeners = { click: null };

  let wrapper: any;

  const createComponent = (options: any) => {
    wrapper = shallowMount(ButtonCustom, options);
  };

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    listeners.click = jest.fn();
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.destry();
    }
  });

  test('raise the click event on click', () => {
    createComponent({ listeners });
    wrapper.find('.app__button').trigger('click');
    expect(listeners.click).toHaveBeenCalled();
  });

  test('make ButtonCustom snapshot', () => {
    wrapper = shallowMount(ButtonCustom);
    expect((wrapper.element)).toMatchSnapshot();
  });
});
