import Filter from "./Filter"

const Result = ({persons, onDataChange}) => {

  const upInfo = (up) => {
    onDataChange(up)
  }

  return(
    <>
      <Filter persons={persons} onDataChange={upInfo} />
    </>
  )
}

export default Result