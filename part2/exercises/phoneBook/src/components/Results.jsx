const Result = ({persons}) => {
  return(
    <>
      {persons.map((person,i) =>{
        return <p key={i}>{person.name} {person.phoneNumber}</p>
      })}
    </>
  )
}

export default Result