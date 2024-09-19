import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let handleDisplayDrawer;
  let handleHideDrawer;

  beforeEach(() => {
    // Create mock functions for handleDisplayDrawer and handleHideDrawer
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  test('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.notificationDrawer').length).toBe(0);
  });

  test('notification drawer is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.notificationDrawer').length).toBe(1);
  });

  test('calls handleDisplayDrawer when clicking on the menu item', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />
    );

    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test('calls handleHideDrawer when clicking the close button', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    wrapper.find('.closeButton').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  test('shouldComponentUpdate returns true if displayDrawer prop changes', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ displayDrawer: true });
    expect(shouldUpdate).toBe(true);
  });

  test('shouldComponentUpdate returns false if displayDrawer prop does not change', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ displayDrawer: false });
    expect(shouldUpdate).toBe(false);
  });
});
