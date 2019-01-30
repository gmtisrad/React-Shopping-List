import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShoppingList from './ShoppingList.js';

describe('ShoppingList component tests', () => {      
    it('renders empty given no props', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShoppingList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders UI as expected with no props', () => {
        const wrapper = shallow(<ShoppingList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('renders UI as expected with props', () => {
        const shoppingItems = [
            { name: 'apples', checked: false },
        ]
        const wrapper = shallow(<ShoppingList shoppingList={shoppingItems} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('renders UI as expected with multiple props', () => {
        const shoppingItems = [
            { name: 'apples', checked: false },
            { name: 'apples', checked: true },
            { name: 'apples', checked: false },
        ]
        const wrapper = shallow(<ShoppingList shoppingList={shoppingItems} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})