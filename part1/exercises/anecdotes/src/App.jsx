import { useState } from 'react'

/*1.12*: anecdotes step 1
The world of software engineering is filled with anecdotes that distill
timeless truths from our field into short one-liners. */

const Title = () => {
  return (
    <h1>
      Anecdotes 
    </h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
  
}

const Anecdote = ({text}) => {
  //console.log(text)
  return (
    <>
      <p>
        {text}
      </p>
    </>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const setRandom = () => {
    let num = Math.floor(Math.random() * (anecdotes.length+1))
    console.log(num)
    let anecdote = anecdotes[num]

    setSelected (anecdote)
    
  }

  return (
    <div>
      <Title />
      <Anecdote text={selected} />
      <Button handleClick={setRandom} text='Change anecdote' />
    </div>
  )
}

export default App