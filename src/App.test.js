import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('My first snapshot test',()=>{
  test('testing app button', () => {
  let tree = create(<App />)
  expect(tree.toJSON()).toMatchSnapshot();
})
})
