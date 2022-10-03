import React from 'react'
import Header from './components/Header'
import AdDesigner from './components/AdDesigner'
import Votes from './components/Votes'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <AdDesigner />
        <Votes />
      </div>
    </div>
  )
}

export default App
