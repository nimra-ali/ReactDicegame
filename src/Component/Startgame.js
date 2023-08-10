import React from 'react'
import pic from '../Images/dices 1.png'

function Startgame({toggle}) {
  return (
    <div className='main1'>
        <div className='img1'>
            <img className='pic1' src={pic} alt='dice'/>
        </div>
        <div className='h-b'>
            <h1 className='head1'>DICE GAME</h1>
            <button onClick={toggle} className='btn1'>Play Now</button>
        </div>
    </div>
  )
}

export default Startgame;