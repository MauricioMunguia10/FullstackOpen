import { useState, useEffect} from 'react'
import Form from './components/Form'
import { Title } from './components/Basics'
import Result from './components/Results'
import axios from 'axios'

/*2.6: The Phonebook Step 1
Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.

2.7: The Phonebook Step 2
Prevent the user from being able to add names that already exist in the phonebook.
JavaScript arrays have numerous suitable methods for accomplishing this task.
Keep in mind how object equality works in Javascript.

2.8: The Phonebook Step 3
Expand your application by allowing users to add phone numbers to the phone book.

2.9*: The Phonebook Step 4
Implement a search field that can be used to filter the list of people by name

2.10: The Phonebook Step 5
If you have implemented your application in a single component, 
refactor it by extracting suitable parts into new components. 
Maintain the application's state and all event handlers in the App root component.

2.11: The Phonebook Step 6
We continue with developing the phonebook. Store the initial state of the application in the file db.json,
which should be placed in the root of the project.*/

/*2.12: The Phonebook step 7
Let's return to our phonebook application.
Currently, the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.

2.13: The Phonebook step 8
Extract the code that handles the communication with the backend
into its own module by following the example shown earlier in this part of the course material.*/

const App = () => {
  const [persons, setPersons] = useState([])

  const handleDataChange = (newPerson) => {
    const result = persons.find((person) => person.name === newPerson.name)
    if(result)
      alert(`${newPerson.name} is already added to phonebook`)
    else{
      const personObject = {
        name: newPerson.name,
        phoneNumber: newPerson.number
      }
    
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          })
      const person = { name: newPerson.name, phoneNumber: newPerson.number}
      const updatedPersons = [...persons, person];
      setPersons(updatedPersons);
    }
    
  }
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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