const Result = ({persons}) => {
  return(
    <>
      {persons.map((person,i) =>{
        return <p key={i}>{person.name}</p>
      })}
    </>
  )
}

export default Result