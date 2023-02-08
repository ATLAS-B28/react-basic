import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState } from "react";
const App = () => {
  //add functional components
  //styling components - use libraries, inline ,separate files
  //use the useState hook to manage the state of the app
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("listfordeleteaddcheck"))
  ); //now we will poll
  // the values from the storage
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  //create functuion to chnage the state of list and then store to storage
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("listfordeleteaddcheck", JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length
      ? items[items.length - 1].id + 1 /**i.e. the last elemnt in the list */
      : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  //adding list ,keys and their css
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      //create new array
      item.id === id ? { ...item, checked: !item.checked } : item
    ); //to avoid state change directly we create this
    //then call the setItems and pass this new array

    setAndSaveItems(listItems);
  };
  //delete
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  };
  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem function later
    addItem(newItem); //param is newitem
    setNewItem(""); //set it to empty
    console.log("submitted");
  };
  return (
    <div className="App">
      <Header title="Todo List" />
      {/**here we define
       * and pass the properties */}
      <AddItem
        //props
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(
          (item) => item.item.toLowerCase().includes(search)
          //the item includes the search state
          // then create an array with filter()
          //item.item is the description
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
};
export default App;
