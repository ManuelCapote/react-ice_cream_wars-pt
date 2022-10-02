import React from 'react'
import Header from './components/Header'
import AdDesigner from './components/AdDesigner'
import Votes from './components/Votes'
import Counter from './components/Counter'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <AdDesigner />
        <Votes />
      </div>
      <br />
      <br />
      <Counter />
    </div>
  )
}

export default App
