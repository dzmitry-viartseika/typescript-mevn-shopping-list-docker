import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Header/Navbar.vue';
import HeaderNavigation from '@/components/Header/HeaderNavigation.vue';
import navigationMenuItems from '@/constants/headerNavigation';
import { INavigationMenuItem } from '@/types/INavigationMenuItem';

const wrapper = shallowMount(Navbar);
const navigationList: INavigationMenuItem[] = navigationMenuItems;

describe('Navbar.vue', () => {
  test('renders Navbar component', () => {
    expect(wrapper.text()).toMatch('LOGO');
  });

  test('make Navbar snapshot', () => {
    expect((wrapper.element)).toMatchSnapshot();
  });

  test('renders child component', () => {
    const wrapperHeaderNavigation = shallowMount(HeaderNavigation, {
      propsData: {
        navigationList,
      },
    });
    const headerNavigation = wrapperHeaderNavigation.findComponent(HeaderNavigation);
    expect(headerNavigation.exists()).toBe(true);
  });
});
