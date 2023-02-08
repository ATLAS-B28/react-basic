//controlled inputs means inputs in react froms 
//and inputs are controlled with use of source of truth of the state
import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"
//we use useref so as to bring the focus back
//to the input
export default function AddItem({newItem,setNewItem,handleSubmit}) {
  const inputRef = useRef()

   return (
     <form 
      action="" 
      className="addForm"
      onSubmit={handleSubmit}
     >
        <label htmlFor="addItem">
            Add Item 
        </label>
        <input 
         type="text" 
         autoFocus 
         ref={inputRef}
         id="addItem" 
         placeholder="add item" 
         required 
         //setting current state as one source of truth here
         value={newItem}
         //to enable us to change and get values
         onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
         type="submit"
         onClick={()=>inputRef.current.focus()}
         aria-label="Add item"

        ><FaPlus/></button>
     </form>
  )
}
