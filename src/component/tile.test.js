import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Tile from './tile';


Enzyme.configure({ adapter: new Adapter() })

describe('Tile', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Tile row={0} column={0} value="X" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
