import React from 'react';
import ShoppingListItem from './ShoppingListItem.js';
import './ShoppingList.css';

class ShoppingList extends React.Component {
    static defaultProps = {
        shoppingList: [],
    }
    renderListItems() {
        return (
            this.props.shoppingList.map((listItem, index) => (
                <ShoppingListItem 
                    key={index} 
                    name={listItem.name} 
                    checked={listItem.checked}
                    onDeleteItem={this.props.onDeleteItem}
                    onCheckItem={this.props.onCheckItem} />
            ))
        )
    }

    render () {
        return (
            <ul className='shopping-list'>
                {this.renderListItems()}
            </ul>
        )
    }
}

export default ShoppingList;