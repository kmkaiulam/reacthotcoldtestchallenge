import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import GuessSection from './guess-section';

describe('<GuessSection />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });



});

