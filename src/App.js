import React from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App () {
  var userName = "Taha";
  const fn = () => {
    return "Dummy text";
  }
  const clickEvent = () => {
    console.log("clicked");
  }
  return (
    <div className='App'>
      <Header />
      <h1>Hello {userName == "Taha" ? userName : "??"}</h1>
      <h1>Hello {2 + 2}</h1>
      {/* <h1>Hello {fn()}</h1> */}
      <button onClick={clickEvent}>Click</button>
      {/* <button onMouseOver={clickEvent}>Hover</button> */}
      <Footer />
    </div>
  )
}

export default App
