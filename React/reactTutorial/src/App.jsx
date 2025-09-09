import React from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import NavBar from './components/Navbar.jsx'
import Main from './components/Mainbody.jsx'

// const root = createRoot(document.getElementById('root'))

function App() {
  return (<div className="main">
    <NavBar />
    <Main />
  </div>)
}


export default App
