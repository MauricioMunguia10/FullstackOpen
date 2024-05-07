/*first part 1.1
make three components 
header --> name of the course
content --> parts and numbers of of exercises
total --> total number of exercises*/

/*second part 1.2
refactor the content component to renders three Part components*/

const Part = (exercise) => {
  //console.log(exercise)
  return(
    <>
      <p>
        {exercise.part} {exercise.exercise}
      </p>
    </>
  )
} 

const Header = (course) => {
  //console.log(course)
  return(
    <div>
      <h1>
        {course.course}
      </h1>
    </div>
  )
}

const Content = (part) => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  let a = part
  //console.log(a['parts']['name'])
  return (
    <div>
      <Part part={a['parts']['name']} exercise={a['parts']['exercises']}/>
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

/* part 1.3 Modify the variable definitions of the App component as 
follows and also refactor the application so that it still works: */

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={part1} />
      <Content parts={part2} />
      <Content parts={part3} />
      <Total />
    </div>
  )
}

export default App