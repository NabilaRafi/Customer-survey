import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RadioButton from './radio-button';

describe('RadioButton', () => {
    const outputSnapshot = shallow(<RadioButton />);
    it('Render sectionPanel without crashing', () => {        
        expect(shallowToJson(outputSnapshot)).toMatchSnapshot();
    })
    it('should render label component', () => {
        expect(outputSnapshot.find('label').length).toEqual(2);
    })
    it('should render input component with type as radio', () => {
        expect(outputSnapshot.find('input').length).toEqual(2);
    })
})