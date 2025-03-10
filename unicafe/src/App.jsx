import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{ title }</h1>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  if( good === 0 && neutral === 0 && bad === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text = {'Good'} value = {good}/>
          <StatisticLine text = {'Neutral'} value = {neutral}/>
          <StatisticLine text = {'Bad'} value = {bad}/>
          <StatisticLine text = {'All Clicks'} value = {all}/>
          <StatisticLine text = {'Average'} value = {average}/>
          <StatisticLine text = {'Positive'} value = {positive}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick }>
      { text }
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>
        { text }
      </td>
      <td>
        { value }
      </td>
    </tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ click, setClicks ] = useState(0)
  const [ average, setAverage ] = useState(0)
  const [ positive, setPositive ] = useState(0)

  const handleClickGood = () => {
    const positive = good + 1;
    setGood( good + 1 );
    const newClick = click + 1;
    setClicks(newClick);
    handleAverage(newClick);
    handlePositive(positive , newClick);
  }

  const handleClickNeutral = () => {
    setNeutral( neutral + 1 );
    const newClick = click + 1;
    setClicks(newClick);
    handleAverage(newClick);
    handlePositive(good , newClick);
  }

  const handleClickBad = () => {
    setBad( bad + 1 );
    const newClick = click + 1;
    setClicks(newClick);
    handleAverage(newClick);
    handlePositive(good , newClick);
  }
  
  const handleAverage = (clicks) => {  
    const total = (good - bad); 
    const avg = (total) / clicks;
    setAverage(avg);
  }

  const handlePositive = (positive, clicks) => {   
    const total = (positive / clicks) * 100;
    setPositive(total)
  }

  return (
    <div>
      <Title title = { 'Give feedback' } />
      <Button text = { 'Good' } handleClick={() => handleClickGood()}/>
      <Button text = { 'Neutral' } handleClick={() => handleClickNeutral()}/>
      <Button text = { 'Bad' } handleClick={() => handleClickBad()}/>
      <Title title = { 'Statics' } />
      <Statistics good = { good } neutral = { neutral } bad = { bad } all = { click } average = { average } positive = { positive } />
    </div>
  )
}

export default App