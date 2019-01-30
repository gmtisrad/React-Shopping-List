import React from 'react';
import './ShoppingListItem.css';

class ShoppingListItem extends React.Component {
    static defaultProps = {
        name: '',
        checked: null,
    }
    render() {
        return(
            <div className='list-item'>
                <p
                    style={{textDecoration: this.props.checked ? 'line-through' : null}}
                >
                    {this.props.name}
                </p>
                <div className='item-buttons'>
                    <button 
                        className='delete'
                        onClick={() => this.props.onDeleteItem(this.props.name)}
                    >
                    Delete
                    </button>
                    <button 
                        className='check'
                        onClick={() => this.props.onCheckItem(this.props.name)}
                    >
                    Check
                    </button>
                </div>
            </div>
        )
    }
}

export default ShoppingListItem;