import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/Elements/Loader/Loader.vue';

describe('Loader.vue', () => {
  test('make Loader snapshot', () => {
    const wrapper = shallowMount(Loader);
    expect((wrapper.element)).toMatchSnapshot();
  });
});
