import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem'; // Adjust the path if necessary

describe('NotificationItem Component', () => {
  it('should call markAsRead with the correct ID when clicked', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="New course available" markAsRead={markAsReadMock} />);

    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
