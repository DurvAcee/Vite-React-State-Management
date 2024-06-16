import './App.css'

import ScoreKeeper from './components/ScoreKeeper'

function App() {

  return (
    <>
      <ScoreKeeper numOfPlayers={10} target={5}/>
    </>
  )
}

export default App
