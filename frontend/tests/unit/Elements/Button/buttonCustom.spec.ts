import { shallowMount } from '@vue/test-utils';
import ButtonCustom from '@/components/Elements/Button/ButtonCustom.vue';

/** Определяем входные параметры */
const slots = { default: 'ButtonText' };
const defaultBtnType = 'button';
const propData = { type: 'submit' };
const listeners = { click: null };

// let wrapper;
//
// const createComponent = (options: any) => {
//   wrapper = shallowMount(ButtonCustom, options);
// };
//
// beforeEach(() => {
//   listeners.click = jest.fn();
// });
//
// afterEach(() => {
//   wrapper.destry();
// });

describe('ButtonCustom.vue', () => {
  test('make ButtonCustom snapshot', () => {
    const wrapper = shallowMount(ButtonCustom);
    expect((wrapper.element)).toMatchSnapshot();
  });
});
