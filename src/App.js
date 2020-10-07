import React from 'react';
import AddItemForm from './AddItemForm.js';
import ShoppingList from './ShoppingList.js';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };
  render(){
    return(
      <div>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section><AddItemForm /></section>
          <section><ShoppingList items={this.state.shoppingItems}/></section>
        </main>
      </div>
    )
  };
}

export default App;
