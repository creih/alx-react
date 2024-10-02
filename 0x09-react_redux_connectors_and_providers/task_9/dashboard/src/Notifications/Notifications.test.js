import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from './notificationSelector';
jest.mock('../actions/notificationActionCreators');

describe('<Notifications />', () => {
    const notifications = [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
    ];
    let setNotificationFilterMock;

    beforeEach(() => {
        setNotificationFilterMock = jest.fn();
    });

    it('Clicking on the first button should call setNotificationFilter with URGENT', () => {
        const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} />);
        const urgentButton = wrapper.find('button').at(0);
        urgentButton.simulate('click');
        expect(setNotificationFilterMock).toHaveBeenCalledWith('urgent');
    });

    it('Clicking on the second button should call setNotificationFilter with DEFAULT', () => {
        const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} />);
        const defaultButton = wrapper.find('button').at(1);
        defaultButton.simulate('click');
        expect(setNotificationFilterMock).toHaveBeenCalledWith('default');
    });
    
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
describe('Selectors', () => {
    const state = {
        notifications: [
            { id: 1, isRead: false, isUrgent: true },
            { id: 2, isRead: false, isUrgent: false },
            { id: 3, isRead: true, isUrgent: true },
            { id: 4, isRead: false, isUrgent: true },
        ],
        filter: 'urgent',
    };

    it('returns all unread notifications when filter is default', () => {
        const newState = { ...state, filter: 'default' };
        const result = getUnreadNotificationsByType(newState);
        expect(result).toEqual([
            { id: 1, isRead: false, isUrgent: true },
            { id: 2, isRead: false, isUrgent: false },
            { id: 4, isRead: false, isUrgent: true },
        ]);
    });

    it('returns only unread and urgent notifications when filter is urgent', () => {
        const result = getUnreadNotificationsByType(state);
        expect(result).toEqual([
            { id: 1, isRead: false, isUrgent: true },
            { id: 4, isRead: false, isUrgent: true },
        ]);
    });
});
