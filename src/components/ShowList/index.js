/* This component will show the list of items that the person has entered.*/

import React from 'react';
import ListItem from '../ListItem';

function ShowList({ list, tickItem }) {
  return (
    <ol>
      {list.map((listItem, index) => (
        <ListItem
          name={listItem.item}
          completed={listItem.completed}
          key={index}
          tickItem={() => tickItem(index)}
        />
      ))}
    </ol>
  );
}

export default ShowList;
