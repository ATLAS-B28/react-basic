import React from "react";
import { FaTrashAlt } from "react-icons/fa";
export const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
      {/**this keys are needed for the key
       * as reacts needs to keep track of the changes to the list
       */}
      <input
        onChange={() => handleCheck(item.id)}
        //here we need anonyemous
        // func to trigger handlecheck as we need to pass in id
        type="checkbox"
        checked={item.checked} //we need to change its state using useState
      />
      <label
        onDoubleClick={() => handleCheck(item.id)} //on double click check and uncheck
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.id}`}
      />
    </li>
  );
};
