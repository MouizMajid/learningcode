import React from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import Header from './Header.jsx'
import Main from './mainbody.jsx'
import Footer from './Footer.jsx'

// const root = createRoot(document.getElementById('root'))





function MyComponent() {
  return (<div className="main">
    <Header />
    <Main />
    <Footer />
  </div>)
}


export default MyComponent
