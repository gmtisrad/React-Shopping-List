import React from 'react';
import AddItemForm from './AddItemForm.js';
import ShoppingList from './ShoppingList.js';
import './App.css';

class App extends React.Component {
  state = {
    shoppingItems: [],
  }

  handleAddItem = (input) => {
    let newList = [
      ...this.state.shoppingItems,
      {name: input, checked: false}
    ];
    this.setState({
      shoppingItems: newList,
    })
  }

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm.name !== item)
    this.setState({
      shoppingItems: newItems
    })
  }

  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if(itm.name === item) {
        itm.checked ? itm.checked = !itm.checked : itm.checked = !itm.checked;
      }
      return itm;
    })
    this.setState({
      shoppingItems: newItems,
    })  
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem}/>
          </section>
          <section>
            <ShoppingList 
            shoppingList={this.state.shoppingItems}
            onDeleteItem={this.handleDeleteItem}
            onCheckItem={this.handleCheckItem}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;