/* 2.1: Course information step6

2.2: Course information step7
Show also the sum of the exercises of the course. 

2.3*: Course information step8
If you haven't done so already, calculate the sum of exercises with the array method reduce.
*/


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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App