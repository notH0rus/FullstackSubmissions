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
  if (all === 0) { return <p> No Feedback given</p> }
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine label={"good"} value={good} />
      <StatisticLine label={"neutral"} value={neutral} />
      <StatisticLine label={"bad"} value={bad} />
      <StatisticLine label={"all"} value={all} />
      <StatisticLine label={"average"} value={(good - bad) / all} />
      <StatisticLine label={"positive"} value={good * 100 / all} sign="%" />
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      {props.label} : {props.value} {props.sign}<br></br>
    </>
  )
}


export default App
