import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { App } from './App';


const mockDisplayNotificationDrawer = jest.fn();
const mockHideNotificationDrawer = jest.fn();

describe('App Component', () => {
  let wrapper;
  let mockProps;
  const props = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: mockDisplayNotificationDrawer,
    hideNotificationDrawer: mockHideNotificationDrawer,
    login: jest.fn(),
    logout: jest.fn(),

  };
  it('renders correctly when logged in', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when not logged in', () => {
      const wrapper = shallow(<App {...{ ...props, isLoggedIn: false }} />);
      expect(wrapper).toMatchSnapshot();
  });

  beforeEach(() => {
    mockProps = {
      isLoggedIn: false,
      displayDrawer: false,
      displayNotificationDrawer: mockDisplayNotificationDrawer,
      hideNotificationDrawer: mockHideNotificationDrawer
    };

    // Shallow render the App component with props
    wrapper = shallow(<App {...mockProps} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should show "You are not logged in" when isLoggedIn is false', () => {
    expect(wrapper.find('p').text()).toEqual('You are not logged in');
  });

  it('should show "You are logged in" when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find('p').text()).toEqual('You are logged in');
  });

  it('should render the notification drawer when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.notification-drawer').exists()).toBe(true);
  });

  it('should not render the notification drawer when displayDrawer is false', () => {
    expect(wrapper.find('.notification-drawer').exists()).toBe(false);
  });

  it('should call displayNotificationDrawer when "Show Notification Drawer" button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockDisplayNotificationDrawer).toHaveBeenCalled();
  });

  it('should call hideNotificationDrawer when "Hide Drawer" button is clicked', () => {
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('button').simulate('click');
    expect(mockHideNotificationDrawer).toHaveBeenCalled();
  });
});
