const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  ) 
}
const Content = (props) => {
  return(
    <div>
      <Part part = { props.content[0].part } exercises = { props.content[0].exercises } />
      <Part part = { props.content[1].part } exercises = { props.content[1].exercises } />
      <Part part = { props.content[2].part } exercises = { props.content[2].exercises } />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {
      part : 'Fundamentals of React',
      exercises : 10,
    },
    {
      part : 'Using props to pass data',
      exercises: 7,
    },
    {
      part : 'State of a component',
      exercises : 14,
    }
  ]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={ course }/>
      <Content 
        content = { content }
      /> 
      <Total 
        exercises1 = { exercises1 }
        exercises2 = { exercises2 }
        exercises3 = { exercises3 }
      />
    </div>
  )
}

export default App