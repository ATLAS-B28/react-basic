import React from "react";
const Content = () => {
  //now we will look at handling events in react
  const handleNameChange = () => {
    const names = ['Aditya','Kakashi','Aranyaka']
    const int = Math.floor(Math.random()*3)
    return names[int]
  }
  const handleClick = () => {
    console.log('clicked it')
  }
  const handleClickTwo = (name) => {
    console.log(`${name} clicked it`)
  }
  const handleClickThree = (e) => {
    console.log(e.target.innerText)
  }
  
  return (
    <main className="App-content">
      <p onDoubleClick={handleClick}>
        Hello {handleNameChange()}
      </p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={()=>handleClickTwo('Aditya')}>Click it</button>
      {/*here we use an anonymus function to pass parameter and
       trigger the function */}
      <button onClick={(e)=>handleClickThree(e)}>Click to acces event object</button>
    </main>
  );
};
export default Content