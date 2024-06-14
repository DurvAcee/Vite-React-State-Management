import { useState } from 'react'
import './App.css'

import Emojis from './components/Emojis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Emojis/>
    </>
  )
}

export default App
