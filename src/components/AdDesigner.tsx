import './AdDesigner.css'

const AdDesigner = () => {
  return (
    <div className='AdDesigner'>
      <h2>Ad Designer</h2>
      <div className='vote-container'>
        <span>Vote For</span>
        <h3>Strawberry</h3>
      </div>
      <div className='support'>
        <span>What to Support</span>
        <div className='flavors'>
          <button>Chocolate</button>
          <button>Vanilla</button>
          <button className='disabled'>Strawberry</button>
        </div>
      </div>
      <div className='theme'>
        <span>Color Theme</span>
        <div className='color'>
          <button className='disabled'>Light</button>
          <button>Dark</button>
        </div>
      </div>
      <div className='size'>
        <span>Font Size</span>
        <div className='set-size'>
          <button>Down</button>
          <span>44</span>
          <button>Up</button>
        </div>
      </div>
    </div>
  )
}

export default AdDesigner
