import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give Feedback</h1><br></br>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br></br>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  return (
    <>
      <h1>Statistics</h1>
      good: {good} <br></br>
      neutral: {neutral} <br></br>
      bad: {bad} <br></br>
      all: {all} <br></br>
      average: {(good - bad) / all} <br></br>
      positive: {good * 100 / all} %
    </>
  )
}

export default App
