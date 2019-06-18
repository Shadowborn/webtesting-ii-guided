import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';
import App from './App';
import { fireEvent } from '@testing-library/react/dist';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<App />);
    // console.log('\n*** queries', queries)
    // if there are errors rendering the component, the test will fail
  });

  it('renders hello world', () => {
    const { getByText } = render(<App />)

    getByText(/hello world/i);
    // if there are errors rendering the component, the test will fail
  });
  describe('Greet Button', () => {
    it('says hello developers', () => {
      const { getByText, queryByText } = render(<App />);
      // find the button
      const button = getByText(/greet/i);

      // click it using fire event handler
      fireEvent.click(button);

      // confirm desired result, "hello developers" is there
      expect(queryByText(/hello developers/i)).toBeTruthy();

    });
  });
});

// show an h2 with Hellow World