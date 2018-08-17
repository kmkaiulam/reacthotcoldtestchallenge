import React from 'react';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import Feedback from './feedback';

describe('<Feedback />', () => {

    it('Renders without crashing', () => {
        shallow(<Feedback feedback='test' />);
    });

    it('Renders a feedback update', () =>{
        let TEST_FEEDBACK = 'You win!'; 
        let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />)
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });

});
