import './Totalscore.css'

const Totalscore = ({score }) => {

    return (
      <main>
          <div className='t-main'>
              <h1 className='t-h1'>{score}</h1>
              <p className='t-p'>Total Score</p>
          </div>
      </main>
    )
  }
  
  export default Totalscore;