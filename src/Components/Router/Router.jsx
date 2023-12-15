import React from 'react'
import{Routes,Route} from "react-router-dom"
import About from '../About/About'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Portfolio from '../PortFolio/Portfolio'
import Skills from '../Skills/Skills'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/portfolio"} element={<Portfolio/>}/>
        <Route path={"/skills"} element={<Skills/>}/>

    </Routes>
     
    </>
  )
}

export default Router