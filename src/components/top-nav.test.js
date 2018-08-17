import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import TopNav from './top-nav';
describe('<TopNav />', () => {

    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });



});
