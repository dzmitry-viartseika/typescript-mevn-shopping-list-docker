import { shallowMount } from '@vue/test-utils';
import HeaderNavigation from '@/components/Header/HeaderNavigation.vue';

describe('HeaderNavigation.vue', () => {
  test('make HeaderNavigation snapshot', () => {
    const wrapper = shallowMount(HeaderNavigation);
    expect((wrapper.element)).toMatchSnapshot();
  });
});
