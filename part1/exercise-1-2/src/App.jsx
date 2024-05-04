/*first part 1.1
make three components 
header --> name of the course
content --> parts and numbers of of exercises
total --> total number of exercises*/

/*second part 1.2
refactor the content component to renders three Part components*/

const Part = (exercise) => {
  console.log(exercise)
  return(
    <>
      <p>
        {exercise.part} {exercise.exercise}
      </p>
    </>
  )
} 

const Header = (course) => {
  console.log(course)
  return(
    <div>
      <h1>
        {course.course}
      </h1>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  return (
    <main>
      <Header course={course}/>
      <Content/>
      <Total/>
    </main>
  )
}

export default App