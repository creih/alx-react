import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators');

describe('<Notifications />', () => {
    const notifications = [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
    ];
    
    it('should call fetchNotifications on mount', () => {
        const fetchMock = jest.fn();
        const wrapper = shallow(<Notifications fetchNotifications={fetchMock} />);
        expect(fetchMock).toHaveBeenCalled();
    });

    it('should call fetchNotifications on mount', () => {
        const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications} listNotifications={notifications} />);
        expect(fetchNotifications).toHaveBeenCalled();
    });

    it('should call markAsRead when a notification is clicked', () => {
        const markAsReadMock = jest.fn();
        const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications} markAsRead={markAsReadMock} listNotifications={notifications} />);
        
        wrapper.find('div').at(0).simulate('click');
        expect(markAsReadMock).toHaveBeenCalledWith(1);
    });
});
