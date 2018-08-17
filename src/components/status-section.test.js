import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import StatusSection from './status-section';
describe('<StatusSection />', () => {

    it('Renders without crashing', () => {
        shallow(<StatusSection auralStatus='' guesses={['22','23']} />);
    });



});
