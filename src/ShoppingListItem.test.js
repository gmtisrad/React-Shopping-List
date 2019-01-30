import ReactDOM from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShoppingListItem from './ShoppingListItem.js';

describe ('ShoppingListeItem tests', () => {
    it('renders without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShoppingListItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders UI without props as expected', () => {
        const wrapper = shallow(<ShoppingListItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})