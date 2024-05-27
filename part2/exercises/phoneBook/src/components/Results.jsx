import { useState } from "react"

const Result = ({persons}) => {

  const [inputFilter, setInputFilter] = useState('')

  const handleFilterChange = (event) => {
    setInputFilter(event.target.value)

  }

  const filterPerson = (filter) => {
    return persons.filter((person) =>
      person.name.toLowerCase().startsWith(filter.toLowerCase())
    )
  }

  return(
    <>
      <input 
        type="text" 
        placeholder="Filter by" 
        value={inputFilter} 
        onChange={handleFilterChange} />

      {filterPerson(inputFilter).map((person,i) =>{
        return <p key={i}>{person.name} {person.phoneNumber}</p>
      })}
    </>
  )
}

export default Result