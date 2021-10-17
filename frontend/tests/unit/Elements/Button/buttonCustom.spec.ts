import { shallowMount } from '@vue/test-utils';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';

describe('ButtonCustom.vue', () => {
  /** Определяем входные параметры */
  const slots = { default: 'ButtonText' };
  const defaultBtnType = 'button';
  const propData = { buttonType: 'button' };
  const listeners = { click: null };
  const generateClick = jest.fn();

  let wrapper: any;

  const createComponent = (options?: any) => {
    wrapper = shallowMount(ButtonCustom, options);
  };

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    listeners.click = jest.fn();
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
    }
  });

  test('raise the click event on click', () => {
    createComponent({ listeners });
    generateClick();
    const button = wrapper.find('.app__button');
    button.trigger('click');
    expect(generateClick).toHaveBeenCalled();
  });

  test('make ButtonCustom snapshot', () => {
    wrapper = shallowMount(ButtonCustom);
    expect((wrapper.element)).toMatchSnapshot();
  });

  test('button type is submit', () => {
    createComponent({ propData });
    expect(wrapper.attributes('type')).toBe(propData.buttonType);
  });

  test('button type is button', () => {
    createComponent();
    expect(wrapper.attributes('type')).toBe(defaultBtnType);
  });
});
