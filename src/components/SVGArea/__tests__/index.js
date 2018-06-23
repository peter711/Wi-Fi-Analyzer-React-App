import React from 'react';
import { mount } from 'enzyme';
import SVGArea from '../';

describe('<SVGArea/>', () => {
    it ('should call _onWindowResize', () => {
        const spy = jest.spyOn(SVGArea.prototype, '_onWindowResize');
        const wrapper = mount(<SVGArea/>);
        const resizeEvent = new Event('resize');
        
        window.dispatchEvent(resizeEvent);
        
        expect(spy).toHaveBeenCalled();
    });

    it ('should removeEventListner resize on componentWillUnmount', () => {
        const spy = jest.spyOn(SVGArea.prototype, '_onWindowResize');
        const wrapper = mount(<SVGArea/>);
        const resizeEvent = new Event('resize');
        
        window.dispatchEvent(resizeEvent);
        
        expect(spy).toHaveBeenCalled();

        wrapper.unmount();
        
        //Need to be wrapper in timeout
        setTimeout(() => {
            window.dispatchEvent(resizeEvent);
            expect(spy).toHaveBeenCalledTimes(1)
        }, 100);
    });

});