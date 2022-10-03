import './AdDesigner.css'
import { useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'

const AdDesigner = () => {
  const [fontSize, setFontSize] = useState(35)
  const [flavor, setFlavor] = useState('Strawberry')
  const [darkTheme, setDarkTheme] = useState(false)
  const [disable, setDisable] = useState('disabled')

  const count = (direction: string) => {
    if (direction === 'up') {
      setFontSize((prev) => prev + 1)
    } else setFontSize((prev) => prev - 1)
  }

  const handleFlavor = (flavorFromButton: string) => {
    setFlavor(flavorFromButton)
  }

  return (
    <div className='AdDesigner'>
      <h2>Ad Designer</h2>
      <div className='vote-container'>
        <span>Vote For</span>
        <h3>{flavor}</h3>
      </div>
      <div className='support'>
        <span>What to Support</span>
        <div className='flavors'>
          <button onClick={() => handleFlavor('Chocolate')}>Chocolate</button>
          <button onClick={() => handleFlavor('Vanilla')}>Vanilla</button>
          <button
            className='disabled'
            onClick={() => handleFlavor('Strawberry')}
          >
            Strawberry
          </button>
        </div>
      </div>
      <div className='theme'>
        <span>Color Theme</span>
        <div className='color'>
          <button className='disabled' disabled>
            Light
          </button>
          <button>Dark</button>
        </div>
      </div>
      <div className='size'>
        <span>Font Size</span>
        <div className='set-size'>
          <button onClick={() => count('down')}>Down</button>
          <span>{fontSize}</span>
          <button onClick={() => count('up')}>Up</button>
        </div>
      </div>
    </div>
  )
}

export default AdDesigner
