import { mount } from '@vue/test-utils';
import QuiButton from '..';

test('render demo button', () => {
  const wrapper = mount(QuiButton);
  expect(wrapper.html()).toMatchSnapshot();
});
