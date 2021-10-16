import { shallowMount } from '@vue/test-utils';
import InputTemplate from '@/components/Elements/Input/InputTemplate.vue';

describe('InputTemplate.vue', () => {
  test('make InputTemplate snapshot', () => {
    const wrapper = shallowMount(InputTemplate);
    expect((wrapper.element)).toMatchSnapshot();
  });
});
