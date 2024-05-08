import { useState } from 'react'

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
  <button onClick={handleClick}>
      {text}
    </button>
  )
  
}

const Results = (props) => {
  console.log(props.data)
  return (
    <>
      <p>
        Good: {props.data[0]['good']}
      </p>
      <p>
        Neutral: {props.data[0]['neutral']}
      </p>
      <p>
        Bad: {props.data[0]['bad']}
      </p>
      <p>
        Total: {props.data[0]['total']}
      </p> 
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  let data = [{'good' : good,'neutral' : neutral,'bad' : bad,'total' : total}]
  //console.log(arr)
  const handleGood = () => {
    setTotal(total + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setTotal(total + 1)
    setBad(bad + 1)
  }

  const reset = () => {
    setTotal(0)
    setGood(0)
    setNeutral(0)
    setBad(0)

  }

  return (
    <>
      <Title text="Give feedback"/>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Button handleClick={reset} text='reset' />
      <Title text="Statistics"/>
      <Results data={data}/>
    </>
  )
}

export default App