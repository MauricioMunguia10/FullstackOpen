const Header = ({course}) => {
  console.log(course)
  return(
    <>
      <h1>{course['name']}</h1>
    </>
  )
}

const Content = ({course}) => {
  return(
    <>
      <Part course={course} />
    </>
  )
}

const Part = ({course}) => {
  
  return(
    <>
      {course.parts.map(part => 
          <p key={part.id}>{part.name}  {part.exercises}</p>
      )}
      <Total course={course} />
    </>
  )
}

const Total = ({course}) => {
  // let sum = 0
  // course.parts.map(part =>
  //   sum += part.exercises
  // )
  let exercises = course.parts
  console.log(exercises)
 
  const total = exercises.reduce((sum, exercise) => {
    return sum + exercise['exercises'];
  }, 0);
  

  return(
    <>
      <p>Total of {total} exercises</p>
    </>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  )
}

export default Course