import {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const Content = () => {
  //use the useState hook to manage the state of the app
   const [items, setItems] = useState([
    {
      id:1,
      checked:false,
      item:"React basics"
    },
    {
      id:2,
      checked:false,
      item:"JSX ,Components and styling"
    },
    {
      id:3,
      checked:false,
      item:"Components, useState Hook"
    },
    {
      id:4,
      checked:false,
      item:"List and keys"
    }
   ]) //the set getter and
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
    </main>*///);};
    //adding list ,keys and their css
    return (
      <main>
        <ul>
          {/**use map function */}
          {items.map((item)=>(//to render html within a JS function like this use () braces
            <li className='item' key={item.id}>{/**this keys are needed for the key
             * as reacts needs to keep track of the changes to the list
             */}
                <input type="checkbox" 
                       checked={item.checked} 
                />
                <label htmlFor="">{item.item}</label>
                <FaTrashAlt
                 role="button"
                 tabIndex="0"
                />
            </li>
          ))}
        </ul>
      </main>
    )
  }
  
export default Content