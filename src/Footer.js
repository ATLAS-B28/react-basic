import React from 'react'

const Footer = ({length}) => {
 return (
    <footer className='App-footer'>
     <p>{length} List {length === 1 ? "item":"items"}</p>
    </footer>
 )
}
export default Footer