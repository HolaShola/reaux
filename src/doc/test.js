import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
// import * as ReactDOM from 'react-dom';
// import sinon from 'sinon';

import Search from '../../../src/components/Search/Search';

const defaultProps = {
  placeholder: 'test placeholder',
  openUnitInfoSidebar: () => {},
  units: new Map({}),
  toggleArchived: () => {},
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

  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(<Search.WrappedComponent
  //       {...defaultProps}
  //     />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('renders correctly', () => {
  //   const instance = shallow(<Search.WrappedComponent {...defaultProps} />);
  //   expect(instance).toMatchSnapshot();
  // });

  // it('clickkkk', () => {
  //   const mockCallback = jest.fn();
  //   const instance = shallow(<Search.WrappedComponent {...defaultProps} />);
    
  //   instance.find('label').simulate('click');
  //   // expect(mockCallback).toBeCalled();
  //   expect(mockCallback).toHaveBeenCalled();
  // });

  it('should render a Autocomplete', () => {
    const instance = shallow(<Search.WrappedComponent {...defaultProps} />);
    expect(instance.find('label').length).toEqual(1);
  });
});
