import React from "react";

const Header = (props) => {
  //with variable we can do styling
  //dest{ructring object in JS
  const {title} = props
  return (
    <header className="App-header">
      <h1>{title}</h1>
    </header>
  );
};
//defualt props
Header.defaultProps = {
  title:'Default title'
}
export default Header;
