import React from 'react';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({adapter: new Adapter()});
import GuessForm from './guess-form';
describe('<GuessForm />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess = {callback}/>);
        const value = 5;
        const input = wrapper.find('input[type="number"]');
        input.instance().value = value;
        wrapper.simulate('submit')
        expect(callback).toHaveBeenCalledWith(value.toString());
    })
    
    it('Should reset the input upon submission', () => {
        const wrapper = mount(<GuessForm />)
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});
