import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import AddItemForm from './AddItemForm.js';
import toJson from 'enzyme-to-json';

describe ('Tests for AddItemForm Component', () => {
    it('Renders without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddItemForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders UI as expected', () => {
        const wrapper = shallow(<AddItemForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})