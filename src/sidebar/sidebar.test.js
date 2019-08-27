import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*test('render Markdown in preview mode', () => {
  const wrapper = shallow(
      <MarkdownEditor value="*Hello* Jest!" />
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[name="toggle-preview"]').simulate('click');
  expect(wrapper).toMatchSnapshot();
});*/

