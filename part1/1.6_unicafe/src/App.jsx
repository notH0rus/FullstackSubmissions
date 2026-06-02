import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1><br></br>
      <button type="">good</button>
      <button type="">neutral</button>
      <button type="">bad</button>
      <br></br>
      <h1>Statistics</h1>
      good : 6 <br></br> neutral : 2 <br></br> bad : 1
    </div>
  )
}

export default App
