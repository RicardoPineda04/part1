import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{ title }</h1>
  )
}

const Content = ({ good, neutral, bad}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick}>
      { text }
    </button>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood( good + 1 );
  }

  const handleClickNeutral = () => {
    setNeutral( neutral + 1 );
  }

  const handleClickBad = () => {
    setBad( bad + 1 );
  }

  return (
    <div>
      <Title title = { 'Give feedback' } />
      <Button text = { 'Good' } handleClick={() => handleClickGood()}/>
      <Button text = { 'Neutral' } handleClick={() => handleClickNeutral()}/>
      <Button text = { 'Bad' } handleClick={() => handleClickBad()}/>
      <Title title = { 'Statics' } />
      <Content good = { good } neutral = { neutral } bad = { bad } />
    </div>
  )
}

export default App