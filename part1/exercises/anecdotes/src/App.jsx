import { useState } from 'react'

/*1.12*: anecdotes step 1
The world of software engineering is filled with anecdotes that distill
timeless truths from our field into short one-liners. 

1.13*: anecdotes step 2
Expand your application so that you can vote for the displayed anecdote.

1.14*: anecdotes step 3
Now implement the final version of the application that displays the 
anecdote with the largest number of votes */

const Title = ({text}) => {
  return (
    <h1>
      {text} 
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
   
  const [selected, setSelected] = useState(null)
  const [number, setNumber] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [popular, setPopular] = useState(null)

  const setRandom = () => {
    let num = Math.floor(Math.random() * (anecdotes.length))
    console.log(num)
    let anecdote = anecdotes[num]
    setNumber(num)
    setSelected (anecdote)
    
  }

  const voteUp = () => {
    const newVotes = [...votes]
    newVotes[number] += 1
    setVotes(newVotes)
    console.log(newVotes)
    let max = 0
    for(let i=0;i<newVotes.length; i++){
      if(newVotes[i]>=max){
        max = newVotes[i]
        setPopular(i)
      }
    }
  }

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote text={selected} />
      <Button handleClick={setRandom} text='Change anecdote' />
      <Button handleClick={voteUp} text='Vote Up' />
      <Title text='Anecdote with most votes' />
      <Anecdote text={anecdotes[popular]} />
    </div>
  )
}

export default App