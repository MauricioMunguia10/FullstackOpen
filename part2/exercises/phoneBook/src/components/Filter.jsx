import { useState } from 'react'
import { Button } from './Basics'
import axios from 'axios'

const Filter = ({persons, onDataChange}) => {

  const [inputFilter, setInputFilter] = useState('')

  const handleFilterChange = (event) => {
    setInputFilter(event.target.value)
  }

  const filterPerson = (filter) => {
    return persons.filter((person) =>
      person.name.toLowerCase().startsWith(filter.toLowerCase())
    )
  }

  const deletePerson = (personToDelete) => {
    if(window.confirm(`Do you really want to delete ${personToDelete.name}?`)){
      axios
        .delete(`http://localhost:3001/persons/${personToDelete.id}`)
        .then(response => {
          console.log(response.data.id)
          const filteredPersons = persons.filter(person => person.id !== personToDelete.id)
          onDataChange(filteredPersons)
    })}
  }

  return(
    <>
      <input 
        type="text" 
        placeholder="Filter by" 
        value={inputFilter} 
        onChange={handleFilterChange} 
      />
      {filterPerson(inputFilter).map((person,i) => {
        return <p key={i}>{person.name} {person.phoneNumber} <Button handleClick={() => deletePerson(person)} text='Delete'/></p>
      })}
    </>
  )
}

export default Filter
