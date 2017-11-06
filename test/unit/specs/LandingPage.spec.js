import Vue from 'vue';
import LandingPage from '@/components/LandingPage';

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(LandingPage),
    }).$mount();

    expect(vm.$el.querySelector('.doc').textContent).to.contain('winged divine stallion');
  });
});
