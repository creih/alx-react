import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators');

describe('<Notifications />', () => {
    it('should call fetchNotifications on mount', () => {
        const fetchMock = jest.fn();
        const wrapper = shallow(<Notifications fetchNotifications={fetchMock} />);
        expect(fetchMock).toHaveBeenCalled();
    });

});
