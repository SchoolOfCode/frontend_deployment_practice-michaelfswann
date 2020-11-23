//This is the component which shows each individual list item.

import React from 'react';
import './listItem.css';

function ListItem({ name, completed, tickItem }) {
  return (
    <section data-testid="list-item">
      <li
        className={completed ? 'tickedItem' : 'untickedItem'}
        onClick={tickItem}
      >
        {name}
      </li>
    </section>
  );
}

export default ListItem;
