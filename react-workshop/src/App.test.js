import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App tests', function () {
  let div;
  beforeEach(() => div = document.createElement('div'))

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('renders without crashing', () => {
    ReactDOM.render(<App />, div);
  });

})
