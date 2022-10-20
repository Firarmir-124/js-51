import React, {useState} from 'react';
import './App.css';
import Lottery from "./Circle/circle";

function App() {
  let [num, setNum] = useState<number[]> ([]);

  const random = (min:number, max:number) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  const getNumberLottery = () => {
    setNum([
      num[0] = random(5, 36),
      num[1] = random(5, 36),
      num[2] = random(5, 36),
      num[3] = random(5, 36),
      num[4] = random(5, 36),
    ].sort((a, b) => a - b));
  };

  const numberLottery = num.filter((x, i) => num.indexOf(x) === i);




  return (
    <div className="App">
      <button onClick={getNumberLottery}>Крутануть</button>
      <div className='lottery'>
        <Lottery number={numberLottery[0]}/>
        <Lottery number={numberLottery[1]}/>
        <Lottery number={numberLottery[2]}/>
        <Lottery number={numberLottery[3]}/>
        <Lottery number={numberLottery[4]}/>
      </div>
    </div>
  );
}

export default App;
