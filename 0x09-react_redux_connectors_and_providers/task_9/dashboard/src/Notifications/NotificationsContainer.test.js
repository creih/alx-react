import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';

describe('NotificationsContainer', () => {
    let fetchNotificationsMock;

    beforeEach(() => {
        fetchNotificationsMock = jest.fn();
    });

    it('calls fetchNotifications on mount', () => {
        shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
        expect(fetchNotificationsMock).toHaveBeenCalled();
    });
});
