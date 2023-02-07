import React from 'react'
const today = new Date()
const Footer = () => {
 return (
    <footer className='App-footer'>
      <p>This is the footer section of the app</p>
      <br />
      <p>Copyright {today.getFullYear()}</p>
    </footer>
 )
}
export default Footer