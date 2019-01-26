import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

describe('<App/>', () => {
    describe('render', () => {
        it('renders without errors', () => {
            shallow(<App /> );
        })


    });
});
