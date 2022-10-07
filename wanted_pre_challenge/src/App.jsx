import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Router from "./components/Router";
import Route from "./components/Route";
import Root from "./pages/Root"
import About from "./pages/About"
import './App.css'


function App() {

  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About/>} />
    </Router>
  )
}

export default App
