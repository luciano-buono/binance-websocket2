import React from 'react'
import header from './../../Assets/Images/nasini.png'; // with import
import './Header.scss'

export const Header =() =>{
  return (
    <div>
      <img src={header}/>   
      {/* <h1>Nasini</h1> */}
    </div>
  )
}