import React, { useState } from 'react'
import {Menu, MenuItem, Button} from "@material-ui/core"
import {Link,BrowserRouter as Router,Route} from "react-router-dom"
const MenuMaterial = () => {
  const [openMenu, setOpenMenu] = useState(null)
  const MenuHandle = ()=>{
    setOpenMenu(true)
  }
  const MenuClose = ()=>{
    setOpenMenu(false)
  }
  return (
    <Router>
      <h1>Menu Material Ui</h1>
      <Button onClick={MenuHandle}>Open Menu</Button>
      <Menu open={openMenu} onClose={MenuClose}> 
        <MenuItem onClick={MenuClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={MenuClose}><Link to = "/about">About</Link></MenuItem>
      </Menu>
      <Route path='/about'><About/></Route>
      <Route path='/'><Home/></Route>
    </Router>
   
  )
}
function Home(){
  return (
    <h1>Home Page</h1>
  )
}
function About(){
  return (
    <h1>About Page</h1>
  )
}

export default MenuMaterial
