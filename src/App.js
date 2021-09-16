import React from 'react'
import { BrowserRouter } from "react-router-dom";

import Root from './pages/Root'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
const App = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Root/>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;