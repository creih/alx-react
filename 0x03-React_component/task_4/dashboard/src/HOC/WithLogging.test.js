import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging'; // Adjust the path if necessary

// Define a dummy component to test with pure HTML
const DummyComponent = () => <p>Test</p>;

// Define a dummy Login component for testing
const Login = () => <div>Login</div>;

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log messages for a pure HTML element', () => {
    const WrappedComponent = WithLogging(DummyComponent);
    const wrapper = mount(<WrappedComponent />);
    
    expect(consoleSpy).toHaveBeenCalledWith('Component DummyComponent is mounted');
    
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component DummyComponent is going to unmount');
  });

  it('should log messages with component name for Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    });
});