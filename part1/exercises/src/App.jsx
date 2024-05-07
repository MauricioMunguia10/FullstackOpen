/*first part 1.1
make three components 
header --> name of the course
content --> parts and numbers of of exercises
total --> total number of exercises*/

/*second part 1.2
refactor the content component to renders three Part components*/

/*const Part = (exercise) => {
  //console.log(exercise)
  return(
    <>
      <p>
        {exercise.part} {exercise.exercise}
      </p>
    </>
  )
} 
*/
const Header = (course) => {
  //console.log(course)
  return(
    <>
      <h1>
        {course.course}
      </h1>
    </>
  )
}

const Content = (content) => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  let array = content.parts
  return(
    <>
      <p>{array[0]['name']} {array[0]['exercises']}</p>
      <p>{array[1]['name']} {array[1]['exercises']}</p>
      <p>{array[2]['name']} {array[2]['exercises']}</p>
    </>
  )
  
  

  
}

const Total = (total) => {
  // const exercises1 = 10
  // const exercises2 = 7
  // const exercises3 = 14
  let arr = total.parts
  let sum=0
  for(let i=0;i<arr.length;i++){
    //console.log(arr)
    sum+=arr[i]['exercises']
  }
  return(
    <>
      <p>Total exercises: {sum}</p>
    </>
  )
}

/* part 1.3 Modify the variable definitions of the App component as 
follows and also refactor the application so that it still works: */

/* part 1.4 Place the objects into an array. Modify the variable definitions of App 
into the following form and modify the other parts of the application accordingly*/

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App