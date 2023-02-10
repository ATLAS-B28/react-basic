import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";
const App = () => {
  //api url
  const API_URL = " http://localhost:3000/items";

  //add functional components
  //styling components - use libraries, inline ,separate files
  //use the useState hook to manage the state of the app
  const [items, setItems] = useState(
    //
    []
    //JSON.parse(localStorage.getItem("listfordeleteaddcheck"))||
    //[]//add a short circuit operator cause initially no such list exist
    //causing an error of .filter having a null value as param
    //therefore we initiate the a empty array
  );
  //now we will poll
  // the values from the storage
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setIsloading] = useState(true); //set to true as we willnot use the function again
  //useEffect runs at every render
  useEffect(
    () => {
      
      //it is async in nature
      //we create a async function here only as it will not be used elsewhere
      //it is reading
      const fetchItems = async () => {
        try {
          const res = await fetch(API_URL);
          if (!res.ok) throw Error("Did not recieved expected data");
          const listItems = await res.json();
          console.log(listItems);
          setItems(listItems);
          setFetchError(null); //setting it back to error
        } catch (error) {
          //the error caught in try is logged here

          setFetchError(error.message);
        } finally {
          setIsloading(false); //after loading we set it to false
        }
      };
      //to simulate an api call
      //some times rest api may not be fast so use timeout
      //also tell the user to wait
      setTimeout(() => {
        //we call this func in an IIFE manner
        (async () => await fetchItems())();
      },3000);
      //old version
      //localStorage.setItem("listfordeleteaddcheck",JSON.stringify(items))
      //save the list everytime there is a change in the list
    },
    [
      /*items*/
    ]
  ); //here we run the hook once after loading by using dependencies

  const addItem = async (item) => {
    const id = items.length
      ? items[items.length - 1].id + 1 /**i.e. the last elemnt in the list */
      : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setItems(listItems); //after running useEffect for every change in list we
    //will simply call the procedure to update and render
    //update the rest api
    const postOptions ={
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(myNewItem)//send only the new one to post to api
    }
    const result =  await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result) //so the result is not null and we handle error
  };
  //adding list ,keys and their css
  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      //create new array
      item.id === id ? { ...item, checked: !item.checked } : item
    ); //to avoid state change directly we create this
    //then call the setItems and pass this new array

    setItems(listItems);
    //we get the items from the list items
    const myItem = listItems.filter((item)=>item.id===id)
    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked: myItem[0].checked})
    }
    const reqURL = `${API_URL}/${id}`//as we are accessing a specific id therefore this change
    const result = await apiRequest(reqURL,updateOptions)
    if(result) setFetchError(result)
    
  };
  //delete
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    const deleteOptions = {method:'DELETE'}
    const reqURL = `${API_URL}/${id}`
    const result = await apiRequest(reqURL,deleteOptions)
    if(result) setFetchError(result)
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
      {/** create main tag and wrap it around the content and then to show an user
       * that an error has occured
       */}
      <main>
        {isloading && <p>Loading Items</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error ${fetchError}`}</p>}
        {!fetchError && !isloading && (
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
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};
export default App;
