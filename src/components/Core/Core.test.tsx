import React from 'react';
import ReactDOM from 'react-dom';
import Core from './Core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Core/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
