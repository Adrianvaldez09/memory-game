import React , { useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import "./styles.css"
import Tiles from './Tiles'
import Homepage from "./Homepage";
import Grid from "./Grid";
import StateButtons from "./StateButtons";
import SuccessButtons from "./SucessButtons";

function App() {
  const [failed, setFailed] = useState(false)
  const [start, setStart] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  const [speed, setSpeed] = useState({value: 600, label: 'Normal'})
  const [timeLength, setTimeLength] = useState(speed.value)
const [amountCorrect, setAmountCorrect] = useState(5)
const [amountEmpty, setAmountEmpty] = useState(21)
const [amountTotal, setAmountTotal] = useState(26)


function changeToEasy() {
  setLevel('Easy')
  setAmountCorrect(5)
  setAmountEmpty(21)
  setAmountTotal(26)
}
function changeToMedium() {
  setLevel('Medium')
  setAmountCorrect(7)
  setAmountEmpty(30)
  setAmountTotal(37)
}
function changeToHard() {
  setLevel('Hard')
  setAmountCorrect(9)
  setAmountEmpty(41)
  setAmountTotal(50)
}

  const fakeTiles = []
  for (let i = 0; i< amountEmpty; i++){
    fakeTiles.push(
      {
        value: "",
        correct: false,
        clicked: false,
        id:nanoid(),
      },
    )
  }

  const numberedTiles = []
  for (let x = 1; x < amountCorrect; x++){
    numberedTiles.push({
      value:x,
      correct: true,
      clicked: false,
      id:x,
      clickedEarly: false
    })
  }

  const allTiles = numberedTiles.concat(fakeTiles)

  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
  }
  

  let empty = []
  for (let p = 0; p <amountTotal; p++){
    empty.push(p)
  }

  const [finalSet, SetFinalSet] = useState([])

  let correctSequence = finalSet.map(item =>{
    if(item.correct === true){
      return {...item, clicked:true}
    } else {
      return item
    }
  })
  
  
  const [sequence, setSequence] = useState(1)
  const [done, setDone] = useState('neutral')

  let correctElements =  correctSequence.map((tile,index) => 
  <Tiles 
    key={index} 
    value={tile.value} 
    correct={tile.correct} 
    clicked={tile.clicked} 
    clickedEarly={tile.clickedEarly} 
    sequence={sequence} 
    failed={failed}/>
  )
  
  const tileElements = finalSet.map((tile,index) => 
  <Tiles 
    key={index} 
    value={tile.value} 
    correct={tile.correct} 
    clicked={tile.clicked} 
    holdTile={() => holdTile(tile)} 
    done={done} 
    failed={failed} 
    clickedEarly={tile.clickedEarly} 
    sequence={sequence}/>
  )
  
  function holdTile(tile){
    SetFinalSet(oldTile => oldTile.map(item => {
      if(tile.value > sequence && item.id === tile.id){
        setFailed(true)
        const incorrect = {...item, clicked:true, clickedEarly:true}
        onFail()
        let speedLength = speed.label
      setTimeAttack(current => [{status: 'Failed',time, level, speedLength},...current])

        return incorrect
      }
      if(tile.value != sequence && item.id === tile.id) {
        setFailed(true)
        onFail()
        const incorrect = {...item, clicked:true, clickedEarly:true}
        let speedLength = speed.label
        setTimeAttack(current => [{status: 'Failed',time, level, speedLength},...current])

        return incorrect
      }
      if(item.id === tile.id && tile.value === sequence) {
        const correct = {...item, clicked:true}
        setSequence(sequence+1)
        return correct
      } else {
        return item
      }
    }))
  }

    function something () {
    SetFinalSet([])
    setSequence(1)
    setFailed(false)
    setStart(true)
    setPlaying(false)

    const reShuffle = shuffle(allTiles)
    SetFinalSet(reShuffle)
    setPlaying(true)
    setTimeout(() => onStart(), timeLength)
    onReset()
  }

  function menu() {
    SetFinalSet([])
    setSequence(1)
    setFailed(false)
    setPlaying(false)
    setFinished(false)
    onReset()
    setStart(true)
  }

  function startGame(){
    const reShuffle = shuffle(allTiles)
    SetFinalSet(reShuffle)
    setPlaying(true)
    setTimeout(() => onStart(), timeLength)
  }


  function addInfo(){
    const info ={
      time:time,
      status:status,
      level:level,
      speedLength:speed.label
    }

    setTimeAttack([info,...timeAttack])
  }
  
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('Success')
  const [level, setLevel] = useState('Easy')
  const [timeAttack, setTimeAttack] = useState([])

  if(sequence === amountCorrect){
    setSequence(1)
    setPlaying(false)
    setFinished(true)
    setIsPaused(true);
    addInfo()
  }
  
  function finishedGame(){
    setStart(true)
    const reShuffle = shuffle(allTiles)
    SetFinalSet(reShuffle)
    setPlaying(true)
    setFinished(false)
    onReset()
    setIsPaused(true)
    setTimeout(() => onStart(), timeLength)
  }

  function onStart(){
    setStart(false)
    setIsActive(true);
    setIsPaused(false);
  } 

  function onFail(){
    setIsPaused(!isPaused);
  }

  function onReset(){
  setIsActive(false);
  setIsPaused(true);
  setTime(0);
  }


const TimeAttempts = timeAttack.map((item,index) => {
  return(
    <div className={`${item.status} results`} key={index}>
      <div className='timer'>
        <span className="digits">
          {("0" + Math.floor((item.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((item.time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((item.time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <p className="status">{item.status}</p>
      <p className="level">{item.level}</p>
      <p className="level">{item.speedLength}</p>
  </div> 
  )
})


const mainMenuButton = (<button className="mainMenuBtn lvlButton" onClick={() => menu()}>Main Menu</button>)
const againButton = (<button className="lvlButton" onClick={() => finishedGame()}>Again?</button>)
const retryButton = (<button className="lvlButton retryBtn" onClick={() => something()}>Retry</button>)
const levelDisplay = (<p className="currentLvl">{level}</p>)
const speedDisplay = (<p className="currentLvl">{speed.label}</p>)


  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  return (
    <div className="app-container">
      <Grid
        start={start}
        level={level}
        speed={speed}
        correctElements={correctElements}
        tileElements={tileElements}
        failed={failed}
        finished={finished}
        playing={playing}
      />
      {
        playing ?
        <StateButtons 
          timeAttack={timeAttack}
          time={time}
          level={level}
          failed={failed}
          retryButton={retryButton}
          mainMenuButton={mainMenuButton}
          levelDisplay={levelDisplay}
          speedDisplay={speedDisplay}
          TimeAttempts={TimeAttempts}
          speed={speed}
          start={start}
        />
        :
        // Finished State
        (finished ? 
          <SuccessButtons 
            timeAttack={timeAttack}
            time={time}
            level={level}
            againButton={againButton}
            mainMenuButton={mainMenuButton}
            levelDisplay={levelDisplay}
            speedDisplay={speedDisplay}
            TimeAttempts={TimeAttempts}
          />
          :
          <Homepage
            startGame={startGame}
            changeToEasy={changeToEasy}
            changeToMedium={changeToMedium}
            changeToHard={changeToHard}
            level={level}
            timeLength={timeLength}
            setTimeLength={setTimeLength}
            speed={speed}
            setSpeed={setSpeed}
            timeAttack={timeAttack}
            TimeAttempts={TimeAttempts}
            />
          )
      }
    </div>
  );
}


export default App;
