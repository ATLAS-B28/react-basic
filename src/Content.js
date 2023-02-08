import ItemList from "./ItemList";
const Content = ({items,handleCheck,handleDelete}) => {
 //the set getter and
  // the setName as setter procedure

  //now we will look at handling events in react
  //const handleNameChange = () => {
  //const names = ['Aditya','Kakashi','Aranyaka']
  //const int = Math.floor(Math.random()*3)
  //setName( names[int])//sets the name of the current value
  //}
  //const handleClick = () => {
  //console.log('clicked it')
  //}
  //const handleClickTwo = (name) => {
  //console.log(`${name} clicked it`)
  //}
  // const handleClickThree = (e) => {
  // console.log(e.target.innerText)
  //}

  //return ({
  /*<main className="App-content">
     <p onDoubleClick={handleClick}>
         Hello {name}
      </p>
      <button onClick={handleNameChange}>Change Name</button>just a ref to the function 
      <button onClick={()=>handleClickTwo('Aditya')}>Click it</button>
      here we use an anonymus function to pass parameter and
       trigger the function 
      <button onClick={(e)=>handleClickThree(e)}>Click to acces event object</button>
    </main>*/ //);};

  return (
    <main>
      {items.length ? (
       <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
      ) :(
        <p style={{marginTop:"2rem"}}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
