import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Update the path if necessary

describe('App Component', () => {
  let logOutMock;
  let wrapper;
  let alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('should call logOut and display alert when Ctrl and h keys are pressed', () => {
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });
});