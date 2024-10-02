import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
    const props = {
        user: { username: 'testUser' },
        logout: jest.fn(),
    };

    it('renders correctly when user is logged in', () => {
        const wrapper = shallow(<Header {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when user is not logged in', () => {
        const wrapper = shallow(<Header {...{ user: null, logout: jest.fn() }} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('calls logout when logout button is clicked', () => {
        const wrapper = shallow(<Header {...props} />);
        wrapper.find('button').simulate('click');
        expect(props.logout).toHaveBeenCalled();
    });
});
