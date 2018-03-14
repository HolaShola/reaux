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

  it('renderItem method should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    const spy = sinon.spy(wrapper.instance(), 'renderItem');

    wrapper.instance().renderItem([], true);
    expect(spy.calledOnce).toEqual(true);
  });

  it('sortItems method should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    const spy = sinon.spy(wrapper.instance(), 'sortItems');

    const itemA = { name: 'First' };
    const itemB = { name: 'Second' };

    wrapper.instance().sortItems(itemA, itemB, 'test');
    expect(spy.calledOnce).toEqual(true);
  });

  // it('renderItems method should work correctly', () => {
  //   const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
  //   const spy = sinon.spy(wrapper.instance(), 'renderItems');

  //   wrapper.instance().renderItems([]);
  //   expect(spy.calledOnce).toEqual(true);
  // });

  it('renderItems method (items.length = 0) should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    const spy = sinon.spy(wrapper.instance(), 'renderItems');

    wrapper.instance().renderItems([]);
    expect(spy.returnValues[0]).toEqual(<div
      className="renderAutocompleteList noResult"
      style={{ paddingLeft: '10px', width: '248px', paddingTop: '5px' }}
    >No results
    </div>);
  });

  it('renderItems method (items.length > 0) should work correctly', () => {
    const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
    const spy = sinon.spy(wrapper.instance(), 'renderItems');

    const itemA = 'First';

    wrapper.instance().renderItems(itemA);
    expect(spy.returnValues[0]).toEqual(<div
      className="renderAutocompleteList"
    >First
    </div>);
  });

  // it('renderItems method (items.length > 7) should work correctly', () => {
  //   const wrapper = mount(<Search.WrappedComponent {...defaultProps} />);
  //   const spy = sinon.spy(wrapper.instance(), 'renderItems');

  //   const itemA = 'verylongstring';

  //   wrapper.instance().renderItems([itemA]);
  //   expect(spy.returnValues[0]).toEqual(<div
  //     className="renderAutocompleteList"
  //   >First
  //   </div>);
  // });
});
