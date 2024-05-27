import { useState } from 'react'
import Form from './components/Form'
import { Title } from './components/Basics'
import Result from './components/Results'

/*2.6: The Phonebook Step 1
Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.

2.7: The Phonebook Step 2
Prevent the user from being able to add names that already exist in the phonebook.
JavaScript arrays have numerous suitable methods for accomplishing this task.
Keep in mind how object equality works in Javascript.

2.8: The Phonebook Step 3
Expand your application by allowing users to add phone numbers to the phone book.

2.9*: The Phonebook Step 4
Implement a search field that can be used to filter the list of people by name*/

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const handleDataChange = (newPerson) => {
    const result = persons.find((person) => person.name === newPerson.name)
    if(result)
      alert(`${newPerson.name} is already added to phonebook`)
    else{
      const person = { name: newPerson.name, phoneNumber: newPerson.number}
      const updatedPersons = [...persons, person];
      setPersons(updatedPersons);
    }
    
  };

  return (
    <>
      <Title text='Phonebook' type='h1' />
      <Title text='Add a new one' type='h2' />
      <Form onDataChange={handleDataChange} />
      <Title text='Numbers' type='h2' />
      <Result persons={persons} />
    </>
  )
}

export default App