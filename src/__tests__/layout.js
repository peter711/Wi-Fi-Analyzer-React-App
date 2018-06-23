import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../layout';

describe('<Layout/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper).toMatchSnapshot();
    });
});