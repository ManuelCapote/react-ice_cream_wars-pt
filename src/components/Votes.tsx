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
    </div>
  )
}

export default Votes
