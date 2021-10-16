import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import Navbar from '@/components/Header/Navbar.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

shallowMount(App, {
  localVue,
  router,
  stubs: ['router-link', 'router-view'],
});

describe('App.vue', () => {
  const wrapper = shallowMount(App);
  test('make App snapshot', () => {
    expect((wrapper.element)).toMatchSnapshot();
  });

  test('check rendering Navbar component', () => {
    const theNavbar = wrapper.findComponent(Navbar);
    expect(theNavbar.exists()).toBe(true);
  });
});
