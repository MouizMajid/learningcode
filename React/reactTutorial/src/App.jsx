import React from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import NavBar from './components/Navbar.jsx'
import Place from './components/Place.jsx'
import data from './data.jsx'
import Landing from './components/Landing.jsx'
import Header from './components/Header.jsx'


// const root = createRoot(document.getElementById('root'))

function App() {

  // const places = data.map((item) => {
  //   return <Place key={item.id} src={item.src} name={item.title} country={item.country}  date={item.date} info={item.info} />
  // })


  return (<div className="main">
    {/* <NavBar />
    {places} */}
    <Header/>
    <Landing/>
    
  </div>)
}


export default App
