import './Votes.css'

const Votes = () => {
  return (
    <div className='Votes'>
      <h2>Vote Here</h2>
      <div className='support'>
        <div className='flavors'>
          <button>Chocolate</button>
          <button>Vanilla</button>
          <button>Strawberry</button>
        </div>
      </div>
      <div className='percetange'>
        <div className='bar-info'>
          <h4>Chocolate:</h4>
          <span className='votesNumber'>2(66.7%)</span>
        </div>
        <div className='bar-container'>
          <div className='bar-one'></div>
        </div>
      </div>
      <div className='percetange'>
        <div className='bar-info'>
          <h4>Vanilla:</h4>
          <span className='votesNumber'>1(33.3%)</span>
        </div>
        <div className='bar-container'>
          <div className='bar-two'></div>
        </div>
      </div>
      <div className='percetange'>
        <div className='bar-info'>
          <h4>Strawberry:</h4>
          <span className='votesNumber'>3(50.0%)</span>
        </div>
        <div className='bar-container'>
          <div className='bar-three'></div>
        </div>
      </div>
    </div>
  )
}

export default Votes
