import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Route from "./components/Route";
import Root from "./pages/Root"
import About from "./pages/About"
import './App.css'


function App() {

  return (
    <>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About/>} />
    </>
  )
}

export default App
