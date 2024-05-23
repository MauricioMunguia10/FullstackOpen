import { useState } from 'react'
import Form from './components/Form'
import Title from './components/Basics'
import Result from './components/Results'

/*2.6: The Phonebook Step 1
Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.*/

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function saveName () {
    console.log('in')
  }
  return (
    <>
      <Title text='Phonebook' type='h2' />
      <Form arr={persons} setArr={setPersons} />
      <Title text='Numbers' type='h2' />
      <Result persons={persons} />
    </>
    // <div>
    //   <h2>Phonebook</h2>
    //   <>
    //     <div>
    //       name: <input />
    //     </div>
    //     <div>
    //       <Button handleClick={saveName} text='Add' />
    //     </div>
    //   </>
    //   <h2>Numbers</h2>
    //   ...
    // </div>
  )
}

export default App