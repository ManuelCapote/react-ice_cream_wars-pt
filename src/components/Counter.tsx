import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [number, setNumber] = useState<number>(10)

  function countUp() {
    setNumber((prev) => prev + 1)
  }

  function countDown() {
    setNumber((prev) => (prev > 0 ? prev - 1 : prev - 2))
  }

  let classes = 'Counter'
  if (number < 0) {
    classes = 'Counter negative'
  }

  let circleSize = number * 10 + 'px'
  let circleStyle = {
    width: circleSize,
    height: circleSize,
  }

  return (
    <div className={classes}>
      <div className='size'>
        <span>Font Size</span>
        <div className='set-size'>
          <span>{number}</span>
          <button onClick={countUp}>Up</button>
          <button onClick={countDown}>Down</button>
          <button onClick={() => setNumber(10)}>Reset</button>
        </div>
        <div className='circle' style={circleStyle}></div>
      </div>
    </div>
  )
}

export default Counter
