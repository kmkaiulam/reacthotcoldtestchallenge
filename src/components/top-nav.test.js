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
    it('Should call onNewGame when new game is clicked', () => {
        const callback =jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    })
    it('Should call onGenerateAuralUpdate when status-link is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate = {callback} />);
        const link = wrapper.find('.status-link');
        link.simulate('click' , {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});
