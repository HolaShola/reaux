import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import { Map } from 'immutable';
import { shallow, mount } from 'enzyme';

import Search from '../../../src/components/Search/Search';

const defaultProps = {
  placeholder: 'test placeholder',
  openUnitInfoSidebar: jest.fn(),
  units: new Map({}),
  toggleArchived: jest.fn(),
  shouldArchivedBeShown: false,
  isSearchDisabled: false
};

describe('Search component', () => {
  it('Search should render correctly', () => {
    const renderer = new ShallowRenderer();
    const props = Object.assign({}, defaultProps);
    renderer.render(<Search.WrappedComponent
      {...props}
    />);
    const instance = renderer.getRenderOutput();
    expect(instance).toMatchSnapshot();
  });

  it('state have searchString property', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    expect(wrapper.instance().state).toHaveProperty('searchString', '');
  });

  it('onChange method should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    wrapper.instance().onChange({ target: { value: 'Test' } });
    expect(wrapper.instance().state).toHaveProperty('searchString', 'Test');
  });

  it('onSelect method should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    wrapper.instance().onSelect('test_value', { id: 100 });
    expect(wrapper.instance().state).toHaveProperty('searchString', '');
    expect(defaultProps.openUnitInfoSidebar).toHaveBeenCalled();
  });

});
