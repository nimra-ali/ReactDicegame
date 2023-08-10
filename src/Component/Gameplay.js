import Numberselector from "./Numberselector"
import Totalscore from "./Totalscore"
import Rolldice from './Rolldice';
import { useState } from "react"
import Rules from "./Rules";
const Gameplay = () => {
    const [currentDice , setCurrentDice] = useState(1);
    const [selectedNumber , setSelectedNumber] = useState();
    const [score , setScore] = useState(0);
    const [error , setError] = useState("")
    const [showRules , setShowRules] = useState(false);

    const generateRandomNumber = (min , max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const Roldice = () => {
        if(!selectedNumber){
            setError("You have not selected any number")
        return;
        } 
        setError("");
   const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)


if(selectedNumber === randomNumber){
    setCurrentDice((prev) => prev + randomNumber)
}else{
    setScore((prev) => prev - 2)
}

setSelectedNumber(undefined)    
};
const resetScore = () => {
    setScore(0)
}
    return (
    <main className="top-section">
        <div>
    <Totalscore score={score} />
    <Numberselector
    error={error}
    setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
    />
    <Rolldice
    currentDice={currentDice} Roldice={Roldice}/>
    <div className=" btns"> 
        <button onClick={resetScore} className="reset">Reset Scores</button>
        <button className="rule" onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide " : "Show " }Rules</button>

    </div>
   { showRules && <Rules/> }
    </div>
    </main>
  )
}
export default Gameplay;    