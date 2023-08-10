import './Totalscore.css'

const Rolldice = ({Roldice, currentDice}) => {
   
    // const generateRandomNumber = (min , max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
    // const Rolldice = () => {

    //     const randomNumber = generateRandomNumber(1,7);
    //     setCurrentDice((prev) => randomNumber)
    // };
  return (
    <div className='dice-container'>
        <div className='dice' onClick={Roldice}>

            {/* <img src={dice1} alt='dice1'/> */}
            <img className="roldice" src={require(`../Images/dice_${currentDice}.png`)}/>
            {/* <img className="roldice" src={require(`../Images/dice_1.png`)}/> */}
        </div>
        <p className='dice-p'>Click on Dice to roll</p>

    </div>
  )
}
export default Rolldice;