import { useState } from 'react'
import Form from './components/Form'
import { Title } from './components/Basics'
import Result from './components/Results'

/*2.6: The Phonebook Step 1
Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.*/

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const handleDataChange = (newPerson) => {
    const person = { name: newPerson}
    const updatedPersons = [...persons, person];
    setPersons(updatedPersons);
  };

  return (
    <>
      <Title text='Phonebook' type='h2' />
      <Form onDataChange={handleDataChange} />
      <Title text='Numbers' type='h2' />
      <Result persons={persons} />
    </>
  )
}

export default App