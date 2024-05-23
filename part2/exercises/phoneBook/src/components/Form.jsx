import { useState } from 'react'
import { Button } from './Basics'

const Form = ({ onDataChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const save = () => {
    onDataChange(inputValue)
  }

  return (
    <>
      <div>
        Name: <input value={inputValue} onChange={handleChange} />
        <Button handleClick={save} text='Save' />
      </div>
    </>
  )
}

export default Form