import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import GuessCount from './guess-count';

describe('<GuessCount />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessCount guessCount='2' />);
    });

    it('Renders a guessCount update', () =>{
        let TEST_GUESSCOUNT = 4
        let wrapper = shallow(<GuessCount guessCount = {TEST_GUESSCOUNT} />)
        expect(wrapper.contains(TEST_GUESSCOUNT)).toEqual(true);
        expect(wrapper.text()).toEqual(`You've made ${TEST_GUESSCOUNT} guesses!`)
    })
});
