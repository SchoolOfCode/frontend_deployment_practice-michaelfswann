import React, { useState, useEffect } from 'react';

import InputList from '../InputList';
import ShowList from '../ShowList';
import ClearList from '../ClearList';

/* 1. App will contain components which will allow a person to input items into a list, show the items that are in the list, 
and clear all of the items in a list. 
2. In order for the components to interact with one another, some functionality will need to be hoisted into the App component
 */

const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

function App() {
  const [list, setList] = useState([]);

  // Fetching shopping list data from shopping list API.

  useEffect(() => {
    async function getShoppingList() {
      const response = await fetch(`${url}/shoppingList`);
      const data = await response.json(response);
      console.log(data);
      setList(data.payload);
    }
    getShoppingList();
  }, []);

  async function addToList(newListItem) {
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listItem = { item: newListItem, completed: false };

    const response = await fetch(`${url}/shoppingList`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listItem }),
    });

    const updatedList = [...list, listItem];
    setList(updatedList);
  }

  function clearList() {
    //This function clears all the items that have been added to the list.
    const clearedList = [];
    setList(clearedList);
  }

  function tickItem(index) {
    const updatedItem = {
      item: list[index].item,
      completed: !list[index].completed,
    };

    const updatedList = [
      ...list.slice(0, index),
      updatedItem,
      ...list.slice(index + 1),
    ];

    setList(updatedList);
  }

  return (
    <section>
      <InputList addToList={addToList} buttonText={'Add To List'} />
      <ShowList list={list} tickItem={tickItem} />
      <ClearList clearList={clearList} buttonText={'Clear List'} />
    </section>
  );
}

export default App;
