import Startgame from "./Component/Startgame";
import Gameplay from "./Component/Gameplay";
import './App.css';
import { useState } from "react";

function App() {
  const [isGameStarted , setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
  <>{isGameStarted ? <Gameplay/> : <Startgame toggle={toggleGamePlay}/>}</>
  );
 } 

export default App;
