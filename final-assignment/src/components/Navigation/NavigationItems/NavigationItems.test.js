import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two navigation items if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('contains the auth <NavigationItem /> if not authenticated', () => {
    expect(wrapper.contains(<NavigationItem link="/Auth">Authenticate</NavigationItem>)).toEqual(true);
  });

  it('should render thress navigation items if authenticated', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should an exact logout button', () => {
      wrapper.setProps({isAuthenticated: true});
      expect(wrapper.contains(<NavigationItem link="/Logout">Logout</NavigationItem>)).toEqual(true);
  });
});
