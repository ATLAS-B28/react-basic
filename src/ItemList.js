//resuable component
import React from "react";
import { LineItem } from "./LineItem";
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {/**use map function */}
      {items.map(
        (
          item //to render html within a JS function like this use () braces
        ) => (
          <LineItem
            key={item.id}//each child should have a unique key prop
            item={item} //here we should only use
            // item as the prop is for each list item
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )
      )}
    </ul>
  );
};
export default ItemList;
