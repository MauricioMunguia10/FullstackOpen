import { useState } from 'react'
import { Button } from './Basics'

const Form = ({ onDataChange }) => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  const save = () => {
    onDataChange({ name: inputName, number: inputNumber });
  };

  return (
    <>
      <div>
        Name: <input value={inputName} onChange={handleNameChange} /><br />
        Phone number: <input value={inputNumber} onChange={handleNumberChange} /><br />
        <Button handleClick={save} text='Save' />
      </div>
    </>
  )
}

export default Form