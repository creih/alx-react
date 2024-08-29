import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'; // Adjust the path if necessary

describe('Notifications Component', () => {
  let wrapper;
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    wrapper = shallow(<Notifications notifications={[{ id: 1, type: 'default', value: 'New course available' }]} />);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log the correct message when markAsRead is called', () => {
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });
});
