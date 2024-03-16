import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from '../Components/layout/NavBar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Error from '../src/pages/Error'
import Budget from '../src/Budget'



const Indexx=() =>{
  return (
    <div>
<BrowserRouter>
<NavBar/>

<Routes>
    <Route path='/budget-app' element={<Budget/>}/>
    <Route path='/home' element={<Home/>}/>{/*where to go*/}
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/*' element={<Error/>}/>{/*any other path*/}
</Routes>
</BrowserRouter>
  </div>
)}
export default Indexx;
