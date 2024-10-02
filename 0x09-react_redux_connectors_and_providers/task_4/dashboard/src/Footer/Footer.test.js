import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
    const props = {
        user: { username: 'testUser' },
    };

    it('renders correctly when user is logged in', () => {
        const wrapper = shallow(<Footer {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when user is not logged in', () => {
        const wrapper = shallow(<Footer {...{ user: null }} />);
        expect(wrapper).toMatchSnapshot();
    });
});
